import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../../redux/action_creators/cards";
import { login } from "../../redux/action_creators/user";

import AppRouter from "../AppRouter/AppRuter";
import Navigation from "../Navigation/Navigation";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchCards());
    console.log(user);
  }, []);
  return (
    <div className="App">
      <Navigation auth={user.loggedIn} />
      <AppRouter auth={user.loggedIn} />
    </div>
  );
};

export default App;
