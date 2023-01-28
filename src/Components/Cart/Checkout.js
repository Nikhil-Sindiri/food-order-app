import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'

export default function Checkout(props) {
    const [formInputsValadity,setFormInputsValadity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });
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

        setFormInputsValadity({
            name: !isEmpty(enteredName),
            street: !isEmpty(enteredStreet),
            city: !isEmpty(enteredCity),
            postalCode: isFiveChars(enteredPostalCode)
        })

        const formIsValid = !isEmpty(enteredName) && !isEmpty(enteredCity) && !isEmpty(enteredStreet) && isFiveChars(enteredPostalCode)

        if(formIsValid){
            props.onConfirm({
                name: enteredName,
                street: enteredStreet,
                city: enteredCity,
                postalCode: enteredPostalCode
            })
        }
    }
  return (
    <form onSubmit={confirmHandler}>
        <div className={`${classes.control} ${formInputsValadity.name?'':classes.invalid}`}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputsValadity.name && <p>Enter a valid Name</p>}
        </div>
        <div className={`${classes.control} ${formInputsValadity.street?'':classes.invalid}`}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
            {!formInputsValadity.name && <p>Enter a valid Street</p>}
        </div>
        <div className={`${classes.control} ${formInputsValadity.postalCode?'':classes.invalid}`}>
            <label htmlFor='name'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
            {!formInputsValadity.name && <p>Enter a valid Postal Code(5 characters)</p>}
        </div>
        <div className={`${classes.control} ${formInputsValadity.city?'':classes.invalid}`}>
            <label htmlFor='name'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
            {!formInputsValadity.name && <p>Enter a valid City</p>}
        </div>
        <button type='button' onClick={props.onClose}>Cancel</button>
        <button>Confirm</button>
    </form>
  )
}
