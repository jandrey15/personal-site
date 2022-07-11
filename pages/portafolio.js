import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

import Layout from 'components/Layout'
import Seo from 'components/Seo'

class Portafolio extends Component {
  render () {
    const SEO = {
      title: 'Portafolio - John Serrano',
      description: 'Una colección de algunos proyectos en los que he trabajado a lo largo de mi carrera, donde trabajo con diferentes tecnologías: JavaScript, Node.js, Express, React, Drupal 7, Next.js, Firebase, etc.',
      image: '',
      url: 'https://johnserrano.co/portafolio',
      titleOpenGraph: 'Portafolio - John Serrano',
      date: '',
      modified: '',
      imagenFacebook: '',
      imagenTwitter: '',
      type: 'article'
    }

    return (
      <Layout>
        <Seo {...SEO} />
        <section id='Portafolio'>
          <ul className='projects'>
            <li>
              <a className='project chicaqhubo' href='https://qhubocucuta.com/chicaqhubo' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>ChicaQhubo</h3>
                  <span>Next.js, React, MongoDB, React Hook Form</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project elecciones' href='https://codesandbox.io/s/echarts-map-colombia-4etjj2' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>Elecciones 2022</h3>
                  <span>React, ReactECharts, Echarts, HTML, CSS</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project transacciones' href='https://github.com/laopinion/transacciones' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>Transacciones API</h3>
                  <span>Node.js, Express, MongoDB, Hapi/boom, Hapi/joi, Nodemailer</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project dbcentralizada' href='https://github.com/laopinion/db-centralizada' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>Data Base Centralizada</h3>
                  <span>Node.js, Express, MongoDB, Hapi/boom, Hapi/joi, Nodemailer</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project covid19' href='https://github.com/jandrey15/covid-19' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>Covid 19</h3>
                  <span>Next.js, React, React Hooks</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project laopinion' href='https://www.laopinion.com.co' rel='noreferrer' target='_blank'>
                <div className='caption light'>
                  <h3>La opinión</h3>
                  <span>Drupal 7, Html5, Css3, Jquery, Firebase, Sass</span>
                </div>
              </a>
            </li>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project deleitese' href='http://www.deleitese.co' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Deleitese</h3>
                      <span>Drupal 7, Html5, Css3, Jquery, Angular 1, Sass</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project suscripciones' href='https://suscripciones.laopinion.com.co' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Suscripciones</h3>
                      <span>Drupal 7, Html5, Css3, Jquery, Sass</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project promociones' href='https://github.com/laopinion/sitePromociones' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Promociones</h3>
                      <span>React, Node.js, Express, Webpack, Sass</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project especial__transito' href='https://especiales.laopinion.com.co/transito/index.html' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Especial Tránsito</h3>
                      <span>Html5, Css3, Jquery, JavaScript</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project especial__frontera' href='https://especiales.laopinion.com.co/frontera/index.html' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Especial La frontera</h3>
                      <span>Html5, Css3, Jquery, JavaScript</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project podcast' href='https://podcasts-bkwaiavyko.now.sh' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>App de Podcasts</h3>
                      <span>Next.js, React, Node.js, Express, Now</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project spotify' href='https://github.com/jandrey15/spotifyReact' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>App de Spotify</h3>
                      <span>React, Create React App, Api Spotify</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project medicos' href='https://especialmedicoslaop.netlify.app/' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Landing page especial médicos</h3>
                      <span>Html5, Css3, JavaScript</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => isVisible && (
                <li>
                  <a className='project halloween' href='https://halloweenlop.netlify.app/' rel='noreferrer' target='_blank'>
                    <div className='caption light'>
                      <h3>Landing page Halloween</h3>
                      <span>Html5, Css3, JavaScript, Firebase</span>
                    </div>
                  </a>
                </li>
              )}
            </TrackVisibility>
          </ul>
        </section>
        <style jsx>{`
          #Portafolio {
            flex: 1;
          }
          .projects {
            display: grid;
            grid-template-columns: 50% 50%;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .project {
            padding-bottom: 56.25%;
            position: relative;
            overflow: hidden;
            display: block;
          }
          .project.chicaqhubo {
            background: url('/chicaqhubo.jpg') no-repeat;
          }
          .project.elecciones {
            background: url('/elecciones.jpg') no-repeat;
          }
          .project.covid19 {
            background: url('/covid19.jpg') no-repeat;
          }
          .project.transacciones {
            background: url('/transacciones.jpg') no-repeat;
          }
          .project.dbcentralizada {
            background: url('/dbcentralizada.jpg') no-repeat;
          }
          .project.laopinion {
            background: url('/laopinion.jpg') no-repeat;
          }
          .project.deleitese {
            background: url('/deleitese.jpg') no-repeat;
          }
          .project.suscripciones {
            background: url('/suscripciones.jpg') no-repeat;
          }
          .project.promociones {
            background: url('/promociones.jpg') no-repeat;
          }
          .project.especial__transito {
            background: url('/especial1.jpg') no-repeat;
          }
          .project.especial__frontera {
            background: url('/especial2.jpg') no-repeat;
          }
          .project.podcast {
            background: url('/podcast.jpg') no-repeat;
          }
          .project.spotify {
            background: url('/spotify.jpg') no-repeat;
          }
          .project.medicos {
            background: url('/medicos.jpg') no-repeat;
          }
          .project.halloween {
            background: url('/halloween.jpg') no-repeat;
          }
          .project:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 8;
            filter: brightness(50%);
            -webkit-filter: brightness(50%);
            transition: transform 200ms linear;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-image: inherit;
          }
          .project:hover:before {
            transform: scale(1.1);
            filter: brightness(90%);
            -webkit-filter: brightness(90%);
          }
          .project:hover > .caption {
            background: rgba(0, 0, 0, 0.8);
          }
          .light {
            color: #ffffff;
            text-shadow: -1px 1px 2px #1c1c1c;
          }
          .dark {
            color: #000000;
          }
          .top {
            top: 7%;
          }
          .caption {
            position: absolute;
            left: 0;
            bottom: 0%;
            padding: 0 0 20px 7%;
            width: 94%;
            transition: bottom 300ms linear;
            z-index: 9;
          }
          .caption h3 {
            font-size: 1.875rem;
            line-height: 2.25rem;
            margin: 10px 0 10px;
          }
          .caption span {
            font-size: 1rem;
            line-height: 1.2rem;
            text-transform: uppercase;
          }

          @media screen and (max-width: 768px) {
            .projects {
              grid-template-columns: 100%;
            }

            {/* .project > .caption {
              background: rgba(0, 0, 0, 0.8);
            } */}

            .project:hover:before {
              filter: brightness(50%);
            }

            .project.chicaqhubo {
              background: url('/chicaqhubo_m.jpg') no-repeat;
            }
            .project.elecciones {
              background: url('/elecciones_m.jpg') no-repeat;
            }
            .project.covid19 {
              background: url('/covid19_m.jpg') no-repeat;
            }
            .project.transacciones {
              background: url('/transacciones_m.jpg') no-repeat;
            }
            .project.dbcentralizada {
              background: url('/dbcentralizada_m.jpg') no-repeat;
            }
            .project.laopinion {
              background: url('/laopinion_m.jpg') no-repeat;
            }
            .project.deleitese {
              background: url('/deleitese_m.jpg') no-repeat;
            }
            .project.suscripciones {
              background: url('/suscripciones_m.jpg') no-repeat;
            }
            .project.promociones {
              background: url('/promociones_m.jpg') no-repeat;
            }
            .project.especial__transito {
              background: url('/especial1_m.jpg') no-repeat;
            }
            .project.especial__frontera {
              background: url('/especial2_m.jpg') no-repeat;
            }
            .project.podcast {
              background: url('/podcast_m.jpg') no-repeat;
            }
            .project.spotify {
              background: url('/spotify_m.jpg') no-repeat;
            }
            .project.medicos {
              background: url('/medicos_m.jpg') no-repeat;
            }
            .project.halloween {
              background: url('/halloween_m.jpg') no-repeat;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portafolio
