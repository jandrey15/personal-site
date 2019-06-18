/* eslint-disable camelcase */
import Util from '../helpers/util'

const PostsFeature = ({ title, feature_image, slug, custom_excerpt, excerpt, published_at, primary_author }) => {
  // console.log(props)
  return (
    <article id='PostsFeature'>
      <a href={`/blog/${slug}`}>
        <img className='picture' src={feature_image} alt={title} />
      </a>

      <div className='content'>
        <a href={`/blog/${slug}`} className='title'>
          <h2>{title}</h2>
        </a>
        <p>{ custom_excerpt ? custom_excerpt.substring(0, 160) : excerpt ? excerpt.substring(0, 160) : null}</p>
        <img className='profile__image' src={primary_author.profile_image} alt={primary_author.name} />
        <span>{primary_author.name}</span>
        <span> {Util.obtenerFecha(published_at)}</span>
        <a href={`/blog/${slug}`}>
          <span>Leer más</span>
        </a>
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

        #PostsFeature a {
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
          opacity: 0.8;
          color: #0078ae;
        }

        #PostsFeature p {
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin: 0;
        }

        .profile__image {
          height: 25px;
          object-fit: cover;
          width: 25px;
        }
      `}</style>
    </article>
  )
}

export default PostsFeature
