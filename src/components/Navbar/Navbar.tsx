import { DICTIONARY } from "../../config"
import { logoImg } from "../../config/images"
import { useAppTheme } from "../../styles/theme/useTheme"
import { LINKS } from "./link.const"
import { useStyles } from "./style"

export const Navbar = () => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        <span className={classes.Logo}>
            <img className={classes.logoImg} src= {logoImg}></img>
            {DICTIONARY.websiteName}
        </span>
        <div className={classes.linksContainer}>
            {LINKS.map((link, i) => <a key={i} href={`/${link.path}`} className={classes.link}>{link.label}</a>)}
        </div>
    </div>
    )
}