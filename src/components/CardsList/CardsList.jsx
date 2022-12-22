import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import add from "../../assets/icons/add.svg";
import CardListItem from "../CardListItem/CardListItem";
import styles from "../../scss/components/_cards.module.scss";

const CardsList = () => {
  const user = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const [sort, setSort] = useState("date");
  const [sortedList, setSortedList] = useState([]);

  const navigator = useNavigate();

  const navigate = () => {
    if (user.loggedIn) {
      navigator("/post_card");
    } else {
      navigator("/login");
    }
  };

  const sortCards = () => {
    if (sort === "date") {
      setSortedList(
        cards.sort((a, b) => {
          return Date.parse(a.createdAt) - Date.parse(b.createdAt);
        })
      );
    } else {
      return setSortedList(cards.sort((a, b) => (a.title > b.title ? 1 : -1)));
    }
  };

  useEffect(() => {
    setSortedList(cards);
  }, []);

  useEffect(() => {
    sortCards();
  }, [sort]);

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
