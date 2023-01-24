import React, { useContext } from 'react'
import ItemsContext from '../../Store/items-context'
import CartItem from './CartItem'

import './Cart.css'

export default function Cart(props) {
    const ctx=useContext(ItemsContext);
    let price = 0;
    const PriceDiv = () => {
      return (<div>{price}</div>)
    }
  return (
    <div className="popup-box">
      <div className="box">
        <h2> Cart Items: </h2>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {
          ctx.cartItems.map(
            (cart_item) => {
              if (cart_item.itemQty > 0)
              price += cart_item.itemQty * cart_item.itemPrice;
              return (<CartItem key ={cart_item.itemId} cartItem={cart_item}/>)
            }
          ) 
        }
        <PriceDiv />
      </div>
    </div>
  )
}
