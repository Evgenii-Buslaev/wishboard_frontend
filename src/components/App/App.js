import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCards } from "../../redux/action_creators/cards";

import AppRouter from "../AppRouter/AppRuter";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const user = useSelector((state) => state.userReducer);
  const app = useSelector((state) => state.appReducer);

  useEffect(() => {
    navigator("/");
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    dispatch(fetchCards());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navigation auth={user.loggedIn} />
      {app.loading ? <Preloader /> : <AppRouter auth={user.loggedIn} />}
    </div>
  );
};

export default App;
