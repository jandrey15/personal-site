/* eslint-disable no-undef */
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Newsletter from '../components/Newsletter'
import Cover from '../components/Cover'
import PostsGrid from '../components/PostsGrid'
import Error from './_error'
import Highlight from 'react-highlight'
import ReactDisqusComments from 'react-disqus-comments'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      max: 0,
      value: 0
    }
  }

  static async getInitialProps ({ res, query }) {
    // console.log('SLUG', query.slug)

    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      // const req = await fetch(`${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`)
      let [
        req,
        reqPosts
      ] = await Promise.all([
        fetch(
          `${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`
        ),
        fetch(
          `${API_URL}/posts/?key=${API_KEY}&limit=3&filter=featured:false&include=authors`
        )
      ])
      const { posts: post } = await req.json()
      const { posts: morePost } = await reqPosts.json()
      // console.log('Is this post -> ', post)
      // console.log(morePost)

      if (post === undefined) {
        const reqPage = await fetch(`${API_URL}/pages/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`)
        const { pages: page } = await reqPage.json()
        // const pages = await reqPage.json()
        if (reqPage.status >= 400) {
          res.statusCode = req.status
          console.warn(req.status)
          return {
            data: [],
            morePost: [],
            statusCode: req.status
          }
        }
        // console.log('Is this page -> ', page)
        return { data: page[0], morePost, statusCode: 200 }
      }

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          morePost: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: post[0], morePost, statusCode: 200 }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        morePost: [],
        statusCode: 503
      }
    }
  }

  componentDidMount () {
    setTimeout(() => {
      let addthisScript = document.createElement('script')
      addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b5f1245e5550d5c')
      if (document.body) document.body.appendChild(addthisScript)
    })
    // const markup = this.props.data.html
    // console.log(hljs.highlight('javascript', markup).value)
    // hljs.initHighlightingOnLoad()
    // console.log(document.body.clientHeight)
    // console.log(window.innerHeight)
    const docHeight = document.body.clientHeight
    const winHeight = window.innerHeight

    const max = docHeight - winHeight
    this.setState({
      max
    })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    // console.log(scrollTop)
    document.querySelector('#progress')
      .value = scrollTop
  }

  render () {
    const { data, morePost, statusCode } = this.props
    // console.log(data)

    if (statusCode !== 200) {
      // console.log('error...')
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title={data.title}>
        <Cover title={data.title} profile={false} caption={false} cover={data.feature_image} post published_at={data.published_at} primary_author={data.primary_author} primary_tag={data.primary_tag} />
        <progress id='progress' value={this.state.value} max={this.state.max} />
        <section id='Post' className='container'>

          <div
            className='addthis_inline_share_toolbox'
            data-url={`http://localhost:3001/blog/${data.slug}`}
            data-title={data.title}
          />

          <article className='body'>
            <Highlight innerHTML>
              {data.html}
              {/* <article className='body' dangerouslySetInnerHTML={{ __html: data.html }} /> */}
            </Highlight>
          </article>
          <Newsletter />
          <ReactDisqusComments
            shortname='johnserrano'
            identifier={data.slug}
            title={data.title}
            url={`http://johnserrano.co/blog/${data.slug}`}
          />
          <h2>Otros artículos</h2>
          <PostsGrid posts={morePost} columns='3' />
        </section>
        <style jsx global>{`

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
          #Post h2 {
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
            margin: .5em 0 .2em;
          }
          #Post .body h3 {
            font-size: 2rem;
            line-height: 2.5rem;
            font-weight: 700;
            margin: .5em 0 1em;
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

          #Post .body pre a, #Post .body code a {
            text-decoration: none;
            color: #ffffff;
          }

          #Post .body code a:hover {
            color: #ffffff;
          }

          #Post img, #Post iframe, #Post video {
            width: auto;
            height: auto;
            max-width: 100%;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Post
