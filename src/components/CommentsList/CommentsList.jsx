import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CommentForm from "../CommentForm/CommentForm";
import CommentItem from "../CommentItem/CommentItem";
import { updateCard } from "../../redux/action_creators/cards";

import styles from "../../scss/components/_comments.module.scss";

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
        (comment) => comment.commentId !== e.currentTarget.id
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
    <div className={styles.container}>
      <div className={styles.comments}>
        {list.length > 0
          ? list.map((data) => (
              <CommentItem
                comment={data}
                remove={removeComment}
                user={user}
                key={Math.random()}
              />
            ))
          : "Никто не прокомментировал пожелание..."}
      </div>
      {auth ? <CommentForm user={user} createComment={setList} /> : null}
    </div>
  );
};

export default CommentsList;
