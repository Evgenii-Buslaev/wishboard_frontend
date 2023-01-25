import styles from "../../scss/components/_comments.module.scss";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

const CommentItem = ({ comment, remove, user }) => {
  return (
    <div className={styles.item} key={Math.random()} id={comment.commentId}>
      <div className={styles.content}>
        <h3 className={styles.author}>{comment.author} комментирует:</h3>
        <h4 className={styles.text}>{comment.comment}</h4>
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
