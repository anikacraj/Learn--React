import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'



export default class Index extends Component {

constructor(props) {
  super(props)

  this.state = {
     IsLogin :true
  }
}
  render()
//   using if else
//    {
//    if(this.state.IsLogin){
//     return <Home />
//    }
//    else{
//     return <Login />
//    }
      
{
    //using element 
    const {IsLogin} =this.state;
    let element ;
    // if(IsLogin){
    //     element = <Home />
    // }else{
    //     element =<Login />
    // } 
    element = IsLogin ? <Home /> :<Login />
    
    return(
        <div>{element}
        
         {/* IsLogin && <Home /> */}
        </div>
    )
}
    
  }

