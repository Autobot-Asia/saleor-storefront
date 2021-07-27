import { styled } from "@styles";

export const Name = styled.span`
  display: block;
  margin-bottom: 6px;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  letter-spacing: 0.32px;
  color: ${props => props.theme.colors.primaryBlack};
  font-size: ${props => props.theme.typography.baseFontSize};
`;

export const Text = styled.div`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.skuAndQuantity};
  font-size: ${props => props.theme.typography.labelFontSize};
  letter-spacing: 0.28px;
  opacity: 1;
`;
