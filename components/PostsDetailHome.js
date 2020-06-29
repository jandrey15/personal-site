/* eslint-disable camelcase */
import Link from 'next/link'
import PropTypes from 'prop-types'

const PostsDetailHome = ({ slug, feature_image, title, custom_excerpt = '', excerpt = '' }) => {
  return (
    <>
      <article className='post'>
        <Link href={`/post?slug=${slug}`} as={`/blog/${slug}`}>
          <a>
            <img
              className='feature_image'
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
          <p className='excerpt'>{ custom_excerpt ? custom_excerpt.substring(0, 160) : excerpt ? excerpt.substring(0, 160) : null}</p>
        </div>
      </article>
      <style jsx>{`        
        .content {
          padding: 10px 5px;
          border-top: none;
        }

        .feature_image {
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
      `}</style>
    </>
  )
}

PostsDetailHome.propTypes = {
  title: PropTypes.string,
  feature_image: PropTypes.string,
  slug: PropTypes.string,
  custom_excerpt: PropTypes.string,
  excerpt: PropTypes.string
}

export default PostsDetailHome
