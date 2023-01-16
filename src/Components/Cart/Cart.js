import React, { useContext } from 'react'
import ItemsContext from '../../Store/items-context'
import CartItem from './CartItem'

import './Cart.css'

export default function Cart(props) {
    const ctx=useContext(ItemsContext)
  return (
    <div className="popup-box">
      <div className="box">
        <h2> Cart Items: </h2>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {
          ctx.cartItems.map(
            (cart_item) => {
              return (<CartItem key ={cart_item.itemId} cartItem={cart_item}/>)
            }
          ) 
        }
      </div>
    </div>
  )
}
