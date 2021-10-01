import React from "react";
import { FormattedMessage } from "react-intl";

import { checkoutMessages } from "@temp/intl";

import deliveryAddress from "../../../../images/deliveryAddress.svg";
import * as S from "./styles";

export const DeliveryAddress = () => {
  return (
    <S.Wrapper>
      <S.LeftContent>
        <S.Title>
          <img src={deliveryAddress} alt="" />
          <FormattedMessage {...checkoutMessages.deliveryAddress} />
        </S.Title>
        <S.Info>
          <S.FullName>Nguyễn Nam </S.FullName>| 58 Tố Hữu, Mễ Trì, Nam Từ Liêm,
          Hà Nội | 0123456789
        </S.Info>
      </S.LeftContent>
      <S.Edit>Chỉnh sửa</S.Edit>
    </S.Wrapper>
  );
};
