import React from 'react'
import foodMenu from '../../Images/food-menu-img.png'

import './Picture.css'
export default function Picture() {
  return (
    <div>
      <img src={foodMenu} alt="Food" className='food-img'></img>
    </div>
  )
}
