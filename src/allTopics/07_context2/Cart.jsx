import React, { useContext } from 'react'
import { GLOBAL_CONTEXT} from './Context2'

const Cart = () => {

    let val = useContext(GLOBAL_CONTEXT)

  return (
    <div>
      <h3>Cart {val}</h3>
    </div>
  )
}

export default Cart