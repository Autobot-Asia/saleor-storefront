import { styled } from "@styles";

export const Footer = styled.div<{ divider: boolean }>`
  position: relative;
  text-align: right;
  ${({ divider, theme }) =>
    divider && `border-top: 1px solid ${theme.colors.light};`}
  button {
    &:last-child {
      margin-left: 20px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.mainColor};
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 16px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.baseFontSize};
  &:disabled {
    background: #e4e4e4 0% 0% no-repeat padding-box;
    color: #7a7a7a;
  }
`;

export const BackButton = styled.button`
  cursor: pointer;
  border: 1px solid #a1a1a1;
  border-radius: 3px;
  padding: 10px 16px;
  font: normal normal normal 18px/15px Arial;
  color: #000000;
  font-size: ${props => props.theme.typography.baseFontSize};
`;
