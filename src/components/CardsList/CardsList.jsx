import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import add from "../../assets/icons/add.svg";
import CardListItem from "../CardListItem/CardListItem";
import styles from "../../scss/components/_cards.module.scss";

const CardsList = () => {
  const user = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const navigator = useNavigate();

  return (
    <div className={styles.container}>
      {user.loggedIn ? (
        <img
          src={add}
          alt="create card"
          className={styles.add}
          onClick={() => navigator("/post_card")}
        />
      ) : null}
      <div className={styles.list}>
        {cards.map((card) => (
          <CardListItem data={card} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
