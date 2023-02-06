const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/home') {
    let dataObject = {
      a: 'a',
      b: 'b'
    }
    req.on('data', (data) => {
      console.log(data.toString())
      const stringifiedData = data.toString()
      Object.assign(dataObject, JSON.parse(stringifiedData))
    })
  } else {
    if (req.url === '/home') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        a: 'a',
        b: 'b'
      }))
    } else if (req.url === '/about') {
      res.setHeader('Content-Type', 'text/html')
      res.write(`
      <html>
      <body>
      <h1>About Page</h1>
      </body>
      </html>
      `)
      res.end()
    } else {
      res.statusCode = 404
      res.end()
    }
  }
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})