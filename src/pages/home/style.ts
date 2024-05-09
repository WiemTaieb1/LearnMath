import { createUseStyles } from "react-jss";
import { DICTIONARY } from "../../config";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.medium,
        flex: 1
    },
    content: {
        borderRadius: theme.borderRadiuses.xLarge,
        backgroundColor: theme.colors.background,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacings.large,
        overflow: 'hidden'
    },
    mainImg: {
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        aspectRatio: 3,
        position: 'relative',
        '&:before': {
            content: `'${DICTIONARY.websiteName}'`,
            color: theme.colors.background,
            fontSize: 50,
            fontWeight: 700,
            position: 'absolute',
            zIndex: 10,
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    details: {
        paddingBlock:theme.spacings.XXLarge,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: theme.colors.dark,
        ...theme.typography.paragraph.large.bold
    },
    cardContainer: {
        padding: theme.spacings.XLarge,
        display: 'flex',
        gap: theme.spacings.XXXLarge,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    card: {
        display: 'flex',
        gap: theme.spacings.XXLarge,
        flexDirection: 'column'
    },
    cardImg: {
        objectFit: 'cover',
        objectPosition: 'center',
        width: 250,
        aspectRatio: 1,
        borderRadius: theme.borderRadiuses.rounded,
        overflow: 'hidden'
    },
    cardTitle: {
        textAlign: 'center',
        color: theme.colors.dark,
        ...theme.typography.paragraph.medium.semiBold
    },
    description: {
        textAlign: 'center',
        maxWidth: 400,
        color: theme.colors.gray,
        ...theme.typography.paragraph.large.regular
    },
}))