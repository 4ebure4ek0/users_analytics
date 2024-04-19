import GroupItem from '../groupItem/groupItem'
import styles from './analyticsBar.module.scss'

const AnalyticsBar = () => {
    return(
        <div className={styles.analytics}>
            <h2 className={styles.head_title}>1000 Users</h2>
            <hr className={styles.hr}/>
            <div className={styles.group}>
                <h3 className={styles.group_title}>Age Groups</h3>
                <GroupItem title={'11 to 20'} content={'52 users'} />
                <GroupItem title={'21 to 30'} content={'642 users'} />
                <GroupItem title={'31 to 40'} content={'108 users'} />
                <GroupItem title={'41 to 50'} content={'197 users'} />
                <GroupItem title={'51+'} content={'1 user'} />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.group}>
                <h3 className={styles.group_title}>Gender Groups</h3>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>Male</span>
                    <span className={styles.group_item_content}>544 users</span>
                </p>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>Female</span>
                    <span className={styles.group_item_content}>456 users</span>
                </p>
            </div>
        </div>
    )
}

export default AnalyticsBar