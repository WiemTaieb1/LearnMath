import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.small,
        padding: theme.spacings.large,
        borderRadius: theme.borderRadiuses.medium,
        backgroundColor: theme.colors.backgroundSecondary,
        border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
        width: 350,
        height: 250,
        textDecoration: 'none'
    },
    header: {
        display: 'flex',
        gap: theme.spacings.small,
        padding: theme.spacings.small
    },
    title: {
        color: theme.colors.dark,
        ...theme.typography.paragraph.medium.semiBold
    },
    label: {
        color: theme.colors.gray,
        ...theme.typography.paragraph.medium.semiBold
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: theme.borderRadiuses.medium, overflow: 'hidden'
    }
}))