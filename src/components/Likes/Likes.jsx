import styles from "../../scss/components/_likes.module.scss";

const Likes = ({ likes, visible }) => {
  if (!visible) return;
  return (
    <div className={styles.list}>
      <h5>Лайкнули:</h5>
      <ul>
        {likes.map((liker) => (
          <li key={liker._id}>{liker.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Likes;
