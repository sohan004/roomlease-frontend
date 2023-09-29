import React from 'react';
import { useNavigate } from 'react-router-dom';

const SiteMap = () => {

  const navigate = useNavigate()

  return (
    <div className='max-w-[1400px] mx-auto px-4 pt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>

    
      <div className=''>
        <h1 className='text-[#7065F0] text-xl font-semibold'>Listings</h1>
        <p onClick={() => navigate('/matches')} className='underline mt-1 cursor-pointer'>Matches</p>
        <p onClick={() => navigate('/rent?type=homeowner&location=')} className='underline mt-1 cursor-pointer'>Search Listings</p>
        <p onClick={() => navigate('/rent?type=homeowner&location=')} className='underline mt-1 cursor-pointer'>Homeowner Listing</p>
        <p onClick={() => navigate('/rent?type=roomseeker&location=')} className='underline mt-1 cursor-pointer'>RoomSeeker Listing</p>
      </div>

      <div className=''>
        <h1 className='text-[#7065F0] text-xl font-semibold'>Listings by Area</h1>
        <p onClick={() => navigate('/rent?type=roomseeker&location=Melbourne')} className='underline mt-1 cursor-pointer'>Roomseeker in Melbourne</p>
        <p onClick={() => navigate('/rent?type=roomseeker&location=Sydney')} className='underline mt-1 cursor-pointer'>Roomseeker in Sydney</p>
        <p onClick={() => navigate('/rent?type=roomseeker&location=Brisbane')} className='underline mt-1 cursor-pointer'>Roomseeker in Brisbane</p>
        <p onClick={() => navigate('/rent?type=roomseeker&location=Perth')} className='underline mt-1 cursor-pointer'>Roomseeker in Perth</p>
      </div>

      <div className=''>
        <h1 className='text-[#7065F0] text-xl font-semibold'>Profile Link</h1>
        <p onClick={() => navigate('/profile')} className='underline mt-1 cursor-pointer'>User Profile</p>
        <p onClick={() => navigate('/setting_profile')} className='underline mt-1 cursor-pointer'>Setting Profile</p>
      </div>

      <div className=''>
        <h1 className='text-[#7065F0] text-xl font-semibold'>Setting Link</h1>
        <p onClick={() => navigate('/setting_profile')} className='underline mt-1 cursor-pointer'>User Profile setting</p>
        <p onClick={() => navigate('/setting_profile?r=2')} className='underline mt-1 cursor-pointer'>Notification Setting</p>
      </div>

      {/* <div className=''>
        <h1 className='text-[#7065F0] text-xl font-semibold'>Listing add Link</h1>
        <p onClick={() => navigate('/homeowner')} className='underline mt-1 cursor-pointer'>Listing add by homeowner</p>
        <p onClick={() => navigate('/roomseeker')} className='underline mt-1 cursor-pointer'>Listing add by roomseeker</p>
      </div> */}

    </div>
  );
};

export default SiteMap;