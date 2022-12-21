import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../redux/action_creators/cards";

const useLike = (data) => {
  const user = useSelector((state) => state.userReducer);
  const { likes } = data;
  const [cardLikes, setCardLikes] = useState(likes.length);
  const [likedByUser, setLikedByUser] = useState(() => displayUserLike());

  const dispatch = useDispatch();

  function displayUserLike() {
    if (!user.loggedIn) {
      return false;
    } else {
      return likes.some((like) => like._id === user.user._id);
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
            likes: data.likes.filter((like) => like._id !== user.user._id),
          })
        );
      } else {
        setCardLikes((prevState) => prevState + 1);
        setLikedByUser(true);
        dispatch(
          updateCard({
            ...data,
            likes: [
              ...data.likes,
              { _id: user.user._id, name: user.user.name },
            ],
          })
        );
      }
    }
  };

  return [likedByUser, cardLikes, toggleLike];
};

export default useLike;
