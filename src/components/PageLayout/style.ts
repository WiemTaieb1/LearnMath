import { createUseStyles } from "react-jss";
import { bgImage } from "../../config/images";

export const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        direction: 'rtl'
    },
    header: {
        display: 'flex',
        height: 40,
        backgroundColor: theme.colors.blue,
        padding: theme.spacings.small
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.backgroundSecondary,
        paddingBlock: theme.spacings.XLarge,
        paddingInline: theme.spacings.XXXLarge,
        overflow: 'auto',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    }
}))