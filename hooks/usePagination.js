import { useState, useEffect } from 'react'

function usePagination ({ meta, isProduction, API_URL, API_KEY }) {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [data, setData] = useState([])
  // console.log(meta)

  useEffect(() => {
    // loadPosts()
    setPageCount(Math.ceil(meta.pagination.total / meta.pagination.limit))

    if (isProduction) {
      // eslint-disable-next-line no-undef
      fbq('track', 'ViewContent', { content_name: 'blog' })
    }
  }, [])

  useEffect(() => {
    let ignore = false
    async function loadPosts () {
      try {
        // console.log('This is page ->', page)
        const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=5&filter=featured:false&include=authors&page=${page}`)

        let { posts } = await res.json()
        // console.log(posts)
        if (!ignore) setData(posts)
      } catch (err) {
        console.error('Algo salio mal ', err)
      }
    }

    loadPosts()
    return () => { ignore = true }
  }, [page])

  const handlePageClick = (event) => {
    // console.log('Event select', event.selected)
    let page = event.selected + 1
    // console.log('This si page handle Click ', page)
    setPage(page)

    window.scrollTo(0, 0)
  }

  return { handlePageClick, data, page, pageCount }
}

export default usePagination
