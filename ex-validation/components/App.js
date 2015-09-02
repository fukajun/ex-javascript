import React from 'react'
import _ from 'lodash'
import NameInput from './NameInput'
import Immutable from 'immutable'

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      a: '',
      b: '',
      isValid: false,
      errors: {
      }
    }
  }
  errorMessage(name) {
    return this.state.errors[name]
  }

  change(name ,e) {
    this.setState({[name]: e.target.value}, this.validate)
  }

  validate() {
    let errors = {}
    if(!this.state.a.length > 0)  errors.a = '必須です'
    if(!this.state.b.length > 0)  errors.b = '必須です'
    this.setState({isValid: Object.keys(errors).length == 0})
    this.setState({errors: errors})
  }

  render() {
    return (
      <div>
        <label>a</label><br/>
        <input type='text' name='a'   onChange={this.change.bind(this, 'a')} validatable /><span></span><br />
        <span>{this.errorMessage('a')}</span><br/>

        <label>b</label><br/>
        <input type='text' ref='b' name='b' onChange={this.change.bind(this, 'b')}  validatable /><span></span><br />
        <span>{this.errorMessage('b')}</span><br/>
<br/>
        <input type='submit' onClick={::this.validate} disabled={!this.state.isValid} /><br />
      </div>
    )
  }
}
