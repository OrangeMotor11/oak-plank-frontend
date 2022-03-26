import { useState, useEffect } from 'react';


const MenuItem = ({dishData}: any) => {

const[imgUrl, setImgUrl] = useState('');
const[cartItem, setCartItem] = useState( [] );

  return (


    <div className="menu-item">
        <div className='dish-img'>
            <img className='w-80 h-64' src={ 'https://images.unsplash.com/photo-1583064313642-a7c149480c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80' }/>
        </div>
        <div className='dish-description flex flex-col items-center'>
            <p className='p-2 text-3xl text-secondary'>{ dishData.title }</p>
            <div className='flex justify-end p-2 mt-4'>
                <button className='success-btn text-2xl'>+</button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem