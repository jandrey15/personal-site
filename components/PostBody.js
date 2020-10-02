import Highlight from 'react-highlight'

const PostBody = ({ html }) => {
  return (
    <article className='post__body'>
      <Highlight innerHTML>
        {html}
        {/* <article className='body' dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </Highlight>
      <style jsx global>{`
        .post__body {
          font-size: 1.25rem;
          line-height: 2rem;
          font-weight: 400;
          margin: 0 auto;
          max-width: 700px;
          overflow: hidden;
        }
        .post__body h5 {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 700;
          margin: 2em 0 .2em;
        }
        .post__body h3 {
          font-size: 2rem;
          line-height: 2.5rem;
          font-weight: 700;
          margin: 2em 0 1em;
          padding-bottom: 10px;
          border-bottom: 2px solid #eeeeee;
        }
        .post__body pre {
          font-size: 1rem;
        }
        
        .post__body p a {
          position: relative;
          font-weight: 700;
          color: #0078ae;
          text-decoration: none;
        }

        .post__body p a:hover {
          color: #1c1c1c;
        }

        .post__body p a:before {
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

        .post__body p a:hover:before {
          visibility: hidden;
          transform: scaleX(0);
        }

        p > code {
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

        .post__body blockquote {
          margin: 0 0 1.5em;
          padding: 0 1.5em;
          border-left: 3px solid #232323;
        }

        blockquote a {
          text-decoration: none;
          color: #0078ae;
        }
        blockquote a:hover { 
          text-decoration: underline;
        }

        .post__body pre a, .post__body code a {
          text-decoration: none;
          color: #ffffff;
        }

        .post__body code a:hover {
          color: #ffffff;
        }

        .post__body .kg-image-card img,
        .post__body iframe, .post__body video {
          margin: 0 auto;
          display: block;
          max-width: 100%;
        }

        .post__body figure {
          margin: .8em 0 2.3em;
        }

        .post__body .kg-bookmark-card {
          width: 100%;
        }
        .post__body .kg-card.kg-bookmark-card {
          margin: .8em 0 2.3em;
        }
        .post__body .kg-bookmark-container {
          color: #15171a;
          text-decoration: none;
          box-shadow: 0 2px 5px -1px rgba(0,0,0,.15), 0 0 1px rgba(0,0,0,.09);

          display: flex;
          min-height: 148px;
          border-radius: 3px;
        }
        .post__body .kg-bookmark-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
        }
        .post__body .kg-bookmark-thumbnail {
          position: relative;
          min-width: 33%;
          max-height: 100%;
        }
        .post__body .kg-bookmark-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0 3px 3px 0;
          -o-object-fit: cover;
          object-fit: cover;
        }
        .post__body .kg-bookmark-title {
          color: #1c1c1c;
          font-size: 1.2rem;
          line-height: 1.3em;
          font-weight: 600;
          transition: color .2s ease-in-out;
        }
        .post__body .kg-bookmark-description {
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
        .post__body .kg-bookmark-metadata {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 14px;
          color: #5d7179;
          font-size: 1.5rem;
          font-weight: 400;
        }
        .post__body .kg-bookmark-icon {
          margin-right: 8px;
          width: 22px;
          height: 22px;
        }
        .post__body .kg-bookmark-publisher {
          overflow: hidden;
          max-width: 240px;
          line-height: 1.5em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .post__body .kg-gallery-container {
          display: flex;
          flex-direction: column;
          max-width: 700px;
          width: 100vw;
        }
        .post__body .kg-gallery-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .post__body .kg-gallery-image img {
          display: block;
          margin: 0;
          width: 100%;
          height: 100%;
        } 
        .post__body .kg-embed-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .post__body .kg-embed-card.Video {
          padding-top: 56.25%;
          width: 100%;
          position: relative;
        }
        .post__body .kg-embed-card.Video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        @media screen and (max-width: 768px) { 
          .post__body figure {
            margin: .2em 0 1.3em;
          }

          .post__body .kg-bookmark-container {
            flex-direction: column;
          }
          .post__body .kg-bookmark-content { order: 2; }
          .post__body .kg-bookmark-thumbnail { 
            order: 1; 
            min-height: 160px;
            width: 100%;
          }
        }
      `}</style>
    </article>
  )
}

export default PostBody
