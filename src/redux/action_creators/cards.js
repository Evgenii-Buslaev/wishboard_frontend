import { LOAD_CARDS, CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "../actions";
import CardService from "../../api/CardService";

const getCards = () => {
  return async (dispatch) => {
    const cards = await CardService.getCards();
    if (cards) {
      dispatch({ type: LOAD_CARDS, data: cards });
    } else {
      return;
    }
  };
};

export { getCards };
