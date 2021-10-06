import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const CheckoutPaymentRadio = ({
  checked,
  children,
  onChange,
}: IProps) => {
  return (
    <S.Wrapper>
      <S.Radio isChecked={checked || false} onClick={onChange}>
        <div />
      </S.Radio>
      {children}
    </S.Wrapper>
  );
};
