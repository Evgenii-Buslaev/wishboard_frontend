import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useLike from "../../hooks/useLike";

import CommentsList from "../CommentsList/CommentsList";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { getDate } from "../../handlers/getDate";
import defaultIcon from "../../assets/icons/default.jpg";
import styles from "../../scss/components/_card.module.scss";
import Likes from "../Likes/Likes";

const CardItem = ({ data }) => {
  const { author, title, text, picture, createdAt, comments, likes } = data;
  const [likedByUser, cardLikes, toggleLike] = useLike(data);
  const [cardComments, setCardComments] = useState([]);
  const [likesVisible, setLikesVisible] = useState(false);

  const checkLikers = () => {
    setLikesVisible((prevState) => !prevState);
  };

  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    setCardComments(comments);
  }, [comments]);

  return (
    <div className={styles.cardItem}>
      <div className={styles.photoBlock}>
        <h2>
          {author} <p>создал(а) пожелание {getDate(createdAt)}</p>
        </h2>
        <h3>{title}</h3>
        <a href={picture} target="_blank" rel="noreferrer">
          <img
            className={styles.picture}
            src={picture || defaultIcon}
            alt="card"
          />
        </a>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.cardContent}>
          <p className={styles.text}>{text}</p>
          <div
            onClick={toggleLike}
            className={
              likedByUser
                ? `${styles.likes_active} ${styles.likes}`
                : styles.likes
            }
          >
            <Like className={styles.like} />
            <Likes likes={likes} visible={likesVisible} />
            <h4 onMouseEnter={checkLikers} onMouseLeave={checkLikers}>
              {cardLikes}
            </h4>
          </div>
        </div>
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
