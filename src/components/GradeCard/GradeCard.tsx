import { useNavigate } from "react-router"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"
import { GradeCardProps } from "./type"

export const GradeCard = (props: GradeCardProps) => {
    const navigate = useNavigate()
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container} onClick={() => navigate(props.link)}>
        <span className={classes.header}>
            <span className={classes.label}>{props.label}:</span>
            <span className={classes.title}>{props.title}</span>
        </span>
        <img className={classes.img} src={props.image} />
    </div>
    )
}