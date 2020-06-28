/* eslint-disable camelcase */
import Link from 'next/link'
import PropTypes from 'prop-types'
import Cover from './Cover'
import PostTitle from './PostTitle'
import PostProfile from './PostProfile'

const PostHeader = ({ title, cover, profile = true, caption = true, capitalize = false, post = false, primary_author, primary_tag, published_at }) => {
  return (
    <Cover cover={cover}>
      <div className='inner'>
        {profile &&
          <Link prefetch href='/'>
            <a className='profile'>
              <img className='profile__avatar' src='/static/profile.jpg' alt='Profile' />
            </a>
          </Link>
        }
        <PostTitle capitalize={capitalize}>{title}</PostTitle>
        {caption && <p>Desarrollador Web Full-Stack</p>}
        {post &&
          <PostProfile
            primary_author={primary_author}
            primary_tag={primary_tag}
            published_at={published_at}
          />
        }
      </div>
      <style jsx>{`
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

        @media screen and (max-width: 768px) {
          .inner h1 {
            font-size: 3rem;
            line-height: 3.2rem;
            width: 100%;
          }
        }
      `}</style>
    </Cover>
  )
}

PostHeader.propTypes = {
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

export default PostHeader
