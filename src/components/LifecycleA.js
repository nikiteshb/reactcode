import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Niki'
      }
      console.log("lifecycle a constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('life cycle a getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log("lifecyclea componentDidMount");
    }
  render() {
    console.log("lifecyclea render")
    return (
      <div>
        LifecycleA
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA