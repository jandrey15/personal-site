const Newsletter = (props) => {
  return (
    <section id='Newsletter'>
      <p>Desarrollador web Full-Stack y apasionado de JavaScript. Aquí te enseño todo lo que aprendo y conozco sobre la programación web en general.</p>
      <h3>¿Te gusta lo que lees?</h3>
      <span>Suscríbete</span>
      <form action='/'>
        <input type='text' name='names' />
        <input type='email' name='email' />
        <button type='submit'>Suscribirme</button>
      </form>
      <style jsx>{`
        #Newsletter {
          margin: 50px 0;
        } 
      `}</style>
    </section>
  )
}

export default Newsletter
