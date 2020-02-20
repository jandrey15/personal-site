import Link from 'next/link'
import TrackVisibility from 'react-on-screen'
import moment from 'moment'
moment.locale('es')

const Posts = ({ posts, columns }) => {
  // console.log(posts)
  if (columns === '3') {
    return (
      <section id='Posts'>
        {posts.map(post => (
          <TrackVisibility once partialVisibility key={post.id}>
            {({ isVisible }) =>
              isVisible && (
                <article className='post'>
                  <header className='post__header'>
                    <Link prefetch href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                      <a>
                        <img
                          src={post.feature_image ? post.feature_image.replace('admin', 'static') : '/static/gallery.jpg'}
                          alt={post.title}
                        />
                      </a>
                    </Link>
                    <div className='content'>
                      <Link prefetch href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                        <a className='title'>
                          <h2>{post.title}</h2>
                        </a>
                      </Link>
                      <p>{ post.custom_excerpt ? post.custom_excerpt.substring(0, 160) : post.excerpt ? post.excerpt.substring(0, 160) : null}</p>
                    </div>
                  </header>
                  <footer className='post__meta'>
                    <div className='profile'>
                      <Link prefetch href='/sobre-mi'>
                        <a className='profile_avatar'>
                          <img
                            className='profile__image'
                            src={post.primary_author.profile_image
                              ? post.primary_author.profile_image
                              : 'https://static.ghost.org/v3.0.0/images/ghost.png'}
                            alt={post.primary_author.name}
                          />
                        </a>
                      </Link>
                      <span className='profile__name'>{post.primary_author.name}</span>
                    </div>
                    <span>{moment(post.published_at, 'YYYYMMDD').fromNow()}</span>
                    <Link prefetch href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                      <a className='title'>
                        <span>Leer más</span>
                      </a>
                    </Link>
                  </footer>
                </article>
              )
            }
          </TrackVisibility>
        ))}
        <style jsx>{`
          #Posts {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            grid-column-gap: 20px;
            grid-row-gap: 30px;
            margin: 50px auto 0;
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
  
          #Posts .post__header img {
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
            position: relative;
          }

          #Posts .profile:hover .profile__name {
            display: block;
            opacity: 1;
          }

          #Posts .profile__name { 
            position: absolute;            
            bottom: -20px;
            left: -32px;
            text-align: center;
            width: 100px;
            opacity: 0;
            transition: .2s; 
          }

          #Posts .profile_avatar {
            height: 35px;
            border: 2px solid #ffffff;
            border-radius: 100%;
            display: block;
            width: 35px;
          }

          #Posts .profile__image {
            border-radius: 100%;
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
            background: #e3e9ed;
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

          #Posts .post__meta > a {
            position: relative;
            font-weight: 700;
            color: #0078ae;
            text-decoration: none;
          }

          #Posts .post__meta > a:hover {
            color: #1c1c1c;
          }

          #Posts .post__meta > a:before {
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

          #Posts .post__meta > a:hover:before {
            visibility: hidden;
            transform: scaleX(0);
          }

          @media screen and (max-width: 768px) {
            #Posts {
              grid-template-columns: repeat(2, 300px);
            }
          }
          @media screen and (max-width: 630px) {
            #Posts {
              grid-template-columns: minmax(300px, 1fr);
            }
          }
        `}</style>
      </section>
    )
  }

  return (
    <section id='Posts'>
      {posts.map(post => (
        <TrackVisibility once partialVisibility key={post.id}>
          {({ isVisible }) =>
            isVisible && (
              <article className='post' key={post.id}>
                <Link prefetch href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                  <a>
                    <img
                      src={post.feature_image ? post.feature_image.replace('admin', 'static') : '/static/gallery.jpg'}
                      alt={post.title}
                    />
                  </a>
                </Link>
                <div className='content'>
                  <Link prefetch href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                    <a className='title'>
                      <h2>{post.title}</h2>
                    </a>
                  </Link>
                  <p>{ post.custom_excerpt ? post.custom_excerpt.substring(0, 160) : post.excerpt ? post.excerpt.substring(0, 160) : null}</p>
                </div>
              </article>
            )
          }
        </TrackVisibility>
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

        @media screen and (max-width: 630px) {
          #Posts {
            grid-template-columns: minmax(300px, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

export default Posts
