import { useState } from 'react';
import CommentInput from './CommentInput.jsx';
import Comments from './Comments.jsx';
import './App.css'; 

function App() {
  const [comments, setComments] = useState([
    { author: "Sara", text: "Great explanation of components!", likes: 5 },
    { author: "Omar", text: "Props finally make sense to me.", likes: 2 },
    { author: "Ali", text: "Can we do a lab on useState next week?", likes: 7 },
    { author: "You", text: "Thanks for the lab, this was fun!", likes: 0 }
  ]);

  function handleAddComment(newText) {
    const newComment = {
      author: "You",
      text: newText,
      likes: 0
    };
    setComments([...comments, newComment]);
  }

  return (
    <div className="app-container">
      <CommentInput onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </div>
  );
}

export default App;