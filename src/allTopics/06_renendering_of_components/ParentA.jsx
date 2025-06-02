import React, { useState } from 'react'
import ChildA from './ChildA'

const ParentA = () => {

    const [add, setAdd] = useState(0)

    const inc = () =>{
        setAdd(add + 1 )
    }

  return (
    <div>
        <h1>ParentA {add} <button onClick={inc}> Increment </button></h1>
        <ChildA  add = {add}/>
    </div>
  )
}

export default ParentA