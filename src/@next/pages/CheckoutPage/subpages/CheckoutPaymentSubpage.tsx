import { useAuth, useCheckout } from "@saleor/sdk";
import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useIntl } from "react-intl";

import { CheckoutPayment } from "@components/organisms";
import { ShopContext } from "@temp/components/ShopProvider/context";
import { commonMessages } from "@temp/intl";
import { IFormError } from "@types";

import { SubpageBaseProps, SubpageCompleteHandler } from "../utils";

interface CheckoutPaymentSubpageProps extends SubpageBaseProps {
  paymentGatewayFormRef: React.RefObject<HTMLFormElement>;
  onPaymentGatewayError: (errors: IFormError[]) => void;
}

const CheckoutPaymentSubpageWithRef: RefForwardingComponent<
  SubpageCompleteHandler,
  CheckoutPaymentSubpageProps
> = (
  { paymentGatewayFormRef, changeSubmitProgress, onPaymentGatewayError },
  ref
) => {
  const {
    promoCodeDiscount,
    addPromoCode,
    removePromoCode,
    checkout,
  } = useCheckout();

  const [promoCodeErrors, setPromoCodeErrors] = useState<IFormError[]>([]);

  const promoCodeDiscountFormId = "discount-form";
  const promoCodeDiscountFormRef = useRef<HTMLFormElement>(null);
  const intl = useIntl();
  const { countries } = React.useContext(ShopContext);

  useImperativeHandle(ref, () => () => {
    if (promoCodeDiscountFormRef.current) {
      promoCodeDiscountFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    } else if (paymentGatewayFormRef.current) {
      paymentGatewayFormRef.current.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    } else {
      changeSubmitProgress(false);
      onPaymentGatewayError([
        { message: intl.formatMessage(commonMessages.choosePaymentMethod) },
      ]);
    }
  });

  const handleAddPromoCode = async (promoCode: string) => {
    const { dataError } = await addPromoCode(promoCode);
    const errors = dataError?.error;
    if (errors) {
      changeSubmitProgress(false);
      setPromoCodeErrors(errors);
    } else {
      setPromoCodeErrors([]);
      if (paymentGatewayFormRef.current) {
        paymentGatewayFormRef.current.dispatchEvent(
          new Event("submit", { cancelable: true })
        );
      } else {
        changeSubmitProgress(false);
        onPaymentGatewayError([
          { message: intl.formatMessage(commonMessages.choosePaymentMethod) },
        ]);
      }
    }
  };
  const handleRemovePromoCode = async (promoCode: string) => {
    const { dataError } = await removePromoCode(promoCode);
    const errors = dataError?.error;
    if (errors) {
      changeSubmitProgress(false);
      setPromoCodeErrors(errors);
    } else {
      setPromoCodeErrors([]);
      if (paymentGatewayFormRef.current) {
        paymentGatewayFormRef.current.dispatchEvent(
          new Event("submit", { cancelable: true })
        );
      } else {
        changeSubmitProgress(false);
        onPaymentGatewayError([
          { message: intl.formatMessage(commonMessages.choosePaymentMethod) },
        ]);
      }
    }
  };
  const handleSubmitUnchangedDiscount = () => {
    if (paymentGatewayFormRef.current) {
      paymentGatewayFormRef.current.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    } else {
      changeSubmitProgress(false);
      onPaymentGatewayError([
        { message: intl.formatMessage(commonMessages.choosePaymentMethod) },
      ]);
    }
  };
  const { user } = useAuth();

  return (
    <CheckoutPayment
      promoCodeDiscountFormId={promoCodeDiscountFormId}
      promoCodeDiscountFormRef={promoCodeDiscountFormRef}
      promoCodeDiscount={{
        voucherCode: promoCodeDiscount?.voucherCode,
      }}
      addPromoCode={handleAddPromoCode}
      removeVoucherCode={handleRemovePromoCode}
      submitUnchangedDiscount={handleSubmitUnchangedDiscount}
      promoCodeErrors={promoCodeErrors}
      countries={countries}
      user={user}
      billingAddress={checkout?.billingAddress}
    />
  );
};

const CheckoutPaymentSubpage = forwardRef(CheckoutPaymentSubpageWithRef);

export { CheckoutPaymentSubpage };
