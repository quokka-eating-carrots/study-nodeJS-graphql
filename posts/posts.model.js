const posts = [
  {
    id: 'post1',
    title: '부석순 컴백 했다',
    description: '파이팅 해야지 많관부',
    comments: [
      {
        id: 'comment1',
        text: '영지 랩 짱',
        likes: 150526
      }
    ]
  },
  {
    id: 'post2',
    title: '포기를 모르는 남자 정대만',
    description: '농놀 하실 분?',
    comments: [
      {
        id: 'comment2',
        text: '왼손은 거들 뿐',
        likes: 123
      },
      {
        id: 'comment3',
        text: '불꽃 남자 정대만',
        likes: 8465
      },
    ]
  }
]

function getAllPosts() {
  return posts
}

function getPostById(id) {
  return posts.find(post => {
    return post.id === id
  })
}

function addNewPost(id, title, description) {
  const newPost = {
    id,
    title,
    description,
    comments: []
  }

  posts.push(newPost);
  return newPost;
}

module.exports = {
  getAllPosts,
  getPostById,
  addNewPost
}