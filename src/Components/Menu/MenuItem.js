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
        <div className='label'>{props.menuItem.itemName}</div>
        <div className='add'>
          <label>qty</label>
          <input type='number' onChange={qtyHandler}/>
          <button onClick={addCartHandler}>Add to cart</button>
        </div>
    </Card>
  )
}
