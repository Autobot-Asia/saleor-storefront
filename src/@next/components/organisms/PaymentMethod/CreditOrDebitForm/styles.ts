import { media, styled } from "@styles";

export const Wrapper = styled.div`
  width: 375px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  div {
    margin-right: 5px;
  }
  .aiSHW {
    margin-bottom: 0px;
    width: min-content;
  }
  .hhhOMr {
    padding-right: 0px;
    div {
      height: 16px;
      width: 16px;
      span {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  & > img {
    margin-right: 25px;
  }
  margin-bottom: 20px;
`;

export const RowWithOneCell = styled.div`
  width: 100%;
`;

export const Label = styled.p`
  font: normal normal normal 14px/15px Arial;
  letter-spacing: 0.28px;
  color: #000000;
  &:after {
    content: "*";
    color: #ff0000;
  }
  margin-bottom: 5px;
`;

export const RowWithTwoCells = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: calc(45% - ${props => props.theme.spacing.fieldSpacer} / 2);
    ${media.smallScreen`
      width: 100%;
    `}
  }
`;

export const SecondaryText = styled.div`
  font: normal normal normal 12px/16px Arial;
  letter-spacing: 0.24px;
  color: #7a7a7a;
`;
