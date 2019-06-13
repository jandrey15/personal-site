const Header = (props) => {
  return (
    <header id='Header'>
      <nav className='container'>
        <ul className='menu'>
          <li><a href='/'>Inicio</a></li>
          <li><a href='http://'>Sobre mi</a></li>
          <li><a href='http://'>Blog</a></li>
          <li><a href='http://'>portafolio</a></li>
        </ul>
      </nav>
      <style jsx>{`
        #Header {
          height: 45px;
          background: #1c1c1c;
          border-bottom: 5px solid #0078ae;
        }

        .menu {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 45px;
          width: 270px;
        }

        .menu a {
          text-decoration: none;
          color: #ffffff;
          text-transform: uppercase;
          font-weight: 400;
          transition: .2s;
        }

        .menu a:hover {
          color: #0078ae;
        }
      `}</style>
    </header>
  )
}

export default Header
