import * as React from "react";

import Flag from "../../images/flag-storepage.svg";
// eslint-disable-next-line import/no-unresolved
import { ListProductType } from "./Page";

import "./scss/index.scss";

interface IProps {
  listProduct: ListProductType[];
  title: string;
}

function ProductList({ listProduct, title }: IProps) {
  // const [flag, setFlag] = React.useState(true);
  // const [discount, setDiscount] = React.useState(true);
  return (
    <div>
      <div>
        <div className="overview-card-title">
          <span className="overview-card-title-text">{title}</span>
        </div>
        <div style={{ display: "flex", marginBottom: "70px" }}>
          {listProduct.map(item => {
            return (
              <div className="overview-img">
                <div>
                  <div className="overview-img-sale">
                    <div className="overview-img-discount">
                      {/* {flag === true ? <img src={Flag} alt="flag" /> : ""} */}
                      <img src={Flag} alt="flag" />
                      <span>25% GIẢM</span>
                    </div>
                    <img
                      src={item.imgUrl}
                      alt="star"
                      className="overview_img_product"
                      width="217px"
                      height="217px"
                    />
                  </div>
                  <div className="overview_product_info">
                    <div className="overview_product_info_text">
                      <span className="overview_product_name">{item.name}</span>
                    </div>
                    <div className="overview_product_discount_text">
                      <span>
                        <del>220.000</del>
                      </span>
                    </div>
                    {/* {discount === true ? (
                      <div className="overview_product_discount_text">
                        <span>
                          <del>220.000</del>
                        </span>
                      </div>
                    ) : (
                      ""
                    )} */}

                    <div className="overview_img_product_price">
                      <span>220.000</span>
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
export default ProductList;
