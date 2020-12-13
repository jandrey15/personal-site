import Header from './Header'
import Footer from './Footer'
import NProgress from 'nprogress'
import Router from 'next/router'
import * as gtag from '../helpers/gtag'

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = url => {
  NProgress.done()
  // const NODE_ENV = process.env.NODE_ENV
  // if (NODE_ENV !== 'development') {
  //   gtag.trackPageView(url)
  // }
}

Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children }) => {
  return (
    <>
      <section id='Layout'>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  )
}

export default Layout
