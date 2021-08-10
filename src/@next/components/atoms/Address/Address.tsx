import React from "react";

import { IAddress } from "@types";

import * as S from "./styles";

export const Address: React.FC<IAddress> = ({
  firstName,
  lastName,
  companyName,
  streetAddress1,
  streetAddress2,
  city,
  postalCode,
  countryArea,
  country,
  phone,
}: IAddress) => (
  <div>
    <S.Name>{`${firstName} ${lastName}`}</S.Name>
    {companyName && <S.Text>{companyName}</S.Text>}
    <S.Text>{streetAddress1}</S.Text>
    {streetAddress2 && <S.Text>{streetAddress2}</S.Text>}
    {/* {postalCode && <S.Text>${postalCode},</S.Text>}  */}
    <S.Text>{city}</S.Text>
    {countryArea && <S.Text>{countryArea}, </S.Text>}
    <S.Text>{country!.country}</S.Text>
    {phone && <S.Text>Phone: {phone}</S.Text>}
  </div>
);
