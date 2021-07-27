import { media, styled } from "@styles";

export const Label = styled.label<{ checked: boolean }>`
  box-shadow: 0px 0px 10px #00000029;
  height: 100%;
  min-height: 190px;
  display: block;
  background-color: ${props => props.theme.colors.white};
  padding: 15px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;

  ${media.smallScreen`
    padding: 30px 20px;
  `}
`;

export const Input = styled.input`
  display: none;
`;
