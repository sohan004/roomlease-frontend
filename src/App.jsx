
import { useState } from 'react';
import Nav from './components/Nav/Nav'
import logo from './assets/Frame.svg'
import logo11 from './assets/🦆 icon _arrow circle right_.svg'
import Footer from './components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import CommonLinks from './components/Nav/CommonLinks';
import bol from './assets/navIcon/bol.png'
import logoHome from './assets/navIcon/logoHome.png'

export const baseURL = 'https://roomlease.pythonanywhere.com'
// export const baseURL = 'http://127.0.0.1:8000'

const App = () => {
  const [tf, setTf] = useState(false)

  return (
    <>
      <div className={`fixed lg:hidden bg-white shadow-2xl duration-500 z-50  w-[85%] py-6 h-full ${!tf ? '-left-[150%]' : 'left-0'}`}>
        <p className='font-bold text-xl lg:text-3xl text-[#100A55] justify-center flex items-start'>
          R
          <img className='w-7  lg:w-11  mt-[13px] lg:mt-[16px]' src={bol} alt="" />
          mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se
        </p>

        <div className='flex flex-col items-start px-14 my-12 gap-8'>
          <CommonLinks />
        </div>

        <div className='text-center'>
          <NavLink to='/sign-in'> <button className='btn text-xl  border-2 bg-transparent border-[#d6d4f5]'> Sign Up</button></NavLink>
          <NavLink to='/sign-up'><button className='btn text-xl bg-[#7065F0] text-white ms-3'>Login</button></NavLink>
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