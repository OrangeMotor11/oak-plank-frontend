import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Axios from 'axios';

const Cart = () => {

  const [cartList, setCartList] = useState([
    {
      name: '',
      icon: '',
    }
  ]);

  const emptyCart = () => {
    setCartList([]);
  }

  const deleteCartItem = ( itemName: string ) => {
    for (let i = 0; i < cartList.length; i++) {
      
      if (cartList[i].name === itemName) {
        console.log( cartList );
        setCartList( cartList.filter(item => item.name != itemName));
        console.log( cartList );
      }

    }
  }

  const registerCartOrder = () => {

    for (let i = 0; i < cartList.length; i++) {

      Axios.post('http://localhost:5000/registerCartOrder', 
      {
        clientId: 1,
        orderNumber: 321,
        productName: cartList[i].name,
      }
      )

    }

    emptyCart();

  }

  return (
    <div className="nav-item">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-100'}
                text-secondary text-xl px-3 py-2 items-center font-medium`}
            >
              <span className='hover:text-secondaryBrighter' title={ 'Cart' }>{ <FaShoppingCart /> }</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-2/5 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className=" rounded-md shadow-lg border-2 border-primary">
                  <p className='border-b-2 border-b-secondaryBrighter bg-baseWhite p-2 rounded-md'>MY ORDER</p>
                  <div className="overflow-auto relative flex flex-col h-80 gap-8 bg-baseWhite p-7">
                    {cartList.map((item) => (
                      <>
                        <a
                          key={item.name}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            { item.icon }
                          </div>
                          <div className="ml-4">
                            <p className="text-sm text-secondary">
                              {item.name}
                            </p>
                            <div className='flex gap-2 mt-2'>
                              <button className='danger-btn w-5 h-5' onClick={ () => { deleteCartItem( item.name ) } }>X</button>
                            </div>
                          </div>
                        </a>
                      </>
                    ))}
                  </div>
                  <div className="flex gap-4 p-4 bg-baseWhiteDarker">
                    <button className='danger-btn' onClick={ () => { emptyCart(); } }>EMPTY</button>
                    {
                      cartList.length == 0 ?
                      <button className='disabled-btn w-20'>NO ITEMS</button>
                      :
                      <button className='success-btn w-20' onClick={ () => { registerCartOrder() } }>ORDER NOW</button>
                    }
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default Cart