import { FaUtensils } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Axios from 'axios';

const solutions = [
    {
      name: 'Insights',
      price: 1.00,
      icon: <FaUtensils />,
    }
  ]

const UserOrders = () => {

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/readCartOrders').then(
      response => {
        setCartData( response.data[0] );
      }
      )
  }, [])

  return (
    <div className='flex-col w-screen overflow-auto'>
        <h1 className='page-title border-b-2 border-b-secondaryBrighter'>MY ORDERS</h1>

        <div className="previous-order">
            <div className=" rounded-md shadow-lg border-2 border-primary">
                <p className='border-b-2 border-b-secondaryBrighter bg-baseWhite p-2 rounded-md text-secondary'>MY ORDER # 123</p>
                <div className="overflow-auto flex flex-col h-80 gap-8 bg-baseWhite p-7">
                {solutions.map((item) => (
                    <a
                    key={item.name}
                    className="flex items-center p-2 -m-3 rounded-lg text-lg"
                    >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        { item.icon }
                    </div>
                    <div className="ml-4">
                        <p className="text-md text-secondary">
                        {item.name}
                        <span className="text-sm text-secondaryBrighter"> x 0</span>
                        </p>
                        <p className="text-sm text-secondaryBrighter">
                        $ {item.price}
                        </p>
                    </div>
                    </a>
                ))}
                </div>
            <div className="flex gap-4 p-4 bg-baseWhiteDarker">
                <p className='text-lg text-secondary self-end ml-20'>TOTAL: $ 0</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default UserOrders