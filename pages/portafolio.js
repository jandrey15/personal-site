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
            <li className='project'>
              <div className='caption light'>
                <h3>Paila</h3>
                <span>Branding, Mobile, UX/UI</span>
              </div>
            </li>
            <li className='project'>
              <div className='caption light'>
                <h3>Paila</h3>
                <span>Branding, Mobile, UX/UI</span>
              </div>
            </li>
            <li className='project'>
              <div className='caption light'>
                <h3>Paila</h3>
                <span>Branding, Mobile, UX/UI</span>
              </div>
            </li>
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

          .project {
            background: url('/static/project.png') no-repeat;
            padding-bottom: 56.25%;
            position: relative;
            overflow: hidden;
          }
          .project:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 8;
            transition: transform 200ms linear;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-image: inherit;
          }
          .project:hover:before {
            transform: scale(1.1);
          }
          .light {
            color: #ffffff;
          }
          .caption {
            position: absolute;
            left: 8%;
            bottom: 0%;
            padding-bottom: 7%;
            transition: bottom 300ms linear;
            z-index: 9;
          }
          .caption h3 {
            font-size: 1.875rem;
            line-height: 2.25rem;
            margin-bottom: 10px;
          }
          .caption span {
            font-size: 0.8rem;
            line-height: 1rem;
            text-transform: uppercase;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portafolio
