import * as React from "react";

// eslint-disable-next-line import/no-unresolved
import { ListProductType } from "./Page";

import "./scss/index.scss";

interface IProps {
  listProduct: ListProductType[];
  title: string;
}

function ProductListItem({ listProduct, title }: IProps) {
  return (
    <div>
      <div>
        <div className="overview-card-title">
          <span className="overview-card-title-text">{title}</span>
        </div>
        <div style={{ display: "flex" }}>
          {listProduct.map(item => {
            return (
              <div className="overview-img">
                <div>
                  <div>
                    <img
                      src={item.imgUrl}
                      alt="star"
                      className="overview_img_product"
                      width="217px"
                      height="217px"
                    />
                  </div>
                  <div className="overview_img_product_info">
                    <div>
                      <span className="overview_img_product_name">
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <span className="overview_img_product_price">
                        220.000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductListItem;
