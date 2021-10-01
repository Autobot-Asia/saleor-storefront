import { useRouter } from "next/router";
import React from "react";

import { Loader } from "@components/atoms";
import { paths } from "@paths";

import { Container } from "../Container";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Template for checkout page.
 */
const Checkout: React.FC<IProps> = ({
  loading,
  navigation,
  checkout,
  paymentGateways,
  hidePaymentGateways = false,
  cartSummary,
  button,
}: IProps) => {
  const { pathname } = useRouter();
  return (
    <Container>
      {loading && (
        <S.Loader>
          <Loader fullScreen />
        </S.Loader>
      )}
      {pathname === paths.checkoutAddress ? (
        <S.Wrapper>
          <S.Navigation>{navigation}</S.Navigation>
          <S.Checkout>{checkout}</S.Checkout>
          <S.PaymentGateways hide={hidePaymentGateways}>
            {paymentGateways}
          </S.PaymentGateways>
          <S.CartSummary>{cartSummary}</S.CartSummary>
          <S.Button>{button}</S.Button>
        </S.Wrapper>
      ) : (
        <S.WrapperWithoutCartSummary>
          <S.Navigation>{navigation}</S.Navigation>
          <S.Checkout>{checkout}</S.Checkout>
        </S.WrapperWithoutCartSummary>
      )}
    </Container>
  );
};

export { Checkout };
