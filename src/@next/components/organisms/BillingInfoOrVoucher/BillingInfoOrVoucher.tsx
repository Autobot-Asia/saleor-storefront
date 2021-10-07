import React from "react";

import { CardTitle } from "../CardTitle";
import { UnderlineTextButton } from "../UnderlineTextButton";
import * as S from "./styles";
import { IProps } from "./types";

export const BillingInfoOrVoucher = ({
  img,
  buttonContent,
  title,
  display,
  handleClickButton,
}: IProps) => {
  return (
    <S.Wrapper display={display}>
      <CardTitle icon={img} title={title} />
      <UnderlineTextButton
        buttonContent={buttonContent}
        handleClick={handleClickButton}
      />
    </S.Wrapper>
  );
};
