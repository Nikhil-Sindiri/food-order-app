import React, { useState ,useEffect } from 'react'
import MenuItem from './MenuItem'
import Card from '../Card/Card'
import './Menu.css' 
export default function Menu() {
  const [menuItems,setMenuItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [httpError,setHttpError] =useState(null);
  useEffect(()=>{
    const fetchMenu = async () => {
      const response = await fetch('https://food-order-ap-d3575-default-rtdb.firebaseio.com/menu.json');
      if(!response.ok) {throw new Error('Something went wrong..')}
      const responseData = await response.json();
      const loadedMenu = [];

      for(const key in responseData){
        loadedMenu.push({
          itemId:key,
          itemName:responseData[key].itemName,
          itemPrice:responseData[key].itemPrice,
        })
      }
      setMenuItems(loadedMenu)
      setIsLoading(false)
    }
    
      fetchMenu().catch((error)=> {
      setIsLoading(false);
      setHttpError(error.message);
    })

    
  },[]) 

  return (
    <Card className='login' >
      {isLoading && <h3>Loading...</h3>}
      {httpError && <h3>{httpError}</h3>}
      {
        !isLoading && !httpError &&
        menuItems.map(
          (menu_item) => {
            return (<MenuItem key ={menu_item.itemId} menuItem={menu_item}/>)
          }
        ) 
      } 
    </Card>
  )
}
