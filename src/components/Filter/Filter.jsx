import { useState } from "react";

import styles from "../../scss/components/_navigation.module.scss";

const Filter = () => {
  const [query, setQuery] = useState("");
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
