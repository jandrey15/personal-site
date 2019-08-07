import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Link from 'next/link'

const Legal = () => (
  <Layout title='John Serrano - Legal'>
    <Cover title='Política de privacidad' profile={false} caption={false} cover='/' />
    <section id='Legal' className='container'>
      <div className='main'>
        <h2>Introducción</h2>
        <p>Bienvenido a Johnserrano, un servicio en Internet ("El Servicio" o el "Website") proveído por johnserrano.co. Respetamos su privacidad y queremos que sepa qué información recolectamos sobre usted y qué hacemos con esa información. La siguiente Política de Privacidad fue creada para ayudarlo a entender cómo será usada la información que usted provee a johnserrano.co. Esta Política de Privacidad aplica para toda la información que recolectamos sobre usted. Por favor sepa que johnserrano.co puede contener hipervínculos a otros sitios de Internet y ocasionalmente estos sitios podrían compartir la marca johnserrano.co.</p>

        <h2>Cómo contactarnos</h2>
        <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a web@johnserrano.co.</p>

        <h2>¿Qué tipo de información recolectamos?</h2>
        <p style={{ border: 'none' }}>Dependiendo de cómo se utilice el servicio podremos recopilar la siguiente información:</p>

        <h3>Información de Registro</h3>
        <p style={{ border: 'none' }}>No se requiere que usted nos dé a nosotros ningún tipo de información personal para acceder a nuestro Website ni para ver la información que proveemos generalmente en nuestro Website. Sin embargo, podremos ofrecerle la oportunidad de registrarse con nosotros o unirse a nuestra lista de correo. A pesar de que no es necesario registrarse para acceder a nuestra Website.</p>

        <h3>Recolección Automática de Datos</h3>
        <p style={{ border: 'none' }}>Usted podrá visitar nuestro Website y usar ciertos de nuestros servicios de manera anónima. No obstante, johnserrano.co puede recolectar cierta información personal para el uso de nuestros servicios. Por ejemplo, johnserrano.co puede recolectar información concerniente al tipo de Navegador de Internet que usted usa, el tipo de computadora o sistema operativo que usted usa, su dirección de IP, la velocidad de su conexión, el nombre del dominio de su proveedor de servicio Internet, la localidad geográfica de dónde usted esta accediendo a nuestros servicios y/o la Website o propaganda de donde usted se conectó a nuestro Website. Una vez que se haya registrado con nosotros, los patrones que siguió usted al usar nuestra Website, como las páginas de la Website que usted visitó, búsquedas que condujo, y el tiempo que usted estuvo en nuestra Website.</p>

        <h3>Cookies</h3>
        <p>Cuando usted visita nuestra Website o pulsa cualquier hipervínculo que aparece en ella, o usa uno o más de nuestros servicios, podremos usar una tecnología industrial llamada "cookies" la cual almacena cierta información en su computadora y que nos permitirá personalizar su experiencia para alinearla con sus intereses y preferencias o simplemente facilitar su acceso al usar nuestros servicios. La mayoría de los Navegadores permitirán que usted elimine o bloquee las "cookies" de su computador o su disco duro o alertará las mismas cuando estas se activen. Por favor refiérase a las instrucciones de su Navegador para ayuda o para conocer mejor sus funciones. Por favor note, sin embargo, que si usted bloquea de su Navegador el uso de estos cookies, el servicio no podrá ser utilizado o no podrá acceder a nuestra Website o quizás pueda afectar el funcionamiento de la página como tal.</p>

        <h2>¿Cómo utilizamos tu información personal?</h2>
        <h3>Ofrecer un mejor producto y servicio</h3>
        <p style={{ border: 'none' }}>En general, johnserrano.co podrá usar información sobre usted para proporcionar y mejorar El Servicio. johnserrano.co podrá compartir esta información con los proveedores del servicio sobre contenido, afiliados y otras entidades de forma no-personal para estudios demográficos e información preferencial para los usuarios del servicio o para otros propósitos. Esta información podrá incluir el uso y la data demográfica, pero no incluirá información personal (tal como su dirección de correo electrónico). Si usted provee a johnserrano.co con información personal, tomaremos razonados y apropiados pasos para proteger esta información. Excepto conforme está descrito en esta Política de Privacidad, johnserrano.co no revelará, compartirá, venderá ni rentará información personal recolectada en nuestra Website a terceros para su uso promocional sin su consentimiento a menos que sea para un programa específico al que le podrá pedirnos no participar. Cualquier uso de esa información de parte de johnserrano.co será sujeto a esta Política de Privacidad.</p>

        <h3>Comunicarnos contigo</h3>
        <p>Para mantenerlo informado sobre nuestros servicios, podríamos enviar correos electrónicos y anuncios que son necesarios para la administración de nuestro Website y El Servicio. También podríamos proveer a nuestros usuarios con la opción de unirse a nuestra lista de correos electrónicos para recibir información adicional sobre nuestra Website, servicios y ofertas.</p>

        <h2>Servicios de terceros con los cuales compartimos información del usuario</h2>
        <h3>Estadísticas y anuncios</h3>
        <ul>
          <li>Google Analytics</li>
          <li>Facebook Analytics</li>
          <li>Facebook Ads</li>
          <li>Google Adwords</li>
        </ul>

        <h3>Datos personales</h3>
        <ul>
          <li>Cookies</li>
          <li>Datos de uso</li>
        </ul>

        <h3>Datos Personales</h3>
        <ul>
          <li>Distintas clases de Datos, según se especifica en la Política de Privacidad del servicio</li>
        </ul>

        <h2>Seguridad</h2>
        <p style={{ border: 'none' }}>Usamos métodos razonables de seguridad para proteger la data que reside en nuestros servidores. Sin embargo, ningún sistema de seguridad es impenetrable, debido a esto, no le podemos garantizar la seguridad de nuestros servidores. Es también posible que la información que usted nos provea pueda ser interceptada durante la transmisión de datos.</p>

        <p style={{ border: 'none' }}>La Política de Privacidad de johnserrano.co no se extiende a nada inherente en la operación de Internet, por lo tanto más lejos del control de johnserrano.co, y no se aplicará de ninguna manera contraria a la ley o los reglamentos del gobierno.</p>
      </div>
    </section>
    <style jsx>{`
      #Legal {
        flex: 1;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 1rem;
      }

      ul li {
        padding-left: 1rem;
        text-indent: -10px;
        color: #606164;
        line-height: 1.5rem;
        font-size: 1.2rem;
      }

      ul li:before {
        content: '\u2022';
        color: #0078ae;
        font-size: 1.5rem;
        margin-right: 5px;
      }

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

export default Legal
