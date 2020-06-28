import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Highlight from 'react-highlight'
import ReactDisqusComments from 'react-disqus-comments'
import Layout from '../../components/layout'
import PostHeader from '../../components/PostHeader'
import PostTitle from '../../components/PostTitle'
import Newsletter from '../components/Newsletter'
import PostsGrid from '../components/PostsGrid'
// import ErrorPage from '../_error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post ({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <PostHeader
        title={data.title}
        profile={false}
        caption={false}
        cover={data.feature_image ? data.feature_image : '/static/gallery.jpg'}
        post
        published_at={data.published_at}
        primary_author={data.primary_author}
        primary_tag={data.primary_tag}
      />

      <progress id='progress' value={this.state.value} max={this.state.max} />

      <section id='Post' className='container'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='body'>
              <Highlight innerHTML>
                {data.html}
                {/* <article className='body' dangerouslySetInnerHTML={{ __html: data.html }} /> */}
              </Highlight>
            </article>

            <div className='follow'>
              <p>
                Soy <strong>John Serrano</strong>. <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc. Me puedes encontrar en las siguientes redes sociales:
              </p>
              <ul className='follow__buttons'>
                <li><a href='https://www.facebook.com/johnserrano15' title='Facebook' target='_blank'><img alt='en Facebook' src='/static/follow/Facebook.svg' /></a></li>
                <li><a href='https://twitter.com/jandrey15' target='_blank' title='Twitter'><img alt='Twitter' src='/static/follow/Twitter.svg' /></a></li>
                <li><a href='https://www.linkedin.com/in/jandreys15' target='_blank' title='LinkedIn' ><img alt='LinkedIn' src='/static/follow/LinkedIn.svg' /></a></li>
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
              identifier={data.slug}
              title={data.title}
              url={`http://johnserrano.co/blog/${data.slug}`}
            />
            <h2 className='more__posts'>Otros artículos</h2>
            {morePosts.length > 0 && <PostsGrid posts={morePosts} columns='3' />}
          </>
        )}

      </section>
    </Layout>
  )
}

export async function getStaticProps ({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts
    }
  }
}

export async function getStaticPaths () {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true
  }
}
