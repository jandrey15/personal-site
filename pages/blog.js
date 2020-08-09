import React from 'react'
// import ReactPaginate from 'react-paginate'

import Layout from 'components/Layout'
import PostsPagination from 'components/PostsPagination'
import PostsFeature from 'components/PostsFeature'
import Seo from 'components/Seo'
// import usePagination from 'hooks/usePagination'

import { getAllPostsForBlog } from '../lib/api'

const Blog = ({ posts, meta, feature, isProduction, API_URL, API_KEY }) => {
  // const { handlePageClick, data, page, pageCount } = usePagination({ meta, isProduction, API_URL, API_KEY })

  const SEO = {
    title: 'Blog - John Serrano',
    description: 'De qué hablo en mi blog: Desarrollo web, Tutoriales, artículos sobre tecnologías: JavaScript, Node.js, Docker, React, python, etc.',
    image: '',
    url: 'https://johnserrano.co/blog',
    titleOpenGraph: 'Blog - John Serrano',
    date: '',
    modified: '',
    imagenFacebook: '',
    imagenTwitter: '',
    type: 'article'
  }

  // if (data.length > 0) {
  //   posts = data
  // }
  // console.log('this is data -> ', data)
  // console.log(posts)

  return (
    <Layout>
      <Seo {...SEO} />
      <section id='Blog' className='container'>
        {feature && <PostsFeature {...feature} />}
        <PostsPagination
          posts={posts}
          meta={meta}
          isProduction={isProduction}
          API_URL={API_URL}
          API_KEY={API_KEY}
        />
      </section>
      <style jsx>{`
        .main {
          margin: 70px auto 0 auto;
          max-width: 700px;
        }

        .pauta {
          margin: 20px 0;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 70px 0 0;
        }

        p {
          font-size: 1.25rem;
          line-height: 2rem;
          font-weight: 400;
          margin: 20px 0 0;
          border-bottom: 2px solid #eeeeee;
          padding-bottom: 35px;
        }

        p strong {
          font-weight: 700;
        }

        p > a {
          position: relative;
          font-weight: 700;
          color: #0078ae;
          text-decoration: none;
        }

        p > a:hover {
          color: #1c1c1c;
        }

        p > a:before {
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

        p > a:hover:before {
          visibility: hidden;
          transform: scaleX(0);
        }
      `}</style>

      <style jsx global>{`         
        #Blog .pagination {
          display: flex;
          justify-content: space-around;
          list-style: none;
          padding: 0;
          margin: 50px auto;
          align-items: center;
          max-width: 500px;
        }

        #Blog li {
          height: 40px;
          width: 40px;
          background: #eeeeee;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #1c1c1c;
          cursor: pointer;
          transition: .2s;
          font-weight: 700;
        }

        #Blog li a {
          outline: none;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        #Blog li:hover {
          opacity: .8;
        }

        #Blog .active {
          background: #0078ae;
          color: #ffffff;
        }

        #Blog .previous, #Blog .next {
          width: 80px;
        } 

        #Blog .pagination .disabled { display: none; }  

        @media screen and (max-width: 768px) {
          #Blog .pagination {
            flex-wrap: wrap;
          }
          #Blog li {
            margin: 0px 0 10px;
          }
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps () {
  const { data: { posts, meta }, feature = false } = await getAllPostsForBlog()
  // console.log(posts)
  // console.log('This is meta -> ', meta)
  const isProduction = process.env.NODE_ENV === 'production'
  const DOMAIN_URL = process.env.DOMAIN_URL
  const API_URL = process.env.API_URL
  const API_KEY = process.env.API_KEY

  return {
    props: {
      posts,
      meta,
      feature,
      isProduction,
      DOMAIN_URL,
      API_URL,
      API_KEY
    }
  }
}

export default Blog
