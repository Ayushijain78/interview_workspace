import logo from "./logo.svg";
import "./App.css";
import { commentData } from "./data/commentData";
import Comments from "./components/Comments";
import { useState } from "react";
import useComment from "./customHook/useComment";
import FileStructure from "./components/fileStructure/FileStructure";
import {explorer} from "./data/fileStructureData";
 console.log(explorer)
function App() {
  const [comment, setComment] = useState(commentData);
  const { addComment, deleteComment } = useComment();

  const handleAddComment = (commentId, newComment) => {
    const updatedComments = addComment(comment, commentId, newComment);
    setComment(updatedComments);
  };
  const handleDelete = (commentId) => { 
    const deletedComment = deleteComment(comment, commentId);
    setComment(deletedComment);
  };
  return (
    <div className="App">
      {/* <Comments
        key={comment.id}
        commentData={comment}
        handleAddComment={handleAddComment}
        handleDeleteComment={handleDelete}
      /> */}
      <FileStructure explore={explorer}/>
    </div>
  );
}

export default App;
