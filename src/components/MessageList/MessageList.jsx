import { FaArrowLeft, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import blankImag from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'
import { baseURL } from "../../App";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useRef } from "react";
import backarrow from '../../assets/detailsPageIcon/Icon.svg'

import moment from "moment";
const MessageList = () => {

    const [img, setImg] = useState('')
    const [video, setVideo] = useState('')
    const [err, setErr] = useState('')
    //get email on url like ?email=...
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const reciver = params.get('reciver');

    const {
        listing,
        setRefresh,
        refresh,
        listingLoading,
        setListing,
        userData,
        loading,
        setLoading,
        setUserData, tf, setTf
    } = useContext(AuthContext)

    const [messageList, setMessageList] = useState([])
    const [reFetch, setReFetch] = useState(1)
    const scrollingDivRef = useRef(null);

    useEffect(() => {
        // Scroll the div to the bottom when the component mounts
        scrollingDivRef.current.scrollTop = scrollingDivRef.current.scrollHeight;
    }, [messageList]);

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
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const [oponent, setOponent] = useState(null)
    useEffect(() => {
        fetch(`${baseURL}/account/get-user-profile/${reciver}/`, {
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
                navigate('/message')
            })

    }, [messageList])

    const sendMessageFunction = () => {
        // console.log(message);
        if (!message) return
        // if (!userData?.user_id) return

        const formData = new FormData()
        formData.append('message', message)

        fetch(`${baseURL}/message/send-message/${reciver}/`, {
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
                navigate('/message')
            })
    }


    const imgUpload = (e) => {
        setErr('')
        if (img.type === 'image/png' || img.type === 'image/jpeg' || img.type === 'image/jpg') {

            const formData = new FormData()
            formData.append('photo', img)

            fetch(`${baseURL}/message/send-message/${reciver}/`, {
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
                        setImg('')
                        setErr('')
                        setReFetch(reFetch + 1)
                        window.message_photo.close()

                    }
                })
                .catch(err => {
                    console.log(err);
                    navigate('/message')
                })
        }
        else {
            setErr('Please upload a valid image file')
        }
    }
    const videoUpload = (e) => {
        setErr('')
        if (video.type === 'video/mp4' || video.type === 'video/mkv' || video.type === 'video/avi') {

            const formData = new FormData()
            formData.append('video', video)

            fetch(`${baseURL}/message/send-message/${reciver}/`, {
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
                        setVideo('')
                        setErr('')
                        setReFetch(reFetch + 1)
                        window.message_video.close()

                    }
                })
                .catch(err => {
                    console.log(err);
                    navigate('/message')
                })
        }
        else {
            setErr('Please upload a valid video file')
        }
    }
    // '
    return (
        <>

            <div className="w-full border-b bg-white">
                <div className="p-4 flex items-center gap-4 w-full border-b">
                    <img onClick={() => setTf(true)} src={backarrow} className="lg:hidden" alt="" /> <img className="w-12 h-12 rounded-full" src={oponent?.profile_picture ? oponent?.profile_picture : blankImag} alt="" />
                    <div className="flex-grow">
                        <div className="flex justify-between flex-grow items-center">
                            <p className="font-bold">{oponent?.full_name}</p>
                        </div>
                        {/* <p className="text-sm">{'Emily Brown is a determined entrepreneur with a vision to make a positive impact in the world. She is the founder of a successful social enterprise that focuses on sustainable fashion and empowers local artisans. Emily believes in the importance of ethical business practices and aims to create a brand that promotes environmental conservation.'.slice(0, 80)}...</p> */}
                    </div>
                </div>
            </div>


            <div className="w-full  relative h-[90vh] overflow-y-auto bg-gradient-to-r from-[#E7E6F9] via-[#F6F5FC]  to-[#E7E6F9]">
                <div className="relative h-full w-full">

                    <div className="flex flex-col justify-end w-full h-full">
                        <div ref={scrollingDivRef} className=" overflow-y-auto w-full">
                            {messageList.map((item, index) => {
                                if (+item.sender === +userData?.user_id) {
                                    return <div key={item.id} className="flex gap-4 mt-6 justify-end px-6 lg:px-10">
                                        <div className="">
                                            {item?.message && <div className="p-4 bg-[#E0DEF7] rounded-lg w-[250px] lg:w-[350px]" style={{ whiteSpace: 'pre-wrap' }}>{item?.message}</div>}
                                            {item?.photo && <img src={`${baseURL}${item?.photo}`} className="w-[250px] lg:w-[350px] ms-auto" alt="" />}
                                            {item?.video && <video className='w-[250px] lg:w-[350px] ms-auto' controls>
                                                <source src={`${baseURL}${item?.video}`} type="video/mp4" />
                                            </video>}

                                            <p className="text-xs  opacity-70 text-right">{moment(item?.created_at).format("MMM D,  h:mm a")}</p>
                                        </div>
                                    </div>
                                }
                                else {
                                    return <div key={item.id} className="flex gap-4 mt-6 justify-start px-6 lg:px-10">
                                        <div>
                                            {item?.message && <p className="p-4 bg-white w-[250px] lg:w-[350px] rounded-lg border-2 border-indigo-100">{item?.message}</p>}
                                            {item?.photo && <img src={`${baseURL}${item?.photo}`} className="w-[250px] lg:w-[350px] me-auto" alt="" />}
                                            {item?.video && <video className='w-[250px] lg:w-[350px] me-auto' controls>
                                                <source src={`${baseURL}${item?.video}`} type="video/mp4" />
                                            </video>}

                                            <p className="text-xs  opacity-70 text-right">{moment(item?.created_at).format("MMM D,  h:mm a")}</p>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>

                        <div className="mx-auto w-full flex items-start gap-3 z-30 p-3 rounded-lg bg-white border-2 border-indigo-100">
                            <div className="dropdown dropdown-top">
                                <FaPlusCircle tabIndex={0} className="text-3xl text-[#7065F0] cursor-pointer"></FaPlusCircle>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                                    <li onClick={() => window.message_photo.showModal()}><a>Photo</a></li>
                                    <li onClick={() => window.message_video.showModal()}><a>Video</a></li>
                                </ul>
                            </div>
                            <textarea onChange={e => setMessage(e.target.value)} value={message} type="text" name="" className="  flex-grow w-full focus:outline-none bg-white" placeholder="Write your message..." id="" />
                            <button disabled={message === '' ? true : false} onClick={sendMessageFunction} className="btn  btn-sm text-white bg-[#7065F0] border-0 hover:bg-[#433c8f]"><span className="hidden  lg:inline">send</span> <img src={text7} alt="" /></button>
                        </div>
                    </div>




                    {/* Open the modal using ID.showModal() method */}
                    {/* Open the modal using ID.showModal() method */}
                    <dialog id="message_photo" className="modal">
                        <div method="dialog" className="modal-box max-w-2xl bg-white">
                            <p className="text-red-500 my-4 ">{err}</p>
                            {img && <img className="w-40 shadow-md h-40" src={URL.createObjectURL(img)} alt="" />}
                            <fieldset className="w-full space-y-1 dark:text-gray-100">
                                <label htmlFor="files" className="block text-sm font-medium">Attachments</label>
                                <div className="flex">
                                    <input onChange={e => setImg(e.target.files[0])} type="file" name="files" id="files" className="px-8 w-full py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                                </div>
                            </fieldset>
                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={() => { setImg(); setErr(''); window.message_photo.close() }} className="btn btn-sm border">close</button>
                                <button onClick={imgUpload} className="btn  btn-sm text-white hover:bg-[#433c8f] bg-[#7065F0]"><span className="hidden lg:inline">send</span> <img src={text7} alt="" /></button>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="message_video" className="modal">
                        <div method="dialog" className="modal-box max-w-2xl bg-white">
                            <p className="text-red-500 my-4 ">{err}</p>
                            {video && <video className='w-40 ' controls>
                                <source src={URL.createObjectURL(video)} type="video/mp4" />
                            </video>}
                            <fieldset className="w-full space-y-1 dark:text-gray-100">
                                <label htmlFor="videoFiles" className="block text-sm font-medium">Attachments</label>
                                <div className="flex">
                                    <input onChange={e => setVideo(e.target.files[0])} type="file" name="videoFiles" id="videoFiles" className="px-8 w-full py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                                </div>
                            </fieldset>
                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={() => { setVideo(''); setErr(''); window.message_video.close() }} className="btn btn-sm border">close</button>
                                <button onClick={videoUpload} className="btn  btn-sm text-white hover:bg-[#433c8f] bg-[#7065F0]"><span className="hidden lg:inline">send</span> <img src={text7} alt="" /></button>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
        </>
    );
};

export default MessageList;