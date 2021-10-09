import { styled } from "@styles";

export const Header = styled.div`
  width: 100%;
  padding: 10px 39px;
  display: flex;
  align-item: center;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
`;

export const ProductList = styled.div`
  padding-left: 39px;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 4px;
`;

export const Footer = styled.div`
  width: 100%;
  background: #fff8f5;
`;

export const CustomTable = styled.table`
  margin: 0;
  &&& {
    table,
    th,
    td {
      border-top: 1px solid
        ${props => props.theme.colors.baseFontColorTransparent};
      border-right: 1px solid
        ${props => props.theme.colors.baseFontColorTransparent};
      border-collapse: collapse;
    }
    th,
    td,
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
    td {
      width: 50%;
      padding: 10px 20px;
    }
    tr > td:first-child {
      padding-left: 39px;
    }
  }
`;

export const SecondaryText = styled.div`
  color: #7a7a7a;
  font: normal normal normal 14px/22px Arial;
`;

export const MainText = styled.div`
  font: normal normal normal 30px/22px Arial;
  letter-spacing: 0.6px;
  color: #188c72;
  margin-left: 230px;
`;

export const TDContent = styled.div<{ spaceItem?: boolean }>`
  display: flex;
  ${props => (props.spaceItem ? "justify-content: space-between" : "")};
  align-item: center;
`;

export const TextArea = styled.textarea`
  height: 40px;
  width: 347px;
  padding: 9px;
  border: 1px solid #7a7a7a;
  border-radius: 3px;
`;

export const VoucherText = styled.div`
  width: 33.33%;
`;
