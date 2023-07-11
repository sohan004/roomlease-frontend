import backarrow from '../../assets/detailsPageIcon/Icon.svg'
import share from '../../assets/detailsPageIcon/Icon (1).svg'
import fav from '../../assets/detailsPageIcon/Icon (2).svg'
import search from '../../assets/detailsPageIcon/Icon (3).svg'
import img1 from '../../assets/detailsPageIcon/pexels-binyamin-mellish-1396122 1.png'
import img2 from '../../assets/detailsPageIcon/roberto-nickson-rEJxpBskj3Q-unsplash.png'
import img3 from '../../assets/detailsPageIcon/spacejoy-YI2YkyaREHk-unsplash.png'
import galary from '../../assets/detailsPageIcon/galary.svg'
import bed from '../../assets/detailsPageIcon/Icon (4).svg'
import bath from '../../assets/detailsPageIcon/Icon (5).svg'
import size from '../../assets/detailsPageIcon/Icon (6).svg'
import jaru from '../../assets/detailsPageIcon/Icon (7).svg'
import active from '../../assets/detailsPageIcon/Icon (8).svg'
import person from '../../assets/detailsPageIcon/christopher-campbell-rDEOVtE7vOs-unsplash 1.png'
import qn from '../../assets/detailsPageIcon/Icon (12).svg'
import btnicon from '../../assets/detailsPageIcon/Icon (9).svg'
import home from '../../assets/detailsPageIcon/Icon (10).svg'
import play from '../../assets/detailsPageIcon/Icon (11).svg'
import calender from '../../assets/detailsPageIcon/Icon (12).svg'
import location from '../../assets/detailsPageIcon/location.svg'
import { useState } from 'react'

const Details = () => {
    const data = {
        name: 'St. Crystal',
        address: '210 US Highway, Highland Lake, FL'
    }

    const currentDate = new Date().toISOString().slice(0, 10);

    // Set the default value to the current date
    const [selectedDate, setSelectedDate] = useState(currentDate);

    // Handle date change
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="max-w-[1440px] mx-auto px-4">
            <h3 className="font-medium mt-6 mb-6 lg:mt-8 lg:mb-4 text-lg flex items-center gap-2 text-[#7065F0]"><img src={backarrow} alt="" /> Back to map</h3>
            <div className='flex mb-8 flex-col lg:flex-row gap-y-6 lg:items-end justify-between'>
                <div >
                    <h1 className='text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4'>{data.name}</h1>
                    <p className='lg:text-xl text-base  opacity-60'>{data.address}</p>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <button className='btn text-[#7065F0] w-[45%] lg:w-28 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'><img src={share} alt="" /> Share</button>
                    <button className='btn text-[#7065F0] w-[45%] lg:w-32 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'><img src={fav} alt="" /> Favorite</button>
                    <button className='btn hidden lg:flex items-center  text-[#7065F0] bg-[#F7F7FD] border border-[#E0DEF7] btn-sm'><img src={search} alt="" /> Browse nearby listings</button>
                </div>
            </div>

            <div className='flex flex-col gap-2 lg:gap-6 lg:flex-row'>
                <div className='w-full lg:w-[70%] relative'>
                    <img src={img1} className='w-full  rounded-lg' alt="" />
                    <button className='btn  absolute lg:hidden items-center right-3 bottom-3   bg-[#F7F7FD] border border-[#E0DEF7] '><img src={galary} alt="" /> View all photos</button>
                </div>
                <div className='w-full lg:w-[30%] flex flex-row lg:flex-col gap-2 lg:gap-6'>
                    <img src={img2} className='w-2/4 lg:w-full h-full lg:h-2/4  rounded-lg' alt="" />
                    <div className='w-2/4 lg:w-full h-full lg:h-2/4 relative'>
                        <img src={img3} className='w-full h-full   rounded-lg' alt="" />
                        <button className='btn hidden absolute lg:flex items-center right-3 bottom-3   bg-[#F7F7FD] border border-[#E0DEF7] '><img src={galary} alt="" /> View all photos</button>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-6 lg:gap-6 lg:flex-row mt-6 lg:mt-8'>
                <div className='w-full lg:w-[70%] '>
                    <div className='grid grid-cols-3 lg:grid-cols-5 border rounded-lg p-6 gap-x-8'>
                        <div>
                            <p className='opacity-70 mb-4'>Bedrooms</p>
                            <p className='text-lg font-semibold flex items-center gap-2 mb-4'><img src={bed} alt="" />4</p>
                        </div>
                        <div>
                            <p className='opacity-70 mb-4'>Bathrooms</p>
                            <p className='text-lg font-semibold flex items-center gap-2 mb-4'><img src={bath} alt="" />4</p>
                        </div>
                        <div>
                            <p className='opacity-70 mb-4'>Square Area</p>
                            <p className='text-lg font-semibold flex items-center gap-2 mb-4'><img src={size} alt="" />6x8 m<sup>2</sup></p>
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <p className='opacity-70 mb-4 '>Repair Quality</p>
                            <p className='text-lg font-semibold flex items-center gap-2 mb-4'><img src={jaru} alt="" />Modern Loft</p>
                        </div>
                        <div>
                            <p className='opacity-70 mb-4'>Status</p>
                            <p className='text-lg font-semibold flex items-center gap-2 mb-4'><img src={active} alt="" />Active</p>
                        </div>
                    </div>
                    <h1 className='text-xl lg:text-2xl font-bold mt-8  lg:mt-12 '>About this home</h1>
                    <p className='my-4 opacity-80'>Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.</p>
                    <div className='p-6 bg-[#F7F7FD] border-2 border-[#E0DEF7] rounded-lg'>
                        <p className='opacity-80 mb-6'>Listed by property owner</p>
                        <div className='flex lg:items-center flex-col lg:flex-row gap-y-8 lg:justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person} className='rounded-full' alt="" />
                                <div>
                                    <p className='font-semibold'>Madina Aulia</p>
                                    <p className='opacity-75'>Rich Capital Properties LLC</p>
                                </div>
                            </div>
                            <div className='flex lg:items-center gap-4 flex-col lg:flex-row'>
                                <button className="btn flex-grow lg:flex-grow-0  bg-[#E8E6F9] text-[#7065F0]">Ask a question</button>
                                <button className="btn  flex-grow lg:flex-grow-0 bg-[#E8E6F9] text-[#7065F0]"><img src={qn} alt="" /> Get more info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[30%] p-6 border-2 border-[#E0DEF7] rounded-lg'>
                    <div className='hidden lg:block'>
                        <p className='text-sm opacity-80'>Rent price</p>
                        <h1 className='text-2xl font-bold text-[#7065F0] mt-1 mb-6'>$2500<span className='text-base font-medium text-gray-500'>/month</span></h1>
                        <button className="btn bg-[#7065F0] text-white w-full"><img src={btnicon} alt="" />Apply now</button>
                        <h1 className='h-[2px] my-6 bg-slate-200'></h1>
                    </div>
                    <h1 className='text-lg font-bold mb-6'>Request a home tour</h1>
                    <div className='flex gap-4'>
                        <button className="btn border-2 flex-grow border-[#E0DEF7]  bg-transparent"><img src={home} alt="" />In Person</button>
                        <button className="btn border-2 flex-grow border-[#7065F0] text[#7065F0]  bg-[#E8E6F9]"><img src={play} alt="" />Virtual</button>
                    </div>
                    <input className='p-2 w-full rounded-md bg-transparent border mt-4' value={selectedDate}
                        onChange={handleDateChange} type="date" />
                    <button className="btn bg-[#100A55] text-white w-full my-6"><img src={location} alt="" />Request a tour</button>
                    <p className='text-xs opacity-75'>It’s free, with no obligation － cancel anytime.</p>
                </div>
            </div>
        </div>
    );
};

export default Details;