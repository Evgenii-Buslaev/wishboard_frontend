import { useSelector } from "react-redux";

import CardListItem from "../CardListItem/CardListItem";

const CardsList = () => {
  const cards = useSelector((state) => state.cardsReducer.cards);

  return (
    <div>
      {cards.map((card) => (
        <CardListItem data={card} key={Math.random} />
      ))}
    </div>
  );
};

export default CardsList;
