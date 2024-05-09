import { useParams } from "react-router"
import { ImageSelectExercice, Navigator } from "../../components"
import { DICTIONARY, ROUTES } from "../../config"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"

const Exercie = () => {
    const theme = useAppTheme()
    const { id, exerciceId } = useParams()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        <Navigator links={[{
            label: DICTIONARY.exercices,
            path: `/${ROUTES.exercices}`,
            icon: <></>
        },
        {
            icon: <></>,
            label: `${DICTIONARY[id as keyof typeof DICTIONARY]}`,
            path: `/${ROUTES.exercices}/${ROUTES.grade}/${id}`
        }
            ,
        {
            icon: <></>,
            label: `${DICTIONARY.exerciceNbr} ${exerciceId}`,
            path: `/${ROUTES.exercices}/${ROUTES.grade}/${id}/${ROUTES.exercice}/${exerciceId}`
        }
        ]} />
        <div className={classes.content}>
            <ImageSelectExercice title={`${DICTIONARY.exerciceNbr} ${exerciceId}`} />
        </div>
    </div>
    )
}
export default Exercie