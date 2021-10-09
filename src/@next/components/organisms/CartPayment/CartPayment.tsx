import React from "react";

import { checkoutMessages } from "@temp/intl";

import trolley from "../../../../images/trolleyCheckout.svg";
import { CardTitle } from "../CardTitle";
import { CartPaymentItem } from "../CartPaymentItem/CartPaymentItem";
import * as S from "./styles";
import { IProps } from "./types";

export const CartPayment = ({ openVoucherModal }: IProps) => {
  return (
    <>
      <S.Wrapper>
        <S.CartHeader>
          <S.Content>
            <CardTitle icon={trolley} title={checkoutMessages.trolley} />
          </S.Content>
          <S.Content paddingLeft>
            <S.FlexGrow>Đơn giá</S.FlexGrow>
            <S.FlexGrow>Số lượng</S.FlexGrow>
            <S.FlexGrow>Thành tiền</S.FlexGrow>
          </S.Content>
        </S.CartHeader>
        <CartPaymentItem openVoucherModal={openVoucherModal} />
      </S.Wrapper>
      <S.Wrapper>
        <CartPaymentItem openVoucherModal={openVoucherModal} />
      </S.Wrapper>
    </>
  );
};
