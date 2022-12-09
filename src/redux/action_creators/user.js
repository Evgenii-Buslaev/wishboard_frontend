import UserService from "../../api/UserService";
import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions";

const login = () => {
  return async (dispatch) => {
    const user = await UserService.getUser();
    if (user) {
      dispatch({ type: GET_USER, data: user });
    }
  };
};

const register = (user) => {
  return async (dispatch) => {
    const createdUser = await UserService.createUser(user);
    if (createdUser) {
      dispatch({ type: CREATE_USER, data: createdUser });
    }
    return;
  };
};

const updateProfile = (user) => {
  return async (dispatch) => {
    const updatedUser = await UserService.editUser(user);
    if (updatedUser) {
      dispatch({ type: UPDATE_USER, data: updatedUser });
    }
    return;
  };
};

const deleteProfile = (user) => {
  return async (dispatch) => {
    const deletedUser = await UserService.removeUser(user);
    if (deletedUser) {
      dispatch({ type: DELETE_USER, data: deletedUser });
    }
    return;
  };
};

export { login, register, updateProfile, deleteProfile };
