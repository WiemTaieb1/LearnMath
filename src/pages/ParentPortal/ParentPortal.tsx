import { Navigator } from "../../components"
import { DATA, DICTIONARY, ROUTES } from "../../config"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"

const ParentPortal = () => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })

    return (<div className={classes.container}>
        <Navigator links={[{
            label: DICTIONARY.parentPortal,
            path: `/${ROUTES.parentPortal}`,
            icon: <></>
        }]} />
        <div className={classes.content}>
            <div className={classes.artical}>
                <span className={classes.title}>{DATA[0].title}</span>
                <span className={classes.date}>{new Date().toLocaleDateString()}</span>
                <span>
                    <img className={classes.img} src={DATA[0].img} />

                </span>
                <article className={classes.description}>{DATA[0].description}</article>
            </div>
        </div>

    </div>
    )
}
export default ParentPortal