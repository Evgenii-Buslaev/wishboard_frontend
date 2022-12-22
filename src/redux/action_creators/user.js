import UserService from "../../api/UserService";
import {
  LOG_IN,
  LOG_OUT,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  APP_LOADING,
} from "../actions";

import { loadReq, appLoaded } from "./app";

const login = (user_data) => {
  return async (dispatch) => {
    dispatch(loadReq());
    const user = await UserService.login(user_data);
    if (user) {
      if (user.name) {
        dispatch({ type: LOG_IN, data: user });
      } else {
        alert(
          "Такого пользователя не существует. Проверьте правильность введенных данных."
        );
      }
    }
    dispatch(appLoaded());
  };
};

const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOG_OUT });
  };
};

const register = (user) => {
  return async (dispatch) => {
    dispatch(loadReq());
    const createdUser = await UserService.createUser(user);
    if (createdUser) {
      dispatch({ type: CREATE_USER, data: createdUser });
    }
    dispatch(appLoaded());
    return;
  };
};

const updateProfile = (user) => {
  return async (dispatch) => {
    dispatch(loadReq());
    const updatedUser = await UserService.editUser(user);
    if (updatedUser) {
      dispatch({ type: UPDATE_USER, data: updatedUser });
    }
    dispatch(appLoaded());
    return;
  };
};

const deleteProfile = (user) => {
  return async (dispatch) => {
    dispatch(loadReq());
    const deletedUser = await UserService.removeUser(user);
    if (deletedUser) {
      dispatch({ type: DELETE_USER, data: deletedUser });
    }
    dispatch(appLoaded());
    return;
  };
};

export { login, logout, register, updateProfile, deleteProfile };
