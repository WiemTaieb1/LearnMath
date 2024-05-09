import { DICTIONARY, GRADES } from "../../config"
import { Navigator } from "../../components"
import { ROUTES } from "../../config"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"
import { GradeCard } from "../../components"

const Courses = () => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        <Navigator links={[{
            label: DICTIONARY.courses,
            path: `/${ROUTES.courses}`,
            icon: <></>
        }]} />
        <div className={classes.content}>
            <span className={classes.title}>{DICTIONARY.courses}</span>
            <div className={classes.cards}>
                {GRADES.map((grade, i) => <GradeCard key={i} {...grade} label={DICTIONARY.grade} />)}
            </div>
        </div>


    </div>
    )
}
export default Courses