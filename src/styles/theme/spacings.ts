export const SPACINGS = {
    XXXLarge: 75,
    XXLarge: 50,
    XLarge: 25,
    large: 20,
    medium: 15,
    small: 10,
    XSmall: 5,
    XXSmall: 3,
    full: '100%',
    none:0
} as const 
export type Spacings = typeof SPACINGS
