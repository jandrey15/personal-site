import React, { Component } from 'react'
import Layout from '../components/Layout'

class Portafolio extends Component {
  render () {
    const SEO = {
      title: 'John Serrano - Portafolio',
      description: '',
      image: '',
      url: '',
      titleOpenGraph: '',
      date: '',
      modified: '',
      imagenFacebook: '',
      imagenTwitter: '',
      type: 'article'
    }

    return (
      <Layout {...SEO}>
        <section id='Portafolio'>
          <ul className='projects'>
            <li>
              <a className='project laopinion' href='https://www.laopinion.com.co' target='_blank'>
                <div className='caption light'>
                  <h3>La opinión</h3>
                  <span>Drupal 7, Html5, Css3, Jquery, Firebase, Sass</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project deleitese' href='http://www.deleitese.co' target='_blank'>
                <div className='caption light'>
                  <h3>Deleitese</h3>
                  <span>Drupal 7, Html5, Css3, Jquery, Angular 1, Sass</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project suscripciones' href='https://suscripciones.laopinion.com.co' target='_blank'>
                <div className='caption light'>
                  <h3>Suscripciones</h3>
                  <span>Drupal 7, Html5, Css3, Jquery, Sass</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project promociones' href='https://promociones.laopinion.com.co' target='_blank'>
                <div className='caption light'>
                  <h3>Promociones</h3>
                  <span>React, Node.js, Express, Webpack, Sass</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project especial__transito' href='https://especiales.laopinion.com.co/transito/index.html' target='_blank'>
                <div className='caption light'>
                  <h3>Especial Tránsito</h3>
                  <span>Html5, Css3, Jquery, JavaScript</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project especial__frontera' href='https://especiales.laopinion.com.co/frontera/index.html' target='_blank'>
                <div className='caption light'>
                  <h3>Especial La frontera</h3>
                  <span>Html5, Css3, Jquery, JavaScript</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project podcast' href='https://podcasts-bkwaiavyko.now.sh' target='_blank'>
                <div className='caption light'>
                  <h3>Add de Podcasts</h3>
                  <span>Next.js, React, Node.js, Express, Now</span>
                </div>
              </a>
            </li>
            <li>
              <a className='project spotify' href='https://github.com/jandrey15/spotifyReact' target='_blank'>
                <div className='caption light'>
                  <h3>Add de Spotify</h3>
                  <span>React, Create React App, Api Spotify</span>
                </div>
              </a>
            </li>
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
          .project.laopinion {
            background: url('/static/laopinion.jpg') no-repeat;
          }
          .project.deleitese {
            background: url('/static/deleitese.jpg') no-repeat;
          }
          .project.suscripciones {
            background: url('/static/suscripciones.jpg') no-repeat;
          }
          .project.promociones {
            background: url('/static/promociones.jpg') no-repeat;
          }
          .project.especial__transito {
            background: url('/static/especial1.jpg') no-repeat;
          }
          .project.especial__frontera {
            background: url('/static/especial2.jpg') no-repeat;
          }
          .project.podcast {
            background: url('/static/podcast.jpg') no-repeat;
          }
          .project.spotify {
            background: url('/static/spotify.jpg') no-repeat;
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

            .project:hover > .caption {
              background: transparent;
            }

            .project:hover:before {
              filter: brightness(50%);
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portafolio