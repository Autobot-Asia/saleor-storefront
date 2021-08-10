import React from "react";

import { IProps } from "./types";

export const Money: React.FC<IProps> = ({
  money,
  defaultValue,
  ...props
}: IProps) => {
  if (!money) {
    return <span {...props}>{defaultValue}</span>;
  }
  const { amount, currency } = money;
  return (
    <span {...props}>
      {/* {money.currency && money.currency !== ""
        ? money.amount.toLocaleString(process.env.LANGUAGE_LOCALE, {
            currency: money.currency,
            style: "currency",
          })
        : money.amount.toString()} */}
      {amount} {currency}
    </span>
  );
};

Money.displayName = "Money";
export default Money;
