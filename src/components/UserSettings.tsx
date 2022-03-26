import Modal from './Modal';
import LeftForkImg from '../static/imgs/left-fork.png'
import Axios from 'axios';
import { useState, useEffect } from 'react';

const UserSettings = () => {

  const [userData, setUserData] = useState([]);

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [firstNameValidation, setFirstNameValidation] = useState('');
  const [lastNameValidation, setLastNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');


  useEffect(() => {
    Axios.get('http://localhost:5000/read').then(
      response => {
        setUserData( response.data.at(-1) );
      }
      )
  }, [])

  const validateFields = () => {

    console.log('are you');

    if (!newFirstName) {
      setFirstNameValidation(`First name can't be blank`);
    }
    else {
      setFirstNameValidation(``);
    }

    if (!newLastName) {
      setLastNameValidation(`Last name can't be blank`);
    }
    else {
      setLastNameValidation(``);
    }

    if (!newEmail.includes('@')) {
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

  const updateUser = ( event: any, id: any ) => {
    
    event.preventDefault();

    if (validateFields()) {
      Axios.put('http://localhost:5000/update', 
        {
          id: id,
          newFirstName: newFirstName,
          newLastName: newLastName,
          newEmail: newEmail,
        }
        )
    }

  }

  return (
    <div className="grid grid-cols-2 w-screen">
      <img className='h-screen w-screen' src={ LeftForkImg }/>
      <form >
        <div className='form register-form'>
            <h1 className='text-2xl my-2 text-secondary'>MY NOTIFICATION DATA</h1>
            <label htmlFor="firstName" className="label">First name</label>
            <input placeholder={ userData.firstName } className='input-field' type="text" name="firstName" id="firstName" onChange={ ( event ) => {
                  setNewFirstName( event.target.value );
                }} />
            <p className='text-accentDanger mb-2'>{ firstNameValidation }</p>

            <label htmlFor="lastName" className="label">Last name</label>
            <input placeholder={ userData.lastName } className='input-field' type="text" name="lastName" id="lastName" onChange={ ( event ) => {
                  setNewLastName( event.target.value );
                }} />
            <p className='text-accentDanger mb-2'>{ lastNameValidation }</p>

            <label htmlFor="userMail" className="label">Email</label>
            <input placeholder={ userData.email } className='input-field' type="email" name="userMail" id="userMail" onChange={ ( event ) => {
                  setNewEmail( event.target.value );
                }} />
            <p className='text-accentDanger mb-2'>{ emailValidation }</p>

            <button onClick={() => { updateUser( event, userData._id ) }} className='success-btn'>Update</button>
            <div className='flex justify-end my-8 w-full mr-4'>
              <span className='mr-4'>Do you need to delete your data?</span>
              <Modal btnClasses={ 'danger-btn' } btnName={ 'Delete' } btnTooltip='Delete account' modalTitle={'DELETE ACCOUNT'} userId={ userData._id }>
                  <p>Do you really want to delete your account?</p>
              </Modal>
            </div>
        </div>
      </form>
    </div>
  )
}

export default UserSettings