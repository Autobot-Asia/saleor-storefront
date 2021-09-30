import React from "react";
import { FormattedMessage } from "react-intl";

import { Checkbox } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { commonMessages } from "@temp/intl";
import { ITaxedMoney } from "@types";

import TrashMyCart from "../../../../images/trashMyCart.svg";
import * as S from "./styles";

export interface CartFooterProps {
  subtotalPrice?: ITaxedMoney | null;
  shippingPrice?: ITaxedMoney | null;
  discountPrice?: ITaxedMoney | null;
  totalPrice?: ITaxedMoney | null;
  onDeleteAllProduct?: () => void;
  button?: React.ReactNode;
}

/**
 * Cart footer to use with conjunction of cart rows
 */
const CartFooter: React.FC<CartFooterProps> = ({
  subtotalPrice,
  shippingPrice,
  discountPrice,
  totalPrice,
  onDeleteAllProduct,
  button,
}: CartFooterProps) => {
  const [checked, setChecked] = React.useState(false);
  const isShipping = !!shippingPrice?.gross && shippingPrice.gross.amount !== 0;
  const isDiscount = !!discountPrice?.gross && discountPrice.gross.amount !== 0;

  return (
    <S.Wrapper showShipping={isShipping} showDiscount={isDiscount}>
      <S.CheckboxFooterMyCart>
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>Chọn tất cả</p>
      </S.CheckboxFooterMyCart>
      <S.RemoveAllProduct>
        <img src={TrashMyCart} alt="" onClick={onDeleteAllProduct} />
        <p>Xoá cả giỏ hàng</p>
      </S.RemoveAllProduct>
      {isShipping && (
        <>
          <S.ShippingText>
            <FormattedMessage {...commonMessages.shipping} />
          </S.ShippingText>
          <S.ShippingPrice>
            <TaxedMoney data-test="shippingPrice" taxedMoney={shippingPrice} />
          </S.ShippingPrice>
        </>
      )}
      {isDiscount && (
        <>
          <S.DiscountText>
            <FormattedMessage {...commonMessages.promoCode} />
          </S.DiscountText>
          <S.DiscountPrice>
            <TaxedMoney data-test="discountPrice" taxedMoney={discountPrice} />
          </S.DiscountPrice>
        </>
      )}
      <S.TotalText>
        <p>Tạm tính:</p>
        <S.TotalPrice>
          <TaxedMoney data-test="totalPrice" taxedMoney={totalPrice} />
        </S.TotalPrice>
        <div>{button}</div>
      </S.TotalText>
    </S.Wrapper>
  );
};

export { CartFooter };
