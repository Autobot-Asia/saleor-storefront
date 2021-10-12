import React from "react";

import { Checkbox } from "@components/atoms";
import { TextField } from "@components/molecules";

import banking from "../../../../../images/internet_banking.png";
import jcb from "../../../../../images/jcb.png";
import visa from "../../../../../images/visa.png";
import * as S from "./styles";

export const CreditOrDebitCard = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <S.Wrapper>
      <S.Header>
        <img src={visa} alt="visa" />
        <img src={banking} alt="internet_banking" />
        <img src={jcb} alt="jcb" />
      </S.Header>
      <S.RowWithOneCell>
        <S.Label>Số thẻ</S.Label>
        <TextField name="cardNumber" placeholder="Số thẻ" />
      </S.RowWithOneCell>
      <S.RowWithOneCell>
        <S.Label>Họ và Tên trên thẻ</S.Label>
        <TextField name="fullName" placeholder="Họ và Tên trên thẻ" />
      </S.RowWithOneCell>
      <S.RowWithTwoCells>
        <div>
          <S.Label>Ngày hết hạn</S.Label>
          <TextField name="expirationDate" placeholder="MM/YY" />
        </div>
        <div>
          <S.Label>CVV</S.Label>
          <TextField name="expirationDate" placeholder="CVV" />
        </div>
      </S.RowWithTwoCells>
      <S.CheckboxWrapper>
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div>
          <div>Lưu thẻ</div>
          <S.SecondaryText>
            Tôi xác nhận thông tin thẻ sẽ được lưu lại trong tài khoản Thachsanh
            để sử dụng cho các giao dịch sau này
          </S.SecondaryText>
        </div>
      </S.CheckboxWrapper>
    </S.Wrapper>
  );
};
