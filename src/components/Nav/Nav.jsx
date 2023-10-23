import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import menu from '../../assets/menu.svg'
import CommonLinks from './CommonLinks';
import { baseURL } from '../../App';
import { useEffect, useState } from 'react';
import ball from '../../assets/settingIcon/Icon.svg'

import useUserData from '../Hook/useUserData';
import bol from '../../assets/navIcon/bol3.png'
import logoHome from '../../assets/navIcon/logoHome.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaSearch } from 'react-icons/fa';



const Nav = ({ setTf }) => {

    const { userData, setUserData } = useContext(AuthContext)

    const navigate = useNavigate()


    // const [bgColor, setBgColor] = useState(true); // Initial background color

    // useEffect(() => {
    //     // Function to handle scrolling
    //     const handleScroll = () => {
    //         // Check the scroll position
    //         if (window.scrollY > 0) {
    //             setBgColor(false); // Change background color to black when scrolled down
    //         } else {
    //             setBgColor(true); // Change background color to white when at the top
    //         }
    //     };

    //     // Attach the scroll event listener
    //     window.addEventListener('scroll', handleScroll);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // console.log(bgColor);

    return (
        <>
            <div className='bg-[#EDECFB] sticky top-0 z-40'>
                <div className=' max-w-[1440px] mx-auto py-4  flex items-center gap-5 lg:gap-14 justify-between px-5 lg:px-8'>

                    <div className='flex items-center gap-14 '>

                        <div onClick={() => navigate('/')} className='flex cursor-pointer items-center '>
                            <p className='font-bold text-xl lg:text-3xl text-[#100A55] flex items-start '>
                                R
                                <span className='flex flex-col justify-center items-center'>
                                    o
                                    <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                                </span>
                                <span className='flex flex-col justify-center items-center'>
                                    o
                                    <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                                </span>
                                mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se.com.au
                            </p>
                        </div>
                    </div>

                    {!userData && <div onClick={() => { navigate(`/rent?type=${userData?.account_type == 'homeowner' ? 'roomseeker' : 'homeowner'}&location=`); setTf(false) }} className='border-b-2  cursor-pointer relative  border-[#100A55] hidden lg:flex flex-grow items-center max-w-lg mx-auto justify-center px-4'>
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
              apiKey={import.meta.env.VITE_googleApiKey}

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
                    </div>}

                    {userData && <div className='lg:flex gap-12 flex-grow items-center hidden'>
                        <CommonLinks setTf={setTf} userData={userData} setUserData={setUserData} />
                    </div>}
                    <div className='flex items-center gap-4'>
                        <FaSearch
                            onClick={() => { navigate(`/rent?type=${userData?.account_type == 'homeowner' ? 'roomseeker' : 'homeowner'}&location=`) }}
                            className='text-lg lg:hidden cursor-pointer'></FaSearch>

                        {!userData && <div className=' '>
                            <NavLink to='/otp-send'><button className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white capitalize'>Login</button></NavLink>
                        </div>}

                        {userData && <img onClick={() => setTf(true)} src={menu} className=' lg:hidden' alt="" />}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Nav;