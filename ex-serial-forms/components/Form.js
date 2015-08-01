import React from 'react'
import BaseForm from './BaseForm'
import {
  InputField,
  SelectField,
  TextareaField
} from 'react-serial-forms'

export default class Form extends React.Component{
  constructor(props) {
    super(props)
  }
  submit() {
    console.log(this.refs.form.serialize())
    console.log(11)
  }
  render() {
    let messages = {
      required: '必須です。',
      numeral: '半角数字をを入力してください。'
    }
    return (
      <div>
      <BaseForm ref='form' >
      <div>
        <InputField validation='required' name='name' type='full_name' messages={messages}  />
      </div>
      <div>
        <InputField validation='required,numeral' name='number' type='full_name' messages={messages} />
      </div>
        <input type='submit' onClick={::this.submit}/>
      </BaseForm>
      </div>
      )
  }
}
