import React from 'react'
import Form from './Form'

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
  }
  countUp(data) {
    console.log(data)
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (<div><Form /> </div>)
  }
}
