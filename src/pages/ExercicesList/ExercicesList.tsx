import { useParams } from "react-router";
import { GradeCard, Navigator } from "../../components";
import { DICTIONARY, EXERCICES, ROUTES } from "../../config";
import { useAppTheme } from "../../styles/theme/useTheme";
import { useStyles } from "./style";

const ExercicesList = () => {
  const { id } = useParams();
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Navigator
        links={[
          {
            label: DICTIONARY.exercices,
            path: `/${ROUTES.exercices}`,
            icon: <></>,
          },
          {
            icon: <></>,
            label: `${DICTIONARY[id as keyof typeof DICTIONARY]}`,
            path: `/${ROUTES.exercices}/${ROUTES.grade}/${id}`
        }
        ]}
      />
      <div className={classes.content}>
        <span className={classes.title}>{DICTIONARY.ExercicesList}</span>
        <div className={classes.cards}>
          {EXERCICES[id as keyof typeof EXERCICES].map((grade, i) => (
            <GradeCard
              key={i}
              {...grade}
              label={DICTIONARY.exercice}
              link={`${ROUTES.exercice}/${i+1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExercicesList;
