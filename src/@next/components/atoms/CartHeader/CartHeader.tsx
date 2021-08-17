import React from "react";
import { FormattedMessage } from "react-intl";

import { Checkbox } from "@components/atoms";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";

/**
 * Cart header to use with conjunction of cart rows.
 */
const CartHeader: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <S.Wrapper>
      <S.Column>
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </S.Column>
      <S.Column>
        <FormattedMessage {...commonMessages.productName} />
      </S.Column>
      <S.Column>
        <FormattedMessage {...commonMessages.optionTypes} />
      </S.Column>
      <S.Column>
        <FormattedMessage {...commonMessages.unitPrice} />
      </S.Column>
      <S.Column>
        <FormattedMessage {...commonMessages.quantity} />
      </S.Column>
      <S.Column>
        <FormattedMessage {...commonMessages.totalPrice} />
      </S.Column>
    </S.Wrapper>
  );
};

export { CartHeader };
