import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const CardsList = () => {
  const cards = useSelector((state) => state.cardsReducer.cards);
  const navigator = useNavigate();

  const openCard = (id) => {
    navigator(`/cards/${id}`);
  };

  return (
    <ul>
      {cards.map((card) => (
        <li key={card._id} onClick={() => openCard(card._id)}>
          {card.title}
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
