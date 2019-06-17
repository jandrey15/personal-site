const Posts = ({ posts }) => {
  // console.log(posts)
  return (
    <section id='Posts'>
      {posts.map(post => (
        <article className='post' key={post.id}>
          <a href={`/blog/${post.slug}`}>
            <img src={post.feature_image} alt={post.title} />
          </a>
          <div className='content'>
            <a href={`/blog/${post.slug}`} className='title'>
              <h2>{post.title}</h2>
            </a>
            <p>{ post.custom_excerpt ? post.custom_excerpt.substring(0, 160) : post.excerpt ? post.excerpt.substring(0, 160) : null}</p>
          </div>
        </article>
      ))}
      <style jsx>{`
        #Posts {
          display: grid;
          grid-template-columns: repeat(2, 340px);
          grid-column-gap: 20px;
          grid-row-gap: 30px;
          margin: 30px 0 0;
          padding-bottom: 50px;
          border-bottom: 2px solid #eeeeee;
        }
        
        {/* border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px; 
          border: 1px solid #eeeeee;          
          transition: .5s;
        */}
        #Posts .content {
          padding: 10px 5px;
          border-top: none;
        }

        {/* #Posts .post:hover .content {
          border-color: #0078ae;
        } */}

        #Posts img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }

        #Posts h2 {
          font-size: 1.7rem;
          line-height: 2rem;
          margin: 0 0 15px;
          transition: .2s;
        }

        #Posts p {
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin: 0;
        }

        #Posts a {
          text-decoration: none;
          color: #1c1c1c;
          display: flex;
        }

        #Posts .title:hover h2 {
          opacity: 0.8;
          color: #0078ae;
        }
      `}</style>
    </section>
  )
}

export default Posts
