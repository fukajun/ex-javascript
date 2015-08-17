import React from 'react'
import validator from 'validator'
import Immutable from 'immutable'

export default class NameInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      isValid: true
    }
  }

  click() {
    this.props.onCountUp('dummy_data')
  }
  isValid(state) {
    var result = validator.isLength(state.get('firstName'), 1) || validator.isLength(state.get('lastName'), 1)
    return result
  }
  change(type, e) {
    var value = e.target.value
    var state = Immutable.Map(this.state)
    var newState = state.set(type, value)

    var result = this.isValid(newState)
    this.setState({[type]: value})
    this.setState({isValid: result})
    this.props.onChange(value)
  }
  render() {
    return (
      <div>
        <label>last name: </label>
        <input value={this.state.lastName} onChange={this.change.bind(this, 'lastName')}/><br />
        <label>first name: </label>
        <input value={this.state.firstName} onChange={this.change.bind(this, 'firstName')} /><br />
        <span>{this.state.isValid  ? '' : 'どちらかの入力が必要です。'}</span>
      </div>
    )
  }
}
