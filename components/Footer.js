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
        <a className='alojado' href='https://m.do.co/c/66d901bee48b' target='_blank'>Alojado en Digital Ocean ❤️️</a>
      </div>
      <style jsx>{`
        #Footer {
          height: 200px;
          background: #1c1c1c;
          color: #ffffff;
          display: flex;
          align-items: center;
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
