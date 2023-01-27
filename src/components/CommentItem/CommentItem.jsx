import { useState } from "react";
import styles from "../../scss/components/_comments.module.scss";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Thumb } from "../../assets/icons/thumb.svg";

const CommentItem = ({ comment, remove, update, user }) => {
  const [like, setLike] = useState(() =>
    Boolean(comment.likes.find((like) => like.id === user._id))
  );
  const [dislike, setDislike] = useState(() =>
    Boolean(comment.dislikes.find((dislike) => dislike.id === user._id))
  );

  const addLike = () => {
    if (!user.name) {
      return;
    }
    let newComment;
    if (like) {
      newComment = {
        ...comment,
        likes: [...comment.likes.filter((like) => like.id !== user._id)],
      };
      setLike(false);
    } else {
      if (dislike) return;
      newComment = {
        ...comment,
        likes: [...comment.likes, { name: user.name, id: user._id }],
      };
      setLike(true);
    }
    update(newComment);
  };

  const addDislike = () => {
    if (!user.name) {
      return;
    }
    let newComment;
    if (dislike) {
      newComment = {
        ...comment,
        dislikes: [
          ...comment.dislikes.filter((dislike) => dislike.id !== user._id),
        ],
      };
      setDislike(false);
    } else {
      if (like) return;
      newComment = {
        ...comment,
        dislikes: [...comment.dislikes, { name: user.name, id: user._id }],
      };
      setDislike(true);
    }
    update(newComment);
  };
  return (
    <div className={styles.item} key={Math.random()} id={comment.commentId}>
      <div className={styles.content}>
        <h3 className={styles.author}>{comment.author} комментирует:</h3>
        <h4 className={styles.text}>{comment.comment}</h4>
        <div className={styles.reactions}>
          <div className={styles.reaction__cont}>
            <Thumb
              className={
                like ? `${styles.thumb} ${styles.thumb_active}` : styles.thumb
              }
              onClick={addLike}
            />
            <p>{comment.likes.length}</p>
          </div>
          <div className={styles.reaction__cont}>
            <Thumb
              className={
                dislike
                  ? `${styles.thumb} ${styles.thumb_down} ${styles.thumb_active}`
                  : `${styles.thumb} ${styles.thumb_down}`
              }
              onClick={addDislike}
            />
            <p>{comment.dislikes.length}</p>
          </div>
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
