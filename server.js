const express = require('express')
const app = require('./app')
const routes = require('./routes')
const bodyParser = require('body-parser')
// const request = require('request')
const Mailchimp = require('mailchimp-api-v3')

const PORT = process.env.PORT || 3000

const listId = process.env.LISTID || '12345'
const apiKey = process.env.API_KEY_MAIL || '12345'
// const dc = apiKey.split('-')[1]
const mailchimp = new Mailchimp(apiKey)

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/', routes)

    server.use(express.static('static'))

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    server.post('/api/contact', (req, res) => {
      mailchimp
        .post(`/lists/${listId}/members`, {
          email_address: req.body.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: req.body.firstName,
            LNAME: ''
          }
        })
        .then(function (results) {
          // console.log(results)
          if (results.statusCode < 300) {
            res
              .status(200)
              .send({ message: 'Gracias por subscribirse.', status: 200 })
          } else {
            res.status(400).send({
              message: 'Algo salio mal intentalo mas tarde.',
              status: 400
            })
          }
        })
        .catch(function (err) {
          // console.log(err)
          if (err.status === 400) {
            res.status(400).send({
              message: 'El Correo electrónico ya existe.',
              status: 400
            })
          } else {
            res
              .status(500)
              .send({ message: 'Algo salio mal :(', status: 500 })
          }
        })
    })

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
