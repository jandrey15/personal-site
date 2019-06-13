import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import globalStyles from '../styles/global'

const Layout = ({ children, title }) => {
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

      <style jsx global>{globalStyles}</style>
    </div>
  )
}

export default Layout
