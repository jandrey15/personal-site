const PostTitle = ({ children, capitalize }) => {
  return (
    <h1 className={capitalize && `capitalize`}>{children}</h1>
  )
}

export default PostTitle
