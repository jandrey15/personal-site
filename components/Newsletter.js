const Newsletter = (props) => {
  return (
    <section id='Newsletter'>
      <h3>¿Te gusta lo que lees?</h3>
      <span>Suscríbete</span>
      {/* <p>Desarrollador web Full-Stack y apasionado de JavaScript</p> */}
      <form action='/'>
        <input type='text' name='names' placeholder='Nombres' />
        <input type='email' name='email' placeholder='Email' />
        <button type='submit'>Suscribirme</button>
      </form>
      <style jsx>{`
        #Newsletter {
          background: #eaeaea;
          padding: 30px 20px;
          border-radius: 5px;
          width: 500px;
          margin: 70px auto 80px;
        } 
        p {
          font-size: 1.3rem;
          line-height: 1.6rem;
          text-align: center;
          margin: 15px 0 0;
        }

        h3 {
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.9rem;
          margin: 0;
        }
        span {
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.9rem;
          font-weight: 700;
          margin: 0 auto;
          display: block;
        }

        form {
          margin: 20px 0 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        form input {
          border: none;
          border-radius: 2px;
          border: 1px solid #444444;
          outline: none;
          padding-left: 10px;
          box-sizing: border-box;
          height: 40px;
          transition: .2s;
          width: 220px;
        }

        form input:focus {
          border-color: #0078ae;
        }

        form button {
          margin-top: 20px;
          height: 40px;
          width: 150px;
          border: none;
          color: #ffffff;
          border-radius: 2px;
          cursor: pointer;
          background: #0078ae;
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  )
}

export default Newsletter
