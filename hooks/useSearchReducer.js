import initialState from './initialState'

function useSearchReducer (state, action) {
  // console.log('This is state -> ', state)
  // console.log('Thi is action -> ', action)
  switch (action.type) {
    case 'INPUT_SEARCH': {
      return {
        ...state,
        search: action.payload
      }
    }
    case 'FETCH_SEARCH': {
      return {
        ...state,
        loading: true
      }
    }
    case 'FETCH_SEARCH_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case 'RESET': {
      return initialState
    }

    default:
      throw new Error(`Not supported action ${action.type}`)
  }
}

export default useSearchReducer
