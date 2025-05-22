import React, { createContext } from 'react'
import ParentA1 from './ParentA1';

export const contextObject = createContext();

const MyContext = () => {

  let user = {
    id: 1,
    name: "Pradum"
  }

  return (
    <contextObject.Provider value={user}>
      <ParentA1 />
    </contextObject.Provider>
  )
}

export default MyContext