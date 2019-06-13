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
      <section id='Home' className='container'>
        <h3>Hola soy home</h3>
      </section>
    )
  }
}

export default Home
