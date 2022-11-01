
const Love = () => {
  return (
    <>
      <div className='amy_container'>
        {/* <h4>Mi Señorita Hermosa 💖 Mi reina My Love</h4> */}
        <div className='content'>
          <h5>Mi reina hermosa con este detalle quiero seguir demostrándote el cariño, el compromiso, el respeto, el amor, que nuestra relación va enserio, que te quiero en mi vida que tengamos una vida juntos de la mano de Dios 🙏. Eres una mujer maravillosa, inteligente, cariñosa, sincera y una guerrera, te quiero mucho amor 💖. Trabajemos como un equipo para alcanzar nuestras metas y sueños 💑. Tu voz es mi sonido favorito mi amor.</h5>
          <time>12 de Noviembre del 2022</time>
          <p>By: Andrey Serrano ❤</p>
        </div>
      </div>
      <style jsx>{`
        .amy_container {
          display: flex;
          padding: 0;
          height: 100vh;
          margin: 0 auto;
          place-content: center;
          background: #fef2f2 url('/fondo-love.jpg') no-repeat;
          background-position: center center;
          background-size: cover;
        }
        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          width: 100%;
          max-width: 700px;
          padding: 25px 5px;
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
      `}</style>
    </>
  )
}

export default Love
