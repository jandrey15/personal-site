import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import globalStyles from '../styles/global'
import NProgress from 'nprogress'
import Router from 'next/router'
import * as gtag from '../helpers/gtag'
import { DEFAULT_SEO } from '../config'

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = url => {
  NProgress.done()
  const NODE_ENV = process.env.NODE_ENV
  if (NODE_ENV !== 'development') {
    gtag.trackPageView(url)
  }
}

Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  addJSONLD (title, description, url, image, date, modified) {
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url}"
      },
      "headline": "${title}",
      "image": [
        "${image}"
      ],
      "datePublished": "${date}",
      "dateModified": "${modified}",
      "author": {
        "@type": "Person",
        "name": "John Serrano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "JohnSerrano",
        "logo": {
          "@type": "ImageObject",
          "url": "https://johnserrano.co/static/default.jpg"
        }
      },
      "description": "${description}"
    }`
    }
  }

  render () {
    const { children, SEO } = this.props

    let title = SEO
      ? SEO.title !== undefined
        ? SEO.title
        : DEFAULT_SEO.openGraph.title
      : DEFAULT_SEO.openGraph.title
    let description = SEO
      ? SEO.description !== undefined
        ? SEO.description
        : DEFAULT_SEO.description
      : DEFAULT_SEO.description
    const url = SEO
      ? SEO.url !== undefined
        ? SEO.url
        : DEFAULT_SEO.openGraph.url
      : DEFAULT_SEO.openGraph.url
    const image = SEO
      ? SEO.image !== undefined
        ? SEO.image
        : DEFAULT_SEO.openGraph.image
      : DEFAULT_SEO.openGraph.image
    const imagenFacebook = SEO
      ? SEO.imagenFacebookSEO !== undefined
        ? SEO.imagenFacebookSEO
        : DEFAULT_SEO.openGraph.image
      : DEFAULT_SEO.openGraph.image
    const imagenTwitter = SEO
      ? SEO.imagenTwitterSEO !== undefined
        ? SEO.imagenTwitterSEO
        : DEFAULT_SEO.openGraph.image
      : DEFAULT_SEO.openGraph.image
    const date = SEO ? (SEO.date !== undefined ? SEO.date : null) : null
    const modified = SEO
      ? SEO.modified !== undefined
        ? SEO.modified
        : null
      : null
    const type = SEO
      ? SEO.type !== undefined
        ? SEO.type
        : DEFAULT_SEO.openGraph.type
      : DEFAULT_SEO.openGraph.type

    return (
      <div id='Layout'>
        <Head>
          <title>{title || 'John Serrano'}</title>

          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          />

          <meta key='description' name='description' content={description} />
          <meta
            key='twitter:card'
            name='twitter:card'
            content={DEFAULT_SEO.twitter.cardType}
          />
          <meta
            key='twitter:site'
            name='twitter:site'
            content={DEFAULT_SEO.twitter.handle}
          />
          <meta
            key='twitter:title'
            name='twitter:title'
            content={
              SEO
                ? SEO.titleOpenGraph !== undefined
                  ? SEO.titleOpenGraph
                  : DEFAULT_SEO.openGraph.title
                : DEFAULT_SEO.openGraph.title
            }
          />
          <meta
            key='twitter:description'
            name='twitter:description'
            content={description}
          />
          <meta key='twitter:url' name='twitter:url' content={url} />
          <meta name='twitter:image:src' content={imagenTwitter} />
          <meta key='og:url' property='og:url' content={url} />
          <meta key='og:type' property='og:type' content={type} />
          <meta
            key='og:title'
            property='og:title'
            content={
              SEO
                ? SEO.titleOpenGraph !== undefined
                  ? SEO.titleOpenGraph
                  : DEFAULT_SEO.openGraph.title
                : DEFAULT_SEO.openGraph.title
            }
          />
          <meta
            key='og:description'
            property='og:description'
            content={description}
          />
          <meta key='og:image' property='og:image' content={imagenFacebook} />
          <meta
            key='og:image:secure_url'
            property='og:image:secure_url'
            content={imagenFacebook}
          />
          <meta
            key='og:image:width'
            property='og:image:width'
            content={DEFAULT_SEO.openGraph.imageWidth}
          />
          <meta
            key='og:image:height'
            property='og:image:height'
            content={DEFAULT_SEO.openGraph.imageHeight}
          />
          <meta property='fb:pages' content='323137824476732' />
          <meta
            key='og:locale:alternate'
            property='og:locale:alternate'
            content='es_LA'
          />
        </Head>

        <Header />
        {children}
        <Footer />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={this.addJSONLD(
            title,
            description,
            url,
            image,
            date,
            modified
          )}
        />

        <style jsx global>{globalStyles}</style>
      </div>
    )
  }
}

export default Layout
