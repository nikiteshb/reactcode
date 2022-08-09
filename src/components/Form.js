import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user :""
      }
    }

    changeHandler = (event) => {
        this.setState({
            user: event.target.value
        })
    }
    handleSubmit = () => {
      alert(`${this.state.user}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">User</label>
        <input type="text" value={this.state.user} onChange={this.changeHandler} />
        <button onClick={this.handleSubmit}>submit</button>

      </form>
    )
  }
}

export default Form