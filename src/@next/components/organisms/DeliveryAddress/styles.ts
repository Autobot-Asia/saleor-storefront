import { styled } from "@styles";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 10px #00000029;
  padding: 10px 15px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.mainColor};
  font: normal normal normal 18px/15px Arial;
  letter-spacing: 0.36px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;
