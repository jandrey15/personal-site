/* eslint-disable camelcase */
import Link from 'next/link'
import format from 'date-fns/format'
import { es } from 'date-fns/locale'

const PostProfile = ({ primary_author, primary_tag, published_at }) => {
  const formatDate = format(new Date(published_at), 'dd MMMM - yyyy', { locale: es })
  // console.info(formatDate)
  return (
    <section className='profile__section'>
      <div className='profile__post'>
        <div className='profile'>
          <Link href='/sobre-mi'>
            <a className='profile_avatar'>
              <img
                className='profile__image'
                src={primary_author.profile_image
                  ? primary_author.profile_image.replace('admin', 'static')
                  : 'https://static.ghost.org/v3.0.0/images/ghost.png'
                }
                alt={primary_author.name}
                width='35'
                height='35'
              />
            </a>
          </Link>
          <span className='profile__name'>{primary_author.name}</span>
        </div>
        <span>{formatDate}</span>
      </div>
      {primary_tag && (
        <section className='category'>
          <Link href={`/tags/${encodeURIComponent(primary_tag.slug)}`}>
            <a>{primary_tag.name}</a>
          </Link>
        </section>
      )}
      <style jsx>{`
        .category {
          max-width: 700px;
          margin: 20px auto 0;
          text-align: center;
          font-size: 1.2rem;
          text-transform: capitalize;
          font-weight: 700;
        }
        .category a {
          text-decoration: none;
          color: #1c1c1c;
          text-align: center;
          transition: .2s; 
          border: 1px solid #ffffff;
          padding: 3px 10px;
          border-radius: 10px;
        }
        .category a:hover {
          opacity: 0.8;
        }
        .profile__post span {
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
        .profile__post {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 60px;
          width: 330px;
        }
        .profile__post .profile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 155px;
        }
        .profile__post .profile_avatar {
          height: 35px;
          border: 2px solid #ffffff;
          border-radius: 100%;
          display: block;
          width: 35px;
        }
        .profile__post .profile__image {
          border-radius: 100%;
          object-fit: cover;
          display: block;
          width: 100%;
          height: 100%;
          background: #e3e9ed;
        }
        @media screen and (max-width: 768px) {
          .profile__post {
            margin-top: 20px;
            width: 100%;
          }
          .profile__post .profile {
            justify-content: center;
          }
          .profile__post span {
            margin-left: 10px;
            font-size: 1rem;
            line-height: 1.2rem;
          }
          .category {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  )
}

export default PostProfile
