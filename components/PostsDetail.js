/* eslint-disable camelcase */
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import moment from 'moment'
moment.locale('es')

const PostsDetail = ({ slug, feature_image, title, custom_excerpt = '', excerpt = '', primary_author = '', published_at }) => {
  // {post.excerpt.slice(0, 92)}...
  let excerpt_custom = custom_excerpt ? custom_excerpt.slice(0, 160) : excerpt ? excerpt.slice(0, 160) : ''
  // console.log(published_at)
  // https://github.com/you-dont-need/You-Dont-Need-Momentjs
  return (
    <>
      <article className='post'>
        <header className='post__header'>
          <Link href={`/post?slug=${slug}`} as={`/blog/${slug}`}>
            <a>
              <img
                src={feature_image ? feature_image.replace('admin', 'static') : '/static/gallery.jpg'}
                alt={title}
              />
            </a>
          </Link>
          <div className='content'>
            <Link href={`/post?slug=${slug}`} as={`/blog/${slug}`}>
              <a className='title'>
                <h2>{title}</h2>
              </a>
            </Link>
            <p className='excerpt'>{excerpt_custom}...</p>
          </div>
        </header>
        <footer className='post__meta'>
          <div className='profile'>
            <Link href='/sobre-mi'>
              <a className='profile_avatar'>
                <img
                  className='profile__image'
                  src={primary_author.profile_image
                    ? primary_author.profile_image.replace('admin', 'static')
                    : 'https://static.ghost.org/v3.0.0/images/ghost.png'}
                  alt={primary_author.name}
                />
              </a>
            </Link>
            <span className='profile__name'>{primary_author.name}</span>
          </div>
          <span>{moment(published_at, 'YYYYMMDD').fromNow()}</span>
          <Link href={`/post?slug=${slug}`} as={`/blog/${slug}`}>
            <a>
              <span>Leer más</span>
            </a>
          </Link>
        </footer>
      </article>
      <style jsx>{`
        {/* border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px; 
          border: 1px solid #eeeeee;          
          transition: .5s;
        */}
        .content {
          padding: 10px 5px;
          border-top: none;
        }

        {/* .post:hover .content {
          border-color: #0078ae;
        } */}

        .post {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 500px;
        }

        .post__header img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }

        .title h2 {
          font-size: 1.7rem;
          line-height: 2rem;
          margin: 0 0 15px;
          transition: .2s;
        }

        .excerpt {
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin: 0;
        }

        .title {
          text-decoration: none;
          color: #1c1c1c;
          display: flex;
        }

        .title:hover h2 {
          opacity: 0.9;
          color: #0078ae;
        }

        .profile {
          position: relative;
        }

        .profile:hover .profile__name {
          display: block;
          opacity: 1;
        }

        .profile__name { 
          position: absolute;            
          bottom: -20px;
          left: -32px;
          text-align: center;
          width: 100px;
          opacity: 0;
          transition: .2s; 
        }

        .profile_avatar {
          height: 35px;
          border: 2px solid #ffffff;
          border-radius: 100%;
          display: block;
          width: 35px;
        }

        .profile__image {
          border-radius: 100%;
          object-fit: cover;
          display: block;
          width: 100%;
          height: 100%;
          background: #e3e9ed;
        }

        .post__meta {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 20px 0;
        }

        .post__meta span {
          font-weight: 700;
        }

        .post__meta > a {
          position: relative;
          font-weight: 700;
          color: #0078ae;
          text-decoration: none;
        }

        .post__meta > a:hover {
          color: #1c1c1c;
        }

        .post__meta > a:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #0078ae;
          visibility: visible;
          transform: scaleX(1);
          transition: all 0.3s ease-in-out 0s;
        }

        .post__meta > a:hover:before {
          visibility: hidden;
          transform: scaleX(0);
        }
      `}</style>
    </>
  )
}

PostsDetail.propTypes = {
  title: PropTypes.string,
  feature_image: PropTypes.string,
  slug: PropTypes.string,
  custom_excerpt: PropTypes.string,
  excerpt: PropTypes.string,
  published_at: PropTypes.string,
  primary_author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default React.memo(PostsDetail)
