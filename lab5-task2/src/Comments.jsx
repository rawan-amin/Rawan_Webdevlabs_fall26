import Comment from './Comment.jsx';

function Comments(props) {
  const comments = props.comments;

  const commentComponents = comments.map((comment, index) => {
    return (
      <Comment
        key={index}
        author={comment.author}
        text={comment.text}
        likes={comment.likes}
      />
    );
  });

  return (
    <>
      <h3>Comments ({comments.length})</h3>
      {commentComponents}
    </>
  );
}

export default Comments;