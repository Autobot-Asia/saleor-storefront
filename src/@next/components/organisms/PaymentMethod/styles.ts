import { media, styled } from "@styles";
import { black, orange, white } from "@styles/constants";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 10px #00000029;
  padding: 15px 0 20px;
  font: normal normal normal 16px/16px Arial;
  letter-spacing: 0.32px;
  color: #000000;
`;

export const Title = styled.div`
  padding: 0 14px;
`;

export const TabsWrapper = styled.div`
  padding: 20px 43px 0;
`;

export const AttributeList = styled.ul`
  columns: 2;
  column-width: 50%;

  ${media.largeScreen`
    column-width: 100%;
    columns: 1;
  `};
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 30px;
    font-size: ${props => props.theme.typography.h4FontSize};
  }

  li::before {
    content: "•";
    margin-right: 20px;
    color: ${props => props.theme.colors.listBullet};
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  overflow: hidden;
`;

export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: ${props => props.active && props.theme.colors.tabTitle};
  border: ${props =>
    !props.active ? "1px solid #7a7a7a" : "2px solid #188C72"};
  padding: 7px 26px;
  margin-right: 40px;
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;

export const WrapBox = styled.div`
  padding: 0 1rem;
`;
export const CompanyImage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleText = styled.p`
  font: normal normal bold 18px Arial;
  letter-spacing: 0.07px;
  color: ${black};
  opacity: 1;
  margin-bottom: 11px;
`;

export const WrapperContent = styled.div`
  background-color: #ffffff;
  padding: 20px 0;
`;

export const ButtonStore = styled.div`
  padding: 0.75rem;
  border-radius: 2rem;
  background: ${orange};
  color: ${white};
  cursor: pointer;
`;

export const LI = styled.li`
  margin-top: 10px;
  font: normal normal normal 16px/16px Arial;
  letter-spacing: 0.32px;
  color: #000000;
`;
