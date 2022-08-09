import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {

    return this.state.isLoggedIn && <div>welcome nikitesh</div>

    // return(
    //     this.state.isLoggedIn ?
    //     (<div>WElcome niki</div>):
    //     (<div>WElcome guest</div>)
    // )


    // let message
    // if(this.state.isLoggedIn){
    //     message ="WElcome niki"
    // }else{
    //     message ="WElcome guest"
    // }
    // return(
    //     <div>{message}</div>
    // )


    // if(this.state.isLoggedIn){
    //     return(
    //         <div>WElcome niki</div>
    //     )
    // }else{
    //     return(
    //        <div>WElcome niki</div>
    //     )
    // }
  }
}

export default UserGreeting