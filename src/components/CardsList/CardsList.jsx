import { useEffect, useState, useMemo } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sortList } from "../../handlers/sortList";

import add from "../../assets/icons/add.svg";
import CardListItem from "../CardListItem/CardListItem";
import styles from "../../scss/components/_cards.module.scss";

const CardsList = () => {
  const user = useSelector((state) => state.userReducer);
  const cardsStore = useSelector((state) => state.cardsReducer);

  const [sort, setSort] = useState("date");

  const sortedList = useMemo(() => {
    return sortList(cardsStore.cards, sort);
  }, [sort, cardsStore.cards]);

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
      <select
        className={styles.sort}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="name">По названию</option>
        <option value="date">Сначала новые</option>
      </select>
      <img
        src={add}
        alt="create card"
        className={styles.add}
        onClick={navigate}
      />
      <div className={styles.list}>
        {sortedList.map((card) => (
          <CardListItem data={card} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
