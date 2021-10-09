import React from "react";

import kiwi from "../../../../../images/kiwi.png";
import * as S from "./styles";

export const ProductItem = () => {
  return (
    <S.Wrapper>
      <S.Content padding="right">
        <img src={kiwi} alt="" />
        <S.ItemName>
          <p>Táo Envy New Zealand Đánh Thức Mọi Vị Giác</p>
          <S.SecondaryText>Phân loại: 1kg</S.SecondaryText>
        </S.ItemName>
      </S.Content>
      <S.Content padding="left">
        <S.FlexGrow>180.000đ</S.FlexGrow>
        <S.FlexGrow center>1</S.FlexGrow>
        <S.FlexGrow>180.000đ</S.FlexGrow>
      </S.Content>
    </S.Wrapper>
  );
};
