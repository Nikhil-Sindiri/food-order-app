import React, { useContext, useState} from 'react'
import ItemsContext from '../../Store/items-context'
import CartItem from './CartItem'

import './Cart.css'
import Checkout from './Checkout';

export default function Cart(props) {
    const ctx=useContext(ItemsContext);
    const [isCheckout,setIsCheckout]=useState(false);
    let price = 0;
    const PriceDiv = () => {
      return (<div>{price}</div>)
    }
    function orderHandler(params) {
      setIsCheckout(true)
    }
    function submitHandler(userData) {
      fetch('https://food-order-ap-d3575-default-rtdb.firebaseio.com/orders.json',{
        method:'POST',
        body: JSON.stringify({
          user:userData,
          orderedItems: ctx.cartItems
        })
      });
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
        {isCheckout && <Checkout onConfirm={submitHandler} onClose={props.handleClose}/>}
        {!isCheckout && <button onClick={orderHandler}>Order</button>}
      </div>
    </div>
  )
}
