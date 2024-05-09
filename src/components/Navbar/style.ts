import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        paddingInline: theme.spacings.XLarge,
        gap: theme.spacings.XLarge,
        alignItems: 'center'
    },
    Logo: {
        paddingInlineEnd: theme.spacings.XXLarge,
        color: theme.colors.background,
        ...theme.typography.paragraph.large.bold,
        display: "flex",
        gap:theme.spacings.small,
        alignItems:"center",
    },
    linksContainer: {
        display: 'flex',
        gap: theme.spacings.medium,
    },
    link: {
        paddingInline: theme.spacings.medium,
        textDecoration: 'none',
        color: theme.colors.background,
        ...theme.typography.paragraph.medium.semiBold
    },
    logoImg: {
        width: 50,
        height: 50,
        objectFit: "cover",
        objectPosition:"center",
        borderRadius: theme.borderRadiuses.rounded
    }
}))