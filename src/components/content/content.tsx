import AnalyticsBar from "../analyticsBar/analyticsBar"
import Header from "../header/header"
import Users from "../users/users"
import styles from './content.module.scss'

const Content = () => {
    return(
        <>
            <Header />
            <main className={styles.content}>
                <Users />
                <AnalyticsBar />
            </main>
        </>
    )
}

export default Content