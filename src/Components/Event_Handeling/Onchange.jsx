import React, { Component } from 'react'


export default class onchange extends Component {

constructor(props) {
  super(props)

  this.state = {
     changeValue : ''
  }
}

    handleChange =(e)=>{
        this.setState({
            changeValue : e.target.value
        },()=>{
            console.log(e.target.value)
        })
    }
    
  render() {
    return (
      <div>
        <br />
        <input type="text"  onChange={this.handleChange}/>
        <br />
        <h2>{this.state.changeValue}</h2>
      </div>
    )
  }
}
