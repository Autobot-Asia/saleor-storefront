import classNames from "classnames";
import React from "react";
import Media from "react-media";

import { ProductDescription } from "@components/molecules";
import { ProductGallery } from "@components/organisms";
// import AddToCartSection from "@components/organisms/AddToCartSection";
import ProductDetail from "@components/organisms/ProductDetail";

import {
  Breadcrumbs,
  // OverlayContext,
  // OverlayTheme,
  // OverlayType,
} from "../../components";
import { structuredData } from "../../core/SEO/Product/structuredData";
import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
import { ContactSupplier } from "./ContactSupplier";
import GalleryCarousel from "./GalleryCarousel";
// import OtherProducts from "./Other";
import SlideCarousel from "./SlideCarousel";
import { IProps } from "./types";

import { smallScreen } from "../../globalStyles/scss/variables.scss";

const populateBreadcrumbs = product => [
  {
    link: generateCategoryUrl(product.category.id, product.category.name),
    value: product.category.name,
  },
  {
    link: generateProductUrl(product.id, product.name),
    value: product.name,
  },
];

const Page: React.FC<
  IProps & {
    queryAttributes: Record<string, string>;
    onAttributeChangeHandler: (slug: string | null, value: string) => void;
  }
> = ({ product }) => {
  // const overlayContext = React.useContext(OverlayContext);

  const productGallery: React.RefObject<HTMLDivElement> = React.useRef();

  // const [variantId, setVariantId] = React.useState("");
  const variantId = "";
  const getImages = () => {
    if (product.variants && variantId) {
      const variant = product.variants.find(
        variant => variant.id === variantId
      );

      if (variant.images.length > 0) {
        return variant.images;
      }
    }

    return product.images;
  };

  // const handleAddToCart = (variantId, quantity) => {
  //   add(variantId, quantity);
  //   overlayContext.show(OverlayType.cart, OverlayTheme.right);
  // };

  // const addToCartSection = (
  //   <AddToCartSection
  //     items={items}
  //     productId={product.id}
  //     name={product.name}
  //     productVariants={product.variants}
  //     productPricing={product.pricing}
  //     queryAttributes={queryAttributes}
  //     setVariantId={setVariantId}
  //     variantId={variantId}
  //     onAddToCart={handleAddToCart}
  //     onAttributeChangeHandler={onAttributeChangeHandler}
  //     isAvailableForPurchase={product.isAvailableForPurchase}
  //     availableForPurchase={product.availableForPurchase}
  //   />
  // );

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} />
        <div className="product-page__product">
          <script className="structured-data-list" type="application/ld+json">
            {structuredData(product)}
          </script>
          <Media query={{ maxWidth: smallScreen }}>
            {matches =>
              matches ? (
                <>
                  <GalleryCarousel images={getImages()} />
                  <div className="product-page__product__info">
                    {/* {addToCartSection} */}
                    <ProductDetail />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="product-page__product__gallery"
                    ref={productGallery}
                  >
                    <ProductGallery images={getImages()} />
                  </div>
                  <div className="product-page__product__info">
                    <div
                      className={classNames(
                        "product-page__product__info--fixed"
                      )}
                    >
                      {/* {addToCartSection} */}
                      <ProductDetail />
                    </div>
                  </div>
                </>
              )
            }
          </Media>
        </div>
        <div className="product-page__product__description">
          <ProductDescription
            description={product.description}
            attributes={product.attributes}
          />
        </div>
        <ContactSupplier />
        {/* <OtherProducts products={product.category.products.edges} /> */}
        <SlideCarousel products={product.category.products.edges} />
      </div>
    </div>
  );
};

export default Page;
