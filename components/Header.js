import Link from 'next/link'

const Header = (props) => {
  return (
    <header id='Header'>
      <nav className='container'>
        <ul className='menu'>
          <li>
            <Link prefetch href='/'>
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/sobre-mi'>
              <a>Sobre mi</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/portafolio'>
              <a>Portafolio</a>
            </Link>
          </li>
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
          justify-content: space-between;
          align-items: center;
          height: 45px;
          width: 330px;
        }

        .menu a {
          text-decoration: none;
          color: #ffffff;
          text-transform: uppercase;
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.6rem;
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
