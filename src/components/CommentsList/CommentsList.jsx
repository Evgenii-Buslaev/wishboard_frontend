import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CommentForm from "../CommentForm/CommentForm";
import { updateCard } from "../../redux/action_creators/cards";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
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
    <div className={styles.container}>
      <div className={styles.comments}>
        {list.length > 0
          ? list.map((comment) => (
              <div
                className={styles.item}
                key={Math.random()}
                id={comment.commentId}
              >
                <div className={styles.content}>
                  <h3 className={styles.author}>
                    {comment.author} комментирует:
                  </h3>
                  <h4 className={styles.text}>{comment.comment}</h4>
                </div>
                {comment.author === user?.name ? (
                  <div onClick={(e) => removeComment(e, comment.author)}>
                    <Close className={styles.deleteBtn} />
                  </div>
                ) : null}
              </div>
            ))
          : "Никто не прокомментировал пожелание..."}
      </div>
      {auth ? <CommentForm user={user} createComment={setList} /> : null}
    </div>
  );
};

export default CommentsList;
