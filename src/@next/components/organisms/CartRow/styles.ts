import { css } from "styled-components";

import { media, styled } from "@styles";

import { ICartRowType } from "./types";

const condenseWrapper = css`
  grid-template-columns: 1fr 2fr 2fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  grid-template-areas:
    "photo description description"
    "trash description description"
    "trash option quantity"
    ". . totalPrice";
  padding: 1.6rem 0rem;
`;
const responsiveWrapper = css`
  grid-template-areas: "header header header header header header" "photo description option unitPrice quantity totalPrice";
  grid-template-columns: 1fr 3fr 1.6875fr 1.57fr 1.67fr 1.91fr;
  ${media.mediumScreen`
    ${condenseWrapper}
  `};
`;
export const Wrapper = styled.div<{ cartRowType: ICartRowType }>`
  box-shadow: 0px 0px 10px #00000029;
  background-color: ${props => props.theme.colors.white};
  display: grid;
  min-height: 140px;
  max-height: min-content;
  width: 100%;
  ${props =>
    props.cartRowType === "condense" ? condenseWrapper : responsiveWrapper}
  align-items: center;
  border-bottom: 1px solid rgba(50, 50, 50, 0.1);
  margin-top: 20px;
  padding: 0 12px;
`;

export const QuantityButtons = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 100%;
  padding: 0;
  > div {
    display: flex;
  }

  svg {
    justify-self: center;
  }
`;

const condensePhoto = css`
  margin: 0 auto;
`;
const responsivePhoto = css`
  margin: 0;
  ${media.mediumScreen`
    ${condensePhoto}
`}
`;

export const WrapperProduct = styled.div``;

export const Checkbox = styled.div`
  grid-area: photo;
`;

export const Photo = styled.div<{ cartRowType: ICartRowType }>`
  width: 100% !important;
  grid-area: photo;
  display: flex;
  align-items: center;
  align-self: top;
  width: 70px;
  height: 90px;
  ${props =>
    props.cartRowType === "condense" ? condensePhoto : responsivePhoto}

  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
  .aiSHW {
    width: fit-content;
    margin-bottom: 0px;
  }
  .hhhOMr div {
    height: 14px;
    width: 14px;
    span {
      width: 10px;
      height: 10px;
    }
  }
  .hhhOMr {
    padding-right: 12px;
  }
`;

const condenseDescription = css`
  margin: 6px 0 6px 0;
`;
const responsiveDescription = css`
  ${media.mediumScreen`
    ${condenseDescription}
`}
`;
export const Description = styled.div<{ cartRowType: ICartRowType }>`
  grid-area: description;
  height: 100%;
  padding-top: 8px;
  ${props =>
    props.cartRowType === "condense"
      ? condenseDescription
      : responsiveDescription};
`;

const condenseAttributes = css`
  flex-flow: column;
`;
const responsiveAttributes = css`
  ${media.mediumScreen`
    ${condenseAttributes}
  `};
`;
export const Attributes = styled.div<{ cartRowType: ICartRowType }>`
  display: grid;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fit, minmax(166px, 500px));
  margin-left: -15px;
  ${props =>
    props.cartRowType === "condense"
      ? condenseAttributes
      : responsiveAttributes}
`;

export const SingleAttribute = styled.p`
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  background-color: white;
  padding: 0px 15px;
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const Name = styled.p`
  // font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.baseFontSize};
  font: normal normal normal Arial;
  text-align: left;
  text-transform: capitalize;
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.primaryBlack};
`;

export const LightFont = styled.span`
  font-size: ${props => props.theme.typography.smallFontSize};
  color: rgba(125, 125, 125, 0.6);
`;

const condensePrice = css`
  font-weight: normal;
  flex-direction: column;
`;
const responsivePrice = css`
  font-weight: bold;
  ${media.mediumScreen`
    ${condensePrice}
  `};
`;
export const Sku = styled.div<{ cartRowType: ICartRowType }>`
  width: fit-content;
  cursor:pointer;
  font-size: ${props => props.theme.typography.h4FontSize};
  display: flex;
  ${props =>
    props.cartRowType === "condense" ? condensePrice : responsivePrice}

  p {
    padding-left:10px;
    margin: 0;
    font: normal normal normal Arial;
    font-size: ${props => props.theme.typography.baseFontSize}
    font-weight: 100;
    letter-spacing: 0.32px;
    color: #7a7a7a;
    opacity:1;
    margin-right: 3px;
    cursor: pointer;
  }
`;

const condensePriceLabel = css`
  display: block;
`;
const responsivePriceLabel = css`
  display: none;
  ${media.mediumScreen`
    ${condensePriceLabel}
  `};
`;
export const PriceLabel = styled.p<{ cartRowType: ICartRowType }>`
  ${props =>
    props.cartRowType === "condense"
      ? condensePriceLabel
      : responsivePriceLabel}
`;

const condenseTotalPrice = css`
  p {
    text-align: right;
  }
`;
const responsiveTotalPrice = css`
  ${media.mediumScreen`
    ${condenseTotalPrice}
  `};
`;
export const TotalPrice = styled.div<{ cartRowType: ICartRowType }>`
  grid-area: totalPrice;
  font: normal normal normal Arial;
  font-size: ${props => props.theme.typography.baseFontSize}
  letter-spacing: 0.32px;
  display: flex;
  color: ${props => props.theme.colors.primaryBlack};
  ${props =>
    props.cartRowType === "condense"
      ? condenseTotalPrice
      : responsiveTotalPrice}
`;

export const UnitPrice = styled.div<{ cartRowType: ICartRowType }>`
  grid-area: unitPrice;
  font: normal normal normal Arial;
  font-size: ${props => props.theme.typography.baseFontSize}
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.primaryBlack};
  ${props =>
    props.cartRowType === "condense"
      ? condenseTotalPrice
      : responsiveTotalPrice}
`;

export const Trash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: trash;
`;

export const Option = styled(Sku)`
  grid-area: option;
`;

const condenseQuantity = css`
  margin: 0;
`;
const responsiveQuantity = css`
  // margin: 0 15px;
  ${media.mediumScreen`
    ${condenseQuantity}
  `};
`;
export const Quantity = styled.div<{ cartRowType: ICartRowType }>`
  grid-area: quantity;
  min-width: 100px;
  ${props =>
    props.cartRowType === "condense" ? condenseQuantity : responsiveQuantity}
`;

export const ErrorMessages = styled.div`
  position: absolute;
  top: 100%;
`;

export const Header = styled.div`
  grid-area: header;
  padding: 9px 0px;
  display: flex;
  justify-content: flex-start;
  .aiSHW {
    width: fit-content;
    margin-bottom: 0px;
  }
  .hhhOMr div {
    height: 14px;
    width: 14px;
    span {
      width: 10px;
      height: 10px;
    }
  }
  .hhhOMr {
    padding-right: 12px;
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: -12px;
    width: 1280px;
    height: 0.3px;
    background-color: #32323236;
  }
`;

export const StoreName = styled.span`
  font: normal normal normal 16px Arial;
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.primaryBlack};
`;

export const TextChatHeader = styled.span`
  font: normal normal normal 16px Arial;
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.mainColor};
  line-height: 16px;
`;

export const ChatHeader = styled.div`
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`;

export const IconChat = styled.div`
  display: flex;
  align-items: center;
  margin-left: 42px;
  cursor: pointer;
`;

export const IconRemove = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
  cursor: pointer;
`;
