import React from "react";

import { Modal } from "../Modal";
import { IProps } from "./types";

export const CheckoutModal = ({
  hideModal,
  target,
  title,
  formId,
  children,
}: IProps) => {
  const [show, setShow] = React.useState(true);
  return (
    <Modal
      submitButtonTestingContext="submitVoucherFormModalButton"
      testingContext="submitVoucherFormModal"
      title={title}
      hide={() => {
        hideModal();
        setShow(false);
      }}
      formId={formId}
      disabled={false}
      show={show}
      target={target}
      submitBtnText="Hoàn thành"
      cancelBtnText="Trở lại"
    >
      {children}
    </Modal>
  );
};
