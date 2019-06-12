import React, { Component } from 'react'
// import Link from 'next/link'
import 'isomorphic-unfetch'

class Home extends Component {
  static async getInitialProps () {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_URL}/posts/?key=${API_KEY}`)
    const { posts } = await res.json()
    // console.log(json)
    return { data: posts }
  }

  render () {
    const { data } = this.props
    // console.log(data)
    return (
      <div>
        <h3>Hello world</h3>
        {data.map(item => (
          <div className='container' key={item.id}>
            <h2>{item.title}</h2>
            <article className='content' dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        ))}
        <style jsx>{`
          .container {
            max-width: 600px;
            margin: 0 auto;
          } 
        `}</style>
        <style jsx global>{`
          .content img {
            max-width: 500px;
            margin: 0 auto;
          }   
        `}</style>
      </div>
    )
  }
}

export default Home
