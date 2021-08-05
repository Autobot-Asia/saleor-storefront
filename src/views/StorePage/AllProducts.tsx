import * as React from "react";

import { Button, DropdownMenu } from "@components/atoms";
import { TextField } from "@components/molecules";
import { Label } from "@components/molecules/ProductListHeader/styles";
import { Form } from "@components/organisms/StripeCreditCardForm/styles";
import { channelSlug } from "@temp/constants";

import DropDown from "../../images/dropdown.svg";
import Next from "../../images/next.svg";
import Star from "../../images/star-1.svg";
import { ListProductType } from "./Page";
import ProductList from "./ProductList";
import { TypedProductListQuery } from "./queries";

import "./scss/index.scss";

const items = [
  {
    onClick: () => {},
    content: <span>This is test</span>,
  },
  {
    onClick: () => {},
    content: <span>This is test 2</span>,
  },
  {
    onClick: () => {},
    content: <span>This is test 3</span>,
  },
];

const header = (
  <div className="all-product-filter">
    <span>Bộ lọc</span>
    <img src={DropDown} alt="dropdown" className="all_product_icon_filter" />
  </div>
);

const DEFAULT_PROPS = {
  header,
  items,
};

const AllProducts: React.FC<{}> = () => (
  <div>
    <div>
      <div className="card-all-products">
        <div className="all-product-dropdown">
          <DropdownMenu type="hoverable" {...DEFAULT_PROPS} />
        </div>
        <div className="card-all-product-row">
          <div className="card-all-product-container">
            <Label className="all-product-category-lable">Theo danh mục</Label>
            <div className="all-product-category">
              <div className="all-product-category-1">
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Nhập Khẩu</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Nội Địa</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Khô</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Đồ ăn vặt</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Nước Hoa Quả</span>
                </div>
              </div>
              <div className="all-product-category-2">
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Nhập Khẩu</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Nội Địa</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Hoa Quả Khô</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Đồ ăn vặt</span>
                </div>
                <div className="item-product-category">
                  <input type="checkbox" className="cb-category" />
                  <span>Nước Hoa Quả</span>
                </div>
              </div>
            </div>
            <div className="product-category-button-group">
              <div className="all-product-button-1">
                <button>Đặt lại</button>
              </div>
              <div className="all-product-button-2">
                <button>Áp dụng</button>
              </div>
            </div>
          </div>
          <div className="all-product-evaluate">
            <div className="all-product-evaluate-content">
              <Label className="all-product-evaluate-content-lable">
                Đánh giá
              </Label>
              <div className="all-product-evaluate-content-stars">
                <div>
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                </div>
                <div>
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <Label className="all-product-evaluate-content-text">
                    trở nên
                  </Label>
                </div>
                <div>
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <Label className="all-product-evaluate-content-text">
                    trở nên
                  </Label>
                </div>
                <div>
                  <img src={Star} alt="star" className="all_product_icon" />
                  <img src={Star} alt="star" className="all_product_icon" />
                  <Label className="all-product-evaluate-content-text">
                    trở nên
                  </Label>
                </div>
                <div>
                  <img src={Star} alt="star" className="all_product_icon" />
                  <Label className="all-product-evaluate-content-text">
                    trở nên
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="all-product-pricerange">
            <Label className="all-product-pricerange-lable">Khoảng giá</Label>
            <div className="all-product-pricerange-input">
              <div className="all-product-pricerange-input-first">
                <Form className="formEmail all-product-pricerange-form">
                  <TextField
                    className="pricerange-input-1"
                    name="text"
                    autoComplete="text"
                    label="#Từ"
                    type="text"
                  />
                </Form>
              </div>
              <div className="price-range-line">
                <hr className="range-line" />
              </div>

              <div className="all-product-pricerange-input-last">
                <Form className="formEmail all-product-pricerange-form">
                  <TextField
                    name="number"
                    autoComplete="number"
                    label="#Đến"
                    type="number"
                    required
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* All Product */}

    <div className="all-product-pagination">
      <div className="">
        <div className="control_group">
          <div className="btn_group">
            <span className="control_group_lable">Sắp xếp theo: </span>
            <Button testingContext="a" className="btn_selling">
              Bán chạy
            </Button>
            <Button testingContext="b" className="btn_new">
              Mới nhất
            </Button>
            <Button testingContext="c" className="btn_price">
              Giá tăng dần
            </Button>
            <Button testingContext="d" className="btn_price">
              Giá giảm dần
            </Button>
          </div>
          <div className="btn_pagination">
            <Button testingContext="a" className="btn_pagination_first">
              1
            </Button>
            <Button testingContext="b" className="btn_pagination_default">
              2
            </Button>
            <Button testingContext="c" className="btn_pagination_default">
              3
            </Button>
            <Button testingContext="d" className="btn_pagination_default">
              4
            </Button>
            <Button testingContext="e" className="btn_pagination_default">
              5
            </Button>
            <Button testingContext="f" className="btn_pagination_default">
              <img src={Next} alt="next" width="10px" height="10px" />
            </Button>
          </div>
        </div>
        <div>
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
                  {/* <div className="card-product-overview"> */}
                  <ProductList title="" listProduct={listMainProduct} />
                  <ProductList title="" listProduct={listMainProduct} />
                  <ProductList title="" listProduct={listMainProduct} />
                  <ProductList title="" listProduct={listMainProduct} />
                  <ProductList title="" listProduct={listMainProduct} />
                  {/* </div> */}
                </>
              );
            }}
          </TypedProductListQuery>
        </div>
      </div>
    </div>
  </div>
);

export default AllProducts;
