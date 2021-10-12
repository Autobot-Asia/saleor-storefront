import { styled } from "@styles";

export const CartHeader = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
`;

export const Content = styled.div<{ paddingLeft?: boolean }>`
  width: 50%;
  display: flex;
  ${props => (props.paddingLeft ? "padding-left: 20px" : "")}
`;

export const FlexGrow = styled.div<{ center?: boolean }>`
  flex-basis: 100%;
  ${props => (props.center ? "padding-left: 15px" : "")}
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 10px #00000029;
  margin-bottom: 20px;
`;
