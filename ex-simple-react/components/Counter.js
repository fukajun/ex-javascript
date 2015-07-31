import React from 'react'

export default class Counter extends React.Component{
  constructor(props) {
    super(props)
  }
  click() {
    this.props.onCountUp('dummy_data')
  }
  render() {
    return (
      <div>
      <input value={this.props.count}/>
      <input type='button' value='CountUp' onClick={this.click.bind(this)}/>
      </div>
    )
  }
}
