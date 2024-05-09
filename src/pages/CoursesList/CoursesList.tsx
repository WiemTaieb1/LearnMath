import { useParams } from "react-router";
import { GradeCard, Navigator } from "../../components";
import { COURSES, DICTIONARY, ROUTES } from "../../config";
import { useAppTheme } from "../../styles/theme/useTheme";
import { useStyles } from "./style";

const CoursesList = () => {
  const { id } = useParams();
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Navigator
        links={[
          {
            label: DICTIONARY.courses,
            path: `/${ROUTES.courses}`,
            icon: <></>,
          },
          {
            icon: <></>,
            label: `${DICTIONARY[id as keyof typeof DICTIONARY]}`,
            path: `/${ROUTES.courses}/${ROUTES.grade}/${id}`
        }
        ]}
      />
      <div className={classes.content}>
        <span className={classes.title}>{DICTIONARY.coursesList}</span>
        <div className={classes.cards}>
          {COURSES[id as keyof typeof COURSES].map((grade, i) => (
            <GradeCard
              key={i}
              {...grade}
              label={DICTIONARY.course}
              link={`${ROUTES.course}/${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoursesList;
