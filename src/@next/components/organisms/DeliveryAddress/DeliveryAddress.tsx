import React from "react";

import { checkoutMessages } from "@temp/intl";

import deliveryAddress from "../../../../images/deliveryAddress.svg";
import { CardTitle } from "../CardTitle";
import { CheckoutPaymentRadio } from "../CheckoutPaymentRadio";
import { ShippingInfo } from "../ShippingInfo/ShippingInfo";
import { UnderlineTextButton } from "../UnderlineTextButton";
import * as S from "./styles";
import { IProps } from "./types";

const DeliveryAddress: React.FC<IProps> = ({
  shippingAddress,
  addresses,
  displayModal,
  onEdit,
  setShippingAddress,
  checkoutEmail,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState(shippingAddress);

  const handleConfirm = () => {
    setIsEditing(false);
    if (selectedAddress && checkoutEmail)
      setShippingAddress(selectedAddress, checkoutEmail);
  };

  return (
    <>
      <S.Wrapper>
        <S.Main mb={isEditing ? "14px" : "0"}>
          <S.LeftContent>
            <CardTitle
              icon={deliveryAddress}
              title={checkoutMessages.deliveryAddress}
            />
            {!isEditing ? <ShippingInfo address={shippingAddress} /> : <></>}
          </S.LeftContent>
          {isEditing ? (
            <S.AddAddressButton onClick={displayModal}>
              + Thêm mới
            </S.AddAddressButton>
          ) : (
            <UnderlineTextButton
              buttonContent={checkoutMessages.edit.defaultMessage}
              handleClick={() => setIsEditing(true)}
            />
          )}
        </S.Main>
        {isEditing ? (
          <>
            {addresses?.map((address, index) => (
              <S.Main>
                <CheckoutPaymentRadio
                  key={index}
                  checked={address === selectedAddress}
                  onChange={() => setSelectedAddress(address)}
                >
                  <ShippingInfo address={address} />
                </CheckoutPaymentRadio>
                <UnderlineTextButton
                  secondary
                  buttonContent="Sửa"
                  handleClick={() =>
                    onEdit({ address: { ...address }, id: address?.id || "" })
                  }
                />
              </S.Main>
            ))}
            <S.ConfirmOrCancelButton primary onClick={handleConfirm}>
              <span>{checkoutMessages.confirm.defaultMessage}</span>
            </S.ConfirmOrCancelButton>
            <S.ConfirmOrCancelButton onClick={() => setIsEditing(false)}>
              <span>{checkoutMessages.cancel.defaultMessage}</span>
            </S.ConfirmOrCancelButton>
          </>
        ) : (
          <></>
        )}
      </S.Wrapper>
    </>
  );
};

export { DeliveryAddress };
