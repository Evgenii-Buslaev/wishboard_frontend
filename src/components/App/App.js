import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../../redux/action_creators/cards";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);
  return <div className="App"></div>;
};

export default App;
