const express = require('express')
const app = require('./app')
// const path = require('path')
const router = express.Router()

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

module.exports = router
