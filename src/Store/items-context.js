import React, { useState } from 'react'

const ItemsContext=React.createContext({
    menuItems: [],
    cartItems: [],
    cartHandler:(item) =>{}
})

export const ItemsContextProvider= (props) => {
  const [menuItems,setItems] = useState([
    {
      itemId:"Penne Pasta",
      itemName:"Penne Pasta",
      itemQty:0,
      itemPrice: 10
    },
    {
      itemId:"White-Sauce Pasta",
      itemName:"White-Sauce Pasta",
      itemQty:0,
      itemPrice: 20
    },
    {
      itemId:"Red-Sauce Pasta",
      itemName:"Red-Sauce Pasta",
      itemQty:0,
      itemPrice: 5
    }, 
  ])
  const [cartItems,setCartItems] =useState([])

  function cartHandler(item){
    let exists= false
    setCartItems(
      (prev) => {
        prev.map(
          (eachItem) => {
            if(eachItem.itemId === item.itemId){
              eachItem.itemQty = item.itemQty
              exists=true
            }
            return eachItem
          }
        )
        if(exists) return [...prev]
        return [...prev,item]
      }
    )
  }

  return (
      <ItemsContext.Provider 
          value={{
            menuItems: menuItems,
            cartItems: cartItems,
            cartHandler: cartHandler,
          }}
      >
          {props.children}
      </ItemsContext.Provider>
  )
}

export default ItemsContext;