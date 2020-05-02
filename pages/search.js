import { useState, useEffect, useReducer } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Posts from '../components/PostsGrid'
import useSearchReducer from '../hooks/useSearchReducer'
import initialState from '../hooks/initialState'

const SearchPage = () => {
  const API_KEY_ALGOLIA = process.env.API_KEY_ALGOLIA

  const client = algoliasearch('ZKVB80BMVH', API_KEY_ALGOLIA)
  const index = client.initIndex('instant_search')

  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [search, setSearch] = useState('')

  const [state, dispatch] = useReducer(useSearchReducer, initialState)

  const onChange = ({ target }) => {
    // console.log('Value is -> ', target.value)
    dispatch({ type: 'INPUT_SEARCH', payload: target.value })
  }

  const router = useRouter()
  // console.log('router obj', router.query.word)
  // console.log(router)
  // const word = router.query.word || null

  useEffect(() => {
    let mounted = true
    // console.log('This is search useEffect -> ', state.search)

    if (state.search) {
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      // dispatch({ type: 'RESET' })
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(router.query.word).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    }

    // eslint-disable-next-line no-return-assign
    return () => mounted = false
  }, [state.search])

  useEffect(() => {
    let mounted = true
    // console.log('This is search useEffect -> ', state.search)
    console.log(router.query)

    if (router.query.word) {
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(router.query.word).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      dispatch({ type: 'RESET' })
    }

    // if (state.initial && Object.keys(router.query).length <= 0) {
    //   console.log('ok paso')
    //   dispatch({ type: 'FETCH_SEARCH' })

    //   index.search(router.query.word).then(({ hits }) => {
    //     if (mounted) {
    //       dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
    //     }
    //   })

    //   dispatch({ type: 'CHANGE_INITIAL' })
    // }

    // eslint-disable-next-line no-return-assign
    return () => mounted = false
  }, [router.query.word])

  return (
    <Layout>
      <section id='SearchPage'>
        <h3>Hola mundo search</h3>

        <form className='search'>
          <input type='text' value={state.search} placeholder='Buscar' onChange={onChange} />
          <p>The word is - {state.search} </p>
        </form>

        {state.loading && <p>Loading...</p>}

        {state.data.length <= 0 && !state.loading && <p>No se encontraron resultados para la búsqueda.</p>}

        {state.data.length >= 1 && (
          <Posts posts={state.data} columns='3' />
        )}

      </section>
    </Layout>
  )
}

export default SearchPage
