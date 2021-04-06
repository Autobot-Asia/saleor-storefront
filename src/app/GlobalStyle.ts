export const theme = {
    color: {

        white: '#FFFFFF',
        transparent: 'transparent',
        black: 'black',
    },
    fontSize: {
        xxs: '9px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
    },
}
export type ThemeSpaceType = keyof typeof theme.spacing

/**
 * xxs: 4px; xs: 8px; sm: 12px; md: 16px
 * lg: 20px; xl: 24px: xxl: 48px
 */
export function spacing(size: keyof typeof theme.spacing | number) {
    return function (props: { theme: Theme }) {
        if (typeof size === 'number' && size) {
            return `${size}px`
        }
        return props.theme.spacing[size] || theme.spacing.md
    }
}

export type ThemeColorType = keyof typeof theme.color
export function color(type: ThemeColorType) {
    return theme.color[type] || theme.color.black
}
/**
 * xxs: 9px; xs: 12px; sm: 14px; md: 16px; lg: 24px; xl: 32px
 */
export function fontSize(fontSize: keyof typeof theme.fontSize) {
    return theme.fontSize[fontSize] || theme.fontSize.sm
}

export type Theme = typeof theme