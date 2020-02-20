/* eslint-disable no-undef */
import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'
import Layout from '../components/Layout'
import Newsletter from '../components/Newsletter'
import Cover from '../components/Cover'
import PostsGrid from '../components/PostsGrid'
import Error from './_error'
import Highlight from 'react-highlight'
import ReactDisqusComments from 'react-disqus-comments'
import 'isomorphic-unfetch'

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
    const DOMAIN_URL = process.env.DOMAIN_URL

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
          `${API_URL}/posts/?key=${API_KEY}&limit=3&filter=featured:false%2Bslug:-${query.slug}&include=authors`
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
            domainUrl: DOMAIN_URL,
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
          domainUrl: DOMAIN_URL,
          statusCode: req.status
        }
      }

      // console.log(json)
      return { data: post[0], morePost, domainUrl: DOMAIN_URL, statusCode: 200 }
    } catch (err) {
      // res.statusCode = 503
      if (res) res.statusCode = 503
      console.error(err)
      return {
        data: [],
        morePost: [],
        domainUrl: DOMAIN_URL,
        statusCode: 503
      }
    }
  }

  componentDidMount () {
    // setTimeout(() => {
    //   let addthisScript = document.createElement('script')
    //   addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b5f1245e5550d5c')
    //   addthisScript.async = true
    //   addthisScript.defer = true
    //   if (document.body) document.body.appendChild(addthisScript)
    // })
    // const markup = this.props.data.html
    // console.log(hljs.highlight('javascript', markup).value)
    // hljs.initHighlightingOnLoad()
    const docHeight = document.body.clientHeight
    const winHeight = window.innerHeight

    const max = docHeight - winHeight
    this.setState({
      max
    })
    window.addEventListener('scroll', this.handleScroll)

    // const elem = document.createElement('script')
    // elem.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    // elem.async = true
    // elem.defer = true
    // document.body.appendChild(elem)

    const { data } = this.props

    window.addthis_reload = function () {
      if (!window.addthis) {
        window['addthis_config'] = { 'data_track_addressbar': false, 'pubid': 'ra-5b5f1245e5550d5c' }
        let addthisScript = document.createElement('script')
        addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js')
        // addthisScript.async = true
        addthisScript.defer = true
        if (document.body) document.body.appendChild(addthisScript)
      } else {
        addthis.layers.refresh()
        window['addthis_share'].url = window.location.href
        window['addthis_share'].title = data.title
        window.addthis.toolbox('.addthis_inline_share_toolbox')
        // console.log(window.location.href)
      }
    }
    window.addthis_reload()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    // console.log(scrollTop)
    document.querySelector('#progress').value = scrollTop
  }

  render () {
    const { data, morePost, domainUrl, statusCode } = this.props
    // console.log(data)

    if (statusCode !== 200) {
      // console.log('error...')
      return <Error statusCode={statusCode} />
    }

    const SEO = {
      title: data.title,
      description: data.meta_description || data.custom_excerpt || data.excerpt,
      image: data.feature_image ? data.feature_image.replace(
        'admin',
        'static'
      ) : `${domainUrl}/static/default.jpg`,
      url: data.canonical_url || `${domainUrl}/${data.slug}`, // Corregir path
      titleOpenGraph: data.meta_title || data.title,
      date: data.published_at,
      modified: data.updated_at,
      imagenFacebook: data.feature_image ? data.feature_image.replace(
        'admin',
        'static'
      ) : `${domainUrl}/static/default.jpg`,
      imagenTwitter: data.feature_image ? data.feature_image.replace(
        'admin',
        'static'
      ) : `${domainUrl}/static/default.jpg`,
      type: 'article'
    }

    return (
      <Layout {...SEO} >
        <Cover
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

          <div
            className='addthis_inline_share_toolbox'
          />

          <article className='body'>
            <Highlight innerHTML>
              {data.html}
              {/* <article className='body' dangerouslySetInnerHTML={{ __html: data.html }} /> */}
            </Highlight>
          </article>

          <TrackVisibility once partialVisibility>
            {({ isVisible }) => isVisible && (
              <div className='apoyar'>
                <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por su apoyo.</p>
                <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                  <input type='hidden' name='cmd' value='_s-xclick' />
                  <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
                  <input type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
                </form>
              </div>
            )}
          </TrackVisibility>

          <TrackVisibility once partialVisibility>
            {({ isVisible }) => isVisible && <Newsletter />}
          </TrackVisibility>
          <div className='pauta'>
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-3083367533294626'
              data-ad-slot='5525468930'
              data-ad-format='auto'
              data-full-width-responsive='true' />
          </div>

          <TrackVisibility once partialVisibility>
            {({ isVisible }) => isVisible && (
              <ReactDisqusComments
                shortname='johnserrano'
                identifier={data.slug}
                title={data.title}
                url={`http://johnserrano.co/blog/${data.slug}`}
              />
            )}
          </TrackVisibility>
          <h2>Otros artículos</h2>
          <PostsGrid posts={morePost} columns='3' />
        </section>
        <style jsx global>{`

          .pauta {
            margin: 20px 0;
          }

          .apoyar {
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
