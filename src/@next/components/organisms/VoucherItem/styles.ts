import { styled } from "@styles";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 36px;
  display: flex;
  height: 100px;
`;

export const VoucherContent = styled.div<{ isSelected: boolean }>`
  border: ${props =>
    props.isSelected ? "4px solid #188C72" : "1px solid #a1a1a1"};
  width: 100%;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  &:focus {
    border: 4px solid #188c72;
  }
`;

export const BoldText = styled.div`
  font-weight: 550;
`;

export const ConditionButton = styled.div`
  color: #188c72;
  text-decoration: underline;
  text-align: right;
  cursor: pointer;
`;

export const MainColorText = styled.div`
  color: #188c72;
`;

export const Expiry = styled.div`
  color: #7a7a7a;
`;

export const VoucherTitle = styled.div`
  position: relative;
  color: white;
  text-align: left;
  font-size: 20px;
`;

export const VoucherName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.2;
`;
