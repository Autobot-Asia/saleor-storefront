import { styled } from "@styles";

export const Wrapper = styled.div`
  cursor: pointer;
  height: 40px;
  display: grid;
  // grid-row-gap: 8px;
  grid-column-gap: 6px;
  grid-template-columns: 40px auto;
  grid-template-areas:
    "photo name "
    "photo sku ";
  // "photo . ."
  // "photo quantity price";
`;

export const Photo = styled.div`
  grid-area: photo;
  width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
export const Sku = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: sku;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextName = styled.div`
  font-size: ${props => props.theme.typography.baseFontSize};
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.primaryBlack};
  grid-area: textName;
`;

export const Price = styled.div`
  grid-area: price;
  text-align: right;
  letter-spacing: 0.32px;
  font-size: ${props => props.theme.typography.smallFontSize};
  font-weight: ${props => props.theme.productItem.productItemPriceFontWeight};
`;
export const Quantity = styled.div`
  grid-area: quantity;
  color: ${props => props.theme.colors.skuAndQuantity};
  font-size: ${props => props.theme.typography.labelFontSize};
`;

export const SkuTextField = styled.div`
  grid-area: skuTextField;
  color: ${props => props.theme.colors.skuAndQuantity};
  font-size: ${props => props.theme.typography.labelFontSize};
`;
