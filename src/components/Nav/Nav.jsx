import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'
import CommonLinks from './CommonLinks';
import { baseURL } from '../../App';
import { useEffect, useState } from 'react';
import ball from '../../assets/settingIcon/Icon.svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import useUserData from '../Hook/useUserData';
import bol from '../../assets/navIcon/bol.png'
import logoHome from '../../assets/navIcon/logoHome.png'



const Nav = ({ setTf }) => {

    const { userData, loading, setUserData } = useUserData()
    const navigate = useNavigate()



    return (
        <>
            <div className='bg-[#EDECFB]'>
                <div className=' max-w-[1440px] mx-auto py-4  flex items-center gap-14 justify-between px-8'>

                    <div className='flex items-center gap-14 '>

                        <div onClick={() => navigate('/')} className='flex cursor-pointer items-center '>
                            <p className='font-bold text-xl lg:text-3xl text-[#100A55] flex items-start '>
                                R
                                <span className='flex flex-col justify-center items-center'>
                                    oo
                                    <img className='w-6  lg:w-8  -mt-1' src={bol} alt="" />
                                </span>
                                mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se.com.au
                            </p>
                        </div>


                    </div>

                    <div className='lg:flex gap-12 items-center hidden'>
                        <CommonLinks />
                    </div>

                    {!userData && <div className='hidden lg:block '>
                        <NavLink to='/otp-send'> <button className='btn text-l  border-2 bg-transparent border-[#d6d4f5]'>Sign Up</button></NavLink>
                        <NavLink to='/otp-send'><button className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Login</button></NavLink>
                    </div>}
                    {userData && <div className="hidden lg:flex gap-4 lg:gap-6 items-center">
                        <div className=" flex justify-center items-center gap-4">
                            <div className="flex items-center gap-2 py-2 lg:py-3 px-2 lg:px-4 border-2 border-[#E0DEF7] rounded-xl">
                                <p className="bg-[#7065F0] text-white font-medium rounded-full h-8 w-8 flex items-center justify-center">{userData?.first_name?.slice(0, 2).toUpperCase()}</p>
                                {/* <p className="font-medium hidden lg:block">{userData?.first_name}</p> */}
                                <div className="dropdown dropdown-bottom dropdown-end ">
                                    <img tabIndex={0} className="cursor-pointer" src={arrowDown} alt="" />
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu  mt-6 rounded-box w-52">

                                        <button onClick={() => {
                                            setUserData(null)
                                            localStorage.removeItem('user-token')
                                        }} className="btn btn-error">Sign out</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <img onClick={() => setTf(true)} src={menu} className=' lg:hidden' alt="" />

                </div>
            </div>
        </>
    );
};

export default Nav;