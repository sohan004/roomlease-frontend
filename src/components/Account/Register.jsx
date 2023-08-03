import { useState } from "react";
import HomeWoner from "./HomeWoner";
import RoomSeeker from "./RoomSeeker";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [type, setType] = useState(0)
    const navigate = useNavigate()
    return (
        <div className="px-4 my-28 lg:my-40">
            <h1 className="text-center font-bold text-3xl lg:text-5xl">Are You ?</h1>
            <div className="flex items-center justify-center max-w-2xl mx-auto border-2 border-[#7065F0] mt-8">
                <p onClick={()=>navigate('/homeowner')} className={`duration-300 flex-grow border-r-2 border-[#7065F0] text-center ${type === 1 ? ' hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-slate-200'} py-5 cursor-pointer text-xl lg:text-2xl font-medium`}>Homeowner</p>
                <p onClick={()=>navigate('/roomseeker')} className={`duration-300 flex-grow text-center ${type === 2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-slate-200'} py-5 cursor-pointer text-xl lg:text-2xl font-medium`}>Room Seeker</p>
            </div>
        </div>
    );
};

export default Register;