const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')
const path = require('path')

const { graphqlHTTP } = require('express-graphql')

const PORT = 8080
// const HOST = '0.0.0.0'

const loadedTypes = loadFilesSync('**/*', {
  extensions: ['graphql']
})

const loadedResolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const schema = makeExecutableSchema({
  typeDefs: loadedTypes,
  resolvers: loadedResolvers
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

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