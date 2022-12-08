import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions";

const initialState = {
  user: null,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.data, loggedIn: true };
    default:
      return state;
  }
};

export default userReducer;
