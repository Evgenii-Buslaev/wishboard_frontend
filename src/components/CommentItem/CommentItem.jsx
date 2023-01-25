import styles from "../../scss/components/_comments.module.scss";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Thumb } from "../../assets/icons/thumb.svg";

const CommentItem = ({ comment, remove, user }) => {
  return (
    <div className={styles.item} key={Math.random()} id={comment.commentId}>
      <div className={styles.content}>
        <h3 className={styles.author}>{comment.author} комментирует:</h3>
        <h4 className={styles.text}>{comment.comment}</h4>
        <div className={styles.reactions}>
          <Thumb className={styles.thumb} />
          <Thumb className={`${styles.thumb} ${styles.thumb_down}`} />
        </div>
      </div>
      {comment.author === user?.name ? (
        <div onClick={(e) => remove(e, comment.author)} id={comment.commentId}>
          <Close className={styles.deleteBtn} />
        </div>
      ) : null}
    </div>
  );
};

export default CommentItem;
