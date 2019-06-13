const Footer = (props) => {
  const ano = (new Date()).getFullYear()
  return (
    <footer id='Footer'>
      <div className='text'>
        <div className='copyright'>
          <a href='/'>John Serrano</a> <span>© 2015 - {ano}</span>
        </div>
        <a className='legal' href='/legal' rel='nofollow'>Aviso legal y política de privacidad</a>
        <a className='alojado' href='https://www.digitalocean.com/'>Alojado en Digital Ocean</a>
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
        }

        .legal, .alojado {
          text-decoration: none;
          color: #eaeaea;
          display: block;
          margin-bottom: 10px;
        }

        .text a:hover { color: #ffffff; }

        .text a:last-child { margin: 0 }
      `}</style>
    </footer>
  )
}

export default Footer
