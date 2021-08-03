import * as React from "react";

import { Button } from "@components/atoms";
import { Checkbox } from "@components/atoms/Checkbox/styles";
import { TextField } from "@components/molecules";
import { Label } from "@components/molecules/ProductListHeader/styles";
import { Card, Form } from "@components/organisms/StripeCreditCardForm/styles";

import Star from "../../images/star.svg";
import * as S from "./styles";

import "./scss/index.scss";

const AllProducts: React.FC<{}> = () => (
  <div>
    <div>
      <S.Wrapper className="overview-container">
        <Card className="card-all-products">
          <div className="card-all-product-row">
            <div className="card-all-product-container">
              <Label className="all-product-category-lable">
                Theo Danh Mục
              </Label>
              <div className="all-product-category">
                <div className="all-product-category-1">
                  <div>
                    <input type="checkbox" />
                    <Label>Hoa quả nội địa</Label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <Label>Hoa quả nội địa</Label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <Label>Hoa quả nội địa</Label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <Label>Hoa quả nội địa</Label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <Label>Hoa quả nội địa</Label>
                  </div>
                </div>
                <div className="all-product-category-2">
                  <Checkbox>CB1</Checkbox>
                  <Checkbox>CB1</Checkbox>
                  <Checkbox>CB1</Checkbox>
                  <Checkbox>CB1</Checkbox>
                  <Checkbox>CB1</Checkbox>
                  <Checkbox>CB1</Checkbox>
                </div>
              </div>
              <div>
                <Button testingContext="a" className="all-product-button-1">
                  Đặt lại
                </Button>
                <Button testingContext="b" className="all-product-button-2">
                  Áp dụng
                </Button>
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
        </Card>
      </S.Wrapper>
    </div>
  </div>
);

export default AllProducts;
