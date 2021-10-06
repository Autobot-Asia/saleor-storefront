import { styled } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Radio = styled.div<{ isChecked: boolean }>`
  display: inline-block;
  width: 13px;
  height: 13px;
  border: ${props =>
    props.isChecked ? "3px solid #188C72" : "0.5px solid #7a7a7a"};
  border-radius: 0.5em;
  background: #ffffff;
  vertical-align: bottom;
  margin-right: 10px;
`;
