import React, { useState } from "react";
import "./comment.scss";

function Comments({ commentData, handleAddComment, handleDeleteComment }) {
  const [isReply, setIsReply] = useState(false);
  const [comment, setComment] = useState("");
  const handleReply = () => {
    let newComment = {
      id: Date.now(),
      text: comment,
      replies: [],
    };
    handleAddComment(commentData?.id, comment);
    setComment("");
    setIsReply(false);
  };
  const handleDelete = (commentId) => {
    handleDeleteComment(commentId);
  };
  return (
    <div className="container">
      {commentData.id==1&&<><input
        type="text"
        autoFocus
        value={comment}
        onChange={(e) => setComment(e.target.value)} /><button className="button add-comment" onClick={handleReply}>
          add comment
        </button></>}
      <div className={commentData.text && "comment-section"}>
        <div className="comment-text">{commentData?.text}</div>
        {isReply ? (
          <div className="input-section">
            <input
              type="text"
              autoFocus
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="button add-comment" onClick={handleReply}>
              add comment
            </button>
            <button className="button cancel" onClick={() => setIsReply(false)}>
              cancel
            </button>
          </div>
        ) : commentData.text ? (
          <div className="button-section">
            <button
              className="button reply-button"
              onClick={() => setIsReply(true)}
            >
              reply
            </button>
            <button
              onClick={() => handleDelete(commentData.id)}
              className="button delete-button"
            >
              delete
            </button>
          </div>
        ) : null}
      </div>
      <div className="reply-section">
        {commentData?.replies?.map((cmt) => {
          return (
            <Comments
              key={cmt.id}
              commentData={cmt}
              handleAddComment={handleAddComment}
              handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
