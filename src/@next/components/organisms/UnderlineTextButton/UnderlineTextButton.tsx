import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

const UnderlineTextButton: React.FC<IProps> = ({
  buttonContent,
  handleClick,
  secondary,
}) => {
  return secondary ? (
    <S.Button onClick={handleClick} secondary={secondary}>
      {buttonContent}
    </S.Button>
  ) : (
    <S.Button onClick={handleClick}>{buttonContent}</S.Button>
  );
};

export { UnderlineTextButton };
