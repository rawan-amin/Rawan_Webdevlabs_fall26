import { useState } from 'react';

function Comment(props) {
  const author = props.author;
  const text = props.text;
  const [likes, setLikes] = useState(props.likes);

  function handleLikeClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="comment-card">
      <div className="comment-avatar">
        {author[0]}
      </div>
      <div className="comment-content">
        <div className="comment-author">{author}</div>
        <div className="comment-text">{text}</div>
        <button className="like-btn" onClick={handleLikeClick}>
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

export default Comment;