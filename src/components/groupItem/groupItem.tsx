import styles from "./groupItem.module.scss";

interface IProps {
    title: string;
    content: string
}

const GroupItem = (props:IProps) => {
  return (
    <p className={styles.group_item}>
      <span className={styles.group_item_title}>{props.title}</span>
      <span className={styles.group_item_content}>{props.content}</span>
    </p>
  );
};

export default GroupItem;
