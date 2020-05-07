/* eslint-disable camelcase */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import moment from 'moment'
moment.locale('es')

class Cover extends Component {
  render () {
    const { title, profile = true, caption = true, cover = '/static/background.jpg', post = false, published_at, primary_author = '', primary_tag = '', capitalize = false } = this.props
    return (
      <section id='Cover'>
        <div className='inner'>
          {profile &&
            <Link prefetch href='/'>
              <a className='profile'>
                <img className='profile__avatar' src='/static/profile.jpg' alt='Profile' />
              </a>
            </Link>
          }
          <h1 className={capitalize && `capitalize`}>{title}</h1>
          {caption && <p>Desarrollador Web Full-Stack</p>}
          {post &&
            <div className='profile__section'>
              <section className='profile__post'>
                <div className='profile'>
                  <Link prefetch href='/sobre-mi'>
                    <a className='profile_avatar'>
                      <img
                        className='profile__image'
                        src={primary_author.profile_image
                          ? primary_author.profile_image.replace('admin', 'static')
                          : 'https://static.ghost.org/v3.0.0/images/ghost.png'
                        }
                        alt={primary_author.name}
                      />
                    </a>
                  </Link>
                  <span className='profile__name'>{primary_author.name}</span>
                </div>
                {/* <span>{moment(published_at, 'YYYYMMDD').fromNow()}</span> */}
                <span>{moment(published_at).format('DD MMMM - YYYY')}</span>
              </section>
              {primary_tag && (
                <section className='category'>
                  <Link prefetch href={`/tag?slug=${primary_tag.slug}`} as={`/tags/${primary_tag.slug}`}>
                    <a>{primary_tag.name}</a>
                  </Link>
                </section>
              )}
            </div>
          }
        </div>
        <style jsx>{`
          #Cover {
            position: relative;
            padding-top: 12px;
            padding-bottom: 12px;
            color: #ffffff;
            height: 400px;
            background: #090a0b no-repeat 50%;
            background-image: url(${cover.replace('admin', 'static')});
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

          #Cover .category {
            max-width: 700px;
            margin: 20px auto 0;
            text-align: center;
            font-size: 1.2rem;
            text-transform: capitalize;
            font-weight: 700;
          }

          #Cover .category a {
            text-decoration: none;
            color: #ffffff;
            text-align: center;
            transition: .2s; 
            border: 1px solid #0078ae;
            padding: 3px 10px;
            border-radius: 10px;
          }
          #Cover .category a:hover {
            opacity: 0.8;
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
            line-height: 3.5rem;
            font-weight: 700;
            margin: 20px 0;
            text-shadow: -1px 1px 2px #1c1c1c;
            text-align: center;
          }

          .inner .capitalize {
            text-transform: capitalize;
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

          @media screen and (max-width: 768px) {
            #Cover {
              background-position: left center;
              background-image: url(${cover === '/static/background.jpg' ? '/static/background_m.jpg' : cover.replace('admin', 'static')});
            }

            #Cover .profile__post {
              margin-top: 20px;
              width: 100%;
            }
            #Cover .profile__post .profile {
              justify-content: center;
            }
            #Cover .profile__post span {
              margin-left: 10px;
              font-size: 1rem;
              line-height: 1.2rem;
            }
            #Cover .category {
              margin-top: 30px;
            }

            .inner h1 {
              font-size: 3rem;
              line-height: 3.2rem;
              width: 100%;
            }
          }
        `}</style>
      </section>
    )
  }
}

Cover.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  profile: PropTypes.bool,
  post: PropTypes.bool,
  published_at: PropTypes.string,
  primary_author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  primary_tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  capitalize: PropTypes.bool
}

export default Cover
