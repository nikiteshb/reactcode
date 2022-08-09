import React from 'react'

function Person({person}) {
  return (
    <div><h2> My name is {person.name}. My skill {person.skill}. My age {person.age}</h2></div>
  )
}

export default Person