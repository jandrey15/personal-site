/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import Cover from './Cover'
import PostTitle from './PostTitle'
import PostProfile from './PostProfile'

const PostHeader = ({ title, cover, capitalize = false, primary_author, primary_tag, published_at }) => {
  return (
    <Cover cover={cover}>
      <PostTitle capitalize={capitalize && 'capitalize'}>{title}</PostTitle>
      <PostProfile
        primary_author={primary_author}
        primary_tag={primary_tag}
        published_at={published_at}
      />
    </Cover>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  profile: PropTypes.bool,
  post: PropTypes.bool,
  published_at: PropTypes.string,
  primary_author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  primary_tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  capitalize: PropTypes.bool
}

export default PostHeader
