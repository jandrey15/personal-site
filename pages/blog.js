import React, { Component } from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
// import Cover from '../components/Cover'
import Posts from '../components/PostsGrid'
import PostsFeature from '../components/PostsFeature'
import ReactPaginate from 'react-paginate'
import Error from './_error'
import 'isomorphic-unfetch'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      page: 1
    }
  }

  static async getInitialProps ({ res }) {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      // const req = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=1&filter=featured:true&include=authors`)

      let [
        req,
        reqPosts
      ] = await Promise.all([
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=1&filter=featured:true&include=authors`
        ),
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=9&filter=featured:false&include=authors`
        )
      ])

      let { posts: feature } = await req.json()
      // let { posts } = await reqPosts.json()
      let data = await reqPosts.json()
      // console.log(data)

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          feature: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: data, feature: feature[0], statusCode: 200, API_URL, API_KEY }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        feature: [],
        statusCode: 503
      }
    }
  }

  async loadPostsFromServer () {
    const { API_URL, API_KEY } = this.props
    try {
      const req = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=9&filter=featured:false&include=authors&page=${this.state.page}`)

      let data = await req.json()
      // console.log(data)

      this.setState({
        data: data.posts,
        pageCount: Math.ceil(data.meta.pagination.total / data.meta.pagination.limit)
      })
    } catch (err) {
      console.error('Algo salio mal ', err)
    }
  }

  componentDidMount () {
    this.loadPostsFromServer()
  }

  handlePageClick = (event) => {
    // console.log(event)
    let page = event.selected + 1
    // console.log(page)

    this.setState({ page: page }, () => {
      this.loadPostsFromServer()
    })
    window.scrollTo(0, 0)
  }

  render () {
    const { data, feature, statusCode } = this.props
    let posts = data.posts

    if (this.state.data.length > 0) {
      posts = this.state.data
    }
    // console.log(feature)
    // console.log(data)

    if (statusCode !== 200) {
      // console.log('error...')
      return <Error statusCode={statusCode} />
    }

    const SEO = {
      title: 'John Serrano - Blog',
      description: '',
      image: '',
      url: 'https://johnserrano.co/blog',
      titleOpenGraph: 'John Serrano - Blog',
      date: '',
      modified: '',
      imagenFacebook: '',
      imagenTwitter: '',
      type: 'article'
    }

    return (
      <Layout {...SEO}>
        <section id='Blog' className='container'>
          <PostsFeature {...feature} />

          <Posts posts={posts} columns='3' />

          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </section>
        <style jsx>{`
          .main {
            margin: 70px auto 0 auto;
            max-width: 700px;
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
            max-width: 400px;
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
        `}</style>
      </Layout>
    )
  }
}

export default Home
