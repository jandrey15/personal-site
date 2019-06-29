/* eslint-disable no-undef */
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import PostsGrid from '../components/PostsGrid'

class Tags extends Component {
  constructor (props) {
    super(props)
    this.state = {
      max: 0,
      value: 0
    }
  }

  static async getInitialProps ({ res }) {
    // console.log('SLUG', query.slug)

    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      // const req = await fetch(`${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`)
      let [
        req
      ] = await Promise.all([
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&include=authors,tags`
        )
      ])
      const { posts } = await req.json()
      // console.log(posts)

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
    const { data } = this.props
    // console.log(data)
    return (
      <Layout title={data[0].primary_tag.name}>
        <Cover title={data[0].primary_tag.name} profile={false} caption={false} cover='/' />
        <section id='Tag' className='container'>
          <PostsGrid posts={data} columns='3' />
        </section>
        <style jsx global>{`
          #Tag {
            margin-top: 70px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Tags
