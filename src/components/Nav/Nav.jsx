import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'


const Nav = ({setTf}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='bg-[#EDECFB]'>
                <div className=' max-w-[1440px] mx-auto py-6 lg:py-8 flex items-center gap-14 justify-between px-8'>

                    <div className='flex items-center gap-14 '>

                        <div onClick={()=>navigate('/')} className='flex cursor-pointer items-center gap-1'>
                            <img src={logo} alt="" />
                            <p className='font-bold text-xl text-[#100A55]'>Estatery</p>
                        </div>

                        <div className='lg:flex gap-12 items-center hidden'>
                            <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink>
                            <p className='font-medium'>Buy</p>
                            <p className='font-medium'>Sell</p>
                            <p className='font-medium'>Manage Property</p>
                            <p className='font-medium'>Resocours</p>
                        </div>

                    </div>

                    <div className='hidden lg:block'>
                       <NavLink to='/sign_in'> <button className='btn border border-2 bg-transparent border-[#d6d4f5]'>Login</button></NavLink>
                        <NavLink to='/sign_up'><button className='btn bg-[#7065F0] text-white ms-3'>Sign Up</button></NavLink>
                    </div>
                    <img onClick={()=>setTf(true)} src={menu} className=' lg:hidden'  alt="" />

                </div>
            </div>
        </>
    );
};

export default Nav;