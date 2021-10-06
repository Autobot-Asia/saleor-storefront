import { styled } from "@styles";
import { white } from "@styles/constants";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 10px #00000029;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export const Main = styled.div<{ mb?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.mb || "14px"};
`;

export const LeftContent = styled.div`
  display: flex;
`;

export const AddAddressButton = styled.div`
  height: 29px;
  width: 122px;
  border: 0.5px solid #7a7a7a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7a7a7a;
  font: normal normal normal 16px/12px Arial;
  letter-spacing: 0.32px;
  background-color: ${white};
  cursor: pointer;
`;

export const ConfirmOrCancelButton = styled.button<{ primary?: boolean }>`
  background-color: ${props =>
    props.primary ? props.theme.colors.mainColor : "#FFFFFF"};
  border-radius: 3px;
  border: ${props => (props.primary ? "unset" : "0.5px solid #7a7a7a")};
  cursor: pointer;
  padding: 11px 24px;
  margin-right: 33px;
  span {
    color: ${props => (props.primary ? props.theme.colors.white : "#7a7a7a")};
    font-size: ${props => props.theme.typography.baseFontSize};
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
`;
