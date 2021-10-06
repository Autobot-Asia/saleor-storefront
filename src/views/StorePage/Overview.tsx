import * as React from "react";

import { channelSlug } from "@temp/constants";

import Avatar from "../../images/avatar.svg";
import Chat from "../../images/chat.svg";
import Clock from "../../images/clock.svg";
import Star from "../../images/star.svg";
import Store from "../../images/store.svg";
import { ListProductType } from "./Page";
import ProductList from "./ProductList";
import { TypedProductListQuery } from "./queries";

import "./scss/index.scss";

const Overview: React.FC<{}> = () => (
  <div>
    <div className="card-overview">
      <div className="overview-layout">
        <div className="overview-block">
          <div className="overview-block-1">
            <div>
              <img src={Star} alt="star" className="overview_icon" />
            </div>
            <div className="overview-review">
              <span className="overview-text-1">Đánh giá:</span>
              <span className="overview-text-2"> 4.5 (425 đánh giá)</span>
            </div>
          </div>

          <div className="overview-block-3">
            <div>
              <img src={Avatar} alt="star" className="overview_icon3" />
            </div>
            <div className="overview-follower">
              <span className="overview-text-1">Người theo dõi:</span>
              <span className="overview-text-2">1.1k</span>
            </div>
          </div>
        </div>
        <div className="overview-block">
          <div className="overview-block-1">
            <img src={Chat} alt="star" className="overview_icon" />
            <span className="overview-text-1">Phản hồi chat:</span>
            <span className="overview-text-2"> Rất nhiệt tình</span>
          </div>

          <div className="overview_icon_clock">
            <div className="overview-block-1">
              <div>
                <img src={Clock} alt="star" className="overview_time_icon" />
              </div>
              <div>
                <span className="overview-text-1">Giờ hoạt động:</span>
                <span className="overview-text-2"> 8:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-block">
          <div className="overview-block-1">
            <img src={Store} alt="star" className="overview_icon" />
            <span className="overview-text-1">Sản phẩm:</span>
            <span className="overview-text-2"> 120</span>
          </div>

          <div className="overview-block-3">
            <img src={Avatar} alt="star" className="overview_icon" />
            <span className="overview-text-1">Tham gia:</span>
            <span className="overview-text-2"> 16 tháng trước</span>
          </div>
        </div>
      </div>
    </div>

    <TypedProductListQuery
      alwaysRender
      displayLoader={false}
      errorPolicy="all"
      variables={{ first: 30, channel: channelSlug }}
    >
      {({ data }) => {
        const listMainProduct: ListProductType[] =
          data?.products?.edges?.map(item => ({
            id: item.node.id,
            imgUrl:
              item.node?.thumbnail?.url ||
              "https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png",
            name: item.node.name,
            tab: [item.node.productType.name],
          })) || [];
        return (
          <>
            {/* <div className="card-product-overview">
              <ProductList
                title="Sản phẩm nổi bật"
                listProduct={listMainProduct}
              />
            </div> */}

            <div className="card-product-overview-discount">
              <ProductList
                title="Sản phẩm nổi bật"
                listProduct={listMainProduct}
              />
            </div>

            <div className="card-product-overview-discount">
              <ProductList
                title="Sản phẩm giảm giá"
                listProduct={listMainProduct}
              />
              {/* <div className="card-product-nextCarousel">
                <img src={nextCarouselImg} alt="" />
              </div> */}
            </div>

            <div className="card-product-overview-discount">
              <ProductList
                title="Tất cả sản phẩm"
                listProduct={listMainProduct}
              />
              <div className="card-product-watchAll">
                <a>Xem tất cả &gt;</a>
              </div>
            </div>
          </>
        );
      }}
    </TypedProductListQuery>
  </div>
);

export default Overview;
