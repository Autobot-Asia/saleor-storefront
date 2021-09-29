import { media, styled } from "@styles";

export const Wrapper = styled.div<{
  showShipping: boolean;
  showDiscount: boolean;
}>`
  display: grid;
  font-size: ${props => props.theme.typography.h4FontSize};
  grid-template-areas:
    ${props => props.showShipping && `". shippingText shippingPrice ."`}
    ${props => props.showDiscount && `". discountText discountPrice ."`}
    ". . totalText";
  grid-template-columns: 1fr 3.075fr 2.075fr;
  padding: 1rem 12px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px #00000029;
  background-color: ${props => props.theme.colors.white}
  ${props => media.mediumScreen`
    grid-template-areas:
      ${props.showShipping && `". shippingText shippingPrice"`}
      ${props.showDiscount && `". discountText discountPrice"`}
      ". . totalTex";
    grid-template-columns: 0.5fr 3.5fr 2fr;
  `}
  border-bottom: 1px solid rgba(50, 50, 50, 0.1);
`;

export const RemoveAllProduct = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 7px;
    font: normal normal normal Arial;
    letter-spacing: 0.32px;
    font-size: ${props => props.theme.typography.baseFontSize}
    color: ${props => props.theme.colors.primaryBlack};
  }
  img{
    cursor:pointer;
  }
`;
export const CheckboxFooterMyCart = styled.div`
  display: flex;
  p {
    font: normal normal normal Arial;
    letter-spacing: 0.32px;
    font-size: ${props => props.theme.typography.baseFontSize};
    color: ${props => props.theme.colors.primaryBlack};
    margin-left: 13px;
  }
  align-items: center;
  .aiSHW {
    margin-bottom: 0px;
    width: min-content;
  }
  .hhhOMr {
    padding-right: 0px;
    div {
      height: 14px;
      width: 14px;
      span {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

export const ShippingText = styled.div`
  grid-area: shippingText;
`;
export const ShippingPrice = styled.div`
  grid-area: shippingPrice;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

export const DiscountText = styled.div`
  grid-area: discountText;
`;
export const DiscountPrice = styled.div`
  grid-area: discountPrice;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

export const TotalText = styled.div`
  grid-area: totalText;
  display: flex;
  align-items: center;
  p {
    font: normal normal normal Arial;
    letter-spacing: 0.32px;
    font-size: ${props => props.theme.typography.baseFontSize}
    color: ${props => props.theme.colors.primaryBlack};
    font-weight:400;
  }
`;
export const TotalPrice = styled.div`
  grid-area: totalPrice;
  letter-spacing: 0.48px;
  margin-left:6px;
  font-size: ${props => props.theme.typography.h3FontSize}
  color: ${props => props.theme.colors.mainColor};
  margin-right:25px;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

// export const CheckboxFooter = styled.div``;
