import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
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
import { useEffect, useState } from "react";
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
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
const MessageList = () => {

    const {
        listing,
        setRefresh,
        refresh,
        listingLoading,
        setListing,
        userData,
        loading,
        setLoading,
        setUserData
    } = useContext(AuthContext)

    const [messageList, setMessageList] = useState([])
    const [reFetch, setReFetch] = useState(1)

    const id = useParams().id
    useEffect(() => {
        fetch(`${baseURL}/message/get-messages/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setMessageList(data))
            .catch(err => console.log(err))
    }, [id, reFetch])
    console.log(messageList);
    const [message, setMessage] = useState('')

    const sendMessageFunction = () => {
        // console.log(message);
        if (!message) return
        // if (!userData?.user_id) return

        const formData = new FormData()
        formData.append('message', message)

        fetch(`${baseURL}/message/send-message/${messageList[0].receiver}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    setMessage('')
                    setReFetch(reFetch + 1)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="relative h-full w-full">



            <div className="flex flex-col justify-end h-full">
                <div className=" overflow-y-auto">
                    {messageList.map((item, index) => {
                        if (+item.sender === +userData?.user_id) {
                            return <div key={item.id} className="flex gap-4 mt-6 justify-end">
                                <div>
                                    <p className="p-4 bg-[#E0DEF7] rounded-lg text-right">{item?.message}</p>
                                    <p className="text-sm mt-4 opacity-70 text-right">13:32 PM</p>
                                </div>
                            </div>
                        }
                        else {
                            return <div key={item.id} className="flex gap-4 mt-6 justify-start">
                                <div>
                                    <p className="p-4 bg-white rounded-lg border-2 border-indigo-100">{item?.message}</p>
                                    <p className="text-sm mt-4 opacity-70">13:32 PM</p>
                                </div>
                            </div>
                        }
                    })}
                </div>

                <div className="mx-auto w-full  z-30 p-4 rounded-lg bg-white border-2 border-indigo-100">
                    <input onChange={e => setMessage(e.target.value)} value={message} type="text" name="" className="p-2 w-full focus:outline-none" placeholder="Write your message..." id="" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 lg:gap-6">
                            <img src={text1} alt="" />
                            <img src={text2} alt="" />
                            <img src={text3} alt="" />
                            <img src={text4} alt="" />
                            <img src={text5} alt="" />
                            <img src={text6} alt="" />
                        </div>
                        <button onClick={sendMessageFunction} className="btn  btn-sm text-white bg-[#7065F0]"><span className="hidden lg:inline">send</span> <img src={text7} alt="" /></button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default MessageList;