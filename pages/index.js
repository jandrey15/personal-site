import React, { Component } from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Error from './_error'
import 'isomorphic-unfetch'

class Home extends Component {
  static async getInitialProps ({ res }) {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      const req = await fetch(`${API_URL}/posts/?key=${API_KEY}`)
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
      res.statusCode = 503
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
        <Cover />
        <section id='Home' className='container'>
          <h3>Hola soy home</h3>
        </section>
      </Layout>
    )
  }
}

export default Home
