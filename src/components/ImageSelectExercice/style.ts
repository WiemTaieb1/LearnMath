import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.medium
    },
    imgContainer: {
        padding: theme.spacings.small,
        borderRadius: theme.borderRadiuses.large,
        backgroundColor: theme.colors.backgroundSecondary,
        border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
        flexWrap: 'wrap',
        flex: 1,
        display: 'flex',
        gap: theme.spacings.small
    },
    img: {
        borderRadius: theme.borderRadiuses.medium,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.dark,
        fontSize: 50,
        fontWeight: 700,
        aspectRatio: 1, width: 100,
        border: `${theme.borders.xLarge}px solid ${theme.colors.background}`
    },
    selected: {
        border: `${theme.borders.xLarge}px solid ${theme.colors.blue}`
    },
    details: {
        display: 'flex',
        gap: theme.spacings.XXLarge
    },
    info: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacings.small
    },
    question: {
        color: theme.colors.gray,
        paddingInline: theme.spacings.XXLarge,
        textAlign: 'center',
        ...theme.typography.paragraph.large.bold
    },
    operation: {
        color: theme.colors.dark,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 700,

    },
    selectedAnswer: {
        justifyContent: 'cneter',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        height: 200,
        fontSize: 70,
        fontWeight: 700,
        color: theme.colors.gray,
    },
    submitBtn: {
        cursor:'pointer',
        backgroundColor: theme.colors.blue,
        color: theme.colors.background,
        borderRadius: theme.borderRadiuses.medium,
        paddingInline: theme.spacings.XLarge,
        paddingBlock: theme.spacings.medium,
        border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
        ...theme.typography.paragraph.medium.semiBold
    }
    ,
    submitSuccessBtn: {
        backgroundColor: theme.colors.Success
    },
    submitFailierBtn: {
        backgroundColor: theme.colors.danger

    },
}))