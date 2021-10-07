import { styled } from "@styles";

export const Button = styled.a<{ secondary?: boolean }>`
  color: ${props => (props.secondary ? "#000000" : "#ff651c")};
  text-decoration: underline;
  cursor: pointer;
`;
