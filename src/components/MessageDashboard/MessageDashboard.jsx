import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/settingIcon/Frame.svg'
import ball from '../../assets/settingIcon/Icon.svg'
import menu from '../../assets/messagePageIcon/menu.svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import personSvg from '../../assets/messagePageIcon/person.svg'
import imgTop from '../../assets/messagePageIcon/Group 14057.svg'
import imgTop2 from '../../assets/messagePageIcon/Group 14061.svg'
import imgTop3 from '../../assets/messagePageIcon/Group 14060.svg'
import imgTop4 from '../../assets/messagePageIcon/Rectangle 2598.png'
import icon1 from '../../assets/messagePageIcon/Icon.svg'
import icon2 from '../../assets/messagePageIcon/Icon (1).svg'
import icon3 from '../../assets/messagePageIcon/Icon (2).svg'
import icon4 from '../../assets/messagePageIcon/Icon (3).svg'
import icon5 from '../../assets/messagePageIcon/Icon (4).svg'
import icon6 from '../../assets/messagePageIcon/Icon (5).svg'
import icon7 from '../../assets/messagePageIcon/Icon (6).svg'
import icon8 from '../../assets/messagePageIcon/Icon (7).svg'
import messagePerson from '../../assets/messagePageIcon/Image.png'
import { useContext, useEffect, useState } from "react";
import ico7 from '../../assets/sec3Icon/Icon (3).svg'
import mes1 from '../../assets/messagePageIcon/message1.svg'
import mes2 from '../../assets/messagePageIcon/message2.svg'
import mes3 from '../../assets/messagePageIcon/message3.svg'
import mes4 from '../../assets/messagePageIcon/message4.svg'
import mes5 from '../../assets/messagePageIcon/message5.svg'

import text1 from '../../assets/messagePageIcon/text1.svg'
import text2 from '../../assets/messagePageIcon/text2.svg'
import text3 from '../../assets/messagePageIcon/text3.svg'
import text4 from '../../assets/messagePageIcon/text4.svg'
import text5 from '../../assets/messagePageIcon/text5.svg'
import text6 from '../../assets/messagePageIcon/text6.svg'
import text7 from '../../assets/messagePageIcon/text7.svg'
import { baseURL } from "../../App";
import { useRef } from "react";
import backarrow from '../../assets/detailsPageIcon/Icon.svg'
import { AuthContext } from "../AuthProvider/AuthProvider";
import MessageContainer from "./MessageContainer";







const MessageDashboard = () => {
    const { userData } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const [tf, setTf] = useState(true)
    const [reFetch, setReFetch] = useState(1)
    


    useEffect(() => {
        if (!userData) return
        fetch(`${baseURL}/message/get-conversations/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setData2(data)
                    setData(data)

                }
            })
            .catch(err => console.log(err))
    }, [userData])


    const search = (e) => {

        const value = e.target.value.toLowerCase()

        const filterData = data2.filter(d => {
            if (userData?.user_id == d?.user_one) {
                return d.user_two_full_name.toLowerCase().includes(value)
            }
            if (userData?.user_id == d?.user_two) {
                return d.user_one_full_name.toLowerCase().includes(value)
            }
        })
        setData(filterData)
    }

    return (
        <div className="bg-white">

            <div className={`fixed  bg-white shadow-2xl duration-500 z-50 overflow-y-auto  w-full lg:hidden py-6 h-full ${!tf ? '-left-[150%]' : 'left-0'}`}>
                <div className="px-5 py-7 w-full flex  flex-col    border-e h-[100vh]">
                    <Link onClick={() => setTf(false)} to='/'>
                        <h3 className="font-medium cursor-pointer  text-lg flex items-center gap-2 text-[#7065F0]"><img src={backarrow} alt="" /> Back to Home</h3>

                    </Link>
                    <div className="flex gap-4 items-center p-4">
                        <div className="w-full">
                            <div className='  w-full bg-[#F7F7FD]  border border-[#E0DEF7] rounded-lg flex gap-2 items-center p-2'>
                                <img src={ico7} alt="" />
                                <input onChange={search} className='bg-transparent focus:outline-none border-0 p-1 w-full focus:border-0' placeholder='Search...' type="text" name='' />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 w-full">
                        {data.map((d, i) => <MessageContainer key={d.id} d={d} setTf={setTf}></MessageContainer>)}
                    </div>
                </div>
            </div>


            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row">

                    <div className="px-5 py-7 w-[30%] hidden lg:flex  flex-col    border-e h-[100vh] overflow-y-auto">
                        <Link to='/'>
                            <h3 className="font-medium cursor-pointer  text-lg flex items-center gap-2 text-[#7065F0]"><img src={backarrow} alt="" /> Back to Home</h3>

                        </Link>
                        <div className="flex gap-4 items-center p-4">
                            <div className="w-full">
                                <div className='  w-full bg-[#F7F7FD]  border border-[#E0DEF7] rounded-lg flex gap-2 items-center p-2'>
                                    <img src={ico7} alt="" />
                                    <input onChange={search} className='bg-transparent focus:outline-none border-0 p-1 w-full focus:border-0' placeholder='Search...' type="text" name='' />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 w-full">
                            {data.map((d, i) => <MessageContainer key={d.id} d={d} setTf={setTf}></MessageContainer>)}
                        </div>
                    </div>
                    <div className="w-full lg:w-[70%]">
                        <div className="w-full border-b bg-white">
                            <div className=" px-4  py-4  flex items-center justify-between">

                                <p className="text-2xl hidden lg:block font-bold">Messages</p>
                                <img onClick={() => setTf(true)} src={menu} className="lg:hidden cursor-pointer" alt="" />

                            </div>
                        </div>



                        {/* emty fild design
                    {data.length === 0 && } */}


                        {/* message design */}
                        <div className="w-full  relative h-[90vh] overflow-y-auto bg-gradient-to-r from-[#E7E6F9] via-[#F6F5FC]  to-[#E7E6F9]">
                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDashboard;