const express = require('express')
const app = require('./app')
const router = express.Router()

router.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id }
  app.render(req, res, actualPage, queryParams)
})

router.get('/blog/:slug', (req, res) => {
  return app.render(req, res, '/post', { slug: req.params.slug })
})

router.get('/tag/:slug', (req, res) => {
  return app.render(req, res, '/tag', { slug: req.params.slug })
})

// router.get('/productos', (req, res) => {
//   app.render(req, res, '/productos')
// })

// router.get('/productos/:slug', (req, res) => {
//   // console.log('El slug is -> ', req.params.slug)
//   const actualPage = '/producto'

//   const queryParams = { slug: req.params.slug }
//   app.render(req, res, actualPage, queryParams)
// })

module.exports = router
