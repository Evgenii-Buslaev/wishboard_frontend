import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CommentForm from "../CommentForm/CommentForm";
import CommentItem from "../CommentItem/CommentItem";
import { updateCard } from "../../redux/action_creators/cards";
import { sortList } from "../../handlers/sortList";

import styles from "../../scss/components/_comments.module.scss";
import Select from "../../UI/Select";

const cardsListOptions = [
  { name: "Сначала новые", value: "date" },
  { name: "Популярные", value: "liked" },
  { name: "Непопулярные", value: "disliked" },
];

const CommentsList = ({ auth, user, list, setList }) => {
  const [sort, setSort] = useState("date");
  const dispatch = useDispatch();
  const params = useParams();

  const sortedList = useMemo(() => {
    return sortList(list, sort);
  }, [list, sort]);

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

  const updateComment = (newComment) => {
    if (!auth) return;
    const comments = card.comments.filter(
      (comment) => comment.commentId !== newComment.commentId
    );
    setList([...comments, newComment]);
    dispatch(
      updateCard({
        ...card,
        comments: [...comments, newComment],
      })
    );
  };

  return (
    <div className={styles.container}>
      <Select
        val={sort}
        options={cardsListOptions}
        change={(e) => setSort(e.target.value)}
        comments={true}
      />
      <div className={styles.comments}>
        {list.length > 0
          ? sortedList.map((data) => (
              <CommentItem
                comment={data}
                update={updateComment}
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
