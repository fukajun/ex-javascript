import React from 'react'
import { createStore } from 'redux'
import _ from 'lodash'
import { Provider } from 'react-redux'
import App from './components/App'
import { INPUT } from './constants/actionType'


// Reducer
function mainReducer(state, action) {
  switch (action.type) {
    case INPUT:
      return _.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

function checkError(main) {
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

function combine(state, action) {
  let main = mainReducer(state.main, action)
  let error = checkError(main)
  return { main, error }
}

let initialState = { 
  main: {
    list: [],
    first: 'junpay',
    last: 'fukaya'
  },
  error: {
  }
}
let store = createStore(combine, initialState)
React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  document.getElementById('target')
)
