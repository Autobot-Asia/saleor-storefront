import { useAuth } from "@saleor/sdk";
import { useRouter } from "next/router";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { paths } from "@paths";
import { demoMode } from "@temp/constants";
import { commonMessages } from "@temp/intl";

import { Form, TextField } from "..";

import "./scss/index.scss";

interface ILoginForm {
  hide?: () => void;
}

const LoginForm: React.FC<ILoginForm> = ({ hide }) => {
  const { signIn } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const { push } = useRouter();

  const handleOnSubmit = async (evt, { email, password }) => {
    evt.preventDefault();
    setLoading(true);
    const { data, dataError } = await signIn(email, password);
    setLoading(false);
    if (dataError?.error) {
      setErrors(dataError.error);
    } else if (data && hide) {
      setErrors(null);
      hide();
    }
  };

  const formData = demoMode
    ? {
        email: "admin@example.com",
        password: "admin",
      }
    : {};

  const intl = useIntl();

  return (
    <div className="login-form">
      <div className="login-text">
        <p>Đăng nhập</p>
      </div>
      <div>
        <Form data={formData} errors={errors || []} onSubmit={handleOnSubmit}>
          <div className="login-form-email">
            <p className="account">Email hoặc Số điện thoại</p>
            <div className="email-input">
              <TextField
                name="email"
                autoComplete="email"
                label={intl.formatMessage(commonMessages.eMail)}
                type="email"
                pattern=".{0,254}"
                // required
              />
            </div>
          </div>

          <div className="login-form-password">
            <p className="password">Mật khẩu</p>
            <div className="password-input">
              <TextField
                name="password"
                autoComplete="password"
                label={intl.formatMessage(commonMessages.password)}
                type="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.,~#^*?&]).{8,}$"
                // required
              />
            </div>
          </div>
          <div className="remember-login">
            <div className="checkbox-login">
              <input type="checkbox" style={{ width: 14, height: 14 }} />
              <span> Ghi nhớ đăng nhập </span>
            </div>
            <div className="forgot-password">
              <span className="u-link">
                <FormattedMessage defaultMessage="Quên mật khẩu ?" />
              </span>
            </div>
          </div>

          <div className="login-form__button">
            <button
              className="signIn"
              // testingContext="submit"
              type="submit"
              {...(loading && { disabled: true })}
            >
              {loading
                ? intl.formatMessage(commonMessages.loading)
                : intl.formatMessage({ defaultMessage: "Đăng nhập" })}
            </button>
          </div>
        </Form>
      </div>
      <div className="register-button" onClick={() => push(paths.register)}>
        <button className="register">
          {intl.formatMessage({ defaultMessage: "Đăng ký" })}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
