import React, { useState } from 'react'

const ItemsContext=React.createContext({
    cartItems: [],
    cartHandler:(item) =>{},
    removeItem:(item) =>{}
})

export const ItemsContextProvider= (props) => {
  

  const [cartItems,setCartItems] =useState([])

  function cartHandler(item){
    let exists= false
    setCartItems((prev) => {
        prev.map((eachItem) => {
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
  function removeItem(item){
    setCartItems((prev) => {
        prev.filter((eachItem) => eachItem.itemId !== item.itemId)
      }
    )
  }

  return (
      <ItemsContext.Provider 
          value={{
            cartItems: cartItems,
            cartHandler: cartHandler,
            removeItem: removeItem,
          }}
      >
          {props.children}
      </ItemsContext.Provider>
  )
}

export default ItemsContext;