import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions";

const userId = "638f0f6a13b4569a018b885d";

const user = {
  _id: "6392d8a998562b9132222289",
  name: "Kirill",
  password: "punksnotdead2022",
  age: 26,
  sex: "male",
  __v: 0,
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
};

const optionsPUT = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
};

const optionsDELETE = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
};

const login = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://wishboard-backend-ianv.vercel.app/api/users/${userId}`
      );
      const user = await response.json();
      dispatch({ type: GET_USER, data: user });
    } catch (e) {
      console.log(e);
    }
  };
};

const register = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://wishboard-backend-ianv.vercel.app/api/users",
        options
      );
      const user = await response.json();
      dispatch({ type: CREATE_USER, data: user });
    } catch (e) {
      console.log(e);
    }
  };
};

const updateProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://wishboard-backend-ianv.vercel.app/api/users",
        optionsPUT
      );
      const user = await response.json();
      dispatch({ type: UPDATE_USER, data: user });
    } catch (e) {
      console.log(e);
    }
  };
};

const deleteProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://wishboard-backend-ianv.vercel.app/api/users",
        optionsDELETE
      );
      const user = await response.json();
      dispatch({ type: DELETE_USER, data: user });
    } catch (e) {
      console.log(e);
    }
  };
};

export { login, register, updateProfile, deleteProfile };
