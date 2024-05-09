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
        gap: theme.spacings.medium,
        padding: theme.spacings.large,
        borderRadius: theme.borderRadiuses.large,
        background: theme.colors.background,
    },
    artical: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.small,
        whiteSpace: 'pre-wrap'
    },
    title: {
        color: theme.colors.dark,
        ...theme.typography.paragraph.large.regular
    },
    date: {
        color: theme.colors.gray,
        ...theme.typography.paragraph.medium.medium
    },
    img: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: 500
    },
    description: {
        color: theme.colors.gray,
        lineHeight: '30px',
        ...theme.typography.paragraph.large.regular
    },

}))