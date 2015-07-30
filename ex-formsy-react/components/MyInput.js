import React from 'react'
import Formsy from 'formsy-react'
import ReactMixin from 'react-mixin'

export class MyInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  change(e) {
    console.log(this)
    console.log(e.target.value)
    console.log(e.currentTarget.value)
    this.setValue(e.currentTarget.value)
    console.log(this.state)
  }
  render() {
    return (<div>
        <input type="text" value={this.getValue()} onChange={this.change.bind(this)}/>
        {this.getErrorMessage()}
    </div>)
  }
}
ReactMixin.onClass(MyInput, Formsy.Mixin)
//var  MyInput = React.createClass({
  //mixins: [Formsy.Mixin],
  //getInitialState: function(props) {
    //return {
      //value: 11
    //}
  //},
  //change: function(e) {
    //console.log(this)
    //this.setValue(e.currentTarget.value)
  //},
  //render: function() {
    //return (<div>
        //<input type="text" value={this.getValue()} onChange={this.change}/>
    //</div>)
  //}
//})
//export { MyInput }
