import { useState } from "react";
import HomeWoner from "./HomeWoner";
import RoomSeeker from "./RoomSeeker";

const Register = () => {
    const [type, setType] = useState(1)
    return (
        <div className="px-4 ">
            <div className="flex items-center justify-center max-w-[500px] mx-auto border mt-8">
                <p onClick={() => setType(1)} className={`flex-grow text-center ${type === 1 ? ' bg-red-400 text-white' : ''} py-5 cursor-pointer text-xl lg:text-2xl font-medium`}>Homeowner</p>
                <p onClick={() => setType(2)} className={`flex-grow text-center ${type === 2 ? ' bg-red-400 text-white' : ''} py-5 cursor-pointer text-xl lg:text-2xl font-medium`}>Room Seeker</p>
            </div>
            {type === 1 && <HomeWoner></HomeWoner>}
            {type === 2 && <RoomSeeker></RoomSeeker>}
        </div>
    );
};

export default Register;