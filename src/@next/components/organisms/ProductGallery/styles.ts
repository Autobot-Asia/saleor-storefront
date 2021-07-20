import { styled } from "@styles";
// import { white } from "@styles/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 370px;
  height: 448px;
`;

export const Thumbnail = styled.div<{ activeThumbnail: boolean }>`
  width: 74px;
  height: 74px;
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.activeThumbnail ? props.theme.colors.thumbnailBorder : "transparent"};
  justify-content: center;
  // height: 100px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }

  // margin-top: 20px;
  // margin-bottom: 20px;
`;

export const Button = styled.div`
  height: 20px;
  width: 20px;
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

export const ThumbnailsContainer = styled.div`
  position: relative;
  // border: 1px solid;
  order: 2;
`;

export const ThumbnailList = styled.div`
  position: relative;
  /* height: 74px;
  width: 74px; */
  // overflow-x: scroll;
  /* overflow-y: hidden; */
  scrollbar-width: none;
  // margin: 0 4rem;
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* ul {
    position: absolute;
    display: flex;
    padding: 0;
    margin: 0;
    width: 371px;
    overflow: hidden;
  } */
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  grid-area: preview;
  width: auto;
  max-height: 371px;
  /* max-width: 371px; */
  width: 371px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  order: 1;
`;
