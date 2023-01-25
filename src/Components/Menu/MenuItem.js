import React, { useContext, useState } from 'react'
import ItemsContext from '../../Store/items-context'
import Card from '../Card/Card';

import './MenuItem.css';
export default function MenuItem(props) {
  const ctx = useContext(ItemsContext)

  const [newCartItem,setNewCartItem] =useState(props.menuItem);
  const [itemQty, itemQuantity] = useState(0);

  function qtyHandler (e) {
    if (e.target.value >= 0) {
      itemQuantity(+e.target.value);
      setNewCartItem((prev) => ({
        ...prev, itemQty: +e.target.value
      }))
    } else {
      setNewCartItem(props.menuItem);
    }
  }

  function addCartHandler(params) {
    if(newCartItem.itemQty >= 0){
      ctx.cartHandler(newCartItem)
    }
  }

  return (
    <Card className='item'>
        <div className='label'>{props.menuItem.itemName}</div>
        <div className='add'>
          <label>qty</label>
          <input type='number' value={itemQty} onChange={qtyHandler}/>
          <button onClick={addCartHandler}>Add to cart</button>
        </div>
    </Card>
  )
}
