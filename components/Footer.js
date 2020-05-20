import Link from 'next/link'

const Footer = (props) => {
  const ano = (new Date()).getFullYear()
  return (
    <footer id='Footer'>
      <div className='text'>
        <div className='copyright'>
          <Link href='/'>
            <a>John Serrano</a>
          </Link> <span>© 2015 - {ano}</span>
        </div>
        <Link href='/legal'>
          <a className='legal' rel='nofollow'>Aviso legal y política de privacidad</a>
        </Link>
        <div className='services'>
          <a className='alojado' href='https://m.do.co/c/66d901bee48b' rel='noreferrer' target='_blank'>Alojado en Digital Ocean 💧</a>
          y <a className='alojado' href='https://vercel.com/' rel='noreferrer' target='_blank'>Vercel ❤️</a>
        </div>
      </div>
      <style jsx>{`
        #Footer {
          height: 200px;
          background: #1c1c1c;
          color: #ffffff;
          display: flex;
          align-items: center;
        }

        .services {
          display: flex;
          max-width: 260px;
          justify-content: space-between;
          margin: 0 auto;
          width: 100%;
        }

        .text {          
          margin: 0 auto;
          font-weight: 400;
          text-align: center;
          width: 330px;
        }

        .copyright {
          margin-bottom: 10px;
        }

        .copyright a {
          text-decoration: none;
          color: #eaeaea;
          transition: .2s;
        }

        .legal, .alojado {
          text-decoration: none;
          color: #eaeaea;
          display: block;
          margin-bottom: 10px;
          transition: .2s;
        }

        .text a:hover { color: #ffffff; }

        .text a:last-child { margin: 0 }
      `}</style>
    </footer>
  )
}

export default Footer
