
const TeAmo = () => {
  return (
    <>
      <div className='amy_container'>
        {/* <h4>Mi Señorita Hermosa 💖 Mi reina My Love</h4> */}
        <div className='content'>
          <h5>Amor mio te amo mucho mucho eres muy importante para mi le doy gracias a Dios por colocarte en mi vida y gracias a ti por todo el amor que me das y tu tiempo, eres una mujer maravillosa eres la mujer más hermosa y maravillosa de este mundo 💖, eres mi todo mi reina hermosa nunca lo olvides te amo mucho te mereces lo mejor de este mundo que mi Dios te bendiga siempre mi reina 😍 muchos besitos y un abrazo fuerte mi amor 😘.</h5>
          <time>05 de Febrero del 2023</time>
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
          background: #fef2f2 url('/girasoles.jpg') no-repeat;
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
          background-color: rgb(0 0 0 / 30%);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(1px);
          color: #ffffff;
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

export default TeAmo
