import GroupItem from "../groupItem/groupItem";
import styles from "./userItem.module.scss";

const UserItem = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user_head}>
        <div className={styles.avatar}></div>
        <h2 className={styles.title}>Abigail Berry</h2>
        <p className={styles.email}>abigail.berry@example.com</p>
      </div>
      <div className={styles.content}>
        <GroupItem title={'Phone No'} content={'(272) 790-0888'}/>
        <GroupItem title={'Birthday'} content={'11 November 1974'}/>
        <GroupItem title={'Address'} content={'Billings, Michigan, United States'}/>
      </div>
    </div>
  );
};

export default UserItem;
