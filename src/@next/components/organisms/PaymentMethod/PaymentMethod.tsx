import React from "react";
import { FormattedMessage } from "react-intl";

import { checkoutMessages } from "@temp/intl";

import card from "../../../../images/card.svg";
import { CardTitle } from "../CardTitle";
import { CreditOrDebitCard } from "./CreditOrDebitForm/CreditOrDebitForm";
import * as S from "./styles";

enum TABS {
  CreditOrDebitCard,
  InternetBanking,
  COD,
}

export const PaymentMethod = () => {
  const [activeTab, setActiveTab] = React.useState<TABS>();
  return (
    <S.Wrapper>
      <S.Title>
        <CardTitle icon={card} title={checkoutMessages.checkoutPaymentMethod} />
      </S.Title>
      <S.TabsWrapper>
        <S.Tabs>
          <S.TabTitle
            active={activeTab === TABS.CreditOrDebitCard}
            onClick={evt => {
              evt.stopPropagation();
              setActiveTab(TABS.CreditOrDebitCard);
            }}
          >
            <FormattedMessage defaultMessage="Thẻ tín dụng/Ghi nợ" />
          </S.TabTitle>
          <S.TabTitle
            active={activeTab === TABS.InternetBanking}
            onClick={evt => {
              evt.stopPropagation();
              setActiveTab(TABS.InternetBanking);
            }}
          >
            <FormattedMessage defaultMessage="Thẻ nội địa" />
          </S.TabTitle>
          <S.TabTitle
            active={activeTab === TABS.COD}
            onClick={evt => {
              evt.stopPropagation();
              setActiveTab(TABS.COD);
            }}
          >
            <FormattedMessage defaultMessage="Thanh toán khi nhận hàng" />
          </S.TabTitle>
        </S.Tabs>
        <S.WrapperContent hidden={activeTab !== TABS.CreditOrDebitCard}>
          <CreditOrDebitCard />
        </S.WrapperContent>
        <S.WrapperContent hidden={activeTab !== TABS.InternetBanking}>
          <p>Bạn cần có: </p>
          <ol>
            <S.LI>1. Thẻ ATM</S.LI>
            <S.LI>
              2. Đã đăng ký dịch vụ THANH TOÁN TRỰC TUYẾN và / hoặc dịch vụ NGÂN
              HÀNG ĐIỆN TỬ (Interrnet Banking)
            </S.LI>
            <S.LI>3. Số dư tài khoản đủ cho đơn hàng cần thanh toán</S.LI>
          </ol>
        </S.WrapperContent>
        <S.WrapperContent hidden={activeTab !== TABS.COD}>
          <p>
            Thanh toán khi nhận hàng: &emsp; Phí thu hộ: 0 đồng. Ưu đãi về phí
            vận chuyển (nếu có) áp dụng cả cho phí thu hộ
          </p>
        </S.WrapperContent>
      </S.TabsWrapper>
    </S.Wrapper>
  );
};
