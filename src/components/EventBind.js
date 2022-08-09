import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'goodbye'
        })
        console.log(this);
    }

  render() {
    
    return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Event bind clicked</button> */}
            {/* <button onClick={()=> this.clickHandler()}>Event bind clicked</button> */}
            <button onClick={this.clickHandler}>Event bind clicked</button>
        </div>
    )
  }
}

export default EventBind