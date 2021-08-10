import { css } from "styled-components";

import { styled } from "@styles";

interface WrapperProps {
  readonly tileType?: "hover" | "addNew";
}

export const Wrapper = styled.div<WrapperProps>`
  box-shadow: 0px 0px 10px #00000029;
  background-color: ${props => props.theme.tile.backgroundColor};
  border: 1px transparent solid;
  overflow: auto;
  /* height: 100%; */
  padding: 0;
  transition: all 0.3s, color 0s, fill 0s;
  height: 150px;
  width: 266px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: left;
  ${props => {
    if (props.tileType === "hover") {
      return css`
        :hover {
          cursor: pointer;
          border-color: ${props.theme.tile.hoverBorder};
        }
      `;
    }
    if (props.tileType === "addNew") {
      return css`
        color: ${props.theme.colors.white};
        align-items: center;
        justify-content: center;
        :hover {
          cursor: pointer;
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.mainColor};
          svg path {
            fill: ${props.theme.colors.white};
          }
          p {
            color: ${props.theme.colors.white};
          }
        }
      `;
    }
  }};
`;

Wrapper.displayName = "Tile";

export const Header = styled.div`
  border-bottom: 2px solid ${props => props.theme.tile.divisionLine};
`;

export const Content = styled.div`
  padding: 12px 14px;
`;

export const Footer = styled.div`
  /* margin-top: auto;
  padding: 0 1rem;
  margin-bottom: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
