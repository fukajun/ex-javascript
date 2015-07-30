import React from 'react'
export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  change(e) {
    this.setState({ counter:  e.target.value })
  }

  incrementCounter() {
    var counter = this.state.counter + 1
    this.setState({ counter:  counter })
  }

  render() {
    return (
        <div>
        <section>
        <span>{this.state.counter}</span>
        <br />
        <input type='text' onChange={this.change}  value={this.state.counter} />
        <input type='button' value='Add' onClick={::this.incrementCounter}/>
        </section>
        </div>
    )
  }
}
