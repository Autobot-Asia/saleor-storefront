import React from "react";

import avatar from "../../../../images/store-avatar.png";
import { UnderlineTextButton } from "../UnderlineTextButton";
import { ProductItem } from "./ProductItem/ProductItem";
import * as S from "./styles";
import { IProps } from "./types";

export const CartPaymentItem = ({ openVoucherModal }: IProps) => {
  return (
    <>
      <S.Header>
        <S.Avatar src={avatar} alt="" />
        <span>Nguời bán 1</span>
      </S.Header>
      <S.ProductList>
        <ProductItem />
        <ProductItem />
      </S.ProductList>
      <S.Footer>
        <S.CustomTable>
          <tr>
            <td>
              <S.TDContent spaceItem>
                <div>Đơn vị vận chuyển</div>
                <div>
                  GH Nhanh
                  <S.SecondaryText>Nhận hàng từ 3-5 ngày</S.SecondaryText>
                </div>
                <div>52.000đ</div>
                <UnderlineTextButton buttonContent="Thay đổi" />
              </S.TDContent>
            </td>
            <td>
              <S.TDContent>
                <S.VoucherText>Voucher của shop:</S.VoucherText>
                <UnderlineTextButton
                  handleClick={openVoucherModal}
                  buttonContent="Chọn Voucher"
                />
              </S.TDContent>
            </td>
          </tr>
          <tr>
            <td>
              <S.TDContent spaceItem>
                <div>Lời nhắn cho người bán:</div>
                <S.TextArea />
              </S.TDContent>
            </td>
            <td>
              <S.TDContent>
                <div>Tổng đơn (2 sản phẩm):</div>
                <S.MainText>302.000đ</S.MainText>
              </S.TDContent>
            </td>
          </tr>
        </S.CustomTable>
      </S.Footer>
    </>
  );
};
