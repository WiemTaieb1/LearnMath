import { CREATORS, DICTIONARY } from "../../config"
import { homeImg } from "../../config/images"
import { useAppTheme } from "../../styles/theme/useTheme"
import { useStyles } from "./style"

const Home = () => {
    const theme = useAppTheme()
    const classes = useStyles({ theme })
    return (<div className={classes.container}>
        <div className={classes.content}>
            <img className={classes.mainImg} src={homeImg} />
            <div className={classes.details}>
                <span className={classes.title}>{DICTIONARY.homeWelcome}</span>
                <div className={classes.cardContainer}>
                    {
                        CREATORS.map((item, i) => <div key={i} className={classes.card}>
                            <img className={classes.cardImg} src={item.image} />
                            <span className={classes.cardTitle}>{item.name}</span>

                        </div>)
                    }
                </div>
                <span className={classes.description}>{DICTIONARY.homeDescription}</span>
            </div>

        </div>
    </div>
    )
}
export default Home