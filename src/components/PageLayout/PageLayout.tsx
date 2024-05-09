import { useAppTheme } from "../../styles/theme/useTheme"
import { Navbar } from "../Navbar"
import { useStyles } from "./style"
import { PageLayoutProps } from "./type"

export const PageLayout = (props: PageLayoutProps) => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        <div className={classes.header}><Navbar /></div>
        <div className={classes.body}>{props.children}</div>
    </div>
    )
}