import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.medium,
        flex: 1
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.medium,
        padding: theme.spacings.large,
        borderRadius: theme.borderRadiuses.large,
        background: theme.colors.background,
    },
    title: {

        color: theme.colors.dark,
        ...theme.typography.paragraph.large.regular
    },
    cards: {
        display: 'flex',
        gap: theme.spacings.medium,
        flexWrap:"wrap",

    }
}))