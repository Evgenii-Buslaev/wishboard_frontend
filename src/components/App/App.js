import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  createCard,
  updateCard,
  deleteCard,
} from "../../redux/action_creators/cards";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state);
  console.log(cards);

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(
      deleteCard({
        author: "Kirill",
        createdAt: "2022-12-08T13:19:54.753Z",
        likes: 0,
        text: "Поздравляю всех С НОВЫМ ГОДОМ!",
        title: "Поздравление",
        __v: 0,
        _id: "638f0e635872942fc2709e1f",
      })
    );
  }, []);

  return <div className="App"></div>;
};

export default App;
