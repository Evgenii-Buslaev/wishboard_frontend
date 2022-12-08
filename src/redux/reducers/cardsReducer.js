import { GET_CARDS, CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "../actions";

const initialState = {
  cards: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cardsReducer;
