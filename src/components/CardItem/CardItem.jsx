const CardItem = ({ data }) => {
  const { author, title, text, createdAt } = data;
  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <p>{text}</p>
      <h6>{createdAt}</h6>
    </div>
  );
};

export default CardItem;
