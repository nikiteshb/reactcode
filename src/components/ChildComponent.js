import React from 'react'

function ChildComponent(props) {
  return (
   <button onClick={() => props.greetHandler('niki')}>Greet Parent</button>
  )
}

export default ChildComponent