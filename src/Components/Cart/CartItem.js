import React from 'react'

export default function CartItem(props) {
  return (
    <div>
        <div>{props.cartItem.itemQty} * {props.cartItem.itemPrice} {props.cartItem.itemName}</div>
    </div>
  )
}