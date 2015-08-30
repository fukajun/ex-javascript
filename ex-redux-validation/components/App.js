import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { INPUT, SUCCESS, FAILURE } from '../constants/actionType'

// Action & ActionCreator
function input(name, value) {
  return {
    type: INPUT,
    name,
    value
  }
}
function register(data) {
  if((data.first + data.last) == 'junpayfukaya') {
    return {
      type: FAILURE,
      errors: { all: 'duplicate!' }
    }
  }
  return {
    type: SUCCESS
  }
}

export class App extends React.Component{
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


function map(state) {
  return state
}
export default connect(map)(App)
