import React, { Component } from 'react'

class classClick extends Component {
    clickHandler(){
        console.log('clicked the class button')
    }
  render() {
    return (
      <button onClick={this.clickHandler}>classClick</button>
    )
  }
}

export default classClick