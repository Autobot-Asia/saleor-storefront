import React from "react";
// import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { RichTextEditorContent } from "@components/atoms";
import { grayMedium } from "@styles/constants";

import { Breadcrumbs } from "../../../../components";
import {
  generateCategoryUrl,
  generateProductUrl,
} from "../../../../core/utils";
import * as S from "./styles";

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap !important; */
`;
const BreadcrumbWrapper = styled.div`
  display: flex;
`;
const List = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  grid-template-columns: 50% 50%;
  height: fit-content;
  width: 100%;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background: ${grayMedium};
`;
type Props = {
  description: string | undefined;
  product: any;
};
export const ProductDetailTab: React.FC<Props> = ({ description, product }) => {
  const mockData = [
    {
      title: "Style",
      value: "Fresh",
    },
    {
      title: "Product Type",
      value: "Citrus Fruit",
    },
    { title: "Type", value: "Orange" },
    { title: "Cultivation Type", value: "Organic" },
    { title: "Color", value: "orange" },
    { title: "Certification", value: "ISO" },
    { title: "Grade", value: "high" },
    { title: "Maturity", value: "1" },
    { title: "Size (cm)", value: "10" },
    { title: "Weight (kg)", value: "0.25" },
    {
      title: "Place of Origin",
      value: "South Africa",
    },
    {
      title: "Brand Name",
      value: "1",
    },
    { title: "Model Number", value: "1" },
  ];

  const populateBreadcrumbs = (product: any) => [
    {
      link: generateCategoryUrl(product.category.id, product.category.name),
      value: product.category.name,
    },
    {
      link: generateProductUrl(product.id, product.name),
      value: product.name,
    },
  ];

  return (
    <S.Wrapper>
      <S.WrapBox>
        <S.CompanyImage>
          <S.TitleText>
            {/* <FormattedMessage defaultMessage="Quick Detail" /> */}
          </S.TitleText>
        </S.CompanyImage>
        <Wrapper>
          <BreadcrumbWrapper>
            <div
              style={{
                flex: 14,
                alignSelf: "flex-end",
                fontWeight: 500,
                font: "font: normal normal bold 16px Arial",
              }}
            >
              Danh mục:
            </div>
            <div
              style={{
                position: "relative",
                flex: 86,
                alignSelf: "flex-end",
                font: "font: normal normal bold 16px Arial",
              }}
            >
              <div style={{ position: "absolute", top: -40 }}>
                <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} />
              </div>
            </div>
          </BreadcrumbWrapper>
          <List>
            {mockData.map((item, index) => {
              return (
                <ListItem key={index}>
                  <div
                    style={{
                      flex: 28,
                      fontWeight: 500,
                      font: "font: normal normal bold 16px Arial",
                    }}
                  >
                    {item.title}:
                  </div>
                  <div
                    style={{
                      flex: 72,
                      font: "font: normal normal bold 16px Arial",
                    }}
                  >
                    {item.value}
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Wrapper>
        <Line />
        <S.CompanyImage>
          <S.TitleText>Mô tả sản phẩm</S.TitleText>
          <RichTextEditorContent jsonData={description} />
        </S.CompanyImage>
      </S.WrapBox>
    </S.Wrapper>
  );
};
