import * as React from "react";

import { Card } from "@components/organisms/StripeCreditCardForm/styles";
import { channelSlug } from "@temp/constants";

import Avatar from "../../images/avatar.svg";
import Chat from "../../images/chat.svg";
import Clock from "../../images/clock.svg";
import Star from "../../images/star.svg";
import Store from "../../images/store.svg";
import { ListProductType } from "./Page";
import ProductListItem from "./ProductListItem";
import { TypedProductListQuery } from "./queries";
import * as S from "./styles";

import "./scss/index.scss";

const Overview: React.FC<{}> = () => (
  <div>
    <S.Wrapper className="overview-container">
      <Card className="card-overview">
        <div className="overview-layout">
          <div className="overview-block">
            <div className="overview-block-1">
              <img src={Star} alt="star" className="overview_icon" />
              <span className="overview-text-1">Đánh giá:</span>
              <span className="overview-text-2"> 4.5 (425 đánh giá)</span>
            </div>

            <div>
              <img src={Avatar} alt="star" className="overview_icon" />
              <span className="overview-text-1">Người theo dõi:</span>
              <span className="overview-text-2">1.1k</span>
            </div>
          </div>
          <div className="overview-block">
            <div className="overview-block-1">
              <img src={Chat} alt="star" className="overview_icon" />
              <span className="overview-text-1">Phản hồi chat:</span>
              <span className="overview-text-2"> Rất nhiệt tình</span>
            </div>

            <div>
              <img src={Clock} alt="star" className="overview_icon" />
              <span className="overview-text-1">Giờ hoạt động:</span>
              <span className="overview-text-2"> 8:00 - 19:00</span>
            </div>
          </div>

          <div className="overview-block">
            <div className="overview-block-1">
              <img src={Store} alt="star" className="overview_icon" />
              <span className="overview-text-1">Sản phẩm:</span>
              <span className="overview-text-2"> 120</span>
            </div>

            <div>
              <img src={Avatar} alt="star" className="overview_icon" />
              <span className="overview-text-1">Tham gia:</span>
              <span className="overview-text-2"> 16 tháng trước</span>
            </div>
          </div>
        </div>
      </Card>
    </S.Wrapper>
    <TypedProductListQuery
      alwaysRender
      displayLoader={false}
      errorPolicy="all"
      variables={{ first: 5, channel: channelSlug }}
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
            <S.Wrapper className="overview-container">
              <Card className="card-product-overview">
                <ProductListItem
                  title="Sản phẩm nổi bật"
                  listProduct={listMainProduct}
                />
              </Card>
            </S.Wrapper>
            <S.Wrapper className="overview-container">
              <Card className="card-product-overview">
                <ProductListItem
                  title="Sản phẩm giảm giá"
                  listProduct={listMainProduct}
                />
              </Card>
            </S.Wrapper>
          </>
        );
      }}
    </TypedProductListQuery>
  </div>
);

export default Overview;
