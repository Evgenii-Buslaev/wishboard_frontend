import { useSelector } from "react-redux";

import "./App.css";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div className="App"></div>;
};

export default App;
