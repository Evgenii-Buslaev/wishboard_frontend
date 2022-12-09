import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  createCard,
  updateCard,
  deleteCard,
} from "../../redux/action_creators/cards";
/* import {
  login,
  register,
  updateProfile,
  deleteProfile,
} from "../../redux/action_creators/user"; */

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);
  return <div className="App"></div>;
};

export default App;
