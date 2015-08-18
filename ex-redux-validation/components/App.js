import React from 'react'
import _ from 'lodash'
import Immutable from 'immutable'

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  errorMessage() {
  }

  render() {
    return (
      <div>
        <label>A</label><br/>
        <input type='text' name='a'  validatable /><span></span><br />
        <span>{this.errorMessage('a')}</span><br/>

        <label>B</label><br/>
        <input type='text' ref='b' name='b'  validatable /><span></span><br />
        <span>{this.errorMessage('b')}</span><br/>
<br/>
        <input type='submit' /><br />
      </div>
    )
  }
}
