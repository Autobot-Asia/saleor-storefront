import { styled } from "@styles";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const Title = styled.h3`
  /* font-weight: capitalize; */
  padding: 0 0 15px 0;
  /* font-size: 20px; */
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.mainColor};
  font: normal normal normal 20px/15px Arial;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;

export const CheckboxAddress = styled.div`
  margin-top: 18px;
  margin-bottom: 23px;
  .aiSHW {
    width: fit-content;
    margin-bottom: 0px;
  }
  .hhhOMr div {
    height: 14px;
    width: 14px;
    span {
      width: 10px;
      height: 10px;
    }
  }
`;
