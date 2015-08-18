import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './components/App'

function reducer(state, action) {
  // 本当はここでaction.typeで分岐して
  // action.NAMEに格納される変数でstateを更新する
  return state
}

let initialState = {counter: 0}
let store = createStore(reducer, initialState)
React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  document.getElementById('target')
)
