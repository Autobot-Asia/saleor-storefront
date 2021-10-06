import React from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styles";
import { IProps } from "./types";

const CardTitle: React.FC<IProps> = props => {
  return (
    <S.Title>
      <img src={props.icon} alt="" />
      <FormattedMessage {...props.title} />
    </S.Title>
  );
};

export { CardTitle };
