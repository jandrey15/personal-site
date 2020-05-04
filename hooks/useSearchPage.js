import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import useSearchReducer from './useSearchReducer'
import initialState from './initialState'
import index from '../helpers/algolia'

function useSearchPage () {
  const [state, dispatch] = useReducer(useSearchReducer, initialState)

  const onChange = ({ target }) => {
    // console.log('Value is -> ', target.value)
    dispatch({ type: 'INPUT_SEARCH', payload: target.value })
  }

  const router = useRouter()
  // console.log('router obj', router.query.word)
  // console.log(router)

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
      // dispatch({ type: 'CHANGE_LOADING' })
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
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
    // console.log('This is router query', router.query)

    if (router.query.word) {
      dispatch({ type: 'INPUT_SEARCH', payload: router.query.word })

      dispatch({ type: 'FETCH_SEARCH' })
      // console.log('Fetch search router query word', router.query.word)

      index.search(router.query.word).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      // dispatch({ type: 'RESET' })
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    }

    // eslint-disable-next-line no-return-assign
    return () => mounted = false
  }, [router.query.word])

  return { state, onChange }
}

export default useSearchPage
