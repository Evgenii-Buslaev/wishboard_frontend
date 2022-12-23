import { useNavigate } from "react-router-dom";

import styles from "../../scss/components/_home.module.scss";

const Home = () => {
  const navigator = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.begin}>
        <h1>Добро пожаловать!</h1>
        <button onClick={() => navigator("/cards")}>Начать работу</button>
      </div>

      <p className={styles.description}>
        <h2>Мы представляем сервис для создания поздравительных карточек:</h2>
        <ul>
          <li>
            Напишите любое пожелание для родных и близких, друзей, или даже
            незнакомых людей;
          </li>
          <li>
            Воспользуйтесь шаблонами поздравлений из созданных карточек, чтобы
            поздравить человека с важным для него событием;
          </li>
          <li>
            Общайтесь в комментариях, сохраняйте понравившиеся карточки, ставьте
            лайки.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
