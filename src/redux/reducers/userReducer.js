import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions";

const initialState = {
  user: null,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.data, loggedIn: true };
    case CREATE_USER:
      return { ...state, user: action.data, loggedIn: true };
    case UPDATE_USER:
      return { ...state, user: action.data, loggedIn: true };
    case DELETE_USER:
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
