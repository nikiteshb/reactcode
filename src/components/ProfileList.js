import React, { Component } from 'react'
import axios from 'axios'

class ProfileList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         profiles: []
      }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/profile')
        .then(response => {
            console.log(response.data)
            this.setState({
                profiles:response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const {profiles} = this.state
    return (
      <div>
        List of profiles
        {/* {console.log(profiles.length)} */}
        {
            profiles.length?
            profiles.map(profile => <div key={profile.id}>{profile.firstname} {profile.lastname}</div>) :
            null
        }

      </div>
    )
  }
}

export default ProfileList