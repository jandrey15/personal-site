import React, { Component } from 'react'
import Layout from '../components/Layout'
import Newsletter from '../components/Newsletter'
import Cover from '../components/Cover'

class Post extends Component {
  static async getInitialProps ({ res, query }) {
    // console.log('SLUG', query.slug)

    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      const req = await fetch(`${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}`)
      const { posts: post } = await req.json()
      // console.log(post)

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: post[0], statusCode: 200 }
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
    const { data } = this.props
    console.log(data)
    return (
      <Layout title={data.title}>
        <Cover title={data.title} profile={false} caption={false} cover={data.feature_image} />
        <section id='Post' className='container'>
          <h3>Hello Post</h3>
          <Newsletter />
        </section>
      </Layout>
    )
  }
}

export default Post
