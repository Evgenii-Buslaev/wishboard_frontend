import { LOAD_CARDS, CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "../actions";

const initialState = {
  cards: [],
};

const cardsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_CARDS: {
      return { ...state, cards: [...action.data] };
    }

    default:
      return state;
  }
};

export default cardsReducer;
