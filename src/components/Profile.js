import React from 'react'
import { useState,useRef } from 'react'
import ProfileService from '../service/ProfileService'
import DataFetching from './DataFetching'
import axios from 'axios'
function Profile() {
    const [profile,setProfile] = useState([])
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const handleChange = event =>{
      setProfile({
          firstname:firstnameRef.current.value,
          lastname:lastnameRef.current.value
      })
      console.log(profile.firstname,profile.lastname)
    }

    const createProfile = () => {
      axios
        .post('http://localhost:8000/profile', {
          firstname: profile.firstname,
          lastname: profile.lastname
        })
        .then((response) => {
          setProfile(response.data);
        });
    }
    return (
    <div>
        <DataFetching />

        <div className="container py-5">
        <h1 className="py-3">Add Profile</h1>
        <form action="">
            <div className="row">
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="firstname" ref={firstnameRef} onChange={handleChange} />
                        {/* {profile.firstname} */}
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="lastname" ref={lastnameRef} onChange={handleChange}/>
                        {/* {profile.lastname} */}
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary px-5' onClick={createProfile}>Add Profile</button>
        </form>
        </div>
    </div>
  )
}

export default Profile