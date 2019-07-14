import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Posts from '../components/PostsGrid'
import Error from './_error'
import 'isomorphic-unfetch'

class Home extends Component {
  static async getInitialProps ({ res }) {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      const req = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=4`)
      const { posts } = await req.json()

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: posts, statusCode: 200 }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        statusCode: 503
      }
    }
  }

  render () {
    const { data, statusCode } = this.props
    // console.log(data)

    if (statusCode !== 200) {
      // console.log('error...')
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout>
        <Cover title='John Serrano' />
        <section id='Home' className='container'>
          <div className='main'>
            <h2>¿Quién soy?</h2>
            <p>Tecnólogo en análisis y desarrollo de sistemas de la información graduado en el SENA(Colombia) y <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc.. Comparto mis conocimientos a través de mi
              <Link prefetch href='/blog'>
                <a> blog</a>
              </Link>. Puedes leer más <Link prefetch href='/sobre-mi'><a>sobre mi</a></Link>.</p>

            <h2>De qué hablo en mi blog</h2>
            <p>
              <Link prefetch href='/tag/desarrollo-web' as='/tags/desarrollo-web'>
                <a >Desarrollo web</a>
              </Link>, Tutoriales, artículos sobre tecnologías: JavaScript, Node.js, Docker, React, python, etc.</p>

            <h2>Últimos artículos publicados</h2>
            <Posts posts={data} columns='2' />

            <h2>Contacto</h2>
            <p className='contact'>Puedes ponerte en contacto conmigo públicamente por las redes sociales Mencíoname en Twitter <a href='https://twitter.com/Jandrey15' target='_blank'>(soy @jandrey15)</a>.</p>
          </div>
        </section>
        <style jsx>{`
          .main {
            margin: 70px auto 0 auto;
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
          .contact {
            margin-bottom: 50px;
            border: none;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Home
