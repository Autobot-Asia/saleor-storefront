import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const ShippingInfo: React.FC<IProps> = ({ address }: IProps) => {
  return (
    <S.Info>
      <S.FullName>{`${address?.lastName} ${address?.firstName} `}</S.FullName>
      {`| ${address?.streetAddress1}, ${address?.streetAddress2}, ${address?.city} | `}
      {address?.phone}
    </S.Info>
  );
};
