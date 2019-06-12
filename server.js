const express = require('express')
const app = require('./app')
const routes = require('./routes')

const PORT = process.env.PORT || 3000

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/', routes)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
