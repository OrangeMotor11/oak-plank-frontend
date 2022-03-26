import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import Register from './components/Register';
import UserSettings from './components/UserSettings';
import UserOrders from './components/UserOrders';
import Order from './components/Order';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className='flex'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/My-account" element={<UserSettings />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
    </div>
    </>
  )
}

export default App
