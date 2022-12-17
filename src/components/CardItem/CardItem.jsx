import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../redux/action_creators/cards";

const CardItem = ({ user, data }) => {
  const { author, title, text, picture, createdAt, likes } = data;
  const dispatch = useDispatch();

  const [cardLikes, setCardLikes] = useState(likes.length);
  const [likedByUser, setLikedByUser] = useState(displayUserLike());

  function displayUserLike() {
    if (!user.loggedIn) {
      return false;
    } else {
      return likes.some((like) => like === user.user.name);
    }
  }

  const toggleLike = () => {
    if (!user.loggedIn) {
      return;
    } else {
      if (likedByUser) {
        setCardLikes((prevState) => prevState - 1);
        setLikedByUser(false);
        dispatch(
          updateCard({
            ...data,
            likes: data.likes.filter((like) => like !== user.user.name),
          })
        );
      } else {
        setCardLikes((prevState) => prevState + 1);
        setLikedByUser(true);
        dispatch(
          updateCard({ ...data, likes: [...data.likes, user.user.name] })
        );
      }
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <p>{text}</p>
      {picture ? <img style={{ width: 300 }} src={picture} alt="card" /> : null}
      <h6>{createdAt}</h6>
      <h6 onClick={toggleLike}>{cardLikes}</h6>
    </div>
  );
};

export default CardItem;
