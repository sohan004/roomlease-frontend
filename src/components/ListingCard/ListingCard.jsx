import React from 'react';
import { useEffect } from "react";
import { baseURL } from "../../App";
import { useState } from "react";
import Select from 'react-select';
import calender from '../../assets/rentIcon/Icon.svg'
import arow from '../../assets/rentIcon/Icon (1).svg'
import { FaSearch } from "react-icons/fa";
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

const ListingCard = ({ p, setReFatch, reFatch }) => {

    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {


        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserData(data.data)
                }
                else {
                    navigate('/')
                    setUserData(null)
                }
            })
            .catch(err => {
                navigate('/')
                setUserData(null)
            })
    }, []);
    // console.log(p);

    const homeOwnerAddFavorite = (id) => {
        fetch(`${baseURL}/listing/add-home-listing-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const roomSeekerAddFavorite = (id) => {
        fetch(`${baseURL}/listing/add-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const homeOwnerFavouriteDelete = (id) => {
        fetch(`${baseURL}/listing/remove-home-listing-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const roomSeekerFavouriteDelete = (id) => {
        fetch(`${baseURL}/listing/remove-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        // <Link to={`/details/${p.id}`}>
        <div className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
            {p?.photo && <img onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} src={`${p?.photo.includes('https://roomlease.pythonanywhere') ? p?.photo : `${baseURL}${p?.photo}`}  `} className='w-full lg:h-64 rounded-lg -z-0' alt="" />}
            {!p?.photo && <img onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} src={img} className='w-full lg:h-64 rounded-lg -z-0' alt="" />}
            <div className='px-6 pt-6 pb-8'>
                <div className='flex items-center justify-between'>
                    {userData?.account_type == 'homeowner' ? <h1 onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>{p?.looking_place}</h1> : <h1 onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold text-[#7065F0]'>${p?.rent_per_week_single}<span className='text-base font-medium text-gray-500'>/week</span></h1>}
                    <div className='flex items-center gap-4'>
                        <TbMessage2 className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
                        {p?.is_favourite ? <svg onClick={() => {
                            if (userData?.account_type == 'homeowner') {
                                roomSeekerFavouriteDelete(p.id)
                            }
                            if (userData?.account_type == 'roomseeker') {
                                homeOwnerFavouriteDelete(p.id)
                            }
                        }} className='border p-3 rounded-full w-14 h-14' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45965 4.52185C4.39446 3.58731 5.66218 3.06232 6.98401 3.06232C8.30584 3.06232 9.57355 3.58731 10.5084 4.52185L11.969 5.98119L13.4296 4.52185C13.8894 4.04573 14.4395 3.66597 15.0476 3.40471C15.6558 3.14346 16.31 3.00594 16.9719 3.00019C17.6338 2.99444 18.2902 3.12056 18.9028 3.37121C19.5154 3.62186 20.072 3.99201 20.5401 4.46006C21.0081 4.92811 21.3783 5.48469 21.6289 6.09732C21.8796 6.70995 22.0057 7.36637 21.9999 8.02827C21.9942 8.69017 21.8567 9.34429 21.5954 9.95248C21.3342 10.5607 20.9544 11.1107 20.4783 11.5706L11.969 20.0811L3.45965 11.5706C2.52511 10.6358 2.00012 9.36804 2.00012 8.04621C2.00012 6.72438 2.52511 5.45666 3.45965 4.52185Z" fill="#000929" />
                        </svg> : <img onClick={() => {
                            if (userData?.account_type == 'homeowner') {
                                roomSeekerAddFavorite(p.id)
                            }
                            if (userData?.account_type == 'roomseeker') {
                                homeOwnerAddFavorite(p.id)
                            }
                        }} src={ico3} className='border p-3 rounded-full' alt="" />}
                    </div>
                </div>
                <h1 onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-2xl font-bold my-2'>{p?.house_type}</h1>
                <h1 onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.home_address || p?.suburb[0]}</h1>
                <div onClick={() => userData?.account_type == 'homeowner' ? navigate(`/room-seeker/${p.id}`) : navigate(`/home-listing/${p.id}`)} className='flex items-center justify-between'>
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