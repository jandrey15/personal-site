/* eslint-disable camelcase */
import moment from 'moment'
moment.locale('es')

const PostsFeature = ({ title, feature_image, slug, custom_excerpt, excerpt, published_at, primary_author }) => {
  // console.log(props)
  // console.log(moment().format())
  // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
  // console.log(moment(published_at, 'YYYYMMDD').fromNow())
  // console.log(moment(published_at).format('DD/MM/YYYY'))
  return (
    <article id='PostsFeature'>
      <a href={`/blog/${slug}`}>
        <img className='picture' src={feature_image} alt={title} />
      </a>

      <div className='content'>
        <header className='post__header'>
          <a href={`/blog/${slug}`} className='title'>
            <h2>{title}</h2>
          </a>
          <p>{ custom_excerpt ? custom_excerpt.substring(0, 160) : excerpt ? excerpt.substring(0, 160) : null}</p>
        </header>
        <footer className='post__meta'>
          <div className='profile'>
            <img className='profile__image' src={primary_author.profile_image} alt={primary_author.name} />
            {/* <span className='profile__name'>{primary_author.name}</span> */}
          </div>
          <span>{moment(published_at, 'YYYYMMDD').fromNow()}</span>
          <a href={`/blog/${slug}`}>
            <span>Leer más</span>
          </a>
        </footer>
      </div>
      <style jsx>{`
        #PostsFeature {
          display: grid;
          grid-template-columns: 480px 1fr;
          grid-column-gap: 20px;
          max-width: 800px;
          margin: 50px auto;
        }

        #PostsFeature .picture {
          height: 270px;
          object-fit: cover;
          width: 480px;
        }

        #PostsFeature .title {
          text-decoration: none;
          color: #1c1c1c;
          display: flex;
        }

        #PostsFeature h2 {
          font-size: 1.7rem;
          line-height: 2rem;
          margin: 0 0 15px;
          transition: .2s;
        }

        #PostsFeature .title:hover h2 {
          opacity: 0.9;
          color: #0078ae;
        }

        #PostsFeature p {
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin: 0;
        }

        .profile {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .profile__image {
          height: 35px;
          overflow: hidden;
          border: 1px solid #0078ae;
          border-radius: 100%;
          width: 35px;
        }

        .post__meta {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 20px;
        }

        .post__meta span {
          font-weight: 700;
        }
        .post__meta a {
          color: #0078ae;
          text-decoration: none;
        }
      `}</style>
    </article>
  )
}

export default PostsFeature
