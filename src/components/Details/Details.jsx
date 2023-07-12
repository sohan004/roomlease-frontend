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
// import calender from '../../assets/detailsPageIcon/Icon (12).svg'
import location from '../../assets/detailsPageIcon/location.svg'
import { useState } from 'react'
import logo from '../../assets/Frame.svg'
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico5 from '../../assets/sec3Icon/Icon (1).svg'
import ico6 from '../../assets/sec3Icon/Icon (2).svg'
import ico7 from '../../assets/sec3Icon/Icon (3).svg'
import ico8 from '../../assets/sec3Icon/Icon.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'


const Details = () => {


    // !! this page  data fully dynamic


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


    const popular = [
        {
            id: 1,
            price: 1800,
            name: 'Hotel Relax',
            address: '12/1200 Mohakhali Dhaka',
            bed: 3,
            bath: 2,
            size: '5 x 7',
        },
        {
            id: 2,
            price: 1800,
            name: 'Hotel Relax',
            address: '12/1200 Mohakhali Dhaka',
            bed: 3,
            bath: 2,
            size: '5 x 7',
        },
        {
            id: 3,
            price: 1800,
            name: 'Hotel Relax',
            address: '12/1200 Mohakhali Dhaka',
            bed: 3,
            bath: 2,
            size: '5 x 7',
        },
    ]
    return (
        <div>
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


                <div className='flex flex-col gap-6  lg:flex-row mt-6 lg:mt-8'>
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

                <div className='w-full lg:w-[70%] '>

                    <p className='h-[2px] bg-slate-200 my-8 lg:my-12'></p>

                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Rental features </h1>


                    <div className='flex gap-x-20   flex-col lg:flex-row   '>
                        <div className='flex  justify-between flex-grow'>
                            <div className='opacity-70'>
                                <p className='flex items-center gap-1  mb-5  text-[#100A55]'>Listed on<img src={logo} alt="" /><span className='font-bold'>Estatery</span> </p>
                                <p className='mb-5'>Date available</p>
                                <p className='mb-5'>Type</p>
                                <p className='mb-5'>Laundry</p>
                                <p className='mb-5'>Cooling</p>
                                <p className='mb-5'>Heating</p>
                            </div>
                            <div className='font-bold text-base lg:text-lg text-end'>
                                <p className='mb-5'>1 week</p>
                                <p className='mb-5'>Available Now</p>
                                <p className='mb-5'>Home</p>
                                <p className='mb-5'>In Unit</p>
                                <p className='mb-5'>Air Conditioner</p>
                                <p className='mb-5'>Forced Air</p>
                            </div>
                        </div>

                        <div className='flex  justify-between flex-grow'>
                            <div className='opacity-70'>

                                <p className='mb-5'>city </p>
                                <p className='mb-5'>year Bulit</p>
                                <p className='mb-5'>Size</p>
                                <p className='mb-5'>Lot Size</p>
                                <p className='mb-5'>Parking Area</p>
                                <p className='mb-5'>Deposit & Fees</p>
                            </div>
                            <div className='font-bold text-base lg:text-lg text-end'>
                                <p className='mb-5'>Miami</p>
                                <p className='mb-5'>2018</p>
                                <p className='mb-5'>2,173 sqft</p>
                                <p className='mb-5'>9,060 sqft</p>
                                <p className='mb-5'>Yes</p>
                                <p className='mb-5'>$2,400</p>
                            </div>
                        </div>
                    </div>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>

                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Rent Price History For st. crystal</h1>


                    {/* this table only for large device */}
                    <div className="overflow-x-auto hidden lg:block">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-base-200 text-black rounded-md font-bold">
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Event</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className=''>
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    {/* this table for small device */}
                    <div className='border rounded-xl lg:hidden'>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex  items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                    </div>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>
                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Map</h1>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042159.3194971556!2d-70.73944298691842!3d43.82295373468856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3c4d1e99f0edf%3A0xe8598f7ba299c815!2sWhite%20Mountain%20National%20Forest!5e0!3m2!1sen!2sbd!4v1689147394916!5m2!1sen!2sbd" width="100%" className='rounded-lg' height="400" ></iframe>

                    <p className='font-semibold text-[#7065F0] mt-6 flex items-center gap-2'>See more listings in Houston <img src={backarrow} className='rotate-180' alt="" /></p>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>

                    <p className='text-sm opacity-80'>{`You agree to Estatery's Terms of Use & Privacy Policy. By choosing to contact a property, you also agree that Estatery Group, landlords, and property managers may call or text you about any inquiries you submit through our services, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.`}</p>
                </div>
            </div>
            <div className='bg-[#F7F7FD] mt-16'>
                <div className='max-w-[1440px] mx-auto px-4 py-12 lg:py-16'>
                    <h1 className='text-2xl font-bold '>Similar listings</h1>

                    {/* non popular data */}
                    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-5 lg:mt-12'>
                        {popular.map(p => <div key={p.id} className='w-full border rounded-lg bg-white  border-[#F0EFFB]'>
                            <img src={img} className='w-full rounded-lg -z-0' alt="" />
                            <div className='px-6 pt-6 pb-8'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-bold text-[#7065F0]'>${p.price}<span className='text-base font-medium text-gray-500'>/month</span></h1>
                                    <img src={ico3} className='border p-3 rounded-full' alt="" />
                                </div>
                                <h1 className='text-2xl font-bold my-2'>{p.name}</h1>
                                <h1 className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p.address}</h1>
                                <div className='flex items-center justify-between'>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico1} alt="" />{p.bed} Beds</p>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico2} alt="" />{p.bath} Bathroom</p>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico9} alt="" />{p.size} m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;