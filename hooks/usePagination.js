import { useState, useEffect, useCallback } from 'react'

function usePagination ({ meta, isProduction, API_URL, API_KEY }) {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [data, setData] = useState([])
  // console.log(meta)

  useEffect(() => {
    // loadPosts()
    setPageCount(Math.ceil(meta.pagination.total / meta.pagination.limit))
    // console.log('ok paso serPageCount')

    if (isProduction) {
      // eslint-disable-next-line no-undef
      fbq('track', 'ViewContent', { content_name: 'blog' })
    }
  }, [])

  // useEffect(() => {
  //   let ignore = false
  //   async function loadPosts () {
  //     try {
  //       // console.log('This is page ->', page)
  //       const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=5&filter=featured:false&include=authors&page=${page}`)

  //       let { posts } = await res.json()
  //       // console.log(posts)
  //       if (!ignore) setData(posts)
  //     } catch (err) {
  //       console.error('Algo salio mal ', err)
  //     }
  //   }

  //   loadPosts()
  //   console.log('ok paso por loadPosts')
  //   return () => { ignore = true }
  // }, [page])

  async function loadPosts (page) {
    try {
      // console.log('This is page ->', page)
      const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=9&filter=featured:false&include=authors&page=${page}`)

      let { posts } = await res.json()
      // console.log(posts)
      // if (!ignore) setData(posts)
      setData(posts)
    } catch (err) {
      console.error('Algo salio mal ', err)
    }
  }

  // const handlePageClick = (event) => {
  //   // console.log('Event select', event.selected)
  //   let page = event.selected + 1
  //   // console.log('This si page handle Click ', page)
  //   setPage(page)

  //   window.scrollTo(0, 0)
  // }

  const handlePageClick = useCallback(
    (event) => {
      // console.log('Event select', event.selected)
      let page = event.selected + 1
      // console.log('This si page handle Click ', page)
      setPage(page)
      loadPosts(page)
      window.scrollTo(0, 0)
    },
    [page]
  )
  // console.log('Thi is page count -> ' + pageCount)
  // console.log('Thi is page -> ' + page)
  return { handlePageClick, data, page, pageCount }
}

export default usePagination
