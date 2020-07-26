/* eslint-disable no-undef */
import Layout from 'components/Layout'
import Cover from 'components/Cover'
import PostTitle from 'components/PostTitle'
import PostsGrid from 'components/PostsGrid'

import { getAllTags } from '../lib/api'

const Tags = ({ posts }) => {
  const title = posts[0].primary_tag !== null ? posts[0].primary_tag.name : ''

  const SEO = {
    title: title,
    description: '',
    image: '',
    url: 'https://johnserrano.co/tags',
    titleOpenGraph: '',
    date: '',
    modified: '',
    imagenFacebook: '',
    imagenTwitter: '',
    type: 'article'
  }

  return (
    <Layout {...SEO}>
      <Cover cover='/'>
        <PostTitle capitalize='capitalize'>{title}</PostTitle>
      </Cover>
      <section id='Tag' className='container'>
        {posts.length > 0 && <PostsGrid posts={posts} columns='3' />}
      </section>
      <style jsx global>{`
        #Tag {
          margin-top: 70px;
          flex: 1;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps () {
  const { data: { posts } } = await getAllTags()
  // console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default Tags
