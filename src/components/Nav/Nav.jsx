import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'
import CommonLinks from './CommonLinks';
import { baseURL } from '../../App';
import { useEffect, useState } from 'react';
import ball from '../../assets/settingIcon/Icon.svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'

const Nav = ({ setTf }) => {
    const [userData, setUserData] = useState(null)

    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserData(data.data)
                }
                else {
                    setUserData(null)
                }
            })
    }, [localStorage.getItem('user-token')])


    
    return (
        <>
            <div className='bg-[#EDECFB]'>
                <div className=' max-w-[1440px] mx-auto py-6 lg:py-8 flex items-center gap-14 justify-between px-8'>

                    <div className='flex items-center gap-14 '>

                        <div onClick={() => navigate('/')} className='flex cursor-pointer items-center gap-1'>
                            <img src={logo} alt="" />
                            <p className='font-bold text-xl text-[#100A55]'>RoomLease.com.au</p>
                        </div>

                        <div className='lg:flex gap-12 items-center hidden'>
                            <CommonLinks />
                        </div>

                    </div>

                    {!userData && <div className='hidden lg:block '>
                        <NavLink to='/otp-send'> <button className='btn text-l  border-2 bg-transparent border-[#d6d4f5]'>Sign Up</button></NavLink>
                        <NavLink to='/otp-send'><button className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Login</button></NavLink>
                    </div>}
                    {userData && <div className="hidden lg:flex gap-4 lg:gap-6 items-center">
                        <div>
                            <img src={ball} className="p-2 bg-slate-100 rounded-lg" alt="" />
                        </div>
                        <div className="lg:ps-6 lg:border-s-2 flex justify-center items-center gap-4">
                            <div className="flex items-center gap-2 py-2 lg:py-3 px-2 lg:px-4 border-2 border-[#E0DEF7] rounded-xl">
                                <p className="bg-[#7065F0] text-white font-medium rounded-full h-8 w-8 flex items-center justify-center">{userData?.first_name?.slice(0, 2).toUpperCase()}</p>
                                {/* <p className="font-medium hidden lg:block">{userData?.first_name}</p> */}
                                {/* <img src={arrowDown} alt="" /> */}
                            </div>
                            <button onClick={() => {
                                localStorage.removeItem('user-token')
                                setUserData(null)
                            }} className="btn btn-error">Sign out</button>
                        </div>
                    </div>}
                    <img onClick={() => setTf(true)} src={menu} className=' lg:hidden' alt="" />

                </div>
            </div>
        </>
    );
};

export default Nav;