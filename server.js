const express = require('express')
const app = require('./app')
const routes = require('./routes')
const bodyParser = require('body-parser')
// const request = require('request')

const PORT = process.env.PORT || 3000

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    server.use('/', routes)

    server.use(express.static('static'))

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
