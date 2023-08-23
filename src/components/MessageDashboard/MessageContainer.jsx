import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { baseURL } from "../../App";

const MessageContainer = ({ setTf, d }) => {
    const { userData } = useContext(AuthContext)
    const [oponent, setOponent] = useState(null)
    useEffect(() => {
        if (+userData?.user_id != +d.user_one) {
            fetch(`${baseURL}/account/get-user-profile/${d.user_one}/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')} `,
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {

                        setOponent(data.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        if (+userData?.user_id != +d.user_two) {
            fetch(`${baseURL}/account/get-user-profile/${d.user_two}/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')} `,
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {

                        setOponent(data.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }, [d])
    // console.log(oponent);
    return (
        <>
            <NavLink onClick={() => setTf(false)} to={`/message/${d.id}`} className={({ isActive }) => ` ${isActive ? 'bg-gradient-to-r from-[#E7E6F9] via-[#F6F5FC]  to-[#E7E6F9]' : ''}`}>
                <div className="p-4 flex items-start gap-4 w-full border-b">
                    <img className="w-12 h-12 rounded-full" src={oponent?.profile_picture} alt="" />
                    <div className="flex-grow">
                        <div className="flex justify-between flex-grow items-center">
                            <p className="font-bold">{oponent?.full_name}</p>
                            <p className="opacity-60">4h ago</p>
                        </div>
                        <p className="text-sm my-1 font-medium">Home Tour</p>
                        {/* <p className="text-sm">{'Emily Brown is a determined entrepreneur with a vision to make a positive impact in the world. She is the founder of a successful social enterprise that focuses on sustainable fashion and empowers local artisans. Emily believes in the importance of ethical business practices and aims to create a brand that promotes environmental conservation.'.slice(0, 80)}...</p> */}
                    </div>
                </div></NavLink>
        </>
    );
};

export default MessageContainer;