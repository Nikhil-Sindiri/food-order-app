import React, { useRef } from 'react'
import classes from './Checkout.module.css'

export default function Checkout(props) {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const isEmpty = (value) => value.trim() === ''
    const isFiveChars = (value) => value.length === 5
    function confirmHandler(event) {
        event.preventDefault(); 
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const formIsValid = isEmpty(enteredName) && isEmpty(enteredCity) && isEmpty(enteredStreet) && isFiveChars(enteredPostalCode)
        if(!formIsValid){

        }
        if(formIsValid){

        }
        
    }
  return (
    <form onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='name'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='name'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
        </div>
        <button type='button' onClick={props.onClose}>Cancel</button>
        <button>Confirm</button>
    </form>
  )
}
