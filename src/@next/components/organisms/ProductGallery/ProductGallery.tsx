import "./styles";

import React from "react";
// @ts-ignore
import Carousel from "nuka-carousel";
import ReactImageZoom from "react-image-zoom";
import { useInView } from "react-intersection-observer";

import { CachedImage } from "@components/molecules";

import { ListImageModal } from "../ListImageModal";
import * as S from "./styles";
import { IProps } from "./types";
import nextCarouselImg from "../../../../images/nextCarouselHomePage.svg";
import preCarouselImg from "../../../../images/preCarouselHomePage.svg";
const MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS = 5;

export const ProductGallery: React.FC<IProps> = ({ images }: IProps) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [listImage, setListImage] = React.useState<any>([]);

  const displayButtons = images.length > MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS;

  React.useEffect(() => {
    if (imageIndex >= images.length) {
      setImageIndex(0);
    }
  }, [images]);

  const bottomImageRef = React.useRef<HTMLDivElement | null>(null);
  const topImageRef = React.useRef<HTMLDivElement | null>(null);
  const [topImageIntersectionObserver, topImageInView] = useInView({
    threshold: 0.5,
  });

  const [bottomImageIntersectionObserver, bottomImageInView] = useInView({
    threshold: 0.5,
  });

  const setBottomRef = React.useCallback(
    node => {
      bottomImageRef.current = node;
      bottomImageIntersectionObserver(node);
    },
    [bottomImageIntersectionObserver]
  );

  const setTopRef = React.useCallback(
    node => {
      topImageRef.current = node;
      topImageIntersectionObserver(node);
    },
    [topImageIntersectionObserver]
  );

  const setIntersectionObserver = (index: number, lengthOfArray: number) => {
    if (lengthOfArray > MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS) {
      if (index === 0) {
        return setTopRef;
      }
      if (index === lengthOfArray - 1) {
        return setBottomRef;
      }
    }
  };

  const propsImg = {
    width: 371,
    height: 371,
    zoomWidth: 100,
    img: images[imageIndex].url,
    scale: 1.5,
  };

  const onShowModal = (imgUrl: any) => {
    setShowModal(true);
    setListImage(imgUrl);
  };

  const onChangeIndex = (index: number) => {
    setImageIndex(index);
  };
  const previousSlide = () => {
    setImageIndex(prev => prev - 1);
  };
  return (
    <S.Wrapper data-test="productPhotosGallery">
      <S.ThumbnailsContainer>
        {/* {!topImageInView && displayButtons && (
          <S.TopButton
            onClick={() => {
              if (topImageRef.current) {
                topImageRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}
          >
            <img src={preCarouselImg} alt="" />
          </S.TopButton>
        )}
        {!bottomImageInView && displayButtons && (
          <S.BottomButton
            onClick={() => {
              if (bottomImageRef.current) {
                bottomImageRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}
          >
            <img src={nextCarouselImg} alt="" />
          </S.BottomButton>
        )} */}
        <S.ThumbnailList>
          {/* <ul> */}
          <Carousel
            style={{ width: "100%" }}
            wrapAround
            slidesToShow={5}
            speed={300}
            renderBottomCenterControls={false}
            afterSlide={slideIndex => setImageIndex(slideIndex)}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => (
              <S.TopButton
                style={{
                  transform: "translateX(-22px)",
                  display: `${
                    imageIndex === 0 ||
                    images.length <= MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS
                      ? "none"
                      : "block"
                  }`,
                }}
                onClick={previousSlide}
              >
                <img src={preCarouselImg} alt="" />
              </S.TopButton>
            )}
            renderCenterRightControls={({
              nextSlide,
              currentSlide,
              slideCount,
              slidesToShow,
            }) => (
              <S.BottomButton
                style={{
                  transform: "translateX(22px)",
                  display: `${
                    currentSlide === images.length ? "none" : "block"
                  }`,
                }}
                onClick={nextSlide}
              >
                <img src={nextCarouselImg} alt="" />
              </S.BottomButton>
            )}
          >
            {images &&
              images.length > 0 &&
              images.map((image, index) => {
                return (
                  // <li
                  //   key={index}
                  //   data-test="galleryThumbnail"
                  //   data-test-id={index}
                  // >
                  <S.Thumbnail
                    // ref={setIntersectionObserver(index, images.length)}
                    onClick={() => setImageIndex(index)}
                    activeThumbnail={Boolean(index === imageIndex)}
                  >
                    <CachedImage alt={image.alt} url={image.url} />
                  </S.Thumbnail>
                  // </li>
                );
              })}
          </Carousel>
          {/* </ul> */}
        </S.ThumbnailList>
      </S.ThumbnailsContainer>

      <S.Preview data-test="imagePreview" className="wrapper">
        {images && images.length > 0 && imageIndex < images.length && (
          <div
            className="customize-zoomimg"
            onClick={() => onShowModal(images)}
          >
            <ReactImageZoom {...propsImg} />
          </div>
        )}
        {images.length === 0 && <CachedImage />}
      </S.Preview>

      {showModal && (
        <ListImageModal
          selectedImage={imageIndex}
          showModal={showModal}
          setShowModal={setShowModal}
          listImage={listImage}
          onChangeIndex={onChangeIndex}
        />
      )}
    </S.Wrapper>
  );
};
