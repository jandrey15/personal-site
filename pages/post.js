import React, { Component } from 'react'
import Layout from '../components/Layout'
import Newsletter from '../components/Newsletter'
import Cover from '../components/Cover'
import Highlight from 'react-highlight'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: 0,
      scrollMax: 0
    }
  }

  static async getInitialProps ({ res, query }) {
    // console.log('SLUG', query.slug)

    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    try {
      // eslint-disable-next-line no-undef
      const req = await fetch(`${API_URL}/posts/slug/${query.slug}/?key=${API_KEY}&include=authors,tags`)
      const { posts: post } = await req.json()
      // console.log(post)

      if (req.status >= 400) {
        res.statusCode = req.status
        console.warn(req.status)
        return {
          data: [],
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: post[0], statusCode: 200 }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        statusCode: 503
      }
    }
  }

  componentDidMount () {
    // const markup = this.props.data.html
    // console.log(hljs.highlight('javascript', markup).value)
    // hljs.initHighlightingOnLoad()
    // console.log(window.scrollY)
    // console.log(document.body.clientHeight)
    this.setState({
      scrollMax: document.body.clientHeight
    })
    // window.addEventListener('scroll', this.handleScroll)
  }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  // handleScroll = () => {
  //   let lastScrollY = window.scrollY

  //   this.setState({
  //     scrollY: lastScrollY
  //   })
  // }

  render () {
    const { data } = this.props
    // console.log(data)
    return (
      <Layout title={data.title}>
        <Cover title={data.title} profile={false} caption={false} cover={data.feature_image} post published_at={data.published_at} primary_author={data.primary_author} primary_tag={data.primary_tag} />
        <div className='floating-active floating-header'>
          <progress id='reading-progress' className='progress' value={this.state.scrollY} max={this.state.scrollMax}>
            <div className='progress-container'>
              <span className='progress-bar' />
            </div>
          </progress>
        </div>
        <section id='Post' className='container'>
          <article className='body'>
            <Highlight innerHTML>
              {data.html}
              {/* <article className='body' dangerouslySetInnerHTML={{ __html: data.html }} /> */}
            </Highlight>
          </article>
          <Newsletter />
        </section>
        <style jsx global>{`
          
          .floating-header {
            visibility: hidden;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            height: 60px;
            border-bottom: 1px solid rgba(0,0,0,.06);
            background: hsla(0,0%,100%,.95);
            transition: all .5s cubic-bezier(.19,1,.22,1);
            transform: translate3d(0,-120%,0);
          }
          .floating-active {
            visibility: visible;
            transition: all .5s cubic-bezier(.22,1,.27,1);
            transform: translateZ(0);
          }
          .progress {
            position: absolute;
            right: 0;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            border: none;
            color: #3eb0ef;
            background: transparent;
            appearance: none;
          }
          .progress-container {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 2px;
            background-color: transparent;
          }
          .progress-bar {
            display: block;
            width: 50%;
            height: inherit;
            background-color: #3eb0ef;
          }
          #Post {
            margin-top: 30px;
          }
          #Post .body {
            font-size: 1.25rem;
            line-height: 2rem;
            font-weight: 400;
            margin: 0 auto;
            max-width: 700px;
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
          #Post .body a {
            position: relative;
            font-weight: 700;
            color: #0078ae;
            text-decoration: none;
          }

          #Post .body a:hover {
            color: #1c1c1c;
          }

          #Post .body a:before {
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

          #Post .body a:hover:before {
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

          #Post img, #Post iframe, #Post video {
            width: 100%;
            height: auto;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Post
