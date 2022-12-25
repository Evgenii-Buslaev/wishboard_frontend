import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterCards } from "../redux/action_creators/cards";

const useFilter = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCards(query));
    // eslint-disable-next-line
  }, [query]);

  return [query, setQuery];
};

export default useFilter;
