// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'
import { GA_TRACKING_ID } from '../helpers/gtag'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const isProduction = process.env.NODE_ENV === 'production'
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, isProduction }
  }

  setGoogleTags () {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `
    }
  }

  setGoogleAdsense () {
    return {
      __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
    }
  }

  render () {
    const { isProduction } = this.props

    return (
      <html lang='es'>
        <Head>
          {isProduction && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
          {
            <Fragment>
              <link
                rel='stylesheet'
                href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/railscasts.min.css' />
            </Fragment>
          }
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* {
            <Fragment>
              <script dangerouslySetInnerHTML={this.setGoogleAdsense()} />
            </Fragment>
          } */}
        </body>
      </html>
    )
  }
}

export default MyDocument
