import React from 'react'
import { createStore } from 'redux'
import _ from 'lodash'
import { Provider, connect } from 'react-redux'

//
// Constants
export const INPUT = 'input'
export const SUCCESS = 'succesS'
export const FAILURE = 'failure '


//
// Action & ActionCreator
function input(name, value) {
  return {
    type: INPUT,
    name,
    value
  }
}
function register(data) {
  //
  // ajax
  //
  var response =   { all: 'duplicate!' } // response
  if((data.first + data.last) == 'junpayfukaya') {
    return {
      type: FAILURE,
      errors: response
    }
  }
  return {
    type: SUCCESS
  }
}


//
// Component
function map(state) {
  return state
}
class OriginalApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  errorMessage(name) {
    var { error, response } = this.props
    let message = ''
    if(error[name]) message    += error[name]
    if(response[name]) message += response[name]
    return message
  }

  change(e) {
    const { dispatch } = this.props
    dispatch(input(e.target.name, e.target.value))
  }

  submit() {
    const { dispatch, main } = this.props
    dispatch(register(main))
  }

  isValid(errros) {
    const {  error: error } = this.props
    return Object.keys(error).length == 0
  }

  render() {
    const { response: response, main: { first: first, last: last }, error: { error: error } } = this.props

    return (
      <div>
        <span>{this.errorMessage('all')}</span><br/>

        <label>A</label><br/>
        <input type='text' name='first' value={first} onChange={::this.change} />
         <span>{this.errorMessage('first')}</span><br/>

        <label>B</label><br/>
        <input type='text' name='last' value={last} onChange={::this.change} />
        <span>{this.errorMessage('last')}</span><br/>

        <br/>
        <input type='submit' disabled={!this.isValid()} onClick={::this.submit}/><br />
      </div>
    )
  }
}
export const App = connect(map)(OriginalApp)


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
        errors['all'] = 'first + last  is shorten. need 11 charactors'
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
