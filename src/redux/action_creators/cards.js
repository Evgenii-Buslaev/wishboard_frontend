import {
  LOAD_CARDS,
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  ERROR_DISPLAY_ON,
} from "../actions";
import CardService from "../../api/CardService";

const fetchCards = () => {
  return async (dispatch) => {
    const cards = await CardService.getCards();
    if (cards) {
      dispatch({ type: LOAD_CARDS, data: cards });
    }
    return;
  };
};

const createCard = (card) => {
  return async (dispatch) => {
    const createdCard = await CardService.postCard(card);
    if (createdCard) {
      dispatch({ type: CREATE_CARD, data: createdCard });
    } else {
      dispatch({ type: ERROR_DISPLAY_ON, data: "Сервер недоступен" });
    }
  };
};

const updateCard = (card) => {
  return async (dispatch) => {
    const updatedCard = await CardService.editCard(card);
    if (updatedCard) {
      dispatch({ type: UPDATE_CARD, data: updatedCard });
    }
    return;
  };
};

const deleteCard = (card) => {
  return async (dispatch) => {
    const deletedCard = await CardService.removeCard(card);
    if (deletedCard) {
      dispatch({ type: DELETE_CARD, data: deletedCard });
    }
    return;
  };
};

export { fetchCards, createCard, updateCard, deleteCard };
