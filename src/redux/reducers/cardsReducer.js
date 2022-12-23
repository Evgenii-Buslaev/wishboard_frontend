import {
  LOAD_CARDS,
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  FILTER_CARDS,
  CLEAR_FILTER,
} from "../actions";

const initialState = {
  cards: [],
  filtered: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS: {
      return { ...state, cards: action.data };
    }

    case CREATE_CARD: {
      return { ...state, cards: [...state.cards, action.data] };
    }

    case UPDATE_CARD: {
      const otherCards = state.cards.filter(
        (elem) => elem._id !== action.data._id
      );
      return { ...state, cards: [...otherCards, action.data] };
    }

    case DELETE_CARD: {
      const cards = state.cards.filter((elem) => elem._id !== action.data._id);
      return { ...state, cards: [...cards] };
    }

    case FILTER_CARDS: {
      return {
        ...state,
        filtered: state.cards.filter(
          (card) =>
            card.title.includes(action.data) || card.text.includes(action.data)
        ),
      };
    }

    case CLEAR_FILTER: {
      return {
        ...state,
        filtered: [],
      };
    }

    default:
      return state;
  }
};

export default cardsReducer;
