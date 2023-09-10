
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav'
import logo from './assets/Frame.svg'
import logo11 from './assets/🦆 icon _arrow circle right_.svg'
import Footer from './components/Footer/Footer';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CommonLinks from './components/Nav/CommonLinks';
import bol from './assets/navIcon/bol.png'
import logoHome from './assets/navIcon/logoHome.png'
import useUserData from './components/Hook/useUserData';
import { useContext } from 'react';
import { AuthContext } from './components/AuthProvider/AuthProvider';

export const baseURL = 'https://roomlease.pythonanywhere.com'
// export const baseURL = 'http://127.0.0.1:8000'

const App = () => {

  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === '/') return
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate()
  const [tf, setTf] = useState(false)

  const [loading, setLoading] = useState(true)
  const { searchDrpopDown, setSearchDrpopDown, userData, setUserData } = useContext(AuthContext)



  return (
    <>
      <div className={`fixed lg:hidden bg-white shadow-2xl duration-500 z-50  w-[85%] py-6 h-full ${!tf ? '-left-[150%]' : 'left-0'}`}>
        <div onClick={() => navigate('/')} className='flex cursor-pointer justify-center items-center '>
          <p className='font-bold text-xl lg:text-3xl justify-center text-[#100A55] flex items-start '>
            R
            <span className='flex flex-col justify-center items-center'>
              o
              <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
            </span>
            <span className='flex flex-col justify-center items-center'>
              o
              <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
            </span>
            mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se
          </p>
        </div>

        {userData && <div className='flex flex-col items-center  px-14 my-12 gap-8'>
          <CommonLinks userData={userData} setUserData={setUserData} />
        </div>}

        {!userData && <div className='text-center mt-20'>
          <NavLink to='/otp-send'><button className='btn text-xl bg-[#7065F0] text-white ms-3'>Login</button></NavLink>
        </div>}

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
        className={tf ? 'opacity-5 lg:opacity-100 duration-500 bg-white' : 'bg-white opacity-100 duration-500'}>
        <Nav setTf={setTf}></Nav>
        <div onClick={() => setSearchDrpopDown(false)}>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div >
    </>
  );
};


export default App;