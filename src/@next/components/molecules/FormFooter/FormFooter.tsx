import React from "react";

import * as S from "./styles";
import { IButtonProps, IProps } from "./types";

const getBtnAction = (btn: IButtonProps) =>
  btn.action && { onClick: btn.action };

const renderCancelBtn = (cancelBtn?: IButtonProps) =>
  cancelBtn && (
    <S.BackButton {...getBtnAction(cancelBtn)}>{cancelBtn.text}</S.BackButton>
  );

const renderSubmitBtn = (
  submitBtn: IButtonProps,
  disabled: boolean,
  formId?: string
) =>
  submitBtn && (
    <S.SubmitButton
      {...getBtnAction(submitBtn)}
      type={formId ? "submit" : "button"}
      form={formId}
      disabled={disabled}
    >
      {submitBtn.text}
    </S.SubmitButton>
  );

export const FormFooter: React.FC<IProps> = ({
  cancelBtn,
  disabled = false,
  divider = false,
  formId,
  submitBtn,
}: IProps) => {
  return (
    <S.Footer divider={divider}>
      {renderCancelBtn(cancelBtn)}
      {renderSubmitBtn(submitBtn, disabled, formId)}
    </S.Footer>
  );
};
