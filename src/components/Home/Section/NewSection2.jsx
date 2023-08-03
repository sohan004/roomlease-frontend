import { FaArrowRight, FaBed, FaHome } from 'react-icons/fa';
import './section.css'
import useUserData from '../../Hook/useUserData';
const NewSection2 = () => {
    const { userData, loading, setUserData } = useUserData()
    return (
        <div className="max-w-[1440px] mx-auto px-4 ">
            {/* <h1 className="bg-cover newsec2 text-white text-center py-10 px-5 lg:py-20 lg:px-24 bg-fixed lg:leading-[80px] text-3xl lg:text-5xl tracking-wider font-bold">Proudly 100% AUSTRALIAN OWNED COMPANY</h1> */}
            <div className='flex items-center gap-6 justify-center flex-col lg:flex-row lg:gap-3 mt-7'>
                <button
                    onClick={() => {
                        if (userData) {
                            window.location.href = '/homeowner'
                        } else {
                            window.location.href = '/otp-send'
                        }
                    }}
                    className='btn btn-lg w-full lg:w-[450px] hover:bg-[#4e46a1] bg-[#7065F0] text-white text-2xl lg:text-4xl' style={{ height: '100px' }}><FaHome className='' />List Spare Room </button>
                <button
                    onClick={() => {
                        if (userData) {
                            window.location.href = '/roomseeker'
                        } else {
                            window.location.href = '/otp-send'
                        }
                    }}
                    className='btn btn-lg w-full lg:w-[450px] hover:bg-[#4e46a1] bg-[#7065F0] text-white text-2xl lg:text-4xl' style={{ height: '100px' }}><FaBed className='' />Find Room </button>
            </div>
        </div>
    );
};

export default NewSection2;