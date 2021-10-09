import { styled } from "@styles";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
`;

export const Content = styled.div<{ padding: string }>`
  width: 50%;
  ${props => (props.padding === "right" ? "padding-right: 20px;" : "")}
  height: 75px;
  display: flex;
`;

export const ItemName = styled.div`
  margin-left: 10px;
`;

export const FlexGrow = styled.div<{ center?: boolean }>`
  flex-basis: 100%;
  ${props => (props.center ? "padding-left: 25px" : "")}
`;

export const SecondaryText = styled.div`
  color: #7a7a7a;
  font: normal normal normal 14px/22px Arial;
`;
