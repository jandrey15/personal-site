import React, { Component } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default class Error extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    let title = `John Serrano - ${statusCode}`

    return (
      <Layout title={title}>
        <section id='Error'>
          {statusCode === 404 ? (
            <div className='message'>
              <h2>{statusCode}</h2>
              <h1>La página que intentas acceder no puede encontrarse</h1>
              <p>
                <Link href='/'>
                  <a>Volver al inicio</a>
                </Link>
              </p>
            </div>
          ) : (
            <div className='message'>
              <h2>{statusCode}</h2>
              <h1>Hubo un problema</h1>
              <p>Intenta nuevamente en unos segundos</p>
            </div>
          )}
        </section>
      </Layout>
    )
  }
}
