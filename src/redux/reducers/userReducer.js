import {
  LOG_IN,
  LOG_OUT,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions";

let initialState;
if (document.cookie.split(";").find((str) => str.includes("user"))) {
  initialState = {
    user: JSON.parse(
      document.cookie
        .split(";")
        .find((str) => str.includes("user"))
        .split("=")[1]
    ),
    loggedIn: true,
  };
} else {
  initialState = {
    user: null,
    loggedIn: false,
  };
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log(action);
      document.cookie = `user=${JSON.stringify(action.data)}; max-age=3600`;
      return { ...state, user: action.data, loggedIn: true };
    case LOG_OUT:
      document.cookie = "user=null; max-age=-1";
      return { ...state, user: null, loggedIn: false };
    case CREATE_USER:
      console.log(action);
      document.cookie = `user=${JSON.stringify(action.data)}; max-age=3600`;
      return { ...state, user: action.data, loggedIn: true };
    case UPDATE_USER:
      console.log(action);
      return { ...state, user: action.data, loggedIn: true };
    case DELETE_USER:
      console.log(action);
      document.cookie = "user=null; max-age=-1";
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
