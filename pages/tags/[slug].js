import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from 'components/Layout'
import Cover from 'components/Cover'
import PostTitle from 'components/PostTitle'
import PostsGrid from 'components/PostsGrid'
import ErrorPage from '../404'

import { getAllTagsWithSlug, getPostTagSlug } from '../../lib/api'

export default function Tag ({ posts, slug }) {
  const router = useRouter()

  if (!router.isFallback && posts.length <= 0) {
    // console.log('ok paso 404')
    return <>
      <Head>
        <meta name='robots' content='noindex' />
      </Head>
      <ErrorPage statusCode={404} />
    </>
  }

  let SEO

  if (posts) {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
    SEO = {
      title: capitalize(slug),
      description: '',
      image: '',
      url: `https://johnserrano.co/tags/${slug}`,
      titleOpenGraph: '',
      date: '',
      modified: '',
      imagenFacebook: '',
      imagenTwitter: '',
      type: 'article'
    }
  }

  return (
    <Layout {...SEO}>
      {
        router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Cover cover='/'>
              <PostTitle capitalize='capitalize'>{slug}</PostTitle>
            </Cover>
            <section id='Tag' className='container'>
              <PostsGrid posts={posts} columns='3' />
            </section>
          </>
        )
      }
      <style jsx global>{`
        #Tag {
          margin-top: 70px;
          flex: 1;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const { posts } = await getPostTagSlug(params.slug)
  // console.log(posts)
  return {
    props: {
      posts,
      slug: params.slug
    }
  }
}

export async function getStaticPaths () {
  const allTags = await getAllTagsWithSlug()

  // console.log(allTags)

  return {
    paths: allTags.map((tag) => `/tags/${tag.slug}`) || [],
    fallback: true
  }
}
