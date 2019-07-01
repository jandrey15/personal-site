const express = require('express')
const app = require('./app')
// const path = require('path')
const router = express.Router()

router.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id }
  app.render(req, res, actualPage, queryParams)
})

router.get('/blog', (req, res) => {
  return app.render(req, res, '/blog')
})

router.get('/blog/:slug', (req, res) => {
  return app.render(req, res, '/post', { slug: req.params.slug })
})

router.get('/tags', (req, res) => {
  return app.render(req, res, '/tags')
})

router.get('/tags/:slug', (req, res) => {
  return app.render(req, res, '/tag', { slug: req.params.slug })
})

// router.get('/ads.txt', (req, res) => {
//   const filePath = path.resolve('.next/ads.txt')
//   return app.serveStatic(req, res, filePath)
// })

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
