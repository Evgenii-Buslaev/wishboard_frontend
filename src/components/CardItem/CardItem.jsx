import { useState } from "react";
import useLike from "../../hooks/useLike";

const CardItem = ({ data }) => {
  const { author, title, text, picture, createdAt, likes } = data;
  const [likedByUser, cardLikes, toggleLike] = useLike(data);

  const [displayLikers, setDisplayLikers] = useState(false);

  const toggleDisplayLikers = () => {
    setDisplayLikers((prevState) => !prevState);
  };

  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <p>{text}</p>
      {picture ? <img style={{ width: 300 }} src={picture} alt="card" /> : null}
      <h6>{createdAt}</h6>
      <div onClick={toggleLike}>
        <h6
          onMouseEnter={toggleDisplayLikers}
          onMouseLeave={toggleDisplayLikers}
        >
          {cardLikes}
        </h6>
        {displayLikers ? (
          <ul>
            {data.likes.map((like) => (
              <li key={like._id}>{like.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default CardItem;
