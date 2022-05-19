
const Diana = () => {
  return (
    <>
      <div className='diana_container'>

        <h4>Diana no quiero perder tu amistad, quiero que seamos amigos por siempre 😁 My friend forever.</h4>
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
      `}</style>
    </>
  )
}

export default Diana
