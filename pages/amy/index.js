import Link from 'next/link'
const Amy = () => {
  return (
    <>
      <div className='amy_container'>

        <h4>Mi Señorita Hermosa 💖 Mi reina My Love</h4>
        <h5>Hola mi señorita hermosa, las últimas semanas han sido de las mejores compartiendo contigo conociendote, cada día que pasa siento que me gustas mucho más me encanta todo de ti mi amor 😍 eres una mujer muy especial, cariñosa, hermosa, respetuosa, amable, sincera, y una guerrera. Que mi Dios te bendiga siempre espero podamos seguir compartiendo muchos momentos lindos, te quiero en vida ♾ te llevo en mi 💖 y en mis pensamientos. <span>Nota: Tu voz es mi sonido favorito.</span></h5>
        <time>22 de Octubre del 2022</time>
        <p>By: Andrey Serrano ❤</p>

        <Link href='/amy/love'>
          <a>I love you 💖</a>
        </Link>
      </div>
      <style jsx>{`
        .amy_container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          height: 100%;
          padding: 25px 5px;
          max-width: 700px;
          margin: 0 auto;
          width: 100%;
        }
        p {
          font-size: 21px;
          font-weight: bold;
          margin: 15px 0 0;
        }
        h4 {
          font-size: 36px;
          margin: 0;
        }
        h5 {
          font-size: 26px;
          line-height: 29px;
          margin: 15px 0 5px;
          font-weight: 400;
        }
        span {
          font-style: italic;
          font-weight: 700;
          /* font-size: 23px; */
        }
        a {
          margin: 20px 0;
          padding: 12px 15px;
          background: #1b1919;
          border-radius: 5px;
          text-decoration: none;
          color: white;
          font-size: 1.5rem;
        }
        a:hover {
          background: #000000;
        }
      `}</style>
    </>
  )
}

export default Amy
