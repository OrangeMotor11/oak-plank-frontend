import RightForkImg from '../static/imgs/right-fork.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Axios from 'axios';

const Order = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const registerOrder = () => {

        Axios.post('http://localhost:5000/registerOrder', 
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            zip: zip,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            cvv: cvv
          }
        )

      }

    return (
        <>
        <div className="grid grid-cols-2 h-screen w-screen">
            <form onSubmit={ registerOrder }>
                <div className='form register-form'>
                    <h1 className='text-2xl mb-2 text-secondary'>ORDER DETAILS</h1>
                    <div className='grid grid-rows-3 w-full p-4'>
                        <div>
                            <div className='flex flex-col'>
                                <p className='text-secondary text-lg'>Personal information</p>
                                <label htmlFor="firstName" className="label">First name</label>
                                <input className='input-field' type="text" name="firstName" id="firstName" onChange={ ( event ) => { setFirstName( event.target.value );}} />
                                <label htmlFor="lastName" className="label">Last name</label>
                                <input className='input-field' type="text" name="lastName" id="lastName" onChange={ ( event ) => { setLastName( event.target.value );}} />
                                <label htmlFor="userMail" className="label">Email</label>
                                <input className='input-field' type="email" name="userMail" id="userMail" onChange={ ( event ) => { setEmail( event.target.value );}} />
                            </div>
                        </div>
                        <div className='flex flex-col place-content-evenly'>
                            <p className='text-secondary text-lg'>Address</p>
                            <label htmlFor="orderAddress" className="label">Address</label>
                            <input className='input-field' type="text" name="orderAddress" id="orderAddress" onChange={ ( event ) => {setAddress( event.target.value );}} />
                            <label htmlFor="orderZip" className="label">Zip</label>
                            <input className='input-field' type="text" name="orderZip" id="orderZip" onChange={ ( event ) => {setZip( event.target.value );}} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-secondary text-lg'>Payment information</p>
                            <label htmlFor="cardNumber" className="label">Card number</label>
                            <input className='input-field' type="text" name="cardNumber" id="cardNumber" onChange={ ( event ) => {setCardNumber( event.target.value );}}/>
                            <label htmlFor="expirationDate" className="label">Expiration date</label>
                            <input className='input-field' type="text" name="expirationDate" id="expirationDate" onChange={ ( event ) => {setExpirationDate( event.target.value );}} />
                            <label htmlFor="cardCVV" className="label">CVV</label>
                            <input className='input-field' type="text" name="cardCVV" id="cardCVV" onChange={ ( event ) => {setCvv( event.target.value );}} />
                        </div>
                    </div>
                    <div className='flex justify-end w-full mt-2 p-4 gap-4'>
                        <Link to='/Menu'><button className='danger-btn'>Go back</button></Link>
                        <button type='submit' className='success-btn'>Order now</button>
                    </div>
                </div>
            </form>
            <img className='h-screen w-screen' src={ RightForkImg }/>
        </div>
    </>
  )
}

export default Order