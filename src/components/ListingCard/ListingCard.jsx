import React from 'react';
import { useEffect } from "react";
import { baseURL } from "../../App";
import { useState } from "react";
import Select from 'react-select';
import calender from '../../assets/rentIcon/Icon.svg'
import arow from '../../assets/rentIcon/Icon (1).svg'
import { FaHome, FaSearch } from "react-icons/fa";
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
    // console.log(p);
    return (
        // <Link to={`/details/${p.id}`}>
        <div className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
            {p?.photo && <img onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} src={`${p?.photo.includes('https://roomlease.pythonanywhere') ? p?.photo : `${baseURL}${p?.photo}`}  `} className='w-full lg:h-64 rounded-lg ' alt="" />}
            {!p?.photo && <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='w-full h-64 flex justify-center items-center text-6xl opacity-60 rounded-lg bg-slate-200'>
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
                <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold my-2'>{p?.house_type}</h1>
                {p?.looking_place ?
                    <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p?.id}`) : navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.suburb?.length > 0 ? p?.suburb[0] : 'Australia'}</h1>
                    :
                    <h1 onClick={() => p?.looking_place ? navigate(`/room-seeker/${p?.id}`) : navigate(`/home-listing/${p?.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.suburb || 'Australia'}</h1>
                }

                <div onClick={() => p?.looking_place ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='flex items-center justify-between'>
                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico1} alt="" />{p?.bedroom_type || p?.room_type}</p>
                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico2} alt="" />{p?.bed_size}</p>
                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico9} alt="" />{p?.bond || p?.private_bathroom}</p>
                </div>
            </div>
        </div>
        // </Link>
    );
};

export default ListingCard;