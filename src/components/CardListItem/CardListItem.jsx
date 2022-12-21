import { useNavigate } from "react-router-dom";
import useLike from "../../hooks/useLike";

import styles from "../../scss/components/_card.module.scss";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import comment from "../../assets/icons/comment.svg";

const CardListItem = ({ data }) => {
  const navigator = useNavigate();

  const { _id, author, title, picture, comments } = data;
  const [likedByUser, cardLikes, toggleLike] = useLike(data);

  const navigate = () => {
    navigator(`/cards/${_id}`);
  };

  const like = (e) => {
    e.stopPropagation();
    toggleLike();
  };

  return (
    <div className={styles.cardPreview} key={_id} onClick={(e) => navigate(e)}>
      <h2 className={styles.author}>{author}</h2>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.cover} src={picture} alt="cover" />
      <div className={styles.userActions}>
        <div
          className={
            likedByUser
              ? `${styles.userActionsItem} ${styles.userActionsItem_active}`
              : styles.userActionsItem
          }
          onClick={(e) => like(e)}
        >
          <Like className={styles.like} />
          {cardLikes}
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
