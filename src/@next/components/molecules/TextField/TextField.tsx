import React from "react";

import { ErrorMessage, Input } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

export const TextField: React.FC<IProps> = ({
  errors,
  helpText,
  disabled,
  ...rest
}: IProps) => {
  const hasErrors = !!(errors && errors.length);

  return (
    <>
      <S.TextField>
        <Input disabled={disabled} {...rest} error={hasErrors} />
        <S.ErrorMessages>
          <ErrorMessage errors={errors} />
          {helpText && <S.HelpText>{helpText}</S.HelpText>}
        </S.ErrorMessages>
      </S.TextField>
    </>
  );
};
