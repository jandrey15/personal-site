/* eslint-disable camelcase */
import Link from 'next/link'
import moment from 'moment'
moment.locale('es')

const PostProfile = ({ primary_author, primary_tag, published_at }) => {
  return (
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
  )
}

export default PostProfile
