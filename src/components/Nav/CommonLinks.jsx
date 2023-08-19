import React from 'react'
import { FaInbox, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { MdDoubleArrow } from 'react-icons/md'
import { BsFillPersonFill, BsPerson, BsPersonCheckFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import useUserData from '../Hook/useUserData'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useContext } from 'react'

export default function CommonLinks({ setUserData, userData }) {
  const { listing, setListing, setRefresh, refresh, listingLoading } = useContext(AuthContext)
  return (
    <>
      {/* <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink> */}
      {/* <p className='font-medium'>Pricing</p>
    <p className='font-medium'>Blog</p> */}
      <div className='border-b-2  border-[#100A55] flex flex-grow items-center justify-center px-4'>
        <FaSearch></FaSearch>
        <input type="text" name="" placeholder='search listings' className='py-1 px-3 w-full focus:outline-none bg-transparent' />
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
      <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <FaInbox></FaInbox>
        <p className='font-medium'>Inbox</p>
      </div>
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
