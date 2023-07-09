import { FaList } from "react-icons/fa";
import logo from '../../assets/Frame.svg'


const Nav = () => {
    return (
        <>
            <div className='bg-[#EDECFB]'>
                <div className=' max-w-[1440px] mx-auto py-8 flex items-center gap-14 justify-between px-8'>

                    <div className='flex items-center gap-14 '>

                        <div className='flex items-center gap-1'>
                            <img src={logo} alt="" />
                            <p className='font-bold text-[#100A55]'>Estatery</p>
                        </div>

                        <div className='lg:flex gap-12 items-center hidden'>
                            <p className='font-medium'>Rent</p>
                            <p className='font-medium'>Buy</p>
                            <p className='font-medium'>Sell</p>
                            <p className='font-medium'>Manage Property</p>
                            <p className='font-medium'>Resocours</p>
                        </div>

                    </div>

                    <div className='hidden lg:block'>
                        <button className='btn border border-2 bg-transparent border-[#d6d4f5]'>Login</button>
                        <button className='btn bg-[#7065F0] text-white ms-3'>Sign Up</button>
                    </div>
                    <FaList className='text-lg lg:hidden' />

                </div>
            </div>
        </>
    );
};

export default Nav;