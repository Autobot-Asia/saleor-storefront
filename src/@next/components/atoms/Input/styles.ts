import { DefaultTheme, styled } from "@styles";

import { activeLabelStyles } from "../InputLabel";

type WrapperProps = {
  active: boolean;
  error: boolean;
  disabled: boolean;
  theme: DefaultTheme;
};

const getEdgeColor = (
  { active, error, disabled, theme }: WrapperProps,
  hovered = false
) => {
  if (disabled) {
    return theme.colors.disabled;
  }

  if (error) {
    return theme.colors.error;
  }

  if (hovered) {
    return theme.colors.secondary;
  }

  return active ? theme.colors.secondary : theme.colors.dark;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  // border: 0.30000001192092896px solid #70707070;
  color: ${props => getEdgeColor(props)};
  width: 100%;
  height: 45px;
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 34px;
`;

export const Input = styled.input<{ labelBackground: string | null }>`
  border: 0.30000001192092896px solid #70707070;
  overflow: hidden;
  margin: 0;
  padding-left: 18px;
  width: 100%;
  height: 45px;
  font-size: ${props => props.theme.typography.smallFontSize};
  outline: none;
  background-color: transparent;
  &:-webkit-autofill {
    & + label {
      ${props => activeLabelStyles(props.theme, props.labelBackground)};
    }
  }
`;

export const Textarea = styled.textarea<{ labelBackground: string | null }>`
  padding: 0.8rem 1rem;
  margin: 0;
  border: none;
  width: 100%;
  height: 200px;
  resize: none;
  font-size: ${props => props.theme.typography.baseFontSize};
  outline: none;
  background-color: transparent;
  &:-webkit-autofill {
    & + label {
      ${props => activeLabelStyles(props.theme, props.labelBackground)};
    }
  }
`;
