const express = require('express')
const app = require('./app')
// const path = require('path')
const router = express.Router()

// router.get('/p/:id', (req, res) => {
//   const actualPage = '/post'
//   const queryParams = { title: req.params.id }
//   app.render(req, res, actualPage, queryParams)
// })

router.get('/blog/', (req, res) => {
  return app.render(req, res, '/blog')
})

router.get('/blog/:slug', (req, res) => {
  return app.render(req, res, '/post', { slug: req.params.slug })
})

// router.get('/tags', (req, res) => {
//   return app.render(req, res, '/tags')
// })

router.get('/tags/:slug', (req, res) => {
  return app.render(req, res, '/tag', { slug: req.params.slug })
})

module.exports = router
