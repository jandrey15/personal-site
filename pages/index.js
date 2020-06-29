import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import PostHeader from 'components/PostHeader'
import Posts from '../components/PostsGrid'
import Error from './_error'
import 'isomorphic-unfetch'
import useSWR from 'swr'

// const API_URL = process.env.API_URL
const API_URL = 'https://johnserrano.herokuapp.com/ghost/api/v2/content'
const API_KEY = '89d49d9098c4a80eca9737f2da'
// const API_KEY = process.env.API_KEY

async function fetcher (path) {
  const res = await fetch(API_URL + path)
  const { posts } = await res.json()
  return posts
}

const Home = () => {
  const { data, error } = useSWR(`/posts/?key=${API_KEY}&limit=4`, fetcher)
  // console.log(data)

  if (error) return <Error statusCode={500} />
  // if (!data) return <div>loading...</div>

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
    <Layout {...SEO}>
      <Cover>
        <PostHeader title='John Serrano' />
      </Cover>
      <section id='Home' className='container'>
        <div className='main'>
          <h2>¿Quién soy?</h2>
          <p>Tecnólogo en análisis y desarrollo de sistemas de la información graduado en el SENA(Colombia) y <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc.. Comparto mis conocimientos a través de mi
            <Link href='/blog'>
              <a> blog</a>
            </Link>. Puedes leer más <Link href='/sobre-mi'><a>sobre mi</a></Link>.</p>

          <h2>De qué hablo en mi blog</h2>
          <p>
            <Link href='/tag?slug=desarrollo-web' as='/tags/desarrollo-web'>
              <a >Desarrollo web</a>
            </Link>, Tutoriales, artículos sobre tecnologías: JavaScript, Node.js, Docker, React, python, etc.</p>

          <h2>Últimos artículos publicados</h2>
          <Posts posts={data} columns='2' />

          <h2>Contacto</h2>
          <p className='contact'>Puedes ponerte en contacto conmigo públicamente por las redes sociales Mencíoname en Twitter <a href='https://twitter.com/Jandrey15' rel='noreferrer' target='_blank'>(soy @jandrey15)</a>.</p>
        </div>

        <div className='apoyar'>
          <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por su apoyo.</p>
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
            <input type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
          </form>
        </div>
        {/* <div className='pauta'>
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-3083367533294626'
              data-ad-slot='3127795481'
              data-ad-format='auto'
              data-full-width-responsive='true' />
          </div> */}
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

export default Home
