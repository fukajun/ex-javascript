export function list(state, action) {
  switch (action.type) {
    case SEARCH:
      return []
    default:
      return state
    }
  }
}
export function error(state, action) {
  switch (action.type) {
    case SEARCH:
      return []
    default:
      return state
    }
  }
}

export default combine(state, action) {
  {
    main: list(state.main, action),
    error: error(state.error, action)
  }
}
