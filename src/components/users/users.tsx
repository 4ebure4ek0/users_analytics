import UserItem from '../userItem/userItem'
import styles from './users.module.scss'

const Users = () => {
    return(
        <div className={styles.users}>
            <UserItem />
        </div>
    )
}

export default Users