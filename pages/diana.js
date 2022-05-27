
const Diana = () => {
  return (
    <>
      <div className='diana_container'>

        <h4>Diana no quiero perder tu amistad, quiero que seamos amigos por siempre 😁 My friend forever.</h4>
        <h5>Entiendo si no te importa nuestra amistad, pero para mí vas a hacer siempre mi amiga eres una persona muy especial para mi yo siempre la voy a querer porque usted ayudo a cambiar mi vida y la aprecio no importa si me alejo o no volvemos hablar siempre la voy a llevar en mi ❤ la quiero mucho amiga mía, y lo siento de verdad por confundir las cosas y hacerla pasar por estas situaciones perdóneme diana, yo no quería tener esos sentimientos y sentir más allá de una amistad.</h5>
        <p>By: Andrey Serrano ❤</p>
      </div>
      <style jsx>{`
        .diana_container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          height: 100vh;
          padding: 80px 5px;
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
          margin: 25px 0 5px;
          font-weight: 400;
        }
      `}</style>
    </>
  )
}

export default Diana
