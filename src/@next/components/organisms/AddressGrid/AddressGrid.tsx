import Carousel from "nuka-carousel";
import React from "react";

import {
  AddNewTile,
  // TileGrid
} from "@components/atoms";
import { AddressTile } from "@components/molecules";

import nextCarouselImg from "../../../../images/nextCarouselHomePage.svg";
import preCarouselImg from "../../../../images/preCarouselHomePage.svg";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Addresses tiles with add new address tile opening address form addition modal.
 */
const MINIMAL_ITEMS_ADDRESS = 3;
export const AddressGrid: React.FC<IProps> = ({
  addresses,
  addNewAddress,
}: IProps) => {
  const [itemIndex, setItemIndex] = React.useState<number>(
    MINIMAL_ITEMS_ADDRESS
  );
  // const addNewTile = (
  //   <AddNewTile key="newTile" type="address" onClick={addNewAddress} />
  // );

  // const addressTiles = addresses.reduce(
  //   (elements, address) => {
  //     elements.push(
  //       <AddressTile key={`addressTile-${address.id}`} {...address} />
  //     );
  //     return elements;
  //   },
  //   [addNewTile]
  // );

  // return <TileGrid columns={3} elements={addressTiles} />;
  return (
    <S.ItemList>
      <Carousel
        style={{ width: "100%" }}
        slidesToScroll={3}
        slidesToShow={3}
        speed={1000}
        dragging={false}
        renderBottomCenterControls={null}
        cellSpacing={20}
        afterSlide={slideIndex => setItemIndex(itemIndex)}
        renderCenterLeftControls={({ previousSlide, currentSlide }) => (
          <S.TopButton
            style={{
              transform: "translateX(-22px)",
              display: `${
                itemIndex === MINIMAL_ITEMS_ADDRESS ||
                addresses.length <= MINIMAL_ITEMS_ADDRESS - 1
                  ? "none"
                  : "block"
              }`,
            }}
            onClick={() => {
              previousSlide();
              setItemIndex(prev => --prev);
            }}
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
                itemIndex === addresses.length + 1 ||
                addresses.length <= MINIMAL_ITEMS_ADDRESS - 1
                  ? "none"
                  : "block"
              }`,
            }}
            onClick={() => {
              nextSlide();
              setItemIndex(prev => ++prev);
            }}
          >
            <img src={nextCarouselImg} alt="" />
          </S.BottomButton>
        )}
      >
        {/* {images &&
        images.length > 0 &&
        images.map((image, index) => {
          return (
            // <li
            //   key={index}
            //   data-test="galleryThumbnail"
            //   data-test-id={index}
            // >
            <S.Thumbnail
              // ref={(index, images.length)}
              onClick={() => setImageIndex(index)}
              activeThumbnail={Boolean(index === imageIndex)}
            >
              <CachedImage alt={image.alt} url={image.url} />
            </S.Thumbnail>
            // </li>
          );
        })} */}
        <AddNewTile key="newTile" type="address" onClick={addNewAddress} />
        {addresses.length > 0 &&
          addresses.map(address => (
            <AddressTile key={`addressTile-${address.id}`} {...address} />
          ))}
      </Carousel>
    </S.ItemList>
  );
};
