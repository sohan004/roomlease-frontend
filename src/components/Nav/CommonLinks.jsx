import React from 'react'
import { FaInbox, FaSearch, FaUser } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { MdDoubleArrow } from 'react-icons/md'
import { BsFillPersonFill, BsPerson, BsPersonCheckFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import useUserData from '../Hook/useUserData'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'

export default function CommonLinks({setUserData, userData}) {
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
      <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <div className='flex justify-center items-center'>
          <BsPersonCheckFill></BsPersonCheckFill>
          <BsFillPersonFill></BsFillPersonFill>
        </div>
        <p className='font-medium'>Matches</p>
      </div>
      <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <FaInbox></FaInbox>
        <p className='font-medium'>Inbox</p>
      </div>

      <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <GrSettingsOption></GrSettingsOption>
        <p className='font-medium'>Settings</p>
      </div>
      <div className="flex gap-4 lg:gap-6 items-center">
        <div className=" flex justify-center items-center gap-4">
          <div className="flex items-center gap-2 py-2 lg:py-3 px-2 lg:px-4 border-2 border-[#E0DEF7] rounded-xl">
            <p className="bg-[#7065F0] text-white font-medium rounded-full h-8 w-8 flex items-center justify-center">{userData?.first_name?.slice(0, 2).toUpperCase()}</p>
            {/* <p className="font-medium hidden lg:block">{userData?.first_name}</p> */}
            <div className="dropdown dropdown-bottom dropdown-end ">
              <img tabIndex={0} className="cursor-pointer" src={arrowDown} alt="" />
              <ul tabIndex={0} className="dropdown-content z-[1] menu  mt-6 rounded-box w-52">

                <button onClick={() => {
                  setUserData(null)
                  localStorage.removeItem('user-token')
                }} className="btn btn-error">Sign out</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
