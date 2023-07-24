import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'
import CommonLinks from './CommonLinks';


const Nav = ({ setTf }) => {
    const navigate = useNavigate()
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

                    <div className='hidden lg:block'>
                        <NavLink to='/otp-send'> <button className='btn text-l  border-2 bg-transparent border-[#d6d4f5]'>Sign Up</button></NavLink>
                        <NavLink to='/otp-send'><button className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Login</button></NavLink>
                    </div>
                    <img onClick={() => setTf(true)} src={menu} className=' lg:hidden' alt="" />

                </div>
            </div>
        </>
    );
};

export default Nav;