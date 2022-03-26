import { GiOakLeaf } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import Modal from './Modal';
import User from './UserPopover';
import { Link } from "react-router-dom";

interface NavItem {
  navLink: string,
  navItemContent: any,
  navTooltip: string
}

const NavBar = () => {
  return (
    <>
      <button className='fixed text-4xl mx-4 my-4 text-primary' title={ 'Oak Plank' }>
        <Link to='/'>{ <GiOakLeaf /> }</Link>
      </button>
      <nav className='nav-bar'>
        <NavItem navLink={'/'} navItemContent={ 'HOME' } navTooltip='Home' />
        <NavItem navLink={'/Menu'} navItemContent={ 'MENU' } navTooltip='Menu' />
        <Modal btnClasses={ 'nav-item' } btnName={ 'CONTACT' } btnTooltip='Contact' modalTitle={'CONTACT'}>
          <div className="text-baseBlack">Telephone: <span className="text-secondary">00 1234 5678</span></div>
          <div className="text-baseBlack">Email: <span className="text-secondary">oakplank@email.com</span></div>
          <div className="text-baseBlack">Address: <span className="text-secondary">Tree Street #890 87635</span></div>
        </Modal>
        {/* <Cart /> */}
        <User popoverTitle={ <FaUser /> } popoverTooltip='User' />
        {/* <Modal btnClasses={ 'info-btn mt-2' } btnName={ 'SIGN IN' } btnTooltip='Sign in' modalTitle={'SIGN IN'}>
          <div className="form">
            <label htmlFor="userMail" className="label">Email</label>
            <input className='input-field' type="email" name="userMail" id="userMail"/>
            <label htmlFor="userPwd" className="label">Password</label>
            <input className='input-field' type="password" name="userPwd" id="userPwd" />
          </div>
        </Modal> */}
      </nav>
    </>
  )
}

const NavItem = ( { navLink, navItemContent, navTooltip }: NavItem ) => {

  return (
  <button className='nav-item' title={ navTooltip }>
    <Link to={ navLink }>{ navItemContent }</Link>
  </button>
  )
};

export default NavBar