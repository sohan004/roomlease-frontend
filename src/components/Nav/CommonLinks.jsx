import React, { useState } from 'react'
import { FaInbox, FaMapMarkerAlt, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { MdDoubleArrow } from 'react-icons/md'
import { BsFillPersonFill, BsPerson, BsPersonCheckFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import useUserData from '../Hook/useUserData'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useContext } from 'react'
import Autocomplete from "react-google-autocomplete";

export default function CommonLinks({ setUserData, userData}) {
  const { listing, setListing, setRefresh, refresh, listingLoading, searchDrpopDown, setSearchDrpopDown } = useContext(AuthContext)
  const [type, setType] = useState(1)

  return (
    <>
      {/* <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink> */}
      {/* <p className='font-medium'>Pricing</p>
    <p className='font-medium'>Blog</p> */}
      <div className='border-b-2 relative  border-[#100A55] flex flex-grow items-center justify-center px-4'>
        <FaSearch></FaSearch>
        {searchDrpopDown && <div className='absolute top-0 left-0 w-full bg-white p-1 shadow-2xl lg:p-3  '>


          <div className="mt-4 grid grid-cols-2 px-4  text-center font-medium">
            <p className={`border  duration-500 ${type === 1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Home Owner</p>
            <p className={`border border-s-0 duration-500 
                            ${type == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Room Seeker</p>
          </div>

          <Autocomplete

            className="w-full mt-5 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg"
            apiKey={`AIzaSyAMJbH4KtMl-oDgAFJXF1teH_Y6vzO4JqA`}

            options={{
              componentRestrictions: { country: "au" },
            }}

            onPlaceSelected={(place) => {
              if (place.formatted_address) {
                // setHomeAddress(place.formatted_address)

              }
            }}
          />
          <button className='btn w-full mt-2 hover:bg-[#4e46a1] bg-[#7065F0] text-white '>search</button>
          <p className='p-1 bg-slate-300 mt-5'>Recent a search</p>
          <p className='flex gap-1 items-center text-sm mt-2'><FaMapMarkerAlt></FaMapMarkerAlt> Austrelia mauntail</p>


        </div>}
        <input onClick={() => setSearchDrpopDown(true)} type="text" name="" placeholder='search listings' className='py-1 px-3 w-full focus:outline-none bg-transparent' />
      </div>
      <Link to='/profile'>
        <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
          <FaUser></FaUser>
          <p className='font-medium'>Profile</p>
        </div>
      </Link>
      <Link to='/matches'>
        <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
          <div className='flex justify-center items-center'>
            <BsPersonCheckFill></BsPersonCheckFill>
            <BsFillPersonFill></BsFillPersonFill>
          </div>
          <p className='font-medium'>Matches</p>
        </div>
      </Link>
      <Link to='/message' className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <FaInbox></FaInbox>
        <p className='font-medium'>Inbox</p>
      </Link>
      <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <GrSettingsOption></GrSettingsOption>
        <p className='font-medium'>Settings</p>
      </div>
      <div onClick={() => {
        setListing(null)
        setUserData(null)
        localStorage.removeItem('user-token')
      }} className='text-[#100A55] cursor-pointer flex flex-col justify-center items-center gap-1'>
        <FaSignOutAlt className='text-[#7065F0]'></FaSignOutAlt>
        <p className='font-medium'>Sign Out</p>
      </div>

    </>
  )
}
