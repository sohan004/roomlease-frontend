

import logo from '../../../assets/Frame.svg'
import ico1 from '../../../assets/Icon (1).svg'
import ico2 from '../../../assets/Icon (2).svg'
import ico3 from '../../../assets/Icon (3).svg'
import ico4 from '../../../assets/Icon.svg'
import img from '../../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash 1.png'
import coma from '../../../assets/”.png'
import homeImg from '../../../assets/Image.png'
import { FaSearch, FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
const Section1 = () => {
    return (
        <div className=' home'>
            <div className='max-w-[1440px] mx-auto px-4'>
            <div className='flex items-start gap-20 flex-col lg:flex-row pt-12 lg:pt-20 px-3 '>
                <div className='w-full lg:w-2/4 text-center lg:text-start'>
                    <h1 className='text-4xl lg:text-6xl font-bold'>Australia's best room rental platform</h1>
                    <p className='font-medium mb-12 mt-8'>Our mission is to empower homeowners by turning their spare rooms into a source of income to ease the burden of mortgage cost.</p>
                    <div className='pt-3 border border-[#F0EFFB
            ] rounded-t-lg flex items-center mx-auto lg:mx-0 bg-white w-full justify-between lg:max-w-[220px] '>
                        <p className='font-semibold px-4 border-b-2 border-[#7065F0] text-[#7065F0] pb-1 flex-grow'>Rent</p>
                        <p className='font-semibold px-4 pb-1 flex-grow'>Buy</p>
                        <p className='font-semibold px-4 pb-1 flex-grow'>Sell</p>
                    </div>
                    <div className='bg-white py-4 rounded-md shadow-lg w-full hidden  lg:flex items-center '>
                        <div className='pe-7 ps-5 border-e'>
                            <p>location</p>
                            <p className='font-bold'>Barcelona, Spain</p>
                        </div>
                        <div className='px-7 border-e'>
                            <p>location</p>
                            <p className='font-bold'>Barcelona, Spain</p>
                        </div>
                        <div className='px-7 '>
                            <NavLink to='/map'><button className='btn bg-[#7065F0] text-white ms-3'>Browse Properties</button></NavLink>
                        </div>
                    </div>

                    <div className='bg-white p-4 rounded-md shadow-lg w-full lg:hidden flex items-center justify-around  '>
                        <input type="text" name="sear" className='p-2 rounded-lg bg-white border-0 ' placeholder='search location' />
                       <NavLink to='/map'><FaSearch className='bg-[#7065F0] p-2 text-4xl text-stone-50 rounded-lg' /></NavLink>
                    </div>
                    <div className='flex  mt-12 gap-8 lg:gap-20 justify-center text-left'>
                        <div>
                            <div>
                                <img src={ico4} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                                <img src={ico1} className='bg-[#7166F0] p-2 rounded-xl relative left-11 -top-7' alt="" />
                            </div>
                            <p className='text-xl lg:text-4xl font-bold text-[#7166F0] mb-2 lg:mb-4'>10k+ Tenants</p>
                            <p className='text-sm lg:text-base font-medium'>believe in our service</p>
                        </div>
                        <div>
                            <div>
                                <img src={ico2} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                                <img src={ico3} className='bg-[#7166F0] p-2 rounded-xl relative left-11 -top-7' alt="" />
                            </div>
                            <p className='text-xl lg:text-4xl font-bold text-[#7166F0] mb-2 lg:mb-4'>12k+ Homeowners</p>
                            <p className='text-sm lg:text-base font-medium'>believe in our service</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/4 relative hidden lg:block'>
                    <div className='bg-white p-6 max-w-[370px] rounded-md absolute -top-11'>
                        <div className='flex gap-4 items-center'>
                            <img src={img} className='rounded-full ' alt="" />
                            <div>
                                <p className='font-bold text-lg'>Manuel Villa</p>
                                <p className='my-1 font-medium text-slate-600'>Renter</p>
                                <div className='flex items-center gap-1'>
                                    <p className='my-2 font-medium text-slate-600'>Moved with</p>
                                    <div className='flex items-center gap-1'>
                                        <img className='' src={logo} alt="" />
                                        <p className='font-bold text-[#100A55]'>RoomLease</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center py-6 border-b-2'>
                            <div><img src={coma} className='bg-black  p-2 h-8 w-16 rounded-full' alt="" /></div>
                            <div><p className='font-medium'>I loved how smooth the move was, and finally got the house we wanted.</p></div>
                        </div>
                        <div className='mt-6 flex items-center justify-between'>
                            <div>
                                <h1 className='text-xl font-bold'>$1,500</h1>
                                <p className='text-slate-500 text-xs font-medium mt-3'>Saved up to</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>-24 hrs</h1>
                                <p className='text-slate-500 text-xs font-medium mt-3'>Process Time</p>
                            </div>
                        </div>
                    </div>
                    <img src={homeImg} alt="" className='w-full -mt-20' />
                    <div className='bg-[#131D3A] text-white p-5 absolute bottom-0 right-0 rounded-ss-xl'>
                        <div className='flex items-center gap-9'>
                            <h1 className='text-lg font-semibold '>Excelent</h1>
                            <h1 className='flex items-center gap-1'><FaStar className='text-green-500' />Trustpilot</h1>
                        </div>
                        <h1 className='flex items-center gap-2 mt-3 mb-16 '>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                        </h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Section1;