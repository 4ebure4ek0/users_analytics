import styles from './header.module.scss'

const Header = () => {
    return(
        <div className={styles.header}>
            <input placeholder="Search" className={styles.search}/>
            <button className={styles.btn_refresh}>Refresh Users</button>
        </div>
    )
}
export default Header