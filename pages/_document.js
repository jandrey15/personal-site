// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'
import { GA_TRACKING_ID, GA_TRACKING_GID, GT_MANAGER_ID } from '../helpers/gtag'

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
        gtag('config', '${GA_TRACKING_GID}');
      `
    }
  }

  setGoogleTagManager () {
    return {
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GT_MANAGER_ID}');
      `
    }
  }

  setGTMnoscript () {
    return {
      __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${GT_MANAGER_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `
    }
  }

  setGoogleAdsense () {
    return {
      __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
    }
  }

  setFacebookPixel () {
    return {
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1195089403972192');
        fbq('track', 'PageView');
      `
    }
  }

  setFacebookNoScript () {
    return {
      __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1195089403972192&ev=PageView&noscript=1"
    />`
    }
  }

  render () {
    const { isProduction } = this.props

    return (
      <Html lang='es'>
        <Head>
          {isProduction && (
            <Fragment>
              <link rel='preconnect' href='https://connect.facebook.net' crossOrigin='true' />
              <link rel='dns-prefetch' href='https://connect.facebook.net' />

              <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
              <link rel='dns-prefetch' href='https://fonts.gstatic.com' />

              <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='true' />
              <link rel='dns-prefetch' href='https://www.googletagmanager.com' />

              <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='true' />
              <link rel='dns-prefetch' href='https://www.google-analytics.com' />

              {/* <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
              <script dangerouslySetInnerHTML={this.setFacebookPixel()} />
              <noscript dangerouslySetInnerHTML={this.setFacebookNoScript()} /> */}
              <script dangerouslySetInnerHTML={this.setGoogleTagManager()} />

            </Fragment>
          )}
        </Head>
        <body>
          <>
            <noscript dangerouslySetInnerHTML={this.setGTMnoscript()} />
          </>
          <Main />
          <NextScript />

          {/* {
            <Fragment>
              <script dangerouslySetInnerHTML={this.setGoogleAdsense()} />
            </Fragment>
          } */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
