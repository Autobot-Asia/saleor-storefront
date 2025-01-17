import { useAuth } from "@saleor/sdk";
import { Formik } from "formik";
import { useRouter } from "next/router";
import * as React from "react";
import { AlertManager, useAlert } from "react-alert";
import { FormattedMessage, IntlShape, useIntl } from "react-intl";
import styled from "styled-components";
import * as Yup from "yup";

import { Checkbox, Redirect } from "@components/atoms";
import { InputSelect } from "@components/molecules/InputSelect";
import { paths } from "@paths";
import { orange, white } from "@styles/constants";
import { COUNTRY_LIST } from "@temp/country";
import { commonMessages } from "@temp/intl";

import { maybe } from "../../../core/utils";
import { TextField } from "../..";
import {
  RegisterAccount,
  RegisterAccountVariables,
} from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

import "./scss/index.scss";

const Wrapper = styled.div`
  padding: 3rem 3rem;
  display: block;
  width: 50%;
  margin: auto;
  @media (max-width: 1380px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background: ${orange};
  color: ${white};
  border-radius: 2rem;
  box-shadow: -5px 5px 14px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0.9rem 3.7rem;
  font-size: 18px;
`;
const Divider = styled.div`
  width: 2rem;
`;

const Label = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 1rem;
`;

const Flex = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const showSuccessNotification = (
  data: RegisterAccount,
  alert: AlertManager,
  intl: IntlShape,
  push: (val: string) => void
) => {
  const successful = maybe(() => !data.accountRegister.errors.length);

  if (successful) {
    alert.show(
      {
        title: data.accountRegister.requiresConfirmation
          ? intl.formatMessage({
              defaultMessage:
                "Please check your e-mail for further instructions",
            })
          : intl.formatMessage({ defaultMessage: "New user has been created" }),
      },
      { type: "success", timeout: 5000 }
    );
    push(paths.login);
  } else {
    const error = data.accountRegister?.errors[0]?.message;
    alert.show(
      {
        title: error || "Created Failed! Try Again!",
      },
      { type: "error", timeout: 5000 }
    );
  }
};

interface RegisterFormType {
  country?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: any;
  password?: string;
  isSupplier?: boolean;
  storeName?: string;
  confirmPassword?: string;
  phoneCode?: string;
}

const RegisterForm: React.FC = () => {
  const alert = useAlert();
  const intl = useIntl();
  const { user } = useAuth();
  const { push } = useRouter();

  if (user) {
    <Redirect url={paths.home} />;
  }

  const initialForm: RegisterFormType = {
    email: "",
    phoneCode: "",
    phone: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    country: "",
  };
  const [isSupplier, setIsSupplier] = React.useState(false);
  const validateSchema: Yup.ObjectSchema<RegisterFormType> = React.useMemo(() => {
    const validate = {
      email: Yup.string().required("Required"),
      password: Yup.string().min(8, "Password Too Short!").required("Required"),
      phone: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      country: Yup.string().required("Required"),
    };
    return isSupplier
      ? Yup.object().shape({
          ...validate,
          storeName: Yup.string().required("Required"),
        })
      : Yup.object().shape(validate);
  }, [isSupplier]);

  return (
    <Wrapper>
      <Title>
        <h3>Register</h3>
      </Title>
      <TypedAccountRegisterMutation
        onCompleted={data => showSuccessNotification(data, alert, intl, push)}
      >
        {(registerCustomer, { loading, data }) => {
          return (
            <Formik
              initialValues={initialForm}
              validationSchema={validateSchema}
              onSubmit={values => {
                const redirectUrl = `${location.origin}`;
                const dataSubmit: RegisterAccountVariables = {
                  country: values.country,
                  email: values.email,
                  firstName: values.firstName,
                  lastName: values.lastName,
                  phone: values.phoneCode + values.phone,
                  password: values.password,
                  redirectUrl,
                };

                if (
                  values.password !== values.confirmPassword ||
                  !values.country
                ) {
                  if (!values.country) {
                    alert.show(
                      {
                        title: intl.formatMessage({
                          defaultMessage: "Please Select Country!",
                        }),
                      },
                      { type: "error" }
                    );
                  }

                  if (values.password !== values.confirmPassword) {
                    alert.show(
                      {
                        title: intl.formatMessage({
                          defaultMessage: "Please confirm Password again!",
                        }),
                      },
                      { type: "error" }
                    );
                  }
                } else {
                  registerCustomer({
                    variables: values.isSupplier
                      ? {
                          ...dataSubmit,
                          isSupplier: true,
                          storeName: values.storeName,
                        }
                      : { ...dataSubmit, isSupplier: false },
                  });
                }
              }}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                setFieldValue,
                values,
                errors,
                touched,
              }) => {
                return (
                  <form onSubmit={handleSubmit} data-test="accountUpdateForm">
                    <div style={{ marginBottom: "1rem", display: "flex" }}>
                      <Label style={{ margin: 0 }}>
                        {intl.formatMessage(commonMessages.country)} :
                      </Label>
                      <div style={{ flex: 4 }}>
                        <InputSelect
                          label={intl.formatMessage(commonMessages.country)}
                          name="country"
                          options={COUNTRY_LIST}
                          optionLabelKey="text"
                          optionValueKey="value"
                          autoComplete="value"
                          value={
                            values!.country &&
                            COUNTRY_LIST.find(
                              option => option.value === values!.country
                            )
                          }
                          onChange={(value: any, name: any) => {
                            setFieldValue(name, value.value);
                            setFieldValue("phoneCode", value.code);
                          }}
                          errors={
                            !values.country && touched.country
                              ? [{ message: errors.country || "" }]
                              : []
                          }
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ flex: 1, display: "flex" }}>
                        <div
                          style={{
                            flex: 2,
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "1rem",
                          }}
                        >
                          {intl.formatMessage(commonMessages.fullName)} :
                        </div>
                        <div style={{ flex: 3 }}>
                          <TextField
                            name="firstName"
                            label={intl.formatMessage(commonMessages.firstName)}
                            type="text"
                            errors={
                              !values.firstName && touched.firstName
                                ? [{ message: errors.firstName || "" }]
                                : []
                            }
                            value={values.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div style={{ flex: 1, display: "flex" }}>
                        <div style={{ flex: 2 }}>
                          <Divider />
                        </div>
                        <div style={{ flex: 3 }}>
                          <TextField
                            name="lastName"
                            label={intl.formatMessage(commonMessages.lastName)}
                            type="text"
                            errors={
                              !values.lastName && touched.lastName
                                ? [{ message: errors.lastName || "" }]
                                : []
                            }
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <Flex>
                      <Label>
                        {intl.formatMessage(commonMessages.shortEmail)} :
                      </Label>
                      <div style={{ flex: 4 }}>
                        <TextField
                          name="email"
                          label={intl.formatMessage(commonMessages.shortEmail)}
                          type="email"
                          errors={
                            !values.email && touched.email
                              ? [{ message: errors.email || "" }]
                              : []
                          }
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </Flex>
                    <Flex>
                      <Label>
                        {intl.formatMessage(commonMessages.phone)} :
                      </Label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flex: 4,
                        }}
                      >
                        <div style={{ marginRight: "0.5rem", flex: 1 }}>
                          <TextField
                            name="phoneCode"
                            disabled
                            label=""
                            type="text"
                            value={values.phoneCode}
                          />
                        </div>

                        <div style={{ flex: 4 }}>
                          <TextField
                            name="phone"
                            label={intl.formatMessage(commonMessages.phone)}
                            type="text"
                            errors={
                              !values.phone && touched.phone
                                ? [{ message: (errors.phone as any) || "" }]
                                : []
                            }
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={e => {
                              const isNum = /^\d+$/.test(e.target.value);
                              if (isNum || e.target.value.length === 0) {
                                handleChange(e);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </Flex>
                    <Flex>
                      <Label>
                        {intl.formatMessage(commonMessages.password)} :
                      </Label>
                      <div style={{ flex: 4 }}>
                        <TextField
                          name="password"
                          label={intl.formatMessage(commonMessages.password)}
                          type="password"
                          errors={
                            (!values.password && touched.password) ||
                            (values.password && values.password.length < 8)
                              ? [{ message: errors.password || "" }]
                              : []
                          }
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </Flex>
                    <Flex>
                      <Label>
                        {intl.formatMessage(commonMessages.confirmPassword)} :
                      </Label>
                      <div style={{ flex: 4 }}>
                        <TextField
                          name="confirmPassword"
                          label={intl.formatMessage(
                            commonMessages.confirmPassword
                          )}
                          type="password"
                          value={values.confirmPassword}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          errors={
                            (!values.confirmPassword &&
                              touched.confirmPassword) ||
                            values.confirmPassword !== values.password
                              ? [{ message: errors.confirmPassword || "" }]
                              : []
                          }
                        />
                      </div>
                    </Flex>
                    <Flex>
                      <Label>
                        <FormattedMessage defaultMessage="Supplier :" />
                      </Label>
                      <div style={{ flex: 4 }}>
                        <Checkbox
                          name="isSupplier"
                          checked={values.isSupplier}
                          onChange={() => {
                            setIsSupplier(!values.isSupplier);
                            setFieldValue("isSupplier", !values.isSupplier);
                          }}
                        />
                      </div>
                    </Flex>
                    {values.isSupplier && (
                      <Flex>
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {intl.formatMessage(commonMessages.storeName)} :
                        </div>
                        <div style={{ flex: 4 }}>
                          <TextField
                            name="storeName"
                            label={intl.formatMessage(commonMessages.storeName)}
                            type="text"
                            errors={
                              !!errors.storeName &&
                              touched.storeName &&
                              (values.isSupplier ||
                                values.storeName.length === 0)
                                ? [{ message: errors.storeName || "" }]
                                : []
                            }
                            value={values.storeName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                      </Flex>
                    )}
                    <div className="login__content__button">
                      <StyledButton
                        type="submit"
                        {...(loading && { disabled: true })}
                      >
                        {loading
                          ? intl.formatMessage(commonMessages.loading)
                          : intl.formatMessage({ defaultMessage: "Register" })}
                      </StyledButton>
                    </div>
                  </form>
                );
              }}
            </Formik>
          );
        }}
      </TypedAccountRegisterMutation>
    </Wrapper>
  );
};

export default RegisterForm;
