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
              <p className='inicio'>
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
        <style jsx>{`
          #Error {            
            padding: 100px 30px;
            flex: 1;
          }
          .message {
            text-align: center;            
          }
          h1 {
            margin-bottom: 3rem;
            color: #1c1c1c;
          }
          h2 {
            font-size: 10rem;
            margin: 0;
            color: #ef1424;
          }
          a {
            color: #ffffff;
            text-transform: uppercase;
            background-color: #0078ae;
            padding: 15px;
            text-decoration: none;
            border-radius: 2px;
            font-weight: 600;
          }
          .inicio:active {
            transform: scale(0.9);
          }
        `}</style>
      </Layout>
    )
  }
}
