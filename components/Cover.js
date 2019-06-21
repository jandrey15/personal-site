/* eslint-disable camelcase */
import React, { Component } from 'react'
import moment from 'moment'
moment.locale('es')

class Cover extends Component {
  render () {
    const { title, profile = true, caption = true, cover = '/static/background.jpg', post = false, published_at, primary_author } = this.props
    return (
      <section id='Cover'>
        <div className='inner'>
          {profile &&
            <a className='profile' href='/'>
              <img className='profile__avatar' src='/static/profile.jpg' alt='Profile' />
            </a>
          }
          <h1>{title}</h1>
          {caption && <p>Desarrollador Web Full-Stack</p>}
          {post &&
            <div className='profile__post'>
              <div className='profile'>
                <a href='/user' className='profile_avatar'>
                  <img className='profile__image' src={primary_author.profile_image} alt={primary_author.name} />
                </a>
                <span className='profile__name'>{primary_author.name}</span>
              </div>
              {/* <span>{moment(published_at, 'YYYYMMDD').fromNow()}</span> */}
              <span>{moment(published_at).format('DD MMMM - YYYY')}</span>
            </div>
          }
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
  
          .profile .profile__avatar {
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
            width: 100%;
          }
  
          .inner h1 {
            font-size: 3.75rem;
            font-weight: 700;
            margin: 5px 0;
            text-shadow: -1px 1px 2px #1c1c1c;
            text-align: center;
          }
  
          .inner p {
            font-size: 2rem;
            line-height: 2.5rem;
            text-align: center;
            font-weight: 700;
            margin: 0;
            text-shadow: -1px 1px 2px #1c1c1c;
          }

          #Cover .profile__post span {
            font-size: 1.2rem;
            line-height: 1.5rem;
          }
          #Cover .profile__post {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            width: 330px;
          }

          #Cover .profile__post .profile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 155px;
          }

          #Cover .profile__post .profile_avatar {
            height: 35px;
            border: 2px solid #ffffff;
            border-radius: 100%;
            display: block;
            width: 35px;
          }

          #Cover .profile__post .profile__image {
            border-radius: 100%;
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
            background: #e3e9ed;
          }
        `}</style>
      </section>
    )
  }
}

export default Cover
