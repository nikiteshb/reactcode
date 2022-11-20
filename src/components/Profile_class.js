 import React, { Component } from 'react'
 import axios from 'axios'

 import ProfileService from '../service/ProfileService';

 class Profile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         profiles:[]
      }
    }

    handleChange = (event) =>{
      this.setState({
          firstname:event.target.value,
          lastname:event.target.value
      })
      console.log(event.target.value)
    }
    componentDidMount(){
      ProfileService.getProfiles()
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
       
        <form action="">
            <div className="row">
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder={this.state.profiles.firstname} onChange={this.handleChange} />
                        {/* {profile.firstname} */}
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder={this.state.profiles.lastname} onChange={this.handleChange}/>
                        {/* {profile.lastname} */}
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary px-5'>Save</button>
        </form>


        {
            profiles.length?
            profiles.map(profile => <div key={profile.id}>{profile.firstname} {profile.lastname}</div>) :
            null
        }
       </div>
     )
   }
 }
 
 export default Profile