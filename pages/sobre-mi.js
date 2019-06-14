import Layout from '../components/Layout'
import Cover from '../components/Cover'

const SobreMi = () => {
  return (
    <Layout>
      <Cover title='Quién es John Serrano' profile={false} caption={false} />
      <section id='Home' className='container'>
        <div className='main'>
          <h2>Sobre mí</h2>
          <p>¡Hola! Mi nombre es John Andrey Serrano. Nací en Cúcuta - Colombia tengo 26 años actualmente me dedico al <a href='/tag/desarrollo-web'>Desarrollo web</a> un apasionado y entusiasta de las tecnología web: JavaScript, Node.js, Docker, Firebase, React, etc.. En constante proceso de aprendizaje sobre todas las nuevas tecnologías, me gusta estar informado de lo que pasa en la web, ver cursos, leer artículos, ver tutoriales y tratar de compartir mis conocimientos a través de mi <a href='/blog'>blog</a>.</p>

          <h2>Mi historia</h2>
          <p>Comencé en el año 2011 ingrese a estudiar en el <strong>SENA</strong> una carrera llamada análisis y desarrollo de sistemas de la información, fue un poco complicado pues no entendía muy bien de que se trataba esto de programar siempre me pregunte qué era lo que había detrás de una página web o un programa. Pero gracias a un buen profesor que supo guiarme y enseñarme desde lo más básico de la lógica que se necesita para programar desde <strong>algoritmos</strong>, <strong>pseudocodigo y lenguaje C</strong>. Java fue el primer lenguaje de programación que aprendí y domine con mucho esfuerzo porque su sintaxis es bastante robusta. Aprendí un poco de php pero no le di mucha importancia en ese entonces.</p>

          <h2>Prácticas</h2>
          <p>Las prácticas las realicé en una empresa de plásticos a finales del 2012, donde comencé aprender un poco más de <strong>php</strong> y todo lo que constituía el desarrollo de una página web, era maravilloso para mí en ese entonces, era algo nuevo pues la verdad no le di mucha importancia en mis estudios me dedicaba más a <strong>Java</strong>, pero fue sorprendente ver y saber todos los lenguajes y herramientas que existían para el desarrollo de páginas web y aplicaciones.</p>

          <h2>Actualmente</h2>
          <p>Desde entonces he estado estudiando aprendiendo cosas nuevas pensando siempre en mejorar en ser uno de los mejores desarrolladores de Colombia, estoy por ser un egresado de la Universidad Santo Tomás como <strong>ingeniero en informática</strong>. Creo que gracias a mi disciplina y al ser autodidacta pude mejorar un monto en el desarrollo web también a plataformas como <a href='https://platzi.com/r/jandrey/' target='_blank'>platzi</a> aunque yo la conocí como mejorándo la web me ayudó mucho a ser mejor y seguir aprendiendo a no desfallecer. Actualmente puedo decir que tengo buenos conocimientos de <strong>Front-End</strong>, <strong>Back-End</strong> y también sobre <strong>DevOps</strong>. Me puedes encontrar en <a href='https://www.facebook.com/johnserrano15'>Facebook</a>, <a href='https://twitter.com/Jandrey15'>Twitter</a>, <a href='https://github.com/johnsi15'>GitHub</a> y <a href='https://www.linkedin.com/in/jandreys15'>Linkedin</a> Saludos.</p>
        </div>
      </section>
      <style jsx>{`
          .main {
            margin: 70px auto 50px auto;
            max-width: 700px;
          }

          h2 {
            font-size: 2rem;
            font-weight: 700;
            margin: 70px 0 0;
          }

          p {
            font-size: 1.25rem;
            line-height: 2rem;
            font-weight: 400;
            margin: 20px 0 0;
            border-bottom: 2px solid #eeeeee;
            padding-bottom: 35px;
          }

          p strong {
            font-weight: 700;
          }

          p > a {
            position: relative;
            font-weight: 700;
            color: #0078ae;
            text-decoration: none;
          }

          p > a:hover {
            color: #1c1c1c;
          }

          p > a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #0078ae;
            visibility: visible;
            transform: scaleX(1);
            transition: all 0.3s ease-in-out 0s;
          }

          p > a:hover:before {
            visibility: hidden;
            transform: scaleX(0);
          }          
        `}</style>
    </Layout>
  )
}

export default SobreMi
