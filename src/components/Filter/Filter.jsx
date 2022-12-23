import { useState } from "react";

import useFilter from "../../hooks/useFilter";
import styles from "../../scss/components/_navigation.module.scss";

const Filter = () => {
  const [query, setQuery] = useFilter();

  return (
    <input
      type="text"
      className={styles.search}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Введите ключевые слова..."
    />
  );
};

export default Filter;
