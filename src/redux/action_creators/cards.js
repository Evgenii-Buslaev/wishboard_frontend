import { LOAD_CARDS, CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "../actions";

const getCards = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://wishboard-backend-ianv.vercel.app/api/cards"
      );
      const jsonData = await response.json();
      dispatch({ type: LOAD_CARDS, data: jsonData });
    } catch (e) {
      console.log(e);
    }
  };
};

export { getCards };
