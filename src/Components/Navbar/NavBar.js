import React, { useState } from 'react'
import Cart from '../Cart/Cart'

import './NavBar.css'
 
export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='navBar'>
      <button className="btn" onClick={togglePopup}>Cart</button>
      {isOpen && <Cart handleClose={togglePopup}/>}
    </div>
  )
}
