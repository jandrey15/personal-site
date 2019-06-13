import React, { Component } from 'react'

class Cover extends Component {
  componentDidMount () {
    // twttr.widgets.createFollowButton(
    //   'jandrey15',
    //   document.getElementById('follow__twitter'),
    //   {
    //     size: 'large'
    //   }
    // ).then(function (el) {
    //   console.log('Follow button added.')
    // })
  }
  render () {
    return (
      <section id='Cover'>
        <div className='inner'>
          <a className='profile' href='/'>
            <img src='/static/profile.jpg' alt='Profile' />
          </a>
          <h1>John Serrano</h1>
          <div id='follow__twitter' />
          <a href='https://twitter.com/jandrey15?ref_src=twsrc%5Etfw' className='twitter-follow-button' data-show-count='true'>Follow @jandrey15</a>
          <p>Desarrollador Web Full-Stack</p>
        </div>
        <style jsx>{`
          #Cover {
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            color: #fff;
            height: 400px;
            background: #090a0b no-repeat 50%;
            background-image: url('/static/background.jpg');
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
            background: rgba(28, 28, 28, .50);
          }
  
          .profile img {
            border-radius: 50%;
            max-width: 120px;
            border: 3px solid #ffffff;
          }

          .twitter-follow-button {
            margin: 5px 0;
          }
  
          .inner {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 11;
            width: 850px;
          }
  
          .inner h1 {
            font-size: 3.75rem;
            font-weight: 500;
            margin: 5px 0;
            text-shadow: -1px 1px 2px #1c1c1c;
          }
  
          .inner p {
            font-size: 2.1rem;
            line-height: 2.6rem;
            text-align: center;
            font-weight: 400;
            margin: 0;
            text-shadow: -1px 1px 2px #1c1c1c;
          }
        `}</style>
      </section>
    )
  }
}

export default Cover
