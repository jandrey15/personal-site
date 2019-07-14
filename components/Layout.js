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
    const { children, SEO, title } = this.props

    return (
      <div id='Layout'>
        <Head>
          <title>{title || 'John Serrano'}</title>

          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          />
        </Head>

        <Header />
        {children}
        <Footer />

        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={this.addJSONLD(
            title,
            description,
            url,
            image,
            date,
            modified
          )}
        /> */}

        <style jsx global>{globalStyles}</style>
      </div>
    )
  }
}

export default Layout
