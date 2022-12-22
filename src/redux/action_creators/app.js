import { APP_LOADING } from "../actions";

export const loadReq = () => {
  return async (dispatch) => {
    dispatch({ type: APP_LOADING, data: true });
  };
};

export const appLoaded = () => {
  return async (dispatch) => {
    dispatch({ type: APP_LOADING, data: false });
  };
};
