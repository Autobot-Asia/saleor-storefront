import { useCheckout } from "@saleor/sdk";
import React from "react";
import { useIntl } from "react-intl";

import { checkoutMessages, commonMessages } from "@temp/intl";
import { filterNotEmptyArrayItems } from "@utils/misc";

import invoice from "../../../../images/invoice.svg";
import ticket from "../../../../images/ticket.svg";
import { AddressFormModal } from "..";
import { BillingInfoOrVoucher } from "../BillingInfoOrVoucher";
import { CartPayment } from "../CartPayment/CartPayment";
import { CheckoutModal } from "../CheckoutModal/CheckoutModal";
import { CheckoutPaymentFooter } from "../CheckoutPaymentFooter/CheckoutPaymentFooter";
import { DeliveryAddress } from "../DeliveryAddress";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { VoucherList } from "../VoucherList/VoucherList";
import * as S from "./styles";
import { IAddressEdit, IProps } from "./types";

/**
 * Payment options used in checkout.
 */
const CheckoutPayment: React.FC<IProps> = ({
  promoCodeErrors,
  promoCodeDiscountFormId,
  promoCodeDiscountFormRef,
  promoCodeDiscount,
  addPromoCode,
  removeVoucherCode,
  submitUnchangedDiscount,
  countries,
  user,
  billingAddress,
}) => {
  // const [showPromoCodeForm, setShowPromoCodeForm] = useState(
  //   !!promoCodeDiscount?.voucherCode
  // );

  // useEffect(() => {
  //   const isVoucherCode = !!promoCodeDiscount?.voucherCode;
  //   if (isVoucherCode) {
  //     setShowPromoCodeForm(isVoucherCode);
  //   }
  // }, [promoCodeDiscount?.voucherCode]);

  // const handleChangeShowPromoCodeForm = () => {
  //   setShowPromoCodeForm(!showPromoCodeForm);
  // };

  // const handleSubmitPromoCode = (discountForm?: IDiscountFormData) => {
  //   const newPromoCode = discountForm?.promoCode;
  //   const savedPromoCode = promoCodeDiscount?.voucherCode;

  //   if ((!newPromoCode || !showPromoCodeForm) && savedPromoCode) {
  //     removeVoucherCode(savedPromoCode);
  //   } else if (newPromoCode && newPromoCode !== savedPromoCode) {
  //     addPromoCode(newPromoCode);
  //   } else {
  //     submitUnchangedDiscount();
  //   }
  // };

  const { checkout, setShippingAddress } = useCheckout();

  const [addressData, setAddressData] = React.useState<IAddressEdit>();
  const [displayNewAddressModal, setDisplayNewAddressModal] = React.useState(
    false
  );
  const [displayEditAddressModal, setDisplayEditAddressModal] = React.useState(
    false
  );
  const [displayVoucherModal, setDisplayVoucherModal] = React.useState(false);
  const [displayBillingInfoModal, setDisplayBillingInfoModal] = React.useState(
    false
  );
  const intl = useIntl();
  const checkoutShippingAddressFormId = "shipping-address-form";

  const onEdit = (address: IAddressEdit) => {
    setDisplayEditAddressModal(true);
    setAddressData(address);
  };

  return (
    <S.Wrapper>
      <DeliveryAddress
        shippingAddress={checkout?.shippingAddress}
        addresses={user?.addresses}
        displayModal={() => setDisplayNewAddressModal(true)}
        onEdit={onEdit}
        setShippingAddress={setShippingAddress}
        checkoutEmail={checkout?.email}
      />
      {displayNewAddressModal && (
        <AddressFormModal
          hideModal={() => {
            setDisplayNewAddressModal(false);
          }}
          submitBtnText="Add"
          title={intl.formatMessage(checkoutMessages.addNewAddress)}
          countriesOptions={countries?.filter(filterNotEmptyArrayItems)}
          formId={checkoutShippingAddressFormId}
          userId={user?.id}
        />
      )}
      {displayEditAddressModal && (
        <AddressFormModal
          hideModal={() => {
            setDisplayEditAddressModal(false);
          }}
          address={addressData}
          submitBtnText={intl.formatMessage(commonMessages.save)}
          title={intl.formatMessage({ defaultMessage: "Edit address" })}
          {...{ countriesOptions: countries?.filter(filterNotEmptyArrayItems) }}
          formId="address-form"
        />
      )}
      <BillingInfoOrVoucher
        img={invoice}
        buttonContent={checkoutMessages.fillInvoiceInfo.defaultMessage}
        title={checkoutMessages.infoInvoice}
        display="flex-start"
        handleClickButton={() => setDisplayBillingInfoModal(true)}
      />
      {displayBillingInfoModal && (
        <AddressFormModal
          hideModal={() => {
            setDisplayBillingInfoModal(false);
          }}
          submitBtnText={intl.formatMessage(commonMessages.save)}
          title={intl.formatMessage({
            defaultMessage: "Thông tin hoá đơn mới",
          })}
          {...{ countriesOptions: countries?.filter(filterNotEmptyArrayItems) }}
          formId="billingInfo-form"
        />
      )}
      <BillingInfoOrVoucher
        img={ticket}
        buttonContent={checkoutMessages.selectVoucher.defaultMessage}
        title={checkoutMessages.thachSanhVoucher}
        display="space-between"
        handleClickButton={() => setDisplayVoucherModal(true)}
      />
      {displayVoucherModal && (
        <CheckoutModal
          hideModal={() => setDisplayVoucherModal(false)}
          title={intl.formatMessage(checkoutMessages.addVoucher)}
          formId="voucher-form"
        >
          <VoucherList promoCodeDiscount={promoCodeDiscount} />
        </CheckoutModal>
      )}
      <CartPayment openVoucherModal={() => setDisplayVoucherModal(true)} />
      <PaymentMethod />
      <CheckoutPaymentFooter />
    </S.Wrapper>
  );
};

export { CheckoutPayment };
