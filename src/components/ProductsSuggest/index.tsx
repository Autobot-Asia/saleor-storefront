import Link from "next/link";
import Carousel from "nuka-carousel";
import * as React from "react";

import { channelSlug } from "@temp/constants";

import { generateProductUrl } from "../../core/utils";
// import nextButton from "../../images/nextCarouselHomePage.svg";
import nextCarouselImg from "../../images/nextCarouselHomePage.svg";
// import noPhotoImg from "../../images/no-photo.svg";
import preCarouselImg from "../../images/preCarouselHomePage.svg";
import ProductListItem from "../ProductListItem";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

interface ProductsSuggestProps {
  title?: string;
}

const ProductsSuggest: React.FC<ProductsSuggestProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery
      displayError={false}
      variables={{ channel: channelSlug }}
    >
      {({ data }) => {
        const products = data.collection?.products?.edges || [];

        if (products.length) {
          return (
            <div className="products-featured">
              <h3>Sản Phẩm Gợi Ý Cho Bạn</h3>
              <div className="products-featured__container">
                <div className="list__product" style={{ display: "unset" }}>
                  <Carousel
                    wrapAround
                    renderBottomCenterControls={null}
                    slidesToScroll={5}
                    slidesToShow={5}
                    speed={1000}
                    // withoutControls={true}
                    renderCenterLeftControls={({
                      previousSlide,
                      currentSlide,
                    }) => (
                      <button
                        style={{
                          transform: "translate(-22px, -32px)",
                          // display: `${currentSlide === 0 ? "none" : "unset"}`
                        }}
                        onClick={previousSlide}
                      >
                        <img src={preCarouselImg} alt="" />
                      </button>
                    )}
                    renderCenterRightControls={({
                      nextSlide,
                      currentSlide,
                      slideCount,
                      slidesToShow,
                    }) => (
                      <button
                        style={{
                          transform: "translate(22px, -32px)",
                          // display: `${currentSlide === (slideCount - slidesToShow) ? "none" : "unset"}`
                        }}
                        onClick={nextSlide}
                      >
                        <img src={nextCarouselImg} alt="" />
                      </button>
                    )}
                  >
                    {products.map(({ node: product }) => (
                      <Link
                        href={generateProductUrl(product.id, product.name)}
                        key={product.id}
                      >
                        <a>
                          <ProductListItem product={product} />
                        </a>
                      </Link>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsSuggest.defaultProps = {
  title: "Suggest",
};

export default ProductsSuggest;
