import styles from "../../scss/components/_footer.module.scss";

import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h4>Остались вопросы? Пиши!</h4>
      <div className={styles.refs}>
        <a href="http://t.me/eugenebus144" rel="noreferrer" target="_blank">
          <Telegram />
        </a>
        <a href="https://vk.com/eugenebus" rel="noreferrer" target="_blank">
          <Vk />
        </a>
        <a
          href="https://github.com/Evgenii-Buslaev/"
          rel="noreferrer"
          target="_blank"
        >
          <Github />
        </a>
        <p>©2022 Евгений Буслаев</p>
      </div>
    </div>
  );
};

export default Footer;
