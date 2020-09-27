import Layout from '../components/Layout'

const Error = ({ statusCode }) => {
  let title = `John Serrano - ${statusCode || 'Error cliente'}`
  return (
    <Layout title={title}>
      <section id='Error'>
        {
          statusCode ? (
            <div className='message'>
              <h2>{statusCode}</h2>
              <h1>Hubo un problema</h1>
              <p>Intenta nuevamente en unos segundos</p>
            </div>
          ) : (
            <div className='message'>
              <h1>Hubo un problema</h1>
              <p>Intenta nuevamente en unos segundos</p>
            </div>
          )
        }
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
