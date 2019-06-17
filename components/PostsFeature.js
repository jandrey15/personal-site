/* eslint-disable camelcase */
const PostsFeature = ({ title, feature_image, slug, custom_excerpt, excerpt, published_at, primary_author }) => {
  // console.log(props)
  return (
    <article id='PostsFeature'>
      <a href={`/blog/${slug}`}>
        <img src={feature_image} alt={title} />
      </a>

      <div className='content'>
        <a href={`/blog/${slug}`} className='title'>
          <h2>{title}</h2>
        </a>
        <p>{ custom_excerpt ? custom_excerpt.substring(0, 160) : excerpt ? excerpt.substring(0, 160) : null}</p>
        <span>{published_at}</span>
        <img src={primary_author.profile_image} alt={primary_author.name} />
        <span>{primary_author.name}</span>
      </div>
    </article>
  )
}

export default PostsFeature
