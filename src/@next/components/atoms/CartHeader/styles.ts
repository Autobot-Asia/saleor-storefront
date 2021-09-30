import { styled } from "@styles";

export const Wrapper = styled.div`
  display: grid;
  max-height: min-content;
  width: 100%;
  grid-template-areas: "checkbox productName optionTypes unitPrice quantity totalPrice";
  grid-template-columns: 1fr 3fr 1.6875fr 1.57fr 1.67fr 1.91fr;
  align-items: center;
  font-size: ${props => props.theme.typography.baseFontSize};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primaryBlack};
  padding: 0 12px;
  box-shadow: 0px 0px 10px #32323221;
`;

export const Column = styled.div`
  &:nth-child(4) {
    padding-left: 6px;
  }
  &:nth-child(5) {
    padding-left: 12px;
  }
  padding: 12px 0;
  .aiSHW {
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
`;

export const Checkbox = styled.input``;
