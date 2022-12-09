import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../../redux/action_creators/cards";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);
  return <div className="App"></div>;
};

export default App;
