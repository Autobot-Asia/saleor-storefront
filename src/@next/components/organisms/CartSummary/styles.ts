import { DefaultTheme, media, styled } from "@styles";

export const Wrapper = styled.div<{ mobileCartOpened: boolean }>`
  margin-top: 7.5px;
  box-shadow: 0px 0px 10px #00000029;
  background-color: ${props => props.theme.colors.white};
  ${media.mediumScreen`
    width: 100%;
    height: 100%;
    position: fixed;
    top: calc(100% - 86px);
    left: 0%;
    transition: all 0.5s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  `}
  ${props =>
    props.mobileCartOpened &&
    media.mediumScreen`
    top: 0%;
    overflow-y: scroll;
  `}
`;
export const Content = styled.div`
  padding: 0 20px 20px 20px;
`;

export const ProductLine = styled.div`
  padding: 7.5px 0;
`;

export const CartSummaryProductList = styled.div`
  margin-bottom: 20px;
`;

export const HR = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.colors.baseFontColorTransparent};
  margin: 0;
  padding: 0;
`;

export const Title = styled.div`
  padding: 15px 20px 7.5px;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-size: ${props => props.theme.typography.h3FontSize};
  text-transform: capitalize;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  letter-spacing: 0.4px;
  ${media.mediumScreen`
    font-size: ${(props: { theme: DefaultTheme }) =>
      props.theme.typography.h4FontSize};
    cursor: pointer;
  `}
  img {
    margin-right: 10px;
  }
  p {
    color: ${props => props.theme.colors.mainColor};
    font: normal normal normal 20px/15px Arial;
  }
`;
export const ArrowUp = styled.div<{ mobileCartOpened: boolean }>`
  display: none;
  ${media.mediumScreen`
    display: unset;
  `}
  ${props =>
    props.mobileCartOpened &&
    media.mediumScreen`
    transform: rotate(180deg);
  `}
`;
export const CostLine = styled.div<{ last: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.spacer};
  span {
    display: inline-block;
  }
  font-weight: ${props =>
    props.last ? props.theme.productItem.productItemPriceFontWeight : "normal"};
`;

export const Costs = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

export const ShowAll = styled.div`
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.colors.skuAndQuantity};
  font-size: ${props => props.theme.typography.baseFontSize};
  letter-spacing: 0.32px;
  opacity: 1;
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const Payment = styled.div`
  margin-top: 25px;
  background-color: ${props => props.theme.colors.mainColor};
  width: fit-content;
  border-radius: 2px;
  float: right;
  cursor: pointer;
  p {
    padding: 14px 36px;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.typography.baseFontSize};
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
`;
