import React from "react";

import { FormFooter } from "@components/molecules";
import { Overlay } from "@components/organisms";

import * as S from "./styles";
import { IProps } from "./types";

const getCancelBtnProps = (action: () => void, text?: string) =>
  text && {
    cancelBtn: {
      action,
      testingContext: "cancelButton",
      text,
    },
  };

const getSubmitBtnProps = (
  text: string,
  submitButtonTestingContext: string,
  action?: () => void
) => ({
  submitBtn: action
    ? {
        action,
        testingContext: submitButtonTestingContext,
        text,
      }
    : { testingContext: submitButtonTestingContext, text },
});

export const Modal: React.FC<IProps> = ({
  cancelBtnText,
  children,
  disabled,
  hide,
  formId = "modal-submit",
  onSubmit,
  submitBtnText,
  submitButtonTestingContext,
  show,
  target,
  testingContext,
  title,
  minHeight,
  padding,
}: IProps) => {
  return (
    <Overlay
      testingContext={testingContext}
      position="center"
      show={show}
      hide={hide}
      target={target}
      minHeight={minHeight}
    >
      <S.Modal>
        <S.Header>{title}</S.Header>
        <S.Content>{children}</S.Content>
        <FormFooter
          disabled={disabled}
          {...getSubmitBtnProps(
            submitBtnText,
            submitButtonTestingContext,
            onSubmit
          )}
          {...getCancelBtnProps(hide, cancelBtnText)}
          formId={formId}
        />
      </S.Modal>
    </Overlay>
  );
};
