import React from 'react';
import blankImag from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'
import { FaCopy, FaEdit, FaFacebook, FaInstagramSquare, FaPlay, FaRegCalendarAlt, FaRegPlayCircle, FaSave, FaShare, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { BsHouseAddFill } from "react-icons/bs";

const Profile = () => {
    const [title, setTitle] = useState(false)
    const [titleValue, setTitleValue] = useState('In one or two lines')
    return (
        <div className='home'>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-9 lg:gap-20 pt-20'>
                    <div className='w-full lg:w-[40%] '>
                        <div className='w-full text-center p-4 lg:p-6  border-2 rounded-lg  bg-white bg-opacity-50'>
                            <img src={blankImag} className='w-20 -mt-14 lg:-mt-20 h-20 lg:w-28 lg:h-28 rounded-full mx-auto border-2 border-white ' alt="" />
                            <h1 className='font-semibold text-lg lg:text-xl mt-7 mb-4'>User Name</h1>
                            <p >Free Account</p>
                            <button className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-7 w-full'>upgrade now</button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl lg:text-2xl font-bold text-[#302b68]'>Profile Score</h1>
                            <h1 className='text-2xl font-extrabold text-green-600'>56%</h1>
                        </div>
                        <div className='p-1 bg-slate-100 border-2 border-gray-300 rounded-lg my-4'>
                            <p className='p-6 w-[56%] bg-gradient-to-r from-green-400 to-teal-600 rounded-s-lg'></p>
                        </div>
                        <p className='font-medium '>Answer these questioons so you get the best response from preple who read your profile </p>
                    </div>
                </div>



                <div className='px-4 lg:px-6 py-10 bg-white bg-opacity-60 border-2 rounded-md mt-10 '>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold '>About you</h1>
                    <div className='flex justify-center items-center  gap-2 mt-3'>
                        {title && <input type="text" onChange={e => setTitleValue(e.target.value)} defaultValue={titleValue} className='p-1 text-xl border rounded' name="" id="" />}
                        {!title && <p className='text-center  text-xl '>{titleValue}</p>}
                        {!title && <FaEdit onClick={() => setTitle(true)} className='text-2xl cursor-pointer' />}
                        {title && <FaSave onClick={() => setTitle(false)} className='text-2xl cursor-pointer' />}
                    </div>
                    <div className='flex flex-col lg:flex-row items-center mt-6 lg:mt-12 gap-16'>
                        <div className='w-full lg:w-[50%]'>
                            <h1 className=' lg:text-lg font-semibold'>Do you want members to be able to contact you directly on your mobile?</h1>
                            <p className='flex items-center gap-2 mt-7'><input type="radio" name="radio-2" className="radio radio-primary" checked /> yes please! Make my number public</p>
                            <p className='flex items-center gap-2 mt-4'><input type="radio" name="radio-2" className="radio radio-primary" checked />No thanks. Keep it private</p>
                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <h1 className=' text-2xl text-center font-semibold'>Share your listing </h1>
                            <div className='flex justify-center items-center gap-6 mt-4'>
                                <div className='relative'>
                                    <FaFacebook className='text-5xl text-blue-600' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative'>
                                    <FaInstagramSquare className='text-5xl text-rose-600' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative'>
                                    <FaTwitterSquare className='text-5xl text-blue-400' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative'>
                                    <FaCopy className='text-5xl text-gray-400' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className=' mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10'>
                    <div className='w-full lg:w-[30%] p-4 lg:p-6  bg-white bg-opacity-60 border-2 rounded-md text-center'>
                        <h1 className=' lg:text-lg font-semibold text-left'>Upload video tour (recommended)</h1>
                        <FaPlay className='mx-auto text-5xl border-2 p-2 rounded-lg border-blue-950 px-3 text-[#7065F0] mt-7 mb-4' />
                        <p className='text-center text-sm'>Uploading a video of your home can reduce the need for in-person inspections</p>
                        <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-7 '>add video</button>
                    </div>
                    <div className='w-full lg:w-[70%] p-4 lg:p-6 text-center  bg-white bg-opacity-60 border-2 rounded-md flex justify-center items-center'>
                        <div>
                            <FaRegCalendarAlt className='mx-auto text-5xl  text-[#7065F0] ' />
                            <h1 className=' font-medium text-xl mt-4'>Finalise your inspection times</h1>
                            <p className='text-sm my-2'>Once completed, you can invite potential flamates to book times via messages</p>
                            <a href='' className='text-blue-500'>Learn more</a>
                            <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-4 block mx-auto'>Finish setting up inspections</button>
                        </div>

                    </div>
                </div>

                <div className='flex justify-center items-center text-center bg-[#7065F0] text-white h-40 lg:h-48 mt-7'>
                    <div className='text-center'>
                        <label htmlFor="img"> <BsHouseAddFill className='text-5xl mx-auto cursor-pointer duration-300 hover:scale-125'></BsHouseAddFill></label>
                        <input type="file" className='h-0 w-0 overflow-hidden' name="" id="img" />
                        <p className=' lg:text-xl'>Add photos to your profile</p>
                    </div>
                </div>


                {/* <div>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold mt-10 lg:mt-16'>Your Listing</h1>
                    <h1 className='mt-6 lg:mt-12 lg:text-lg font-semibold text-center'>Do you want members to be able to contact you directly on your mobile?</h1>
                </div> */}
            </div>
        </div>
    );
};

export default Profile;