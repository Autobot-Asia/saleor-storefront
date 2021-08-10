/* eslint-disable no-console */
import Link from "next/link";
import Carousel from "nuka-carousel";
import React from "react";

import { channelSlug } from "@temp/constants";

import { generateProductUrl } from "../../core/utils";
import nextCarouselImg from "../../images/nextCarouselHomePage.svg";
import preCarouselImg from "../../images/preCarouselHomePage.svg";
import { TypedFeaturedProductsQuery } from "../ProductsFeatured/queries";

import "./scss/index.scss";

interface Props {}

const index = (props: Props) => {
  return (
    <TypedFeaturedProductsQuery
      displayError={false}
      variables={{ channel: channelSlug }}
    >
      {({ data }) => {
        // eslint-disable-next-line no-console
        const products = data.collection?.products?.edges || [];
        if (products.length) {
          return (
            <div className="product-suggested">
              <div className="title">
                <h2>Sản phẩm Gợi ý cho bạn</h2>
                <button>Xem tất cả</button>
              </div>

              <div className="carousel-slide">
                <Carousel
                  wrapAround
                  slidesToShow={5}
                  speed={2000}
                  cellSpacing={24}
                  slidesToScroll={5}
                  defaultControlsConfig={{
                    pagingDotsStyle: { display: "none" },
                  }}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button
                      style={{
                        transform: "translateX(-22px)",
                      }}
                      onClick={previousSlide}
                    >
                      <img src={preCarouselImg} alt="" />
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button
                      style={{
                        transform: "translateX(22px)",
                      }}
                      onClick={nextSlide}
                    >
                      <img src={nextCarouselImg} alt="" />
                    </button>
                  )}
                >
                  {products.map(product => {
                    const { name, pricing, thumbnail, id } = product.node;
                    return (
                      <Link href={generateProductUrl(id, name)} key={id}>
                        <a style={{ display: "block" }}>
                          <div className="slide-item card">
                            <div className="img">
                              <img
                                src={thumbnail?.url}
                                className="card-img-top"
                                alt={name}
                              />
                            </div>
                            <div className="card-body content">
                              <h5 className="card-title text-center">{name}</h5>
                              <p className="card-text text-center">
                                {pricing?.priceRange.start.gross.amount}{" "}
                                {pricing?.priceRange.start.gross.currency}
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

export default index;
