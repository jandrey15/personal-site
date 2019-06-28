/* eslint-disable no-undef */
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import PostsGrid from '../components/PostsGrid'

class Tag extends Component {
  constructor (props) {
    super(props)
    this.state = {
      max: 0,
      value: 0
    }
  }

  static async getInitialProps ({ res, query }) {
    // console.log('SLUG', query.slug)

    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      // const req = await fetch(`${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`)
      let [
        req,
        reqPosts
      ] = await Promise.all([
        fetch(
          `${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`
        ),
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=3&filter=featured:false&include=authors`
        )
      ])
      const { posts: post } = await req.json()
      const { posts: morePost } = await reqPosts.json()
      // console.log(post)
      // console.log(morePost)

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: post[0], morePost, statusCode: 200 }
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
    const { data, morePost } = this.props
    // console.log(data)
    return (
      <Layout title={data.title}>
        {/* <Cover title={data.title} profile={false} caption={false} cover={data.feature_image} post published_at={data.published_at} primary_author={data.primary_author} primary_tag={data.primary_tag} /> */}
        <section id='Tag' className='container'>
          <h3>tags</h3>
          {/* <PostsGrid posts={morePost} columns='3' /> */}
        </section>
        <style jsx global>{`
          #Tag {
            margin-top: 30px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Tag
