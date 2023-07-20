import ico1 from '../../../assets/sec4Icon/Icon (1).svg'
import ico2 from '../../../assets/sec4Icon/Icon (2).svg'
import ico3 from '../../../assets/sec4Icon/Icon.svg'
const Section4 = () => {
    return (
        <div className="mt-12 lg:mt-28  bg-[#100A55]  py-12 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex items-center flex-col gap-y-6 lg:flex-row justify-between text-center lg:text-left  text-white">
                    <div className="w-full lg:w-2/5">
                        <h1 className="font-bold text-4xl leading-[50px]">Why <span className="text-[#7065F0]">RoomLease.com.au</span></h1>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <p>Our mission is to empower homeowners by turning their spare rooms into a source of income to ease the burden of mortgage cost</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16'>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#403B77] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico3} className='bg-[#100A55] rounded-full p-2 border-4 shadow-md border-[#100A55]' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Safety</h1>
                            <p className='text-base opacity-70'>We prioritise security by checking police records, credit history, references, and verifying IDs.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-white text-black p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico1} className='bg-[#E8E6F9] rounded-full p-2 border-4 shadow-md border-white' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Technology</h1>
                            <p className='text-base opacity-70'>We've incorporated advanced technology to match homeowners and tenants based on their preferences, ensuring a harmonious living arrangement.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#7065F0] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico2} className='bg-white rounded-full p-2 border-4 shadow-md border-white' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Zero Commission Fees</h1>
                            <p className='text-base opacity-70'>Homeowners keep 100% of their rental income as we don't charge any commission fees.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='h-[2px] bg-[#312F4B] my-16'></p>
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