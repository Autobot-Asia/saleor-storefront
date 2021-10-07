import React from "react";

import { TextField } from "@components/molecules";

import { VoucherItem } from "../VoucherItem/VoucherItem";
import { IProps } from "./types";

export const VoucherList = ({ promoCodeDiscount }: IProps) => {
  const [voucherCode, setVoucherCode] = React.useState("");

  return (
    <>
      <TextField
        name="voucherCode"
        value={voucherCode}
        autoComplete="organization"
        onChange={e => setVoucherCode(e.target.value)}
        placeholder="Nhập mã Voucher của Shop"
      />
      <VoucherItem />
      <VoucherItem />
    </>
  );
};
