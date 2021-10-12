import Link from "next/link";
import React from "react";

import { paths } from "@paths";

import * as S from "./styles";

export const CheckoutPaymentFooter = () => {
  return (
    <S.Wrapper>
      <S.CheckoutFooter>
        <S.FooterContent>
          <div>
            <div>Tổng tiền hàng:</div>
            <div>Phí vận chuyển:</div>
            <div>Giảm khuyến mãi:</div>
            <div>Tổng thanh toán:</div>
          </div>
          <div>
            <div>580.000đ</div>
            <div>52.000đ</div>
            <div>-69.000đ</div>
            <div>563.000đ</div>
          </div>
        </S.FooterContent>
      </S.CheckoutFooter>
      <S.Payment>
        <Link href={paths.checkoutReview}>
          <p>Thanh Toán</p>
        </Link>
      </S.Payment>
    </S.Wrapper>
  );
};
