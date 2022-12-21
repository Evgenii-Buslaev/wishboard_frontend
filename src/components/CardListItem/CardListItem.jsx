import styles from "../../scss/components/_card.module.scss";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import comment from "../../assets/icons/comment.svg";

const CardListItem = ({ data, click }) => {
  const { _id, author, title, picture, likes, comments } = data;
  return (
    <div className={styles.cardPreview} key={_id} onClick={() => click(_id)}>
      <h2 className={styles.author}>{author}</h2>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.cover} src={picture} alt="cover" />
      <div className={styles.userActions}>
        <div className={styles.userActionsItem}>
          <Like />
          {likes.length}
        </div>
        <div className={styles.userActionsItem}>
          <img src={comment} alt="comment" />
          {comments.length}
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
