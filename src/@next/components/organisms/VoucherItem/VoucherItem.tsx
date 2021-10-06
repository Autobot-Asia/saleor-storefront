import React from "react";

import { checkoutMessages } from "@temp/intl";

import voucher from "../../../../images/voucher.svg";
import * as S from "./styles";

export const VoucherItem = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <S.Wrapper>
      <S.VoucherTitle>
        <img src={voucher} alt="" />
        <S.VoucherName>
          {checkoutMessages.freeShip.defaultMessage}
        </S.VoucherName>
      </S.VoucherTitle>
      <S.VoucherContent
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        <S.BoldText>Tất cả các phương thức thanh toán</S.BoldText>
        <S.MainColorText>Tối đa 15k</S.MainColorText>
        <S.Expiry>Hạn sử dụng: 19/09/2021</S.Expiry>
        <S.ConditionButton>
          {checkoutMessages.condition.defaultMessage}
        </S.ConditionButton>
      </S.VoucherContent>
    </S.Wrapper>
  );
};
