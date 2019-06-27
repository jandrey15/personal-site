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
            <a href='/sobre-mi' className='profile_avatar'>
              <img className='profile__image' src={primary_author.profile_image} alt={primary_author.name} />
            </a>
            <span className='profile__name'>{primary_author.name}</span>
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
    </article>
  )
}

export default PostsFeature
