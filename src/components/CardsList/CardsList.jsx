import { useState, useMemo } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sortList } from "../../handlers/sortList";

import CardListItem from "../CardListItem/CardListItem";
import Select from "../../UI/Select";
import add from "../../assets/icons/add.svg";
import styles from "../../scss/components/_cards.module.scss";

const cardsListOptions = [
  { name: "Сначала новые", value: "date" },
  { name: "По названию", value: "name" },
];

const CardsList = () => {
  const user = useSelector((state) => state.userReducer);
  const cardsStore = useSelector((state) => state.cardsReducer);

  const [sort, setSort] = useState("date");

  const sortedList = useMemo(() => {
    return sortList(cardsStore.filtered, sort);
  }, [sort, cardsStore.filtered]);

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
      <Select
        options={cardsListOptions}
        change={(e) => setSort(e.target.value)}
        val={sort}
      />
      <img
        src={add}
        alt="create card"
        className={styles.add}
        onClick={navigate}
      />
      <div className={styles.list}>
        {sortedList.length > 0 ? (
          sortedList.map((card) => (
            <CardListItem data={card} key={Math.random()} />
          ))
        ) : (
          <h2>Нет карточек...</h2>
        )}
      </div>
    </div>
  );
};

export default CardsList;
