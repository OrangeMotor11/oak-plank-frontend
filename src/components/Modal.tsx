import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';

const Modal = ({ btnClasses, btnName, btnTooltip, modalTitle, children, userId }: any) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const deleteUser = ( id: string) => {
    closeModal();
    Axios.delete(`http://localhost:5000/delete/${ id }`)
  }


  return (
    <>
        <button
            type="button"
            onClick={openModal}
            title={ btnTooltip }
            className={ btnClasses }
        >
            { btnName }
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-baseBlackHalfOpacity"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-baseWhite border-2 border-primary shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-secondary"
                >
                  { modalTitle }
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-lg text-center text-baseBlack whitespace-pre-line">
                    { children }
                  </p>
                </div>
                <div className="mt-4 grid justify-items-end">
                    { modalTitle === 'SIGN IN' ?
                  <div className='flex gap-4'> 
                    <Link to='/Register'>
                      <button
                        type="button"
                        className="info-btn mt-0 h-full"
                        onClick={closeModal}
                      >
                          Register
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="success-btn"
                      onClick={closeModal}
                    >
                      Log in
                    </button>
                  </div>
                  :
                  modalTitle === 'CONFIRM ORDER' ?
                  <div className='flex gap-4'> 
                  <button
                    type="button"
                    className="danger-btn"
                    onClick={closeModal}
                  >
                    Wait
                  </button>
                  <button
                    type="button"
                    className="success-btn"
                    onClick={closeModal}
                  >
                    LET'S GO!
                  </button>
                </div>
                :
                modalTitle === 'DELETE ACCOUNT' ?
                <div className='flex gap-4'> 
                <button
                  type="button"
                  className="danger-btn"
                  onClick={closeModal}
                >
                  Wait
                </button>
                <button
                  type="button"
                  className="success-btn"
                  onClick={ () => { deleteUser( userId ) }  }
                >
                  I'm Sure
                </button>
              </div>
                :
                <button
                  type="button"
                  className="success-btn"
                  onClick={closeModal}
                >
                  Alright!
                </button>
              }
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal