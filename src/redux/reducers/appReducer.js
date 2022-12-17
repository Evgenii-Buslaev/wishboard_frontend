import { ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF, APP_LOADING } from "../actions";

const initialState = {
  error: null,
  loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_DISPLAY_ON:
      return { ...state, error: action.data };
    case ERROR_DISPLAY_OFF:
      return { ...state, error: null };
    case APP_LOADING:
      return { ...state, loading: action.data };
    default:
      return state;
  }
};

export default appReducer;
