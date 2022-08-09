import React from 'react'
import Person from './Person'
function NameList() {
    const names =['bruce','clark','niki']
    const persons = [
        {
            id:4,
            name: "niki",
            skill: "react",
            age: 30
        },
        {
            id:5,
            name: "charu",
            skill: "angular",
            age: 28
        },
        {
            id:6,
            name: "kia b",
            skill: "vue",
            age: 18
        },
    ]
    const personList = persons.map((person,i) => <Person key={person.id} id={person.id} person={person} />)
    const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>)
  return (
    <div>
    {personList}
        {/* {nameList} */}
    </div>
  )
}

export default NameList