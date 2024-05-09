import { ArrowLeft } from "../../assets"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"
import { NavigatorProps } from "./type"

export const Navigator = (props: NavigatorProps) => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        {props.links.map((link, i) => <span key={i} className={classes.linkContainer}>
            < a href={link.path} className={classes.link} > {link.icon} {link.label}</a>
            <ArrowLeft width={16}
                height={16} />
        </span>
        )
        }
    </div >
    )
}