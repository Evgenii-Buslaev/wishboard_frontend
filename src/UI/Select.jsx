import styles from "../scss/UI/_select.module.scss";

const Select = ({ options, change, val, comments }) => {
  return (
    <select
      className={
        comments ? `${styles.sort} ${styles.sort_comments}` : styles.sort
      }
      onChange={change}
      value={val}
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.name}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
