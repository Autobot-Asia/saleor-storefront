/* eslint-disable no-alert */
/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from "next/link";
import React, { useEffect, useState } from "react";

// import { FormattedMessage, useIntl } from "react-intl";
// import { ErrorMessage, Icon, IconButton, Input } from "@components/atoms";
// import { CachedImage } from "@components/molecules";
// import { commonMessages } from "@temp/intl";
import { generateProductUrl } from "../../../../core/utils";
import message from "../../../../images/message.svg";
import trash from "../../../../images/trash.svg";
// import * as S from "./styles";
import { IProps } from "./types";

// const QuantityButtons = (
//   add: () => void,
//   subtract: () => void,
//   index?: number
// ) => (
//   <S.QuantityButtons data-test="quantityControls">
//     <div onClick={subtract} data-test="subtractButton">
//       <Icon size={16} name="horizontal_line" />
//     </div>
//     <div onClick={add} data-test="increaseButton">
//       <Icon size={16} name="plus" />
//     </div>
//   </S.QuantityButtons>
// );

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
  //   const [isTooMuch, setIsTooMuch] = useState(false);
  //   const intl = useIntl();

  //   const handleBlurQuantityInput = () => {
  //     let newQuantity = parseInt(tempQuantity, 10);

  //     if (isNaN(newQuantity) || newQuantity <= 0) {
  //       newQuantity = quantity;
  //     } else if (newQuantity > maxQuantity) {
  //       newQuantity = maxQuantity;
  //     }

  //     if (quantity !== newQuantity) {
  //       onQuantityChange(newQuantity);
  //     }

  //     const newTempQuantity = newQuantity.toString();
  //     if (tempQuantity !== newTempQuantity) {
  //       setTempQuantity(newTempQuantity);
  //     }

  //     setIsTooMuch(false);
  //   };

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
  //   const handleQuantityChange = (evt: React.ChangeEvent<any>) => {
  //     const newQuantity = parseInt(evt.target.value, 10);

  //     setTempQuantity(evt.target.value);

  //     setIsTooMuch(!isNaN(newQuantity) && newQuantity > maxQuantity);
  //   };

  //   const quantityErrors = isTooMuch
  //     ? [
  //         {
  //           message: intl.formatMessage(commonMessages.maxQtyIs, { maxQuantity }),
  //         },
  //       ]
  //     : undefined;

  const productUrl = generateProductUrl(id, name);

  const idSeller: string = ((index as number) + 1).toString();
  return (
    <>
      {/* <S.Wrapper cartRowType={type} data-test="cartRow" data-test-id={sku}>
        <S.Photo cartRowType={type}>
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
          <S.Sku>
            <S.LightFont>
              <FormattedMessage {...commonMessages.sku} />:{" "}
              <span data-test="itemSKU">{sku || "-"}</span>
            </S.LightFont>
          </S.Sku>
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
            label={intl.formatMessage(commonMessages.qty)}
            value={tempQuantity}
            onBlur={handleBlurQuantityInput}
            onChange={handleQuantityChange}
            contentRight={QuantityButtons(add, subtract, index)}
            error={!!quantityErrors?.length}
          />
          <S.ErrorMessages>
            <ErrorMessage errors={quantityErrors} />
          </S.ErrorMessages>
        </S.Quantity>
        <S.Trash>
          <IconButton
            testingContext="removeButton"
            testingContextId={sku}
            size={22}
            name="trash"
            onClick={onRemove}
          />
        </S.Trash>

        <S.TotalPrice cartRowType={type}>
          <S.PriceLabel cartRowType={type}>
            <S.LightFont>
              <FormattedMessage {...commonMessages.totalPrice} />:
            </S.LightFont>
          </S.PriceLabel>
          <p data-test="totalPrice">{totalPrice}</p>
        </S.TotalPrice>
        <S.UnitPrice cartRowType={type}>
          <S.PriceLabel cartRowType={type}>
            <S.LightFont>
              <FormattedMessage {...commonMessages.price} />:
            </S.LightFont>
          </S.PriceLabel>
          <p data-test="unitPrice">{unitPrice}</p>
        </S.UnitPrice>
      </S.Wrapper> */}

      <tbody className="cart-item">
        <tr className="tr-header">
          <td className="td-seller">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={idSeller}
              />
              <label className="form-check-label" htmlFor={idSeller}>
                Người bán {idSeller}
              </label>
            </div>
          </td>

          <td colSpan={7} className="chat">
            <button>
              <img src={message} alt="message" width={20} height={20} />
              <span>Chat ngay</span>
            </button>
          </td>
        </tr>

        <tr className="tr-item">
          <td className="checkbox">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={id}
              />
              <label className="form-check-label" htmlFor={id}>
                <img src={thumbnail?.url} alt="" />
              </label>
            </div>
          </td>
          <td className="detail">
            <Link href={productUrl}>
              <a>{name}</a>
            </Link>
          </td>
          <td className="unit">
            <select className="form-select" aria-label="Default select example">
              <option value="1" selected>
                1kg
              </option>
              <option value="2">2kg</option>
              <option value="3">5kg</option>
            </select>
          </td>
          <td className="unit-price">{unitPrice}</td>
          <td className="quantity-control">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={subtract}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-dark quantity"
                disabled
              >
                {tempQuantity}
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={add}
              >
                +
              </button>
            </div>
          </td>
          <td className="total-price">{totalPrice}</td>
          <td className="chat">
            <button>
              <img src={message} alt="message" width={20} height={20} />
            </button>
          </td>
          <td className="delete">
            <button onClick={onRemove}>
              <img src={trash} alt="delete" width={20} height={20} />
            </button>
          </td>
        </tr>

        <tr className="tr-padding">
          <td colSpan={8}> </td>
        </tr>

        <tr className="tr-empty">
          <td colSpan={8}> </td>
        </tr>
      </tbody>
    </>
  );
};
