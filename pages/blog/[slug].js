import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Highlight from 'react-highlight'
import ReactDisqusComments from 'react-disqus-comments'
import Layout from 'components/layout'
import PostHeader from 'components/PostHeader'
import PostTitle from 'components/PostTitle'
import Newsletter from 'components/Newsletter'
import PostsGrid from 'components/PostsGrid'
// import ErrorPage from '../_error'
import { getAllPostsWithSlug, getPostSlug, getPostMore } from '../../lib/api'

export default function Post ({ post, posts, preview }) {
  const router = useRouter()
  // const morePosts = posts?.edges
  const morePosts = posts

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <PostHeader
        title={post.title}
        profile={false}
        caption={false}
        cover={post.feature_image ? post.feature_image : '/static/gallery.jpg'}
        post
        published_at={post.published_at}
        primary_author={post.primary_author}
        primary_tag={post.primary_tag}
      />

      {/* <progress id='progress' value={this.state.value} max={this.state.max} /> */}

      <section id='Post' className='container'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='body'>
              <Highlight innerHTML>
                {post.html}
                {/* <article className='body' dangerouslySetInnerHTML={{ __html: post.html }} /> */}
              </Highlight>
            </article>

            <div className='follow'>
              <p>
                Soy <strong>John Serrano</strong>. <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc. Me puedes encontrar en las siguientes redes sociales:
              </p>
              <ul className='follow__buttons'>
                <li><a href='https://www.facebook.com/johnserrano15' title='Facebook' target='_blank'><img alt='en Facebook' src='/follow/Facebook.svg' /></a></li>
                <li><a href='https://twitter.com/jandrey15' target='_blank' title='Twitter'><img alt='Twitter' src='/follow/Twitter.svg' /></a></li>
                <li><a href='https://www.linkedin.com/in/jandreys15' target='_blank' title='LinkedIn' ><img alt='LinkedIn' src='/follow/LinkedIn.svg' /></a></li>
              </ul>
            </div>

            <div className='apoyar'>
              <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por su apoyo.</p>
              <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                <input type='hidden' name='cmd' value='_s-xclick' />
                <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
                <input type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
              </form>
            </div>

            <Newsletter />

            <ReactDisqusComments
              shortname='johnserrano'
              identifier={post.slug}
              title={post.title}
              url={`http://johnserrano.co/blog/${post.slug}`}
            />
            <h2 className='more__posts'>Otros artículos</h2>
            {morePosts.length > 0 && <PostsGrid posts={morePosts} columns='3' />}
          </>
        )}

      </section>
      <style jsx global>{`
        .pauta {
          margin: 20px 0;
        }

        .apoyar, .follow {
          max-width: 700px;
          margin: 50px auto 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.25rem;
          border-top: 2px solid #eeeeee;
          padding-top: 30px;
        }
        .apoyar p {            
          text-align: center; 
          line-height: 1.5rem;
          border: none;
        }

        progress {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 2px;
          -webkit-appearance: none;
            -moz-appearance: none;
                  appearance: none;
          border: none;
          background-color: transparent;
          color: #0078ae;
          z-index: 1;
        }

        progress::-webkit-progress-bar {
          background-color: transparent;
        }

        progress::-webkit-progress-value {
          background-color: #0078ae;
        }

        progress::-moz-progress-bar {
          background-color: #0078ae;
        }
        .addthis_inline_share_toolbox {
          margin: 0 auto;
          max-width: 700px;            
          text-align: center;
        }
        #disqus_thread {
          max-width: 700px;
          margin: 0 auto;
        }
        #Post {
          margin-top: 30px;
        }
        #Post .more__posts {
          font-size: 2rem;
          font-weight: 700;
          margin: 70px auto 50px;
          line-height: 2.5rem;
          max-width: 700px;
        }
        #Post .body {
          font-size: 1.25rem;
          line-height: 2rem;
          font-weight: 400;
          margin: 0 auto;
          max-width: 700px;
          overflow: hidden;
        }
        #Post .body h5 {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 700;
          margin: 2em 0 .2em;
        }
        #Post .body h3 {
          font-size: 2rem;
          line-height: 2.5rem;
          font-weight: 700;
          margin: 2em 0 1em;
          padding-bottom: 10px;
          border-bottom: 2px solid #eeeeee;
        }
        #Post .body pre {
          font-size: 1rem;
        }
        
        #Post .body p a {
          position: relative;
          font-weight: 700;
          color: #0078ae;
          text-decoration: none;
        }

        #Post .body p a:hover {
          color: #1c1c1c;
        }

        #Post .body p a:before {
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

        #Post .body p a:hover:before {
          visibility: hidden;
          transform: scaleX(0);
        }

        #Post p > code {
          background: #232323;
          color: #e6e1dc;
          box-sizing: content-box;
          word-break: break-all;
          padding: 0 5px 2px;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 400;
          border-radius: 3px;
        }

        #Post .body blockquote {
          margin: 0 0 1.5em;
          padding: 0 1.5em;
          border-left: 3px solid #232323;
        }

        #Post .body pre a, #Post .body code a {
          text-decoration: none;
          color: #ffffff;
        }

        #Post .body code a:hover {
          color: #ffffff;
        }

        #Post .body .kg-image-card img,
        #Post .body iframe, #Post .body video {
          margin: 0 auto;
          display: block;
          max-width: 100%;
        }

        #Post .body figure {
          margin: .8em 0 2.3em;
        }

        #Post .body .kg-bookmark-card {
          width: 100%;
        }
        #Post .body .kg-card.kg-bookmark-card {
          margin: .8em 0 2.3em;
        }
        #Post .body .kg-bookmark-container {
          color: #15171a;
          text-decoration: none;
          box-shadow: 0 2px 5px -1px rgba(0,0,0,.15), 0 0 1px rgba(0,0,0,.09);

          display: flex;
          min-height: 148px;
          border-radius: 3px;
        }
        #Post .body .kg-bookmark-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
        }
        #Post .body .kg-bookmark-thumbnail {
          position: relative;
          min-width: 33%;
          max-height: 100%;
        }
        #Post .body .kg-bookmark-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0 3px 3px 0;
          -o-object-fit: cover;
          object-fit: cover;
        }
        #Post .body .kg-bookmark-title {
          color: #1c1c1c;
          font-size: 1.2rem;
          line-height: 1.3em;
          font-weight: 600;
          transition: color .2s ease-in-out;
        }
        #Post .body .kg-bookmark-description {
          display: -webkit-box;
          overflow-y: hidden;
          margin-top: 12px;
          max-height: 48px;
          color: #5d7179;
          font-size: 1rem;
          line-height: 1.2em;
          font-weight: 400;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        #Post .body .kg-bookmark-metadata {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 14px;
          color: #5d7179;
          font-size: 1.5rem;
          font-weight: 400;
        }
        #Post .body .kg-bookmark-icon {
          margin-right: 8px;
          width: 22px;
          height: 22px;
        }
        #Post .body .kg-bookmark-publisher {
          overflow: hidden;
          max-width: 240px;
          line-height: 1.5em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        #Post .body .kg-gallery-container {
          display: flex;
          flex-direction: column;
          max-width: 700px;
          width: 100vw;
        }
        #Post .body .kg-gallery-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        #Post .body .kg-gallery-image img {
          display: block;
          margin: 0;
          width: 100%;
          height: 100%;
        }
        
        .follow p {
          border: none;
          line-height: 1.5rem;
        }

        ul.follow__buttons {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-evenly;
          max-width: 190px;
          width: 100%;
        }

        ul.follow__buttons li{
          display: inline;
        }
        ul.follow__buttons img{
          width: 32px;
        }

        #Post .body .kg-embed-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        #Post .body .kg-embed-card.Video {
          padding-top: 56.25%;
          width: 100%;
          position: relative;
        }
        #Post .body .kg-embed-card.Video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 768px) { 
          #Post .body figure {
            margin: .2em 0 1.3em;
          }

          #Post .body .kg-bookmark-container {
            flex-direction: column;
          }
          #Post .body .kg-bookmark-content { order: 2; }
          #Post .body .kg-bookmark-thumbnail { 
            order: 1; 
            min-height: 160px;
            width: 100%;
          }

        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const post = await getPostSlug(params.slug)
  const posts = await getPostMore(params.slug)
  // console.log(post)

  return {
    props: {
      post,
      posts
    }
  }
}

export async function getStaticPaths () {
  const allPosts = await getAllPostsWithSlug()

  // console.log(allPosts)

  return {
    paths: allPosts.map((post) => `/blog/${post.slug}`) || [],
    fallback: true
  }
}
