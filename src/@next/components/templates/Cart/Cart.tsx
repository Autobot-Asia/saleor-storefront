/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import ProductSuggested from "../../../../components/ProductSuggested";
// import message from "../../../../images/message.svg";
import trash from "../../../../images/trash.svg";
// import { Container } from "../Container";
// import * as S from "./styles";
import { IProps } from "./types";

import "./scss/index.scss";

/**
 * Cart template for cart page with list of products added by user.
 */
const Cart: React.FC<IProps> = ({
  breadcrumbs,
  title,
  cartHeader,
  cartFooter,
  cart,
  button,
}: IProps) => {
  return (
    <>
      {/* <Container>
        <S.Wrapper>
          <S.Breadcrumbs>{breadcrumbs}</S.Breadcrumbs>
          <S.Title>{title}</S.Title>
          <S.CartHeader>{cartHeader}</S.CartHeader>
          <S.Cart>{cart}</S.Cart>
          <S.CartFooter>{cartFooter}</S.CartFooter>
          <S.ProceedButton>{button}</S.ProceedButton>
        </S.Wrapper>
      </Container> */}
      <div className="my-cart" id="my-cart">
        <div className="my-cart-page">
          <div className="title">{title}</div>
          <div className="cart-content">
            <table className="table table-borderless">
              <thead className="cart-header">
                <tr className="tr-header">
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <th>Tên Sản Phẩm</th>
                  <th>Phân Loại</th>
                  <th>Đơn Giá</th>
                  <th>Số lượng</th>
                  <th colSpan={3}>Tổng tiền</th>
                </tr>
                <tr className="tr-empty">
                  <th colSpan={8}> </th>
                </tr>
              </thead>

              {cart}

              <tbody className="cart-footer">
                <tr className="tr-item">
                  <td className="checkbox">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="apple"
                      />
                      <label className="form-check-label" htmlFor="apple">
                        Chọn tất cả (5)
                      </label>
                    </div>
                  </td>
                  <td className="delete-all" colSpan={3}>
                    <a href="/">
                      <img src={trash} alt="delete" width={20} height={20} />
                      <span>Xóa cả giỏ hàng (5)</span>
                    </a>
                  </td>

                  <td className="total-amount">
                    <div>Tạm tính: {cartFooter}</div>
                  </td>
                  <td className="purchase" colSpan={3}>
                    {button}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ProductSuggested />
        </div>
      </div>
    </>
  );
};

export { Cart };
