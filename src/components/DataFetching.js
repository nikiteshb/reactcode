import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function DataFetching() {
    const [profiles,setProfiles] = useState([])

    useState(() => {
        axios.get('http://localhost:8000/profile')
        .then(response => {
            // console.log(response.data)
            setProfiles(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    })

    const getData = () => {
        axios.get(`http://localhost:8000/profile`)
            .then((response) => {
                setProfiles(response.data)
             })
    }

    const onDelete= (id) => {
        axios.delete(`http://localhost:8000/profile/${id}`)
        .then(() => {
            getData()
        })
    }
  return (
    <div className='container'>
        <table className='table'>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>Actions</th>
            {
                profiles.map(profile => (
                    <tbody>
                        <tr key={profile.id}>        
                            <td>{profile.id}</td>
                            <td>{profile.firstname}</td>
                            <td>{profile.lastname}</td>
                            <td><button className="btn btn-danger" onClick={() => onDelete(profile.id)}>Delete</button></td>
                        </tr>
                    </tbody>
                ) )
            }
        </table>
        
    </div>
  )
}

export default DataFetching