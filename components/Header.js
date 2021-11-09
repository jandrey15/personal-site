import { useState, useCallback } from 'react'
import Link from 'next/link'
import Hamburger from './Hamburger'
import Search from './Search'

const Header = () => {
  const [active, setActive] = useState(false) // Menu

  const handleClick = useCallback(
    () => {
      setActive(!active)
    },
    [active]
  )

  return (
    <header id='Header'>
      <div className='header__menu container'>
        <Hamburger handleClick={handleClick} active={active} />
        <nav>
          <ul className='menu'>
            <li>
              <Link href='/'>
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href='/sobre-mi'>
                <a>Sobre mi</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href={`/tags/react`}>
                <a>React</a>
              </Link>
            </li>
            <li>
              <Link href='/portafolio'>
                <a>Portafolio</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
      </div>
      <style jsx>{`
        #Header {
          height: 45px;
          background: #1c1c1c;
          border-bottom: 5px solid #ffffff;
        }

        .header__menu {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        nav {
          display: flex;
          align-items: center;
        }

        .menu {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 45px;
          width: calc((80px * 5));
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

        @media screen and (max-width: 768px) {
          #Header {
            position: ${active ? 'fixed' : 'relative'};
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 19;
          }
          nav {
            display: ${active ? 'block' : 'none'};
            transition: .2s;
            position: fixed;
            left: 0;
            top: 50px;
            background: #1c1c1c;
            padding: 0;
            height: 100vh;
            width: 100vw;
            z-index: 20;
          }
          .menu {
            flex-direction: column;
            margin: 0;
            height: 100vh;
            justify-content: center;
            width: 100%;
          }

          .menu li {
            margin: 0;
            padding: 15px 0;
            margin: 0;
            width: 100%;
          }
          .menu li:last-child {
            margin-bottom: 100px;
          }
          .menu a {
            display: block;
            text-align: center;
            width: 100%;
          }
          
      `}</style>
      <style jsx global>{`
        body {
          overflow-y: ${active ? 'hidden' : 'scroll'};
        }
      `}</style>
    </header>
  )
}

export default Header
