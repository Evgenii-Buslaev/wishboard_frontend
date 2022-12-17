import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CommentForm from "../CommentForm/CommentForm";
import { updateCard } from "../../redux/action_creators/cards";

const CommentsList = ({ auth, user, list, setList }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const card = useSelector((state) =>
    state.cardsReducer.cards.find((card) => card._id === params.id)
  );

  const removeComment = (e, author) => {
    if (!auth) {
      return;
    }

    if (user.name === author) {
      const updatedComments = card.comments.filter(
        (comment) => comment.commentId !== e.target.id
      );
      setList(updatedComments);
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
      {list.map((comment) => (
        <div
          key={Math.random()}
          id={comment.commentId}
          onClick={(e) => removeComment(e, comment.author)}
        >
          <h3>{comment.author}</h3>
          <h4>{comment.comment}</h4>
        </div>
      ))}
      {auth ? <CommentForm user={user} createComment={setList} /> : null}
    </div>
  );
};

export default CommentsList;
