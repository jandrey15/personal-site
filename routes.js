const express = require('express')
const app = require('./app')
// const path = require('path')
const router = express.Router()

// router.get('/p/:id', (req, res) => {
//   const actualPage = '/post'
//   const queryParams = { title: req.params.id }
//   app.render(req, res, actualPage, queryParams)
// })

// router.get('\\S+\/$', function (req, res) {
//   console.log(req.path.slice(0, -1))
//   console.log('------------------------')
//   console.log(req.url.slice(req.path.length))
//   res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length))
// })

// router.get('/blog/', (req, res) => {
//   // return app.render(req, res, '/blog')
//   // const targetUrl = targetBaseUrl + req.originalUrl;
//   console.log(req.originalUrl)
//   res.redirect(301, 'https://johnserrano.co/blog')
// })

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
