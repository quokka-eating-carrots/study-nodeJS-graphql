const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')

const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const PORT = 8080
// const HOST = '0.0.0.0'
const schemaString = `
type Query {
  posts: [Post]
  comments: [Comment]
}

type Post {
  id: ID!
  title: String!
  description: String!
  comments: [Comment]
}

type Comment {
  id: ID!
  text: String!
  likes: Int
}
`

const schema = makeExecutableSchema({
  typeDefs: [schemaString]
})

const root = {
  posts: [
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
  ],
  comments: [
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
}

const app = express()

const users = [
  {
    id: 0,
    name: '승철'
  },
  {
    id: 1,
    name: '정한'
  }
]

app.use((req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url}`)
  next()

  const diffTime = Date.now() - start
  console.log(`${req.method} ${req.url} ${diffTime}ms`)
})

app.post('/posts', (req, res) => {
  console.log('req.body', req.body)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  const user = users[userId]
  if (user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})