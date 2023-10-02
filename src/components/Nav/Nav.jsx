import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'
import CommonLinks from './CommonLinks';
import { baseURL } from '../../App';
import { useEffect, useState } from 'react';
import ball from '../../assets/settingIcon/Icon.svg'

import useUserData from '../Hook/useUserData';
import bol from '../../assets/navIcon/bol3.png'
import logoHome from '../../assets/navIcon/logoHome.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Nav = ({ setTf }) => {

    const { userData, setUserData } = useContext(AuthContext)

    const navigate = useNavigate()


    // const [bgColor, setBgColor] = useState(true); // Initial background color

    // useEffect(() => {
    //     // Function to handle scrolling
    //     const handleScroll = () => {
    //         // Check the scroll position
    //         if (window.scrollY > 0) {
    //             setBgColor(false); // Change background color to black when scrolled down
    //         } else {
    //             setBgColor(true); // Change background color to white when at the top
    //         }
    //     };

    //     // Attach the scroll event listener
    //     window.addEventListener('scroll', handleScroll);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // console.log(bgColor);

    return (
        <>
            <div className='bg-[#EDECFB] sticky top-0 z-40'>
                <div className=' max-w-[1440px] mx-auto py-4  flex items-center gap-5 lg:gap-14 justify-between px-5 lg:px-8'>

                    <div className='flex items-center gap-14 '>

                        <div onClick={() => navigate('/')} className='flex cursor-pointer items-center '>
                            <p className='font-bold text-xl lg:text-3xl text-[#100A55] flex items-start '>
                                R
                                <span className='flex flex-col justify-center items-center'>
                                    o
                                    <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                                </span>
                                <span className='flex flex-col justify-center items-center'>
                                    o
                                    <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                                </span>
                                mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se.com.au
                            </p>
                        </div>


                    </div>

                    {userData && <div className='lg:flex gap-12 flex-grow items-center hidden'>
                        <CommonLinks setTf={setTf} userData={userData} setUserData={setUserData} />
                    </div>}

                    {!userData && <div className=' '>
                        <NavLink to='/otp-send'><button className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3 capitalize'>Login</button></NavLink>
                    </div>}

                   {userData && <img onClick={() => setTf(true)} src={menu} className=' lg:hidden' alt="" />}

                </div>
            </div>
        </>
    );
};

export default Nav;