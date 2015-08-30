import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { INPUT } from '../constants/actionType'

// Action & ActionCreator
function input(name, value) {
  return {
    type: INPUT,
    name,
    value
  }
}

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  errorMessage(name) {
    var { error } = this.props
    return error[name]
  }

  change(e) {
    const { dispatch } = this.props
    dispatch(input(e.target.name, e.target.value))
  }
  isValid(errros) {
    const {  error: error } = this.props
    return Object.keys(error).length == 0
  }

  render() {
    const { main: { first: first, last: last }, error: { error: error } } = this.props

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
        <input type='submit' disabled={!this.isValid()}/><br />
      </div>
    )
  }
}


function map(state) {
  return state
}
export default connect(map)(App)
