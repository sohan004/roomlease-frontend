import { FaUserLock } from 'react-icons/fa';
import ico1 from '../../../assets/sec4Icon/Icon (1).svg'
import ico2 from '../../../assets/sec4Icon/Icon (2).svg'
import ico3 from '../../../assets/sec4Icon/Icon.svg'
import { GrTechnology } from "react-icons/gr";
import bol2 from '../../../assets/navIcon/bol2.png'
import logoHome2 from '../../../assets/navIcon/homeLogo2.png'
const Section4 = () => {
    return (
        <div className="mt-12 lg:mt-20  bg-[#100A55]  pb-12 pt-10 lg:pb-16 lg:pt-10">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex items-center flex-col gap-y-6   text-center text-white">
                    <div className="w-full lg:w-2/5">
                        <h1 className="font-bold text-2xl gap-3 lg:gap-6 text-center flex justify-center  lg:text-4xl leading-[50px]">Why <span className="flex items-start">
                            R
                            <span className='flex flex-col justify-center items-center'>
                                o
                            <img className='w-3  lg:w-4  -mt-[13px] lg:-mt-[3px]' src={bol2} alt="" />
                            </span>
                            <span className='flex flex-col justify-center items-center'>
                                o
                            <img className='w-3  lg:w-4  -mt-[13px] lg:-mt-[3px]' src={bol2} alt="" />
                            </span>
                            mLe<img src={logoHome2} className='w-6  lg:w-9 mt-[10px] lg:-mt-[4px] -ms-1' alt="" />se.com.au
                        </span></h1>
                    </div>
                    <div className="w-full lg:w-4/5">
                        <p style={{ fontSize: '20px' }}>Enriching Society, Proudly Australian</p>
                        <p className='pt-3'>Our mission is to empower homeowners by transforming spare rooms into an income source, easing mortgage stress and promoting active living</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16'>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#403B77] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <FaUserLock className='bg-[#100A55] text-[55px] rounded-full p-2 border-4 shadow-md border-[#100A55]' />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Safety First</h1>
                            <p className='text-base opacity-70'> Digital ID verification by Australia Post and by checks (National police, working with children check, credit history, references)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-white text-black p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <GrTechnology className='bg-[#E8E6F9] text-[55px]  rounded-full p-2 border-4 shadow-md border-white' />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Smart Matching</h1>
                            <p className='text-base opacity-70'>Our AI technology matches homeowners and tenants based on preferences for harmonious living</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#7065F0] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico2} className='bg-white rounded-full p-2 border-4 shadow-md border-white' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Zero Commission Fees</h1>
                            <p className='text-base opacity-70'>Homeowners keep 100% of the rental income</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[1440px] mx-auto px-4 gap-y-12'>
                <div className='text-white flex flex-col justify-center items-center text-center w-full lg:border-r-2'>
                    <h1 className='text-[40px]'>7.4%</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Room Return Rate</p>
                    <p className='w-16 h-[2px] lg:hidden bg-slate-400 mx-auto'></p>
                </div>
                <div className='text-white flex flex-col justify-center items-center text-center w-full lg:border-r-2'>
                    <h1 className='text-[40px]'>3,856</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Room in Sell & Rent</p>
                    <p className='w-16 h-[2px] lg:hidden bg-slate-400 mx-auto'></p>
                </div>
                <div className='text-white flex flex-col justify-center items-center text-center w-full '>
                    <h1 className='text-[40px]'>2,540</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Daily Completed Transactions</p>
                </div>
            </div> */}
        </div>
    );
};

export default Section4;