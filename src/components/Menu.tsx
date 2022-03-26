import { useState, useEffect, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { FaGlassMartiniAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from 'axios';

const Menu = () => {

  const [drinkData, setDrinkData] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addToCart = ( newItem: string ) => {
    setCartList( [...cartList, { name: newItem, icon: <FaGlassMartiniAlt />}] )
  }

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
  
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    )
    .then((response) => response.json())
    .then((data) => {
      setDrinkData(data);
    })
    .catch(() => {
      console.log('Error');
    });
  });

  return (
    <div className='flex-col'>
        <h1 className='page-title border-b-2 border-b-secondaryBrighter'>MENU</h1>
        <div className='flex justify-center w-auto'>
          <div className='flex flex-col items-center mt-2'>
            <div>
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
                              {
                                cartList.length != 0 ?
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
                                :
                                <div></div>
                              }
                              </>
                            ))}
                          </div>
                          <div className="flex gap-4 p-4 bg-baseWhiteDarker">
                            <button className='danger-btn' onClick={ () => { emptyCart(); } }>EMPTY</button>
                            {
                              cartList.length == 0 ?
                              <button className='disabled-btn w-20'>NO ITEMS</button>
                              :
                              <Link to='/Register'>
                                <button className='success-btn w-20' onClick={ () => { registerCartOrder() } }>ORDER NOW</button>
                              </Link>
                              
                            }
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
            </Popover>
            </div>
            <div className='menu-grid'>
              { 
                drinkData.length != 0 ?
                  drinkData.drinks.map((drink: any) => {
                    return <div className="menu-item">
                  <div className='dish-img'>
                      <img className='w-96 h-64' src={ drink.strDrinkThumb }/>
                  </div>
                  <div className='dish-description flex flex-col items-center'>
                      <p className='p-2 text-2xl text-secondary'>{ drink.strDrink }</p>
                      <div className='flex justify-end p-2 mt-4'>
                          <button className='success-btn text-2xl' onClick={() => { addToCart( drink.strDrink )}}>+</button>
                      </div>
                  </div>
                </div>
                })
                :
                <div></div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu