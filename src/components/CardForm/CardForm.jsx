import useCard from "../../hooks/useCard";

const CardForm = (action) => {
  const { title, setTitle, text, setText, author, submit } = useCard(action);

  const actionText = action === "create" ? "Создать" : "Сохранить";

  return (
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
      <label htmlFor="content">Текст пожелния:</label>
      <textarea
        id="content"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст пожелния..."
      />
      <button type="submit">{actionText}</button>
    </form>
  );
};

export default CardForm;
