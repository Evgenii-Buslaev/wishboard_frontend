const Likes = ({ likes, visible }) => {
  if (!visible) return;
  return (
    <ul>
      {likes.map((liker) => (
        <li key={liker._id}>{liker.name}</li>
      ))}
    </ul>
  );
};

export default Likes;
