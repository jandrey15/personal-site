// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const isProduction = process.env.NODE_ENV === 'production'
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, isProduction }
  }

  render () {
    const { isProduction } = this.props

    return (
      <html lang='es'>
        <Head>
          {isProduction && (
            <Fragment>
              {console.log('Hello production')}
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />

          {
            <Fragment>
              {/* Quitar si no se esta usando */}
              <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
            </Fragment>
          }
        </body>
      </html>
    )
  }
}

export default MyDocument
