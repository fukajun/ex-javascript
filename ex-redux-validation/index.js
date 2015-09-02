import React from 'react'
import { createStore } from 'redux'
import _ from 'lodash'
import { Provider } from 'react-redux'
import App from './components/App'
import { INPUT, SUCCESS, FAILURE } from './constants/actionType'


// Reducer
function mainReducer(state, action) {
  switch (action.type) {
    case INPUT:
      return _.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

function checkError(main, action) {
  switch (action.type) {
    default:
      let errors = {}
      if ((main.first.length +  main.last.length) < 10) {
        errors['all'] = 'first + last  is shorten. need 10 charactors'
      }
      if (main.first.match(/[0-9]/)) {
        errors['first'] = 'Could not include number'
      }
      if (main.last.match(/[0-9]/)){
        errors['last'] = 'Could not include number'
      }
      return errors
  }
}

function checkResponse(state, action) {
  switch (action.type) {
    case FAILURE:
      return _.assign({}, state, action.errors)
    case SUCCESS:
      return {}
    default:
      return state
  }
}
function combine(state, action) {
  switch (action.type) {
    default:
      let main = mainReducer(state.main, action)
      let error = checkError(main, action)
      let errMessage = checkResponse(state.response, action)
      return { main, error, response: errMessage }
  }
}

let initialState = {
  main: {
    list: [],
    first: '',
    last: ''
  },
  error: {
  },
  response: {
  }
}
let store = createStore(combine, initialState)
React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  document.getElementById('target')
)
