import { useState } from "react";
/* import { useDispatch } from "react-redux"; */

const CardItem = ({ user, data }) => {
  const { author, title, text, createdAt, likes } = data;

  const [cardLikes, setCardLikes] = useState(likes.length);
  const [likedByUser, setLikedByUser] = useState(displayUserLike());

  function displayUserLike() {
    if (!user.loggedIn) {
      return false;
    } else {
      return likes.some((like) => like.author === user.name);
    }
  }

  const toggleLike = () => {
    if (!user.loggedIn) {
      return;
    } else {
      if (likedByUser) {
        setCardLikes((prevState) => prevState - 1);
        setLikedByUser(false);
      } else {
        setCardLikes((prevState) => prevState + 1);
        setLikedByUser(true);
      }
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <p>{text}</p>
      <h6>{createdAt}</h6>
      <h6 onClick={toggleLike}>{cardLikes}</h6>
    </div>
  );
};

export default CardItem;
