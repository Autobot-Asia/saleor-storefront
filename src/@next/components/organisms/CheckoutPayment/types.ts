import { User } from "@saleor/sdk/lib/fragments/gqlTypes/User";
import { GetShop_shop_countries } from "@saleor/sdk/lib/queries/gqlTypes/GetShop";

import { IAddress, IFormError } from "@types";

export interface IPromoCodeDiscount {
  voucherCode?: string | null;
}

export interface IProps {
  promoCodeErrors?: IFormError[];
  promoCodeDiscount?: IPromoCodeDiscount;
  promoCodeDiscountFormRef?: React.RefObject<HTMLFormElement>;
  promoCodeDiscountFormId?: string;
  addPromoCode: (promoCode: string) => void;
  removeVoucherCode: (voucherCode: string) => void;
  submitUnchangedDiscount: () => void;
  countries?: (GetShop_shop_countries | null)[];
  user?: User | null;
  billingAddress?: IAddress | null;
}

export interface IAddressEdit {
  address: IAddress;
  id: string;
}
