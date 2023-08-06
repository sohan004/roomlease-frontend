import React from 'react';
import blankImag from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'
import { FaBed, FaCarSide, FaCopy, FaEdit, FaFacebook, FaHome, FaInstagramSquare, FaPenAlt, FaPencilAlt, FaPlay, FaRegCalendarAlt, FaRegPlayCircle, FaSave, FaShare, FaTimes, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { BsHouseAddFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
    const [title, setTitle] = useState(false)
    const [titleValue, setTitleValue] = useState('In one or two lines')
    const [roomDetails, setRoomDetails] = useState(false)
    const [roomEdit, setRoomEdit] = useState(false)
    const [description, setDescription] = useState(false)
    const [type, setType] = useState(false)
    const [img, setImg] = useState([])
    
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


                <div className=' mt-10 mb-7 flex flex-col lg:flex-row gap-6 lg:gap-10'>
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


                <div className='grid grid-cols-4 lg:grid-cols-7 gap-3 mb-5'>
                    {img.map((im, i) => {
                        return (
                            <div key={i} className='relative w-full'>
                                <img src={URL.createObjectURL(im)} alt="" className='w-full h-32 object-cover' />
                                <FaTimes onClick={() => setImg(img.filter((_, index) => index !== i))} className='absolute top-1 right-1 text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-center items-center text-center bg-[#7065F0] text-white h-40 lg:h-48 '>
                    <div className='text-center'>
                        <label htmlFor="img"> <BsHouseAddFill className='text-5xl mx-auto cursor-pointer duration-300 hover:scale-125'></BsHouseAddFill></label>
                        <input onChange={e => {
                            if(img.length >= 10) return toast.error('You can upload only 10 images  ', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                theme: "colored",
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            setImg([...img, e.target.files[0]])
                            
                            }} type="file" className='h-0 w-0 overflow-hidden' name="img" id="img" />
                        <p className=' lg:text-xl'>Add photos to your profile</p>
                    </div>
                </div>
                {img.length > 0 && <div className='flex justify-end mt-3'>
                    <button onClick={() => setImg([])} className="btn  bg-slate-300">Cencle</button>
                    <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload images</button>
                </div>}



                <div className='p-4 lg:p-6 py-10 relative  bg-white bg-opacity-60 border-2 rounded-md mt-10'>

                    {!roomDetails && <div onClick={() => setRoomDetails(true)} className=' rounded-full border cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0] py-1 px-2 lg:px-3 right-2 top-2 text-center absolute'>
                        <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                        <p className='text-xs'>edit</p>
                    </div>}

                    <h1 className='font-bold text-3xl'>Ashwood</h1>
                    <p className='font-medium '>19 queens parada, VLC, 447 (private)</p>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-10' >
                        <div className='flex gap-2 lg:gap-5 items-center'>
                            <FaHome className='text-3xl lg:text-6xl text-[#7065F0]' />
                            <div className=''>
                                <p className='opacity-50 text-xs lg:text-base'>House Type</p>
                                {!roomDetails && <p className='lg:text-lg font-medium '>House</p>}
                                {roomDetails && <input defaultValue={'Home'} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                            </div>
                        </div>
                        <div className='flex gap-2 lg:gap-5 items-center'>
                            <FaBed className='text-3xl lg:text-6xl text-[#7065F0]' />
                            <div>
                                <p className='opacity-50 text-xs lg:text-base'>Home Size</p>
                                {!roomDetails && <p className='lg:text-lg font-medium '>2 bed room</p>}
                                {roomDetails && <input defaultValue={'2 bed room'} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                            </div>
                        </div>
                        <div className='flex gap-2 lg:gap-5 items-center'>
                            <FaCarSide className='text-3xl lg:text-6xl text-[#7065F0]' />
                            <div>
                                <p className='opacity-50 text-xs lg:text-base'>Parking</p>
                                {!roomDetails && <p className='lg:text-lg font-medium '>Grage</p>}
                                {roomDetails && <input defaultValue={'Grage'} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                            </div>
                        </div>
                    </div>
                </div>
                {roomDetails && <div className='flex justify-start mt-3'>
                    <button onClick={() => setRoomDetails(false)} className="btn bg-slate-300">Cencle</button>
                    <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>save chenges</button>
                </div>}


                <div className='mt-10 lg:mt-20  flex flex-col lg:flex-row lg:justify-between gap-4'>
                    <h1 className='text-2xl font-bold text-[#7065F0]'>1 Beedrooms Available</h1>
                    <div className='flex items-center cursor-pointer border-2 border-[#7065F0] rounded-md'>
                        <p className='text-5xl font-extrabold px-2 pb-2 border-e-2 border-[#7065F0] bg-[#7065F0] text-white'>+</p>
                        <p className='py-4 flex-grow px-4 hover:bg-[#dbd7fd] cursor-pointer duration-300 h-full my-auto font-medium'>Add Onother Beedroom</p>
                    </div>
                </div>

                <div className='bg-white bg-opacity-60 border-2 rounded-md mt-6'>
                    <div className='flex justify-between items-center border-b-2'>
                        <p className='p-4 lg:p-6 text-xl font-bold'>Private Bedroom</p>
                        <div onClick={() => setRoomEdit(true)} className='  py-3 px-4 border-s-2  cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0]   text-center '>
                            <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                            <p className=' mt-1'>edit</p>
                        </div>

                    </div>
                    <div className='p-4 lg:p-6 '>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Rent Amount</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>Singles $200 per week (excludes bills)</p>}
                            {roomEdit && <input type="text" defaultValue={'Singles $200 per week (excludes bills)'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Date available</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>2 August 2023 fir 2 months to 4 months</p>}
                            {roomEdit && <input type="text" defaultValue={'2 August 2023 fir 2 months to 4 months'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Bedroom size</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>Medium bedroom</p>}
                            {roomEdit && <input type="text" defaultValue={'Medium bedroom'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Bedroom furniture</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>without a bed</p>}
                            {roomEdit && <input type="text" defaultValue={'without a bed'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Features</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>own bathroom</p>}
                            {roomEdit && <input type="text" defaultValue={'own bathroom'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                        <div className='flex gap-2 items-center lg:gap-7 border-b pb-4  mb-4'>
                            <p className='font-medium opacity-70 w-[90px] lg:w-[150px] '>Security bond</p>
                            <p className='font-medium opacity-70'>:</p>
                            {!roomEdit && <p className='font-semibold'>2 weeks</p>}
                            {roomEdit && <input type="text" defaultValue={'2 weeks'} name="" className='p-2 border-2 rounded-md' id="" />}
                        </div>
                    </div>
                </div>
                {roomEdit && <div className='flex justify-start mt-3'>
                    <button onClick={() => setRoomEdit(false)} className="btn  bg-slate-300">Cencle</button>
                    <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>save chenges</button>
                </div>}

                <div className='bg-white bg-opacity-60 border-2 rounded-md mt-10 relative'>
                    <div className='flex justify-between items-center border-b-2'>
                        <p className='p-4 lg:p-6 text-xl font-bold'>Home Description</p>
                        <div onClick={() => setDescription(true)} className='  py-3 px-4 border-s-2  cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0]   text-center '>
                            <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                            <p className=' mt-1'>edit</p>
                        </div>
                    </div>
                    <div className='p-4 lg:p-6'>
                        {!description && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia doloremque repellendus quis sed minus, est eveniet exercitationem rerum omnis dolor libero, aut molestias accusantium modi velit nulla, obcaecati commodi.</p>}
                        {description && <textarea name="" id="" cols="30" rows="3" className='p-2 border-2 rounded-md w-full'></textarea>}
                    </div>
                </div>
                {description && <div className='flex justify-start mt-3'>
                    <button onClick={() => setDescription(false)} className="btn bg-slate-300">Cencle</button>
                    <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>save chenges</button>
                </div>}


                <h1 className='text-center mt-10 font-bold text-xl lg:text-3xl'>Listing Status</h1>
                <div className="flex items-center justify-center max-w-2xl mx-auto border-2 border-[#7065F0] mt-4">
                    <p className={`duration-300 flex-grow border-r-2 border-[#7065F0] text-center ${type === false ? ' hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-slate-200'} py-3 cursor-pointer text-xl lg:text-2xl font-medium`}>Active</p>
                    <p className={`duration-300 flex-grow text-center ${type === true ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-slate-200'} py-3 cursor-pointer text-xl lg:text-2xl font-medium`}>Deactive</p>
                </div>


                {/* <div>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold mt-10 lg:mt-16'>Your Listing</h1>
                    <h1 className='mt-6 lg:mt-12 lg:text-lg font-semibold text-center'>Do you want members to be able to contact you directly on your mobile?</h1>
                </div> */}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;