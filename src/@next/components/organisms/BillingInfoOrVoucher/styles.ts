import { styled } from "@styles";

export const Wrapper = styled.div<{ display?: string }>`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 10px #00000029;
  padding: 10px 15px;
  display: flex;
  justify-content: ${props => props.display};
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.mainColor};
  font: normal normal normal 18px/15px Arial;
  width: 200px;
  letter-spacing: 0.36px;
  text-transform: capitalize;
  margin-right: 79px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;
