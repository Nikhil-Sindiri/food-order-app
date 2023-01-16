import React, { useContext } from 'react'
import MenuItem from './MenuItem'

import ItemsContext from '../../Store/items-context'
import Card from '../Card/Card'
import './Menu.css' 
export default function Menu() {
  // const items=[
  //   {
  //     itemId:"Penne Pasta",
  //     itemName:"Penne Pasta",
  //     itemQty:0,
  //   },
  //   {
  //     itemId:"White-Sauce Pasta",
  //     itemName:"White-Sauce Pasta",
  //     itemQty:0,
  //   },
  //   {
  //     itemId:"Red-Sauce Pasta",
  //     itemName:"Red-Sauce Pasta",
  //     itemQty:0,
  //   }, 
  // ]
  // const [menuItems,setMenuItems]=useState(items)

  const ctx = useContext(ItemsContext) 

  return (
    <Card className='login' >
      {
        ctx.menuItems.map(
          (menu_item) => {
            return (<MenuItem key ={menu_item.itemId} menuItem={menu_item}/>)
          }
        ) 
      } 
    </Card>
  )
}
