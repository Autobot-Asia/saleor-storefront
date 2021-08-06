import { useAuth } from "@saleor/sdk";
import { User } from "@saleor/sdk/lib/fragments/gqlTypes/User";
import { Formik } from "formik";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { ErrorMessage } from "@components/atoms";
// import { AddressTile, AddressTileOption } from "@components/molecules";
import { checkoutMessages } from "@temp/intl";

import AddressBook from "../../../../account/AddressBook/AddressBook";
import { AddressFormModal } from "../AddressFormModal";
import { IProps } from "./types";

/**
 * Addresses tiles to select with add new address tile opening address form addition modal.
 */
const AddressGridSelector: React.FC<IProps> = ({
  addresses,
  selectedAddressId,
  countriesOptions,
  userId,
  errors,
  onSelect,
  formId,
  formRef,
  addNewModalTarget,
  newAddressFormId,
  testingContext,
}: IProps) => {
  const { user } = useAuth();
  const User = { ...user };

  const [displayNewModal, setDisplayNewModal] = useState(false);
  const intl = useIntl();

  // const addNewTile = (
  //   <AddNewTile
  //     data-test={`${testingContext}AddressTileAddNew`}
  //     key="newTile"
  //     type={intl.formatMessage({ defaultMessage: "address" })}
  //     onClick={() => setDisplayNewModal(true)}
  //   />
  // );

  return (
    <>
      <Formik
        initialValues={{
          addressTileOption: selectedAddressId,
        }}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          if (onSelect) {
            const address = addresses.find(
              addr => addr.id === values.addressTileOption
            );
            onSelect(address?.address, values.addressTileOption);
          }
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <form id={formId} ref={formRef} onSubmit={handleSubmit}>
              <AddressBook user={User as User} />
              <ErrorMessage errors={errors} />
            </form>
          );
        }}
      </Formik>
      {displayNewModal && (
        <AddressFormModal
          hideModal={() => {
            setDisplayNewModal(false);
          }}
          submitBtnText="Add"
          title={intl.formatMessage(checkoutMessages.addNewAddress)}
          countriesOptions={countriesOptions}
          formId={newAddressFormId}
          userId={userId}
          target={addNewModalTarget}
        />
      )}
    </>
  );
};

export { AddressGridSelector };
