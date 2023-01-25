import React, { useContext, useState } from 'react'
import ItemsContext from '../../Store/items-context'
import Card from '../Card/Card';

import './MenuItem.css';
export default function MenuItem(props) {
  const ctx = useContext(ItemsContext)

  const [newCartItem,setNewCartItem] =useState(props.menuItem)

  function qtyHandler (e) {
    setNewCartItem((prev) =>
      ({...prev, itemQty: +e.target.value})
    )
  }

  function addCartHandler(params) {
    if(newCartItem.itemQty > 0){
      ctx.cartHandler(newCartItem)
    }
  }

  return (
    <Card className='item'>
      <div className="food-item">
            <div className="left-content">
              <label className="name">{props.menuItem.itemName}</label>
              <label className="price">{props.menuItem.itemPrice}</label>
            </div>
            <div className="right-content">
              <button className="add-to-cart" onClick={addCartHandler}>Add to Cart</button>
              <input type="number" className="qty" onChange={qtyHandler} min='0' max='10'/>
            </div>
      </div>
    </Card>
  )
}
