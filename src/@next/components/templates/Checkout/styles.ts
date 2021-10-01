import { media, styled } from "@styles";

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

export const Wrapper = styled.div`
  padding: 20px 19px 0;
  margin: 70px 0;
  display: grid;

  grid-template-columns: 7fr 3.2fr;
  grid-template-rows: 85px auto auto;
  grid-column-gap: 40px;
  grid-template-areas:
    "navigation cartSummary"
    "checkout cartSummary"
    "paymentGateways cartSummary"
    "button cartSummary";

  ${media.mediumScreen`
    grid-template-columns: 1fr;
    grid-template-areas:
      "navigation"
      "checkout"
      "paymentGateways"
      "button";
  `}
`;

export const WrapperWithoutCartSummary = styled.div`
  padding: 20px 19px 0;
  margin: 70px 0;

  ${media.mediumScreen`
   
  `};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  grid-area: navigation;
  padding-bottom: 43px;
  height: 85px;
`;
export const Checkout = styled.div`
  grid-area: checkout;
`;
export const PaymentGateways = styled.div<{ hide: boolean }>`
  ${props => props.hide && "display: none;"};
  grid-area: paymentGateways;
`;
export const CartSummary = styled.div`
  grid-area: cartSummary;

  ${media.mediumScreen`
    position: fixed;
    bottom: 0;
  `}
`;
export const Button = styled.div`
  grid-area: button;
  margin: 25px 0 0 0;
`;
