import { styled } from "@styles";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const Title = styled.h3`
  font-weight: capitalize;
  padding: 0 0 15px 0;
  font-size: 20px;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.mainColor};
  img {
    margin-right: 10px;
  }
`;
