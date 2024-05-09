import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        gap: theme.spacings.large,
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadiuses.medium,
        padding: theme.spacings.small
    },
    linkContainer: {
        display: 'flex',
        alignItems: '"center'
        // gap: theme.spacings.XSmall,
    },
    link: {
        display: 'flex',
        gap: theme.spacings.small,
        textDecoration: 'none',
        color: theme.colors.dark,
        ...theme.typography.paragraph.medium.regular,
        '&:hover': {
            textDecoration: 'underLine',
            // ...theme.typography.paragraph.medium.semiBold,
        }

    }
}))