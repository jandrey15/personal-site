import { useEffect, useReducer } from 'react'
import algoliasearch from 'algoliasearch/lite'
import Router from 'next/router'
import useSearchReducer from './useSearchReducer'
import initialState from './initialState'

function useSearch () {
  const API_KEY_ALGOLIA = process.env.API_KEY_ALGOLIA
  // Config algolia
  const client = algoliasearch('ZKVB80BMVH', API_KEY_ALGOLIA)
  const index = client.initIndex('instant_search')
  const [state, dispatch] = useReducer(useSearchReducer, initialState)

  const onChange = ({ target }) => {
    // console.log('Value is -> ', target.value)
    dispatch({ type: 'INPUT_SEARCH', payload: target.value })
  }

  const handleRouteChange = url => {
    console.log('App is changing to: ', url)
    console.log(state)
    // if (state.search) {
    //   console.log('ok paso')
    //   dispatch({ type: 'RESET' })
    // }
  }

  Router.events.on('routeChangeComplete', handleRouteChange)

  useEffect(() => {
    let mounted = true

    if (state.search) {
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      dispatch({ type: 'RESET' })
    }

    // eslint-disable-next-line no-return-assign
    return () => mounted = false
  }, [state.search])

  return { state, onChange }
}

export default useSearch
