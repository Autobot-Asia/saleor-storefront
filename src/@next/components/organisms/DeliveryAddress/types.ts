import { User_addresses } from "@saleor/sdk/lib/fragments/gqlTypes/User";

import { IAddress } from "@types";

import { IAddressEdit } from "../CheckoutPayment/types";

export interface IProps {
  shippingAddress: IAddress | null | undefined;
  addresses: (User_addresses | null)[] | null | undefined;
  displayModal: () => void;
  onEdit: (address: IAddressEdit) => void;
  setShippingAddress: (address: IAddress, email: string) => void;
  checkoutEmail?: string;
}
