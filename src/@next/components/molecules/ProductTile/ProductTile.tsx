import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  return (
    <S.Wrapper>
      <S.ImgContainer data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.ImgContainer>
      <S.NameProduct data-test="productTile">{product.name}</S.NameProduct>
      <S.Price data-test="productPrice">
        <TaxedMoney taxedMoney={price} />
      </S.Price>
    </S.Wrapper>
  );
};
