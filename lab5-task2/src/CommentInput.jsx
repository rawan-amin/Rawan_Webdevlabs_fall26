import { useState } from 'react';

function CommentInput(props) {
  const [textInput, setTextInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (textInput.trim() === "") return; // Don't post empty comments
    props.onAddComment(textInput);       // Call function passed from App
    setTextInput("");                    // Clear the input box after posting
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Write a comment..." 
        size="30" 
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentInput;