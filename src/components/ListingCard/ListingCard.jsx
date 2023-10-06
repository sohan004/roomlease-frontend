import React from 'react';
import { useEffect } from "react";
import { baseURL } from "../../App";
import { useState } from "react";
import Select from 'react-select';
import calender from '../../assets/rentIcon/Icon.svg'
import arow from '../../assets/rentIcon/Icon (1).svg'
import { FaCarSide, FaDeezer, FaHome, FaLandmark, FaPeopleArrows, FaSearch } from "react-icons/fa";
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { IoBedSharp, IoPerson } from 'react-icons/io5';
import moment from 'moment/moment';
import ageIcon from '../../assets/rentIcon/age.png'

const ListingCard = ({ p, reFatch }) => {

    const { userData } = useContext(AuthContext)
    const navigate = useNavigate()

    const [fav, setFav] = useState(p?.is_favourite ? true : false)

    // console.log(p);

    const homeOwnerAddFavorite = (id) => {
        if (!userData) return navigate('/otp-send')
        setFav(true)
        fetch(`${baseURL}/listing/add-home-listing-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // setReFatch(reFatch + 1)

            })
            .catch(err => {
                console.log(err)
            })
    }
    const roomSeekerAddFavorite = (id) => {
        if (!userData) return navigate('/otp-send')
        setFav(true)
        fetch(`${baseURL}/listing/add-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // setReFatch(reFatch + 1)

            })
            .catch(err => {
                console.log(err)
            })
    }
    const homeOwnerFavouriteDelete = (id) => {
        if (!userData) return navigate('/otp-send')
        setFav(false)
        fetch(`${baseURL}/listing/remove-home-listing-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // setReFatch(reFatch + 1)

            })
            .catch(err => {
                console.log(err)
            })
    }
    const roomSeekerFavouriteDelete = (id) => {
        if (!userData) return navigate('/otp-send')
        setFav(false)
        fetch(`${baseURL}/listing/remove-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // setReFatch(reFatch + 1)

            })
            .catch(err => {
                console.log(err)
            })
    }


    if (p?.looking_place) {
        return <div >
            <div className='w-full border rounded-lg  h-full border-[#F0EFFB] cursor-pointer bg-white'>
                {p?.photo && <img onClick={() => navigate(`/room-seeker/${p.id}`)} src={`${p?.photo.includes('https://roomleaseau.pythonanywhere') ? p?.photo : `${baseURL}${p?.photo}`}  `} className='w-full lg:h-64 rounded-lg ' alt="" />}
                {!p?.photo && <div onClick={() => navigate(`/room-seeker/${p.id}`)} className='w-full h-64 flex justify-center items-center text-6xl opacity-60 rounded-lg bg-slate-200'>
                    <FaHome></FaHome>
                </div>}
                <div className='px-6 pt-6 pb-8'>
                    <div className='flex items-center justify-between'>
                        {<h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/room-seeker/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>${p?.looking_place ? p?.weekly_budget : p?.rent_per_week_single}<span className='text-base font-medium text-gray-500'>/week</span></h1>}
                        <div className='flex items-center gap-4'>
                            <TbMessage2 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/room-seeker/${p.id}`)} className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
                            {fav ? <MdFavorite className='text-[50px] border rounded-full p-3  text-[#7065F0] ' onClick={() => {
                                if (p?.looking_place) {
                                    roomSeekerFavouriteDelete(p.id)
                                }
                                else {
                                    homeOwnerFavouriteDelete(p.id)
                                }
                            }} /> : <img onClick={() => {
                                if (p?.looking_place) {
                                    roomSeekerAddFavorite(p.id)
                                }
                                else {
                                    homeOwnerAddFavorite(p.id)
                                }
                            }} src={ico3} className='border p-3 rounded-full' alt="" />}
                        </div>
                    </div>

                    {
                        <h1 onClick={() => navigate(`/room-seeker/${p?.id}`)} className='text-base font-medium text-gray-500  mb-2 mt-3'>{p?.suburb?.length > 0 ? p?.suburb[0].replace(/, Australia/, '') : ''}</h1>
                    }
                    <h1 onClick={() => navigate(`/room-seeker/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.available_from ? 'Available from' + ' ' + moment(p?.available_from).format('D MMMM YYYY') : ''}</h1>


                    <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/room-seeker/${p.id}`)} className='flex items-center justify-between'>

                        {p?.age && <p className='font-medium text-slate-600 text-base flex items-center gap-2'><img className='h-[17px] w-[17px] opacity-80' src={ageIcon} alt="" /> {p?.age || ''}</p>}

                        {p?.looking_place == 'For Myself' ?
                            <p className='font-medium text-slate-600 text-base flex items-center gap-2'> <IoPerson className=''></IoPerson>Individual</p> :
                            <p className='font-medium text-slate-600 text-base flex items-center gap-2'>
                                <div className='flex items-end '>
                                    <IoPerson className=''></IoPerson>
                                    <IoPerson className='text-lg -ms-2'></IoPerson>
                                </div> Couple</p>}

                        {/* <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico2} alt="" />{p?.bedroom_type || p?.room_type}</p>
                    <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico9} alt="" />{p?.looking_place ? p?.bed_size + ' ' + 'Bed' : 'Parking' + ' ' + p?.parking_option}</p> */}
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        return <div>
            <div className='w-full border rounded-lg h-full  border-[#F0EFFB] cursor-pointer bg-white'>
                {p?.photo && <img onClick={() => navigate(`/home-listing/${p.id}`)} src={`${p?.photo.includes('https://roomleaseau.pythonanywhere') ? p?.photo : `${baseURL}${p?.photo}`}  `} className='w-full lg:h-64 rounded-lg ' alt="" />}
                {!p?.photo && <div onClick={() => navigate(`/home-listing/${p.id}`)} className='w-full h-64 flex justify-center items-center text-6xl opacity-60 rounded-lg bg-slate-200'>
                    <FaHome></FaHome>
                </div>}
                <div className='px-6 pt-6 pb-8'>
                    <div className='flex items-center justify-between'>
                        {p?.looking_place ? <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>{p?.looking_place}</h1> : <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>${p?.rent_per_week_single}<span className='text-base font-medium text-gray-500'>/week</span></h1>}
                        <div className='flex items-center gap-4'>
                            <TbMessage2 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
                            {fav ? <MdFavorite className='text-[50px] border rounded-full p-3  text-[#7065F0] ' onClick={() => {
                                if (p?.looking_place) {
                                    roomSeekerFavouriteDelete(p.id)
                                }
                                else {
                                    homeOwnerFavouriteDelete(p.id)
                                }
                            }} /> : <img onClick={() => {
                                if (p?.looking_place) {
                                    roomSeekerAddFavorite(p.id)
                                }
                                else {
                                    homeOwnerAddFavorite(p.id)
                                }
                            }} src={ico3} className='border p-3 rounded-full' alt="" />}
                        </div>
                    </div>

                    {
                        <h1 onClick={() => navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500  mb-2 mt-3'>{p?.home_address ?
                            <>
                                {p.home_address.split(',')[p.home_address.split(',').length - 2]}
                            </>
                            : ''}</h1>
                    }
                    <h1 onClick={() => navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.available_from ? 'Available from' + ' ' + moment(p?.available_from).format('D MMMM YYYY') : ''}</h1>


                    <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='flex items-center justify-between'>

                        {p?.parking_option && <p className='font-medium text-slate-600 text-base flex items-center gap-2'> <FaCarSide className=''></FaCarSide>{p?.parking_option || ''}</p>}
                       {p?.bedroom_type?.length > 0 && <p className='font-medium text-slate-600 text-base flex items-center gap-2'> <IoBedSharp className=''></IoBedSharp>{p?.bedroom_type ? p?.bedroom_type?.split(' ')[0] : ''}</p>}
                        {/* <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico2} alt="" />{p?.bedroom_type || p?.room_type}</p>
                        <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico9} alt="" />{p?.looking_place ? p?.bed_size + ' ' + 'Bed' : 'Parking' + ' ' + p?.parking_option}</p> */}
                    </div>
                </div>
            </div>
        </div>
    }

    // <Link to={`/details/${p.id}`}>
    // <div className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
    //     {p?.photo && <img onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} src={`${p?.photo.includes('https://roomleaseau.pythonanywhere') ? p?.photo : `${baseURL}${p?.photo}`}  `} className='w-full lg:h-64 rounded-lg ' alt="" />}
    //     {!p?.photo && <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='w-full h-64 flex justify-center items-center text-6xl opacity-60 rounded-lg bg-slate-200'>
    //         <FaHome></FaHome>
    //     </div>}
    //     <div className='px-6 pt-6 pb-8'>
    //         <div className='flex items-center justify-between'>
    //             {p?.looking_place ? <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>{p?.looking_place}</h1> : <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>${p?.rent_per_week_single}<span className='text-base font-medium text-gray-500'>/week</span></h1>}
    //             <div className='flex items-center gap-4'>
    //                 <TbMessage2 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
    //                 {fav ? <MdFavorite className='text-[50px] border rounded-full p-3  text-[#7065F0] ' onClick={() => {
    //                     if (p?.looking_place) {
    //                         roomSeekerFavouriteDelete(p.id)
    //                     }
    //                     else {
    //                         homeOwnerFavouriteDelete(p.id)
    //                     }
    //                 }} /> : <img onClick={() => {
    //                     if (p?.looking_place) {
    //                         roomSeekerAddFavorite(p.id)
    //                     }
    //                     else {
    //                         homeOwnerAddFavorite(p.id)
    //                     }
    //                 }} src={ico3} className='border p-3 rounded-full' alt="" />}
    //             </div>
    //         </div>
    //         <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold my-2'>{p?.looking_place ?
    //             <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>${p?.weekly_budget}<span className='text-base font-medium text-gray-500'>/week</span></h1>
    //             : p?.house_type}</h1>
    //         {p?.looking_place ?
    //             <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p?.id}`) : navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.suburb?.length > 0 ? p?.suburb[0] : 'Australia'}</h1>
    //             :
    //             <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p?.id}`) : navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.home_address ?
    //                 <>
    //                     {p.home_address.split(',')[p.home_address.split(',').length - 2]}
    //                 </>
    //                 : 'Australia'}</h1>
    //         }

    //         <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='flex items-center justify-between'>

    //             <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico2} alt="" />{p?.bedroom_type || p?.room_type}</p>
    //             <p className='font-medium text-slate-600 text-xs lg:text-base flex items-center gap-2'><img src={ico9} alt="" />{p?.looking_place ? p?.bed_size + ' ' + 'Bed' : 'Parking' + ' ' + p?.parking_option}</p>
    //         </div>
    //     </div>
    // </div>
    // </Link>
};

export default ListingCard;