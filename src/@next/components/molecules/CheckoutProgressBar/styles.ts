import { styled } from "@styles";

export const Dot = styled.div<{ done?: boolean }>`
  position: relative;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.done
      ? props => props.theme.colors.mainColor
      : props.theme.colors.skuAndQuantity}
  box-shadow: 0 0 0 5px ${props => (props.done ? "#a4c5be" : "#BFBFBF")};
`;

export const ActiveDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props.theme.colors.mainColor}
  border-radius: 50%;
  box-shadow: 0 0 0 5px #a4c5be;
`;

export const Label = styled.span`
  white-space: pre;
  display: block;
  position: absolute;
  top: 30px;
  transform: translateX(-50%);
  font-size: ${[props => props.theme.typography.smallFontSize]};
  letter-spacing: 2%;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
`;

export const LeftLabel = styled(Label)`
  transform: none;
  top: 30px;
  transform: translateX(-50%);
`;
export const RightLabel = styled(Label)`
  transform: none;
  top: 30px;
  right: 0;
  transform: translateX(50%);
`;

export const ProgressBar = styled.div<{ done?: boolean }>`
  width: 100%;
  height: 8px;
  background-color: ${props => (props.done ? "#06847B" : "#c2c2c2")};
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: "#BFBFBF" !important;
  &:not(:last-child) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  background-color: "#BFBFBF" !important;
  display: flex;
  width: 665px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
