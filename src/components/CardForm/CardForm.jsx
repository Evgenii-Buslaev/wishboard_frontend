import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import useCard from "../../hooks/useCard";
import { storage } from "../../firebase";

import styles from "../../scss/components/_cardform.module.scss";

const CardForm = ({ action }) => {
  const [fileProgress, setFileProgress] = useState(0);
  const { title, setTitle, text, setText, setPicture, author, submit } =
    useCard(action);

  const actionText = action === "create" ? "Создать" : "Сохранить";
  const fileText =
    action === "create"
      ? "Если Вы не загрузите картинку, к Вашему пожеланию будет применена стандартная."
      : "Если не хотите менять картинку, оставьте это поле пустым.";

  const fileHandler = (e) => {
    e.preventDefault();
    uploadFiles(e.target[0].files[0]);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setFileProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setPicture(url));
      }
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={fileHandler} className={styles.fileForm}>
        <input type="file" accept=".jpg,.jpeg,.png" />
        <meter min="0" max="100" value={fileProgress}></meter>
        <p>{fileText}</p>
        <button type="submit">Загрузить файл</button>
      </form>
      <form onSubmit={(e) => submit(e)} className={styles.contentForm}>
        <div>
          <label htmlFor="author">Автор:</label>
          <input id="author" type="text" value={author} disabled />
        </div>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Введите заголовок..."
          />
        </div>
        <div>
          <label htmlFor="content">Текст:</label>
          <textarea
            id="content"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст пожелния..."
          />
        </div>
        <button type="submit">{actionText}</button>
      </form>
    </div>
  );
};

export default CardForm;
