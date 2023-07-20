import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CommonLinks() {
  return (
    <>
    {/* <NavLink to='/rent'  className={({isActive})=>`font-medium ${isActive? 'bg-[#e3e0ff] py-1 px-2 rounded-md text-[#7065F0]': ''}`}>Rent</NavLink> */}
    <p className='font-medium'>Pricing</p>
    <p className='font-medium'>Blog</p>
    </>
  )
}
