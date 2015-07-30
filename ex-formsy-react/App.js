import React from 'react'
import Formsy from 'formsy-react'
import { MyInput } from './components/MyInput'
export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false
    }
  }
  valid() {
    console.log('valid')
    this.setState({
      canSubmit: true
    })
  }
  invalid() {
    console.log('invalid')
    this.setState({
      canSubmit: false
    })
  }
  submit() {
  }

  change(e) {
    console.log(e.target.value)
    console.log(this.refs)
    this.setState({ counter:  e.target.value })
  }

  render() {
    return (
        <div>
        <Formsy.Form onSubmit={this.submit.bind(this)} onValid={this.valid.bind(this)} onInvalid={this.invalid.bind(this)}>
          <MyInput name='hoge'validations='isEmail' validationError='this is not email' required />
          <input type="submit" disabled={!this.state.canSubmit}/>
        </Formsy.Form>
        </div>
    )
  }
}
