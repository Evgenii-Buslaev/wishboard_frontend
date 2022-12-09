import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions";

const initialState = {
  user: null,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(action);
      return { ...state, user: action.data, loggedIn: true };
    case CREATE_USER:
      console.log(action);
      return { ...state, user: action.data, loggedIn: true };
    case UPDATE_USER:
      console.log(action);
      return { ...state, user: action.data, loggedIn: true };
    case DELETE_USER:
      console.log(action);
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
