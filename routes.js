const express = require('express')
const Mailchimp = require('mailchimp-api-v3')
const app = require('./app')
// const path = require('path')
const router = express.Router()

const listId = process.env.LISTID || '12345'
const apiKey = process.env.API_KEY_MAIL || '12345'
// const dc = apiKey.split('-')[1]
const mailchimp = new Mailchimp(apiKey)

// router.get('/p/:id', (req, res) => {
//   const actualPage = '/post'
//   const queryParams = { title: req.params.id }
//   app.render(req, res, actualPage, queryParams)
// })

// https://zeit.co/guides/redirect-from-www
// https://spectrum.chat/zeit/general/now-v2-routes-trailing-slashes~d646da8d-8b6e-4b7e-a352-7379f36cec1a

router.get('/blog/:slug', (req, res) => {
  return app.render(req, res, '/post', { slug: req.params.slug })
})

router.get('/tags/:slug', (req, res) => {
  return app.render(req, res, '/tag', { slug: req.params.slug })
})

router.post('/api/contact', (req, res) => {
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

module.exports = router
