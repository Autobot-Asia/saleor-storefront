import { color, spacing, theme } from '@temp/app/GlobalStyle'
import styled, { css } from 'styled-components'

type DividerProps = {
    vertical?: boolean
    size?: keyof typeof theme.spacing | number
    lineColor?: string
    lineSize?: number
}
/**
 * @params size
 * sx: 8px; sm: 12px; md: 16px
 * lg: 20px; xl: 24px: xxl: 48px
 */
export const NDivider = styled('div').attrs(() => ({ 'data-testid': 'NDivider' })) <DividerProps>`
  ${({ vertical, size = 'sm', lineColor = color('transparent'), lineSize = 1 }) => {
        if (vertical) {
            return css`
        height: 100%;
        width: ${spacing(lineSize)};
        margin-left: calc((${spacing(size)} - ${spacing(lineSize)}) / 2);
        margin-right: calc((${spacing(size)} - ${spacing(lineSize)}) / 2);
        background-color: ${lineColor};
      `
        }

        return css`
      width: 100%;
      height: ${spacing(lineSize)};
      margin-top: calc((${spacing(size)} - ${spacing(lineSize)}) / 2);
      margin-bottom: calc((${spacing(size)} - ${spacing(lineSize)}) / 2);
      background-color: ${lineColor};
    `
    }}
`