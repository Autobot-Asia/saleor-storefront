import { StoreVariables } from "@temp/views/Product/gqlTypes/ProductDetails";

export interface IProps {
  product?: any;
  description?: string;
  store?: StoreVariables;
  attributes?: Array<{
    attribute: { name: string };
    values: Array<{ name: string }>;
  }>;
  checkPrice?: boolean;
}
