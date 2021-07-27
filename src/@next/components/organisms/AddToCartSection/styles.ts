import { styled } from "@styles";
import { mainColorPage, white } from "@styles/constants";

export const AddToCartSelection = styled.div`
  padding: 0 !important;
`;

export const ProductNameHeader = styled.h3`
  text-transform: uppercase;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const ProductPricing = styled.h4`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const UndiscountedPrice = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const VariantPicker = styled.div`
  display: grid;
  // margin-top: 20px;

  .react-select-wrapper,
  .input {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export const QuantityInput = styled.div`
  // padding-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
`;

export const WrapperOptionBuy = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;
type IBoxAddTrolley = {
  isDisabled: boolean;
};
export const BoxAddTrolley = styled.div<IBoxAddTrolley>`
  height: 100%;
  width: 228px;
  border: 1px solid;
  border-color: ${props => (props.isDisabled ? "#7D7D7D" : `${mainColorPage}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${mainColorPage};
  font: normal normal normal 16px/12px Arial;
  letter-spacing: 0.32px;
  background-color: ${props => (props.isDisabled ? "#7D7D7D" : `${white}`)};
  cursor: ${props => (props.isDisabled ? "default" : "pointer")};
  /* img {
    filter: ${props =>
    props.isDisabled
      ? "invert(50%) sepia(4%) saturate(16%) hue-rotate(317deg) brightness(97%) contrast(88%)"
      : ""};
  } */
  span {
    color: ${props => (props.isDisabled ? `${white}` : `${mainColorPage}`)};
  }
`;

export const BoxQuote = styled.div`
  height: 100%;
  width: 185px;
  border: 1px solid ${mainColorPage};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${mainColorPage};
  font: normal normal normal 16px/12px Arial;
  letter-spacing: 0.32px;
  cursor: pointer;
`;
