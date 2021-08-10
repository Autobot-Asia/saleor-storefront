import { styled } from "@styles";

export const ItemList = styled.div``;
export const Button = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100%;
  top: 50%;
   & > img{
      height: auto;
      width: 100%;
    }
  }
`;

export const TopButton = styled(Button)`
  left: 0;
  transform: translateY(-50%) translateX(-50%) !important;
`;

export const BottomButton = styled(Button)`
  right: 0;
  transform: translateY(-50%) translateX(50%) !important;
`;
