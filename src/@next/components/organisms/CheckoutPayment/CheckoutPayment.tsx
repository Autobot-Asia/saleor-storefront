import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

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

  return <S.Wrapper />;
};

export { CheckoutPayment };
