import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCard } from "../../redux/action_creators/cards";

const CommentsList = () => {
  const [allComments, setAllComments] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);
  const card = useMemo(
    () => cards.find((card) => card._id === params.id), // eslint-disable-next-line
    []
  );

  useEffect(() => {
    setAllComments(card.comments);
    // eslint-disable-next-line
  }, []);

  const removeComment = (e, author) => {
    if (!auth.loggedIn) {
      return;
    }

    if (auth.user.name === author) {
      const updatedComments = card.comments.filter(
        (comment) => comment.commentId !== e.target.id
      );
      setAllComments(updatedComments);
      dispatch(
        updateCard({
          ...card,
          comments: updatedComments,
        })
      );
    }
  };

  return (
    <div>
      {allComments.map((comment) => (
        <div
          key={Math.random()}
          id={comment.commentId}
          onClick={(e) => removeComment(e, comment.author)}
        >
          <h3>{comment.author}</h3>
          <h4>{comment.comment}</h4>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
