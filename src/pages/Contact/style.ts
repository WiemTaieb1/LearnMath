import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.medium,
        flex: 1
    },
    content: {
        marginInline: 'auto',
        maxWidth: 1100,
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
    contactCard: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacings.XLarge,
        paddingBlockEnd: theme.spacings.XXLarge,
        borderRadius: theme.borderRadiuses.xLarge,
    },
    contactTitle: {
        color: theme.colors.dark,
        ...theme.typography.paragraph.medium.semiBold
    },
    contactText: {
        color: theme.colors.gray,
        ...theme.typography.paragraph.medium.regular
    },
    contactEmailContainer: {
        display: 'flex',
        gap: theme.spacings.XSmall,
        alignItems: 'center',
        paddingBlockStart: theme.spacings.XXLarge,
        paddingBlockEnd: theme.spacings.large
    },
    sendIcon: {
        color: theme.colors.background
    },
    linkIcon: {
        height: 44,
        width: 44,
        borderRadius: "50%",
        fill: theme.colors.background,
        "&&&>path , rect": {
            fill: theme.colors.blue,
        },
        "&:hover": {
            backgroundColor: theme.colors.blue,
            "&&&>path , rect": {
                fill: theme.colors.background,
            },
        },
    },
    linkContainer: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacings.small,
    },
    submitBtncontainer: {
        display: 'flex',
        justifyContent: 'end'
    },
    submitBtn: {
        cursor: "pointer",
        outline: 'none',
        color: theme.colors.blue,
        border: `${theme.borders.medium}px solid ${theme.colors.blue}`,
        borderRadius: theme.borderRadiuses.xLarge,
        paddingBlock: theme.spacings.small,
        paddingInline: theme.spacings.XLarge,
        ...theme.typography.paragraph.small.semiBold
    },
    section: {
        marginBlockStart: theme.spacings.XXLarge,
        width: theme.spacings.full,
        display: 'flex', gap: theme.spacings.large
    },
    form: { flex: 1, display: 'flex', flexDirection: 'column', gap: theme.spacings.small },
    inputContainer: { display: 'flex', gap: theme.spacings.small },
    input: {
        flex: 1,
        border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
        padding: theme.spacings.small,
        outline: 'none',
        color: theme.colors.dark,
        borderRadius: theme.borderRadiuses.medium
    },
    textAreaContainer: { display: 'flex', },
    textArea: {
        flex: 1,
        border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
        padding: theme.spacings.small,
        outline: 'none',
        color: theme.colors.dark,
        resize: 'none',
        borderRadius: theme.borderRadiuses.medium
    }
}))