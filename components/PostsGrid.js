import React from 'react'
import TrackVisibility from 'react-on-screen'
import PostsDetail from './PostsDetail'
import PostsDetailHome from './PostsDetailHome'

const Posts = ({ posts = [], columns }) => {
  // Three columns of the section blog -> https://johnserrano.co/blog
  if (columns === '3') {
    return (
      <section id='Posts'>
        {posts.map(post => (
          <TrackVisibility once partialVisibility key={post.id}>
            {({ isVisible }) =>
              isVisible && (
                <PostsDetail key={post.id} {...post} />
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

  // Two columns of the section home -> https://johnserrano.co/
  return (
    <section id='Posts'>
      {posts.map(post => (
        <PostsDetailHome {...post} />
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
        @media screen and (max-width: 630px) {
          #Posts {
            grid-template-columns: minmax(300px, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

export default React.memo(Posts)
