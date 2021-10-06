import { styled } from "@styles";

export const Title = styled.div`
  color: ${props => props.theme.colors.mainColor};
  font: normal normal normal 18px/15px Arial;
  letter-spacing: 0.36px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin-right: 79px;
  width: 200px;
  img {
    margin-right: 10px;
  }
`;
