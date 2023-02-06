const comments = [
  {
    id: 'comment1',
    text: '영지 랩 짱',
    likes: 150526
  },
  {
    id: 'comment2',
    text: '왼손은 거들 뿐',
    likes: 123
  },
  {
    id: 'comment3',
    text: '불꽃 남자 정대만',
    likes: 8465
  }
]

function getAllComments() {
  return comments
}

function getCommentsByLikes(minLikes) {
  return comments.filter(comment => {
    return comment.likes >= minLikes
  })
}

function addNewComment(id, text) {
  const newComment = {
    id,
    text,
    likes: 0
  }

  comments.push(newComment);
  return newComment;
}

module.exports = {
  getAllComments,
  getCommentsByLikes,
  addNewComment
}