import React from "react";
import { FormattedMessage } from "react-intl";

import { TaxedMoney } from "@components/containers";
import { commonMessages } from "@temp/intl";

import { CachedImage } from "../CachedImage";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Row with product to display in cart summary.
 */
const CartSummaryRow: React.FC<IProps> = ({
  index,
  sku,
  name,
  price,
  quantity,
  thumbnail,
}: IProps) => {
  return (
    <S.Wrapper data-test="cartSummary" data-test-id={sku}>
      <S.Name data-test="name">
        <S.TextName>{name}</S.TextName>
        <S.Quantity>
          <FormattedMessage {...commonMessages.quantity} />
          {": "}
          <span data-test="quantity">{quantity}</span>
        </S.Quantity>
      </S.Name>
      <S.Sku>
        <S.SkuTextField>
          <FormattedMessage {...commonMessages.sku} />
          {": "}
          <span data-test="sku">{sku}</span>
        </S.SkuTextField>
        <S.Price data-test="price">
          <TaxedMoney taxedMoney={price} />
        </S.Price>
      </S.Sku>
      <S.Photo>
        <CachedImage data-test="image" {...thumbnail} />
      </S.Photo>
    </S.Wrapper>
  );
};

export { CartSummaryRow };
