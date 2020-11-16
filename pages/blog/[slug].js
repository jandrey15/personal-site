import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactDisqusComments from 'react-disqus-comments'
import TrackVisibility from 'react-on-screen'

import Layout from 'components/Layout'
import PostHeader from 'components/PostHeader'
import PostTitle from 'components/PostTitle'
import Newsletter from 'components/Newsletter'
import PostsGrid from 'components/PostsGrid'
import PostBody from 'components/PostBody'
import ProfileFollow from 'components/ProfileFollow'
import ProfileApoyar from 'components/ProfileApoyar'
import Seo from 'components/Seo'
import ProgressBar from 'components/ProgressBar'
import ErrorPage from '../404'

import { getAllPostsWithSlug, getPostSlug, getMorePosts } from '../../lib/api'

export default function Post ({ post, posts, isProduction, DOMAIN_URL }) {
  const router = useRouter()
  const morePosts = posts

  if (!router.isFallback && !post) {
    // console.log('ok paso 404')
    return <>
      <Head>
        <meta name='robots' content='noindex' />
      </Head>
      <ErrorPage statusCode={404} />
    </>
  }

  // console.log(isProduction)

  useEffect(() => {
    if (isProduction) {
      // eslint-disable-next-line no-undef
      fbq('track', 'ViewContent', { content_name: post.title })
    }

    const iframe = document.querySelector('#Post .body iframe')
    if (iframe) {
      const parent = iframe.parentElement
      parent.className = 'kg-card kg-embed-card Video'
    }
  }, [])

  let SEO

  if (post) {
    let description = post.meta_description || post.custom_excerpt || post.excerpt

    description = description.replace(/(\r\n|\n|\r)/gm, '')

    SEO = {
      title: post.title,
      description: description,
      image: post.feature_image ? post.feature_image.replace(
        'admin',
        'static'
      ) : `${DOMAIN_URL}/static/default.jpg`,
      url: post.canonical_url || `${DOMAIN_URL}/blog/${post.slug}`,
      titleOpenGraph: post.meta_title || post.title,
      date: post.published_at,
      modified: post.updated_at,
      imagenFacebook: post.feature_image ? post.feature_image.replace(
        'admin',
        'static'
      ) : `${DOMAIN_URL}/static/default.jpg`,
      imagenTwitter: post.feature_image ? post.feature_image.replace(
        'admin',
        'static'
      ) : `${DOMAIN_URL}/static/default.jpg`,
      type: 'article'
    }
  }

  return (
    <Layout>
      {/* <progress id='progress' ref={refProgress} value={0} max={max} />  Se creo en un componente porque el hook me hacia render de todo por performance es mejor tenerlo en un component */}
      <ProgressBar />
      {
        router.isFallback ? (
          <PostTitle flex>Loading…</PostTitle>
        ) : (
          <>
            <Seo {...SEO}>
              <link rel='preconnect' href='https://cdnjs.cloudflare.com' crossorigin />
              <link rel='dns-prefetch' href='https://cdnjs.cloudflare.com' />
              <link
                rel='stylesheet'
                href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/railscasts.min.css' />
            </Seo>
            <PostHeader
              title={post.title}
              profile={false}
              caption={false}
              cover={post.feature_image ? post.feature_image : '/gallery.jpg'}
              post
              published_at={post.published_at}
              primary_author={post.primary_author}
              primary_tag={post.primary_tag}
            />

            <section id='Post' className='container'>
              <PostBody html={post.html} />

              <ProfileFollow />

              <ProfileApoyar />

              <Newsletter />

              <TrackVisibility once partialVisibility>
                {({ isVisible }) => isVisible && (
                  <ReactDisqusComments
                    shortname='johnserrano'
                    identifier={post.slug}
                    title={post.title}
                    url={`http://johnserrano.co/blog/${post.slug}`}
                    className='disqus'
                  />
                )}
              </TrackVisibility>
              <h2 className='more__posts'>Otros artículos</h2>
              {morePosts.length > 0 && <PostsGrid posts={morePosts} columns='3' />}

            </section>
          </>
        )
      }

      <style jsx global>{`
        .pauta {
          margin: 20px 0;
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
        #Post .disqus {
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
      `}</style>
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const post = await getPostSlug(params.slug)
  const posts = await getMorePosts(params.slug)
  // console.log('THis is post:')
  // console.log(post)
  const isProduction = process.env.NODE_ENV === 'production'
  const DOMAIN_URL = process.env.DOMAIN_URL

  return {
    props: {
      post,
      posts,
      isProduction,
      DOMAIN_URL
    },
    revalidate: 1
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
