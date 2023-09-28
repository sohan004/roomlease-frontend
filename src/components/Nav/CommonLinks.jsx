import React, { useState } from 'react'
import { FaInbox, FaMapMarkerAlt, FaSearch, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { MdDoubleArrow } from 'react-icons/md'
import { BsFillPersonFill, BsPerson, BsPersonCheckFill } from 'react-icons/bs'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useUserData from '../Hook/useUserData'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useContext } from 'react'
import Autocomplete from "react-google-autocomplete";

export default function CommonLinks({ setUserData, userData, setTf }) {
  const { listing, setListing, setRefresh, refresh, listingLoading, searchDrpopDown, setSearchDrpopDown } = useContext(AuthContext)
  const [type, setType] = useState('homeowner')
  const [addresEmpty, setAddresEmpty] = useState('')
  const [suburbValue, setSuburbValue] = useState([])
  const navigate = useNavigate()



  return (
    <>
      {/* <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink> */}
      {/* <p className='font-medium'>Pricing</p>
    <p className='font-medium'>Blog</p> */}
      <div onClick={() => { navigate(`/rent?type=${userData?.account_type == 'homeowner' ? 'roomseeker' : 'homeowner'}&location=`); setTf(false) }} className='border-b-2  cursor-pointer relative  border-[#100A55] flex flex-grow items-center justify-center px-4'>
        <FaSearch></FaSearch>
        {/* {searchDrpopDown && <div className='absolute top-0 left-0 w-full bg-white p-1 shadow-2xl lg:p-3  '>


          <div className="mt-4 grid grid-cols-2 px-4  text-center font-medium">
            <p onClick={() => setType('homeowner')} className={`border  duration-500 ${type === 'homeowner' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Home Owner</p>
            <p onClick={() => setType('roomseeker')} className={`border border-s-0 duration-500 
                            ${type == 'roomseeker' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Room Seeker</p>
          </div>

          <div className="w-full mt-4 border border-[#7065F0] rounded-lg">
            <Autocomplete

              className="w-full  rounded-lg rounded-b-none border-b mb-4  focus:outline-none py-3 px-5   bg-[#f6f6ff] "
              apiKey={`AIzaSyAMJbH4KtMl-oDgAFJXF1teH_Y6vzO4JqA`}

              options={{
                componentRestrictions: { country: "au" },
              }}
              value={addresEmpty}
              onChange={e => setAddresEmpty(e.target.value)}
              onPlaceSelected={(place) => {
                if (place.formatted_address) {
                  const address = place.formatted_address
                  setSuburbValue(prevSuburbValue => [...prevSuburbValue, address]);
                  setAddresEmpty('')
                }
              }}
            />

            <div className="p-2  flex flex-wrap gap-3 py-5 w-full ">
              {suburbValue.map((sub, i) => {
                return <p className="bg-slate-200 flex items-center gap-1" key={i}>{sub} <FaTimes onClick={() => { setSuburbValue(suburbValue.filter((_, index) => index !== i)); }} className=' text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes></p>

              })}
            </div>

          </div>
          <button
            onClick={() => {
              const urlString = suburbValue.join(', ')
              // console.log(urlString);
              navigate(`/rent?type=${type}&location=${urlString}`)
              setSearchDrpopDown(false)
              setSuburbValue([])

            }} className='btn w-full mt-2 hover:bg-[#4e46a1] bg-[#7065F0] text-white '>search</button>


        </div>} */}
        <input value={''} readOnly type="text" name="" placeholder='Search Listings' className='py-1 px-3 w-full text-lg focus:outline-none bg-transparent' />
      </div>
      <p onClick={() => {
        setTf(false)
        if(listing){
          navigate('/profile')
        }
        else{
          window.location.href = '/profile'
        }
        }} className='cursor-pointer'>
        <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
          <FaUser></FaUser>
          <p className='font-medium'>Profile</p>
        </div>
      </p>
      <Link onClick={() => setTf(false)} to='/matches'>
        <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
          <div className='flex justify-center items-center'>
            <BsPersonCheckFill></BsPersonCheckFill>
            <BsFillPersonFill></BsFillPersonFill>
          </div>
          <p className='font-medium'>Matches</p>
        </div>
      </Link>
      <Link onClick={() => setTf(false)} to='/message' className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <FaInbox></FaInbox>
        <p className='font-medium'>Inbox</p>
      </Link>
      {/* <div className='text-[#100A55] flex flex-col justify-center items-center gap-1'>
        <GrSettingsOption></GrSettingsOption>
        <p className='font-medium'>Settings</p>
      </div> */}
      <div onClick={() => {
        setTf(false)
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
