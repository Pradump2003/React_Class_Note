import React, { useContext } from 'react'
import { contextObject } from './MyContext'

const ChildA2 = () => {

  let val = useContext(contextObject)

  return (
    <div>
      <h1>ChildA2 {val.name}</h1>
    </div>
  )
}

export default ChildA2