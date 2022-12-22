import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import add from "../../assets/icons/add.svg";
import CardListItem from "../CardListItem/CardListItem";
import styles from "../../scss/components/_cards.module.scss";

const CardsList = () => {
  const user = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const navigator = useNavigate();

  const navigate = () => {
    if (user.loggedIn) {
      navigator("/post_card");
    } else {
      navigator("/login");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={add}
        alt="create card"
        className={styles.add}
        onClick={navigate}
      />
      <div className={styles.list}>
        {cards.map((card) => (
          <CardListItem data={card} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
