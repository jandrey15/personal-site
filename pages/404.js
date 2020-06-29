import Layout from '../components/Layout'
import Link from 'next/link'

const Error404 = () => {
  let title = `John Serrano - 404`

  return (
    <Layout title={title}>
      <section id='Error'>
        <div className='message'>
          <h2>{404}</h2>
          <h1>La página que intentas acceder no puede encontrarse</h1>
          <p className='inicio'>
            <Link href='/'>
              <a>Volver al inicio</a>
            </Link>
          </p>
        </div>
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

export default Error404
