import styles from './analyticsBar.module.scss'

const AnalyticsBar = () => {
    return(
        <div className={styles.analytics}>
            <h2 className={styles.head_title}>1000 Users</h2>
            <hr className={styles.hr}/>
            <div className={styles.group}>
                <h3 className={styles.group_title}>Age Groups</h3>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>11 to 20</span>
                    <span className={styles.group_item_content}>52 users</span>
                </p>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>21 to 30</span>
                    <span className={styles.group_item_content}>642 users</span>
                </p>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>31 to 40</span>
                    <span className={styles.group_item_content}>108 users</span>
                </p>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>41 to 50</span>
                    <span className={styles.group_item_content}>197 users</span>
                </p>
                <p className={styles.group_item}>
                    <span className={styles.group_item_title}>51+</span>
                    <span className={styles.group_item_content}>1 user</span>
                </p>
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