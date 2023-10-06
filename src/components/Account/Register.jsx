import { useState } from "react";
import HomeWoner from "./HomeWoner";
import RoomSeeker from "./RoomSeeker";
import { useNavigate } from "react-router-dom";
import { FaBed, FaHome } from "react-icons/fa";

const Register = () => {
    const [type, setType] = useState(0)
    const navigate = useNavigate()
    return (
        <div className="px-4 my-28 lg:my-40">
            <h1 className="text-center font-bold text-3xl lg:text-5xl">Are You ?</h1>
           

            <div className='flex items-center gap-6 justify-center flex-col lg:flex-row lg:gap-3 mt-8'>
                <button
                    onClick={() => {
                        navigate('/homeowner')
                    }}
                    className='btn capitalize border-0 btn-lg w-full lg:w-[450px] hover:bg-[#4e46a1] bg-[#7065F0] text-white text-3xl lg:text-4xl' style={{ height: '100px' }}><FaHome className='' />Homeowner</button>
                <button
                    onClick={() => {
                        navigate('/roomseeker')
                    }}
                    className='btn capitalize border-0 btn-lg w-full lg:w-[450px] hover:bg-[#4e46a1] bg-[#7065F0] text-white text-3xl lg:text-4xl' style={{ height: '100px' }}><FaBed className='' />Room Seeker</button>
            </div>
        </div>
    );
};

export default Register;