import React from 'react'
import { FaInbox, FaSearch, FaUser } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { MdDoubleArrow } from 'react-icons/md'
import { BsFillPersonFill, BsPerson, BsPersonCheckFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import useUserData from '../Hook/useUserData'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'

export default function CommonLinks({ setUserData, userData }) {
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


      <div className="dropdown dropdown-bottom dropdown-end ">
        <div tabIndex={0} className='cursor-pointer text-[#100A55] flex flex-col justify-center items-center gap-1'>
          <GrSettingsOption></GrSettingsOption>
          <p className='font-medium'>Settings</p>
        </div>
        {/* <img  src={arrowDown} alt="" /> */}
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52">
          <li><a>Settings</a></li>
          <li><a>Profile</a></li>
          <li onClick={() => {
                  setUserData(null)
                  localStorage.removeItem('user-token')
                }}><a>Sign out</a></li>
        </ul>
      </div>

    </>
  )
}
