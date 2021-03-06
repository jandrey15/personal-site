/* eslint-disable camelcase */
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'

const PostsDetailHome = ({ slug, feature_image, title, custom_excerpt = '', excerpt = '' }) => {
  let excerpt_custom = custom_excerpt ? custom_excerpt.slice(0, 160) : excerpt ? excerpt.slice(0, 160) : ''
  return (
    <>
      <article className='post'>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a>
            <Image
              className='feature_image'
              src={feature_image ? feature_image.replace('admin', 'static') : '/static/gallery.jpg'}
              alt={title}
              width={346}
              height={200}
            />
            {/* <img
              className='feature_image'
              src={feature_image ? feature_image.replace('admin', 'static') : '/static/gallery.jpg'}
              alt={title}
              width='340'
              height='200'
              loading='lazy'
            /> */}
          </a>
        </Link>
        <div className='content'>
          <h2>
            <Link href={`/blog/${encodeURIComponent(slug)}`}>
              <a>
                {title}
              </a>
            </Link>
          </h2>
          <p className='excerpt'>{excerpt_custom}...</p>
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

        h2 {
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

        h2 > a {
          text-decoration: none;
          color: #1c1c1c;
          display: flex;
        }

        h2 > a:hover {
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
