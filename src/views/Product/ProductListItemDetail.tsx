import { Thumbnail } from "@components/molecules";
import isEqual from "lodash/isEqual";
import * as React from "react";
import { TaxedMoney } from "../../@next/components/containers";
import { ProductDetails_product_category_products_edges_node } from "./gqlTypes/ProductDetails";
import "./scss/index.scss";



interface ProductListItemProps {
  product: ProductDetails_product_category_products_edges_node;
}

const ProductListItemDetail: React.FC<ProductListItemProps> = ({ product }) => {
  console.log(product)
  const price = product.pricing?.priceRange?.start;
  const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;
  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
      return <TaxedMoney taxedMoney={price} />;
    }
    return (
      <>
        <span className="product-list-item__undiscounted_price">
          <TaxedMoney taxedMoney={priceUndiscounted} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TaxedMoney taxedMoney={price} />
      </>
    );
  };
  return (
    <div className="product-list-item">
      <div className="product-list-item__image">
        <Thumbnail source={product} />
      </div>
      <h4 className="product-list-item__title">{product.name}</h4>
      <p className="product-list-item__price">{getProductPrice()}</p>
    </div>
  );
};

export default ProductListItemDetail;