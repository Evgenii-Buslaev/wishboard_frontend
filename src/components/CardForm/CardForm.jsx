import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import useCard from "../../hooks/useCard";
import { storage } from "../../firebase";

const CardForm = (action) => {
  const [fileProgress, setFileProgress] = useState(0);
  const { title, setTitle, text, setText, setPicture, author, submit } =
    useCard(action);

  const actionText = action === "create" ? "Создать" : "Сохранить";

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
    <>
      <form onSubmit={fileHandler}>
        <input type="file" accept=".jpg,.jpeg,.png" />
        <h6>Загружено {fileProgress} %</h6>
        <button type="submit">Загрузить файл</button>
      </form>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="author">Автор:</label>
        <input id="author" type="text" value={author} disabled />
        <label htmlFor="title">Заголовок:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите заголовок..."
        />
        <label htmlFor="content">Текст пожелания:</label>
        <textarea
          id="content"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст пожелния..."
        />
        <button type="submit">{actionText}</button>
      </form>
    </>
  );
};

export default CardForm;
