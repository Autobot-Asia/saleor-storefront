import React from "react";
import { FormattedMessage } from "react-intl";

import { checkoutMessages } from "@temp/intl";

import deliveryAddress from "../../../../images/deliveryAddress.svg";
import * as S from "./styles";

export const DeliveryAddress = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <img src={deliveryAddress} alt="" />
        <FormattedMessage {...checkoutMessages.deliveryAddress} />
      </S.Title>
    </S.Wrapper>
  );
};
