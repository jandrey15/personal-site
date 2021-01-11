import React from 'react'
import Link from 'next/link'
import TrackVisibility from 'react-on-screen'

import Layout from 'components/Layout'
import Cover from 'components/Cover'
import ProfileHome from 'components/ProfileHome'
import Posts from 'components/PostsGrid'
import Seo from 'components/Seo'

import { getAllPostsForHome } from '../lib/api'

const Home = ({ posts }) => {
  const SEO = {
    title: '',
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
    <Layout>
      <Seo {...SEO} />
      {/* <Cover url='https://res.cloudinary.com/john-serrano/image/upload/c_fill,q_auto,f_auto,w_1920,h_1000,dpr_auto/v1602534066/John%20Serrano/background_wt8fyp.jpg'>
        <ProfileHome title='John Serrano' />
      </Cover> */}
      <section id='Home' className='container'>
        <div className='main'>
          <h2>¿Quién soy?</h2>
          <p>Tecnólogo en análisis y desarrollo de sistemas de la información graduado en el SENA(Colombia) y <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc.. Comparto mis conocimientos a través de mi
            <Link href='/blog'>
              <a> blog</a>
            </Link>. Puedes leer más <Link href='/sobre-mi'><a>sobre mi</a></Link>.</p>

          <h2>De qué hablo en mi blog</h2>
          <p>
            <Link href='/tags/desarrollo-web'>
              <a >Desarrollo web</a>
            </Link>, Tutoriales, artículos sobre tecnologías: JavaScript, Node.js, Docker, React, python, etc.
          </p>

          <h2>📒 Ebooks publicados</h2>
          <p>
            <a href='https://leanpub.com/fundamentos-de-programacin-con-javascript' target='_blank' rel='noreferrer'> Fundamentos de programación con JavaScript</a>
          </p>

          <h2>Últimos artículos publicados</h2>
          {posts.length > 0 && <Posts posts={posts} columns='2' />}

          <h2>Contacto</h2>
          <p className='contact'>Puedes ponerte en contacto conmigo públicamente por las redes sociales Mencíoname en Twitter <a href='https://twitter.com/Jandrey15' rel='noreferrer' target='_blank'>(soy @jandrey15)</a>.</p>
        </div>

        <TrackVisibility once partialVisibility>
          {({ isVisible }) =>
            isVisible && (
              <div className='apoyar'>
                <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por tu apoyo.</p>
                <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                  <input type='hidden' name='cmd' value='_s-xclick' />
                  <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
                  <input id='button_paypal' type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
                </form>
                <hr />
                <q className='citaBible'>Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí. Juan 14:6</q>
              </div>
            )
          }
        </TrackVisibility>
      </section>
      <style jsx>{`
        .main {
          margin: 70px auto 0 auto;
          max-width: 700px;
        }

        .apoyar {
          max-width: 700px;
          margin: 0 auto 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .apoyar p {            
          text-align: center; 
          border: none;
        }

        .pauta {
          margin: 20px 0;
        }

        .citaBible {
          font-style: italic;
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
        .contact {
          margin-bottom: 70px;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps () {
  const { data: { posts } } = await getAllPostsForHome()
  // console.log(posts)

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

export default Home
