import React, { Component } from 'react'

class WelcomeNew extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: "welcome Visitor"
      }
    }
    changeText(){
        this.setState({
            text : "WElcome Nikitesh"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={() => this.changeText()}>Change</button>
      </div>
    )
  }
}

export default WelcomeNew