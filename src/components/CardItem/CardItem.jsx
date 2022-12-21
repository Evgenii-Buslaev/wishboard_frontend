import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useLike from "../../hooks/useLike";

import CommentsList from "../CommentsList/CommentsList";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import defaultIcon from "../../assets/icons/default.jpg";
import styles from "../../scss/components/_card.module.scss";

const CardItem = ({ data }) => {
  const { author, title, text, picture, createdAt, likes, comments } = data;
  const [likedByUser, cardLikes, toggleLike] = useLike(data);
  const [cardComments, setCardComments] = useState([]);

  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    setCardComments(comments);
  }, [comments]);

  return (
    <div className={styles.cardItem}>
      <div className={styles.photoBlock}>
        <h2>{author}</h2>
        <h3>{title}</h3>
        {picture ? (
          <img
            className={styles.picture}
            src={picture || defaultIcon}
            alt="card"
          />
        ) : null}
      </div>
      <div className={styles.infoBlock}>
        <div
          onClick={toggleLike}
          className={
            likedByUser
              ? `${styles.likes_active} ${styles.likes}`
              : styles.likes
          }
        >
          <Like className={styles.like} />
          <h4>{cardLikes}</h4>
        </div>
        <p className={styles.text}>{text}</p>
        <h6>{createdAt}</h6>
        <CommentsList
          list={cardComments}
          setList={setCardComments}
          auth={user.loggedIn}
          user={user.user}
        />
      </div>
    </div>
  );
};

export default CardItem;
