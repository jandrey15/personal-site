import React, { Component } from 'react'
import Layout from '../components/Layout'

class Portafolio extends Component {
  render () {
    const SEO = {
      title: 'John Serrano - Portafolio',
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
        <section id='Portafolio'>
          <ul className='projects'>
            <li className='project'>Project 1</li>
            <li className='project'>Project 2</li>
            <li className='project'>Project 3</li>
          </ul>
        </section>
        <style jsx>{`
          #Portafolio {
            flex: 1;
          }
          .projects {
            display: grid;
            grid-template-columns: 50% 50%;
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portafolio
