
import { useState } from 'react';
import Nav from './components/Nav/Nav'
import logo from './assets/Frame.svg'
import logo11 from './assets/🦆 icon _arrow circle right_.svg'
import Footer from './components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';

export const baseURL = 'https://roomlease.pythonanywhere.com'

const App = () => {
  const [tf, setTf] = useState(false)

  return (
    <>
      <div className={`fixed lg:hidden bg-white shadow-2xl duration-500 z-50  w-[85%] py-6 h-full ${!tf ? '-left-[150%]' : 'left-0'}`}>
        <div className="flex items-center gap-1 justify-center">
          <img src={logo} alt="" />
          <p className='font-bold text-xl text-[#100A55]'>RoomLease </p>
        </div>

        <div className='flex flex-col items-start px-14 my-12 gap-8'>
          <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink>
          <p className='font-medium'>List</p>
          <p className='font-medium'>Tenants</p>
          <p className='font-medium'>Careers</p>
          <p className='font-medium'>Blog</p>
        </div>

        <div className='text-center'>
         <NavLink to='/sign-in'> <button className='btn  border-2 bg-transparent border-[#d6d4f5]'>Login</button></NavLink>
          <NavLink to='/sign-up'><button className='btn bg-[#7065F0] text-white ms-3'>Sign Up</button></NavLink>
        </div>

        <div className='absolute top-16 -right-4'>
          <img onClick={() => setTf(false)} className='bg-[#7065F0] rounded-full  p-1 h-11' src={logo11} alt="" />
        </div>

      </div>
      <div onClick={() => {
        if (!tf) {
          return
        }
        else {
          setTf(false)
        }
      }}
        className={tf ? 'opacity-5 duration-500' : 'opacity-100 duration-500'}>
        <Nav setTf={setTf}></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;