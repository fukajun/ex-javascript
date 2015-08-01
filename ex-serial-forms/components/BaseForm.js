import React from 'react'
import { FormBase } from 'react-serial-forms'

export default class BaseForm extends FormBase {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit || this.onSubmit} method={this.props.method}>
        <fieldset>
          <div className='fields'>
            {this.props.children}
          </div>
        </fieldset>
      </form>
    );
  }
}
