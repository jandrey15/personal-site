const withOffline = require('next-offline')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

const nextConfig = {
  target: 'serverless',
  // transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  images: {
    domains: ['static.johnserrano.co', 'johnserrano.herokuapp.com', 'images.unsplash.com', 'static.ghost.org']
  }
}

module.exports = withOffline(nextConfig)
// module.exports = withBundleAnalyzer(nextConfig)
