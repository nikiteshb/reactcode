import React, { useEffect, useState } from 'react'
import ProfileList from './ProfileList'

function Profile() {
    const [profile,setProfile]  = useState({
        firstname: "nikitesh",
        lastname: "bhadade"
    })

    const handleChange = event =>{
        setProfile({
            firstname:event.target.value,
            lastname:event.target.value
        })
        console.log(event.target.value)
    }

    

  return (
    <div className='container'>
    <h1 className="py-3">Profile</h1>
        <form action="">
            <div className="row">
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder={profile.firstname} onChange={handleChange} />
                        {/* {profile.firstname} */}
                    </div>
                </div>
                <div className="col col-lg-6">
                    <div class="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder={profile.lastname} onChange={handleChange}/>
                        {/* {profile.lastname} */}
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary px-5'>Save</button>
        </form>
        <ProfileList />
    </div>
  )
}

export default Profile