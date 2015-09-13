import React from 'react'

export class App extends React.Component{
  constructor(props) {
    super(props)
  }
  escaped(value) {
    if(value == null) {
      return 'null'
    }
    return value
  }
  parse(value) {
    var list = []
    var self = this

      if(Array.isArray(value)) {
        let l = []
        l.push(<span>[</span>)
        value.map((v) => {
          l.push(<span>{ self.parse(v) }</span>)
        })
        l.push(<span>]</span>)
        list.push(<span>{ l }</span>)
      }else if(typeof(value) == 'object') {
        list.push(<span>{'{'}</span>)
        Object.keys(value).map(function(key) {
          var data = self.escaped(value[key])
          list.push(<br />)
          list.push(<span><span>{ key }</span><span>:</span><span>{ self.parse(data) }</span></span>)
        })
        list.push(<span>{'}'}</span>)
      } else {
        list.push(<span>{ '"' + value  + '"'}</span>)
      }
    return list
  }
  render() {
    var sample = {a: 1, b: 2, c: {d: 1, c: {a: 1, b: null}} }
    var list = this.parse(sample)
    return (<div>{list}</div>)
  }
}
