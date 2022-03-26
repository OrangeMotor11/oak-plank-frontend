import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaUtensils } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: 'Insights',
    price: 1.00,
    icon: <FaUtensils />,
  }
]

const UserPopover = ({popoverTitle, popoverTooltip}: any) => {
  return (
    <div className="nav-item">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-100'}
                text-accentInfo text-xl px-3 py-2 items-center font-medium`}
            >
              <span title={ popoverTooltip }>{ popoverTitle }</span>
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
              <Popover.Panel className="absolute z-10 w-2/5 h-80 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="rounded-md shadow-lg border-2 border-accentInfo">
                  <p className='bg-baseWhite text-secondary p-2     rounded-md'>Username</p>
                  <div className="relative flex flex-col justify-center h-20 gap-8 bg-baseWhite p-2">
                    <div className='flex flex-col items-center text-secondaryBrighter'>
                        <Link to='/My-account' className='hover:text-primaryBrighter'>My data</Link>
                    </div>
                  </div>
                  {/* <div className="flex justify-end gap-4 p-4 bg-baseWhiteDarker">
                    <button className='danger-btn'>LOG OUT</button>
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default UserPopover