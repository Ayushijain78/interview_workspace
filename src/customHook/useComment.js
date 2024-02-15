const useComment = () => {
  const addComment = (tree, commentId, newComment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(newComment);
      return tree;
    }
    const updatedReplies = tree.replies.map((commentItem) =>
      addComment(commentItem, commentId, newComment)
    );
    return { ...tree, replies: updatedReplies };
  };
  const deleteComment = (tree, commentId) => {
    if (tree.id === commentId) {
      return tree.replies.filter((ele) => ele.id !== commentId);
    }
    const updatedComments = tree.replies.map((ele) =>
      deleteComment(ele, commentId)
    );
    return { ...tree, replies: updatedComments };
  };
  return { addComment, deleteComment };
};
export default useComment;
