import { useStyles } from "./style"

export const Loader = () => {
    const classes = useStyles()
    return (<div className={classes.LoadingContainerStyle}>
        <ul className={classes.LoadingComponentStyle}>
            {Array(7).fill('').map((_, i) => <li key={i}></li>)}
        </ul>
    </div>)
}