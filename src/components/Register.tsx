import RightForkImg from '../static/imgs/right-fork.png'
import { useState } from 'react';
import Axios from 'axios';

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameValidation, setFirstNameValidation] = useState('');
  const [lastNameValidation, setLastNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');

  const validateFields = () => {

    if (!firstName) {
      setFirstNameValidation(`First name can't be blank`);
    }
    else {
      setFirstNameValidation(``);
    }

    if (!lastName) {
      setLastNameValidation(`Last name can't be blank`);
    }
    else {
      setLastNameValidation(``);
    }

    if (!email.includes('@')) {
      setEmailValidation('You must enter a valid email');
    }
    else {
      setEmailValidation('');
    }

    if (firstNameValidation ||
        lastNameValidation ||
        emailValidation) {
      return false;
    }

    return true;
  }

  const registerUser = (event: any) => {

    event.preventDefault();

    if (validateFields()) {
    
      Axios.post('http://localhost:5000/register', 
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        }
        )
    }

  }

  return (
    <>
        <div className="grid grid-cols-2 h-screen w-screen">
          <form onSubmit={ registerUser }>
            <div className='form register-form'>
                <h1 className='text-2xl my-2 text-secondary'>NOTIFICATION DATA</h1>
                <p className='text-secondary'>Once your order is done we will notify you</p>
                <label htmlFor="firstName" className="label">First name</label>
                <input className='input-field mb-0' type="text" name="firstName" id="firstName" onChange={ ( event ) => {
                  setFirstName( event.target.value );
                }}/>
                <p className='text-accentDanger mb-2'>{ firstNameValidation }</p>

                <label htmlFor="lastName" className="label">Last name</label>
                <input className='input-field mb-0' type="text" name="lastName" id="lastName" onChange={ ( event ) => {
                  setLastName( event.target.value );
                }} />
                <p className='text-accentDanger mb-2'>{ lastNameValidation }</p>

                <label htmlFor="userMail" className="label">Email</label>
                <input className='input-field mb-0' type="email" name="userMail" id="userMail" onChange={ ( event ) => {
                  setEmail( event.target.value );
                }} />
                <p className='text-accentDanger mb-2'>{ emailValidation }</p>
                <button type='submit' className='success-btn my-2'>Register</button>
            </div>
          </form>
          <img className='h-screen w-screen' src={ RightForkImg }/>
        </div>
    </>
  )
}

export default Register