import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 1080px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  // width: 100%;
  // display: flex;
`;

export const Button = styled.p<{ isActive: boolean; color: string }>`
  min-width: 200px;
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 12px + 40%;
  font-weight: 500;

  color: ${props => (props.isActive ? "#fff" : props.color)};
  background-color: ${props => (props.isActive ? props.color : "#fff")};

  border: 1px solid;
  border-color: ${props => (props.isActive ? "#fff" : props.color)};
  transition: 0.5s;
  &:before {
    position: absolute;
    content: "";
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    transition: 0.5s;
  }

  &:hover {
    box-shadow: 8px 8px
        ${props => (props.isActive ? `${props.color}30` : `${props.color}80`)},
      -7px -7px
        ${props => (props.isActive ? `${props.color}80` : `${props.color}30`)};
    cursor: pointer;
    &::before {
      border: 0px;
    }
  }
`;
