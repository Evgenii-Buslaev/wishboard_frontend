import styles from "../../scss/components/_footer.module.scss";

import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <a href="http://t.me/eugenebus144" target="_blank">
        <Telegram />
      </a>
      <a href="https://vk.com/eugenebus" target="_blank">
        <Vk />
      </a>
      <a href="https://github.com/Evgenii-Buslaev/" target="_blank">
        <Github />
      </a>
      <p>©2022 Евгений Буслаев</p>
    </div>
  );
};

export default Footer;
