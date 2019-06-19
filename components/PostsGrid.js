import moment from 'moment'
moment.locale('es')

const Posts = ({ posts, columns }) => {
  // console.log(posts)
  if (columns === '3') {
    return (
      <section id='Posts'>
        {posts.map(post => (
          <article className='post' key={post.id}>
            <header className='post__header'>
              <a href={`/blog/${post.slug}`}>
                <img src={post.feature_image} alt={post.title} />
              </a>
              <div className='content'>
                <a href={`/blog/${post.slug}`} className='title'>
                  <h2>{post.title}</h2>
                </a>
                <p>{ post.custom_excerpt ? post.custom_excerpt.substring(0, 160) : post.excerpt ? post.excerpt.substring(0, 160) : null}</p>
              </div>
            </header>
            <footer className='post__meta'>
              <div className='profile'>
                <img className='profile__image' src={post.primary_author.profile_image} alt={post.primary_author.name} />
                {/* <span className='profile__name'>{post.primary_author.name}</span> */}
              </div>
              <span>{moment(post.published_at, 'YYYYMMDD').fromNow()}</span>
              <a href={`/blog/${post.slug}`}>
                <span>Leer más</span>
              </a>
            </footer>
          </article>
        ))}
        <style jsx>{`
          #Posts {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            grid-column-gap: 20px;
            grid-row-gap: 30px;
            margin: 0 auto;
            justify-content: center;
            padding-bottom: 50px;
            border-bottom: 2px solid #eeeeee;
          }
          
          {/* border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px; 
            border: 1px solid #eeeeee;          
            transition: .5s;
          */}
          #Posts .content {
            padding: 10px 5px;
            border-top: none;
          }
  
          {/* #Posts .post:hover .content {
            border-color: #0078ae;
          } */}

          #Posts .post {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 500px;
          }
  
          #Posts img {
            height: 200px;
            object-fit: cover;
            width: 100%;
          }
  
          #Posts h2 {
            font-size: 1.7rem;
            line-height: 2rem;
            margin: 0 0 15px;
            transition: .2s;
          }
  
          #Posts p {
            font-size: 1.2rem;
            line-height: 1.7rem;
            margin: 0;
          }
  
          #Posts a {
            text-decoration: none;
            color: #1c1c1c;
            display: flex;
          }
  
          #Posts .title:hover h2 {
            opacity: 0.9;
            color: #0078ae;
          }

          #Posts .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          #Posts .profile__image {
            height: 35px;
            overflow: hidden;
            border: 1px solid #0078ae;
            border-radius: 100%;
            width: 35px;
          }

          #Posts .post__meta {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 20px 0;
          }

          #Posts .post__meta span {
            font-weight: 700;
          }
          #Posts .post__meta a {
            color: #0078ae;
            text-decoration: none;
          }
        `}</style>
      </section>
    )
  }

  return (
    <section id='Posts'>
      {posts.map(post => (
        <article className='post' key={post.id}>
          <a href={`/blog/${post.slug}`}>
            <img src={post.feature_image} alt={post.title} />
          </a>
          <div className='content'>
            <a href={`/blog/${post.slug}`} className='title'>
              <h2>{post.title}</h2>
            </a>
            <p>{ post.custom_excerpt ? post.custom_excerpt.substring(0, 160) : post.excerpt ? post.excerpt.substring(0, 160) : null}</p>
          </div>
        </article>
      ))}
      <style jsx>{`
        #Posts {
          display: grid;
          grid-template-columns: repeat(2, 340px);
          grid-column-gap: 20px;
          grid-row-gap: 30px;
          margin: 30px 0 0;
          padding-bottom: 50px;
          border-bottom: 2px solid #eeeeee;
        }
        
        {/* border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px; 
          border: 1px solid #eeeeee;          
          transition: .5s;
        */}
        #Posts .content {
          padding: 10px 5px;
          border-top: none;
        }

        {/* #Posts .post:hover .content {
          border-color: #0078ae;
        } */}

        #Posts img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }

        #Posts h2 {
          font-size: 1.7rem;
          line-height: 2rem;
          margin: 0 0 15px;
          transition: .2s;
        }

        #Posts p {
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin: 0;
        }

        #Posts a {
          text-decoration: none;
          color: #1c1c1c;
          display: flex;
        }

        #Posts .title:hover h2 {
          opacity: 0.9;
          color: #0078ae;
        }
      `}</style>
    </section>
  )
}

export default Posts
