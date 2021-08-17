import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Checkbox, ErrorMessage, Icon, Input } from "@components/atoms";
import { CachedImage } from "@components/molecules";
import { commonMessages } from "@temp/intl";

import { generateProductUrl } from "../../../../core/utils";
import ChatMyCart from "../../../../images/ChatMyCart.svg";
import DropdownOptionProductMyCart from "../../../../images/dropdownOptionProductMyCart.svg";
import TrashMyCart from "../../../../images/trashMyCart.svg";
import * as S from "./styles";
import { IProps } from "./types";

const QuantityButtonsRight = (add: () => void, index?: number) => (
  <S.QuantityButtons data-test="quantityControls" onClick={add}>
    <div data-test="increaseButton">
      <Icon size={6} name="plus" />
    </div>
  </S.QuantityButtons>
);
const QuantityButtonsLeft = (subtract: () => void, index?: number) => (
  <S.QuantityButtons data-test="quantityControls" onClick={subtract}>
    <div data-test="subtractButton">
      <Icon size={6} name="horizontal_line" />
    </div>
  </S.QuantityButtons>
);

/**
 * Product row displayed on cart page and in cart sidebar
 */

export const CartRow: React.FC<IProps> = ({
  index,
  totalPrice,
  unitPrice,
  name,
  sku,
  quantity,
  maxQuantity,
  onQuantityChange,
  thumbnail,
  attributes = [],
  onRemove,
  id,
  type = "responsive",
}: IProps) => {
  const [tempQuantity, setTempQuantity] = useState<string>(quantity.toString());
  const [isTooMuch, setIsTooMuch] = useState(false);
  const [checked, setChecked] = useState(false);
  const intl = useIntl();

  const handleBlurQuantityInput = () => {
    let newQuantity = parseInt(tempQuantity, 10);

    if (isNaN(newQuantity) || newQuantity <= 0) {
      newQuantity = quantity;
    } else if (newQuantity > maxQuantity) {
      newQuantity = maxQuantity;
    }

    if (quantity !== newQuantity) {
      onQuantityChange(newQuantity);
    }

    const newTempQuantity = newQuantity.toString();
    if (tempQuantity !== newTempQuantity) {
      setTempQuantity(newTempQuantity);
    }

    setIsTooMuch(false);
  };

  useEffect(() => {
    setTempQuantity(quantity.toString());
  }, [quantity]);

  const add = React.useCallback(
    () => quantity < maxQuantity && onQuantityChange(quantity + 1),
    [quantity]
  );
  const subtract = React.useCallback(
    () => quantity > 1 && onQuantityChange(quantity - 1),
    [quantity]
  );
  const handleQuantityChange = (evt: React.ChangeEvent<any>) => {
    const newQuantity = parseInt(evt.target.value, 10);

    setTempQuantity(evt.target.value);

    setIsTooMuch(!isNaN(newQuantity) && newQuantity > maxQuantity);
  };

  const quantityErrors = isTooMuch
    ? [
        {
          message: intl.formatMessage(commonMessages.maxQtyIs, { maxQuantity }),
        },
      ]
    : undefined;

  const productUrl = generateProductUrl(id, name);

  return (
    <S.Wrapper cartRowType={type} data-test="cartRow" data-test-id={sku}>
      <S.Header>
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <S.StoreName>Người bán</S.StoreName>
        <S.ChatHeader>
          <img src={ChatMyCart} alt="" />
          <S.TextChatHeader>
            <FormattedMessage defaultMessage="Chat ngay" />
          </S.TextChatHeader>
        </S.ChatHeader>
      </S.Header>
      <S.Photo cartRowType={type}>
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Link href={productUrl}>
          <a>
            <CachedImage data-test="itemImage" {...thumbnail} />
          </a>
        </Link>
      </S.Photo>
      <S.Description cartRowType={type}>
        <Link href={productUrl}>
          <a>
            <S.Name data-test="itemName">{name}</S.Name>
          </a>
        </Link>
        <S.Attributes cartRowType={type} data-test="itemAttributes">
          {attributes.map(({ attribute, values }, attributeIndex) => (
            <S.SingleAttribute key={attribute.id}>
              <span
                data-test="itemSingleAttribute"
                data-test-id={attributeIndex}
              >
                <S.LightFont>{attribute.name}:</S.LightFont>{" "}
                {values.map(value => value.name).join(", ")}
              </span>
            </S.SingleAttribute>
          ))}
        </S.Attributes>
      </S.Description>
      <S.Quantity cartRowType={type}>
        <Input
          name="quantity"
          value={tempQuantity}
          onBlur={handleBlurQuantityInput}
          onChange={handleQuantityChange}
          contentRight={QuantityButtonsRight(add, index)}
          contentLeft={QuantityButtonsLeft(subtract, index)}
          error={!!quantityErrors?.length}
        />
        <S.ErrorMessages>
          <ErrorMessage errors={quantityErrors} />
        </S.ErrorMessages>
      </S.Quantity>
      {/* <S.Trash>
        <IconButton
          testingContext="removeButton"
          testingContextId={sku}
          size={22}
          name="trash"
          onClick={onRemove}
        />
      </S.Trash> */}

      <S.UnitPrice cartRowType={type}>
        <S.PriceLabel cartRowType={type}>
          <S.LightFont>
            <FormattedMessage {...commonMessages.unitPrice} />
          </S.LightFont>
        </S.PriceLabel>
        <p data-test="totalPrice">{unitPrice}</p>
      </S.UnitPrice>
      <S.TotalPrice cartRowType={type}>
        <S.PriceLabel cartRowType={type}>
          <S.LightFont>
            <FormattedMessage {...commonMessages.totalPrice} />
          </S.LightFont>
        </S.PriceLabel>
        <p data-test="totalPrice">{totalPrice}</p>
        <S.IconChat>
          <img src={ChatMyCart} alt="" />
        </S.IconChat>
        <S.IconRemove onClick={onRemove}>
          <img src={TrashMyCart} alt="" />
        </S.IconRemove>
      </S.TotalPrice>
      <S.Sku cartRowType={type}>
        <p data-test="unitPrice">{sku}</p>
        <img src={DropdownOptionProductMyCart} alt="" />
      </S.Sku>
    </S.Wrapper>
  );
};
