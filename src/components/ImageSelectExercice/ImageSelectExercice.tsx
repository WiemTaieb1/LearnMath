import { useMemo, useState } from "react";
import { joinClassNames } from "../../utils";
import { ImageSelectExerciceProps } from "./type";
import { useStyles } from "./style";
import { DICTIONARY, ROUTES } from "../../config";
import { useAppTheme } from "../../styles/theme/useTheme";
import { useNavigate, useParams } from "react-router";
const OPERATIONS = ['+']
export const ImageSelectExercice = (props: ImageSelectExerciceProps) => {
    const theme = useAppTheme()
    const { id, exerciceId } = useParams()
    const navigate = useNavigate()
    const [resultStatut, setResultStatut] = useState<'' | 'success' | 'error'>('')
    const [selected, setSelected] = useState<number>(null! as number)
    const operation = useMemo(() => OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)], [exerciceId])
    const input1 = useMemo(() => Math.floor(Math.random() * 100), [exerciceId])
    const input2 = useMemo(() => Math.floor(Math.random() * 100), [exerciceId])
    const answer = useMemo(() => eval(`${input1} ${operation} ${input2}`), [operation, input1, input2])
    const colors = useMemo(() => [
        theme.colors.Success,
        theme.colors.danger,
        theme.colors.warning,
        theme.colors.blue,
        theme.colors.gray,
        theme.colors.pink], [theme])
    const list = useMemo(() => {
        const _list = Array(20).fill('').map(() => ({
            value: Math.floor(Math.random() * 200),
            color: colors[Math.floor(Math.random() * colors.length)]
        }))
        if (_list.find(f => f.value === answer)) { return _list }
        _list[Math.floor(Math.random() * 20)].value = answer
        return _list
    }, [answer])
    const classes = useStyles({ theme })
    const handleClick = () => {
        if (answer === selected) {
            setResultStatut('success')
            setTimeout(() => {
                navigate(`/${ROUTES.exercices}/${ROUTES.grade}/${id}/${ROUTES.exercice}/${+exerciceId! as number + 1}`)
                setSelected(null! as number)
            }, 2000)
        }
        else {
            setResultStatut('error')
        }
    }
    console.log({ id })
    return (<div className={classes.container}>
        <span>{props.title}</span>
        <div className={classes.details}>
            <div className={classes.imgContainer}>
                {list.map((item, i) =>
                    <span key={i}
                        style={{ color: item.color }}
                        onClick={() => {
                            setSelected(item.value)
                            setResultStatut('')
                        }}
                        className={joinClassNames(classes.img, selected === item.value ? classes.selected : '')} >
                        {item.value}
                    </span>)}
            </div>
            <div className={classes.info}>
                <span className={classes.question}> {DICTIONARY.operationQuestion}</span>
                <span className={classes.operation}>{`${input1} ${operation} ${input2}`} </span>
                <span className={classes.selectedAnswer} >{selected}</span>
                <span className={joinClassNames(classes.submitBtn,
                    resultStatut === 'error' ? classes.submitFailierBtn : '',
                    resultStatut === 'success' ? classes.submitSuccessBtn : '',
                )}
                    onClick={() => handleClick()}>
                    {DICTIONARY.confirm}
                </span>
            </div>
        </div>
    </div>)
}