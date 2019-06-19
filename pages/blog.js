import React, { Component } from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Posts from '../components/PostsGrid'
import Newsletter from '../components/Newsletter'
import PostsFeature from '../components/PostsFeature'
import Error from './_error'
import 'isomorphic-unfetch'

class Home extends Component {
  static async getInitialProps ({ res }) {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      // const req = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=1&filter=featured:true&include=authors`)

      let [
        req,
        reqPosts
      ] = await Promise.all([
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=1&filter=featured:true&include=authors`
        ),
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=9&filter=featured:false&include=authors`
        )
      ])

      let { posts: feature } = await req.json()
      let { posts } = await reqPosts.json()

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          feature: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: posts, feature: feature[0], statusCode: 200 }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        feature: [],
        statusCode: 503
      }
    }
  }

  render () {
    const { data, feature, statusCode } = this.props
    // console.log(feature)
    console.log(data)

    if (statusCode !== 200) {
      // console.log('error...')
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout>
        <section id='Blog' className='container'>
          <PostsFeature {...feature} />

          <Posts posts={data} columns='3' />

          <Newsletter />
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
        `}</style>
      </Layout>
    )
  }
}

export default Home
