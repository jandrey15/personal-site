import ReactPaginate from 'react-paginate'
import Posts from 'components/PostsGrid'

import usePagination from 'hooks/usePagination'

const PostsPagination = ({ posts, meta, isProduction, API_URL, API_KEY }) => {
  const { handlePageClick, data, pageCount } = usePagination({ meta, isProduction, API_URL, API_KEY })

  if (data.length > 0) {
    posts = data
  }

  return (
    <>
      {posts.length > 0 && <Posts posts={posts} columns='3' />}

      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </>
  )
}

export default PostsPagination
