import { useDispatch } from "react-redux";

import CommentForm from "../CommentForm/CommentForm";
import { updateCard } from "../../redux/action_creators/cards";

const CommentsList = ({ auth, user, list, setList, card }) => {
  const dispatch = useDispatch();

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
      {auth ? (
        <CommentForm user={user} card={card} createComment={setList} />
      ) : null}
    </div>
  );
};

export default CommentsList;
