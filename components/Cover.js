import React, { Component } from 'react'

class Cover extends Component {
  render () {
    const { title, profile = true, caption = true, cover = '/static/background.jpg' } = this.props
    return (
      <section id='Cover'>
        <div className='inner'>
          {profile &&
            <a className='profile' href='/'>
              <img src='/static/profile.jpg' alt='Profile' />
            </a>
          }
          <h1>{title}</h1>
          {caption && <p>Desarrollador Web Full-Stack</p>}
        </div>
        <style jsx>{`
          #Cover {
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            color: #fff;
            height: 400px;
            background: #090a0b no-repeat 50%;
            background-image: url(${cover});
            background-size: cover;          
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          #Cover:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
            display: block;
            bottom: 0;
            background: rgba(28, 28, 28, .55);
          }
  
          .profile img {
            border-radius: 50%;
            max-width: 120px;
            border: 3px solid #ffffff;
          }
  
          .inner {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 11;
            width: 700px;
          }
  
          .inner h1 {
            font-size: 3.75rem;
            font-weight: 700;
            margin: 5px 0;
            text-shadow: -1px 1px 2px #1c1c1c;
          }
  
          .inner p {
            font-size: 2rem;
            line-height: 2.5rem;
            text-align: center;
            font-weight: 700;
            margin: 0;
            text-shadow: -1px 1px 2px #1c1c1c;
          }
        `}</style>
      </section>
    )
  }
}

export default Cover
