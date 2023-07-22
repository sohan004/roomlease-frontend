import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import { useState } from "react";
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






const MessageDashboard = () => {
    const [data, setData] = useState([{}])
    const messageData = [
        {
            "img": "image_url_1.jpg",
            "name": "John Doe",
            "method": "Request for Home Tour",
            "message": "John Doe is an experienced software engineer with a passion for building innovative solutions. He has a strong background in web development and has worked on numerous successful projects. John is a quick learner, a team player, and always ready to take on new challenges. He is known for his attention to detail and ability to deliver high-quality code on time. Currently, John is exploring new technologies to stay at the cutting edge of the tech industry.",
            "status": "active"
        },
        {
            "img": "image_url_2.jpg",
            "name": "Jane Smith",
            "method": "General Inquiry",
            "message": "Jane Smith is a creative graphic designer with a flair for producing stunning visuals. With years of experience in the industry, she has worked with various clients from different sectors, delivering exceptional design solutions that leave a lasting impact. Jane is skilled in using industry-standard design tools and has a keen eye for aesthetics. Her passion for design extends beyond her professional life, as she enjoys creating art in her free time. Jane is currently seeking opportunities to collaborate on exciting projects that challenge her creativity.",
            "status": "inactive"
        },
        {
            "img": "image_url_3.jpg",
            "name": "Michael Johnson",
            "method": "General Inquiry",
            "message": "Michael Johnson is a dedicated educator and a lifelong learner. With a master's degree in education and a passion for teaching, he has helped shape the minds of countless students. Michael believes in creating an engaging and inclusive learning environment, where students feel empowered to explore and discover their interests. He is well-versed in various teaching methodologies and keeps up-to-date with the latest trends in education. When he's not in the classroom, Michael enjoys writing educational articles and conducting workshops for fellow educators.",
            "status": "active"
        },
        {
            "img": "image_url_4.jpg",
            "name": "Emily Brown",
            "method": "General Inquiry",
            "message": "Emily Brown is a determined entrepreneur with a vision to make a positive impact in the world. She is the founder of a successful social enterprise that focuses on sustainable fashion and empowers local artisans. Emily believes in the importance of ethical business practices and aims to create a brand that promotes environmental conservation. As a strong advocate for women's rights, she also supports various initiatives to uplift and empower women in underserved communities. Emily's journey as an entrepreneur has taught her valuable lessons about resilience and perseverance.",
            "status": "inactive"
        }
    ]

    return (
        <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
                <div className="px-5 py-7 w-[10%] hidden lg:flex  flex-col  items-center justify-between border-e h-[100vh]">
                    <div>
                        <img src={logo} className="bg-[#7065F0] p-2 rounded-lg" alt="" />
                        <div className="flex flex-col items-center gap-4 mt-14">
                            <img src={icon1} className="p-2 rounded-lg" alt="" />
                            <img src={icon2} className="p-2 rounded-lg" alt="" />
                            <img src={icon3} className="p-2 rounded-lg" alt="" />
                            <img src={icon4} className="p-2 rounded-lg" alt="" />
                            <img src={icon5} className="p-2 rounded-lg" alt="" />
                            <img src={icon6} className="p-2 rounded-lg bg-[#F0EFFB]" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <img src={icon7} alt="" />
                        <img src={icon8} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-[90%]">
                    <div className="w-full border-b bg-white">
                        <div className=" px-4  py-4 lg:py-7 flex items-center justify-between">

                            <p className="text-2xl hidden lg:block font-bold">Messages</p>
                            <img src={menu} className="lg:hidden" alt="" />


                            <div className="flex gap-4 lg:gap-6 items-center">
                                <div>
                                    <img src={ball} className="p-2 bg-slate-100 rounded-lg" alt="" />
                                </div>
                                <div className="lg:ps-6 lg:border-s-2">
                                    <div className="flex items-center gap-2 py-2 lg:py-3 px-2 lg:px-4 border-2 border-[#E0DEF7] rounded-xl">
                                        <p className="bg-[#7065F0] text-white font-medium rounded-full h-8 w-8 flex items-center justify-center">FR</p>
                                        <p className="font-medium hidden lg:block">Francis</p>
                                        <img src={arrowDown} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* emty fild design */}
                    {data.length === 0 && <div className="w-full flex justify-center max-w-[348px] mx-auto  ">
                        <div className=" text-center">
                            <div className="mt-16 lg:mt-24">
                                <div className="relative ms-2 mb-1 w-[72px]">
                                    <img src={personSvg} className="bg-[#E0DEF7] p-1 rounded-full border-2 border-white shadow-md" alt="" />
                                    <img src={imgTop} className="absolute right-0 -top-3" alt="" />
                                </div>
                                <img src={imgTop2} alt="" />
                            </div>
                            <div className="-mt-10 mb-12">
                                <div className="relative -me-3 mb-1 ms-auto w-[72px]">
                                    <img src={personSvg} className="bg-[#E0DEF7] p-1 rounded-full border-2 border-white shadow-md" alt="" />
                                    <img src={imgTop4} className="absolute -left-4 -top-3" alt="" />
                                </div>
                                <img className="ms-auto" src={imgTop3} alt="" />
                            </div>

                            <h1 className="text-2xl font-bold mb-3 text-center">Messages</h1>
                            <p className="opacity-70 text-center ">Messages is a feature that helps you converse with applicants and landlords. Let’s send your first message.</p>
                            <button className='btn  hover:bg-[#4e46a1] mt-8 bg-[#7065F0] text-white ms-3'>new message</button>
                        </div>
                    </div>}


                    {/* message design */}
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[30%] h-[90vh] overflow-y-auto ">
                            <div className="flex gap-4 items-center p-4">
                                <div className="flex-grow">
                                    <div className='  w-full bg-[#F7F7FD]  border border-[#E0DEF7] rounded-lg flex gap-2 items-center p-2'>
                                        <img src={ico7} alt="" />
                                        <input className='bg-transparent border-0 p-1 w-full focus:border-0' placeholder='Search...' type="text" name='' />
                                    </div>
                                </div>
                                <button className='btn  hover:bg-[#4e46a1]  bg-[#7065F0] text-white '><FaPlus /></button>
                            </div>
                            <div className="grid grid-cols-1 w-full">
                                {messageData.map((d, i) =>
                                    <div key={i} className="p-4 flex items-start gap-4 w-full">
                                        <img className="w-12 h-12 rounded-full" src={messagePerson} alt="" />
                                        <div>
                                            <div className="flex justify-between flex-grow items-center">
                                                <p className="font-bold">{d.name}</p>
                                                <p className="opacity-60">4h ago</p>
                                            </div>
                                            <p className="text-sm my-1 font-medium">{d.method}</p>
                                            <p className="text-sm">{d.message.slice(0, 80)}...</p>
                                            <button className="btn btn-sm mt-4 rounded-full bg-transparent border-gray-300 border text-[#7065F0]">{d.status}</button>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        <div className="w-full lg:w-[40%] relative h-[90vh] overflow-y-auto p-4 bg-gradient-to-r from-[#E7E6F9] via-[#F6F5FC]  to-[#E7E6F9]">
                            <div className="flex justify-between py-4 px-6 bg-white border-2 border-indigo-100 rounded-lg">
                                <div className="flex gap-6">
                                    <img src={mes1} alt="" />
                                    <img src={mes2} alt="" />
                                    <img src={mes3} alt="" />
                                </div>
                                <div className="flex gap-6">
                                    <img src={mes4} alt="" />
                                    <img src={mes5} alt="" />
                                </div>
                            </div>


                            <div className="flex gap-4 mt-6 justify-start">
                                <img className="w-12 h-12 rounded-full" src={messagePerson} alt="" />
                                <div>
                                    <p className="p-4 bg-white rounded-lg border-2 border-indigo-100">Hi Francis,
                                        I’m  in love with one of your properties, Beverly Springfield and I would like to ask is it on the market?</p>
                                    <p className="text-sm mt-4 opacity-70">13:32 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6 justify-end">
                                <div>
                                    <p className="p-4 bg-[#E0DEF7] rounded-lg text-right">May I know your availability for home </p>
                                    <p className="text-sm mt-4 opacity-70 text-right">13:32 PM</p>
                                </div>
                            </div>


                            <div className="flex gap-4 mt-6 justify-start">
                                <img className="w-12 h-12 rounded-full" src={messagePerson} alt="" />
                                <div>
                                    <p className="p-4 bg-white rounded-lg border-2 border-indigo-100">May I know your availability for home tour this week?</p>
                                    <p className="text-sm mt-4 opacity-70">13:32 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6 justify-end">
                                <div>
                                    <p className="p-4 bg-[#E0DEF7] rounded-lg text-right">Here is my schedule please choose a time at your convenience.</p>
                                    <p className="text-sm mt-4 opacity-70 text-right">13:32 PM</p>
                                </div>
                            </div>

                            <div className=" w-full lg:w-[95%] mx-auto bottom-0  z-30 sticky p-4 rounded-lg bg-white border-2 border-indigo-100">
                                <input type="text" name="" className="p-2 w-full" placeholder="Write your message..." id="" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <img src={text1} alt="" />
                                        <img src={text2} alt="" />
                                        <img src={text3} alt="" />
                                        <img src={text4} alt="" />
                                        <img src={text5} alt="" />
                                        <img src={text6} alt="" />
                                    </div>
                                    <button className="btn  btn-sm text-white bg-[#7065F0]"><span className="hidden lg:inline">send</span> <img src={text7} alt="" /></button>
                                </div>
                            </div>


                        </div>
                        <div className="w-[30%] h-[90vh] overflow-y-auto p-4">

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default MessageDashboard;