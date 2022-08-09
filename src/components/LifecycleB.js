import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Niki'
      }
      console.log("lifecycleB constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('life cycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log("lifecycleB componentDidMount");
    }
  render() {
    console.log("lifecycleB render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB