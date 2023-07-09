import ico1 from '../../../assets/sec4Icon/Icon (1).svg'
import ico2 from '../../../assets/sec4Icon/Icon (2).svg'
import ico3 from '../../../assets/sec4Icon/Icon.svg'
const Section4 = () => {
    return (
        <div className="mt-12 lg:mt-28  bg-[#100A55]  py-12 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex items-center flex-col gap-y-6 lg:flex-row justify-between text-center lg:text-left  text-white">
                    <div className="w-full lg:w-2/5">
                        <h1 className="font-bold text-4xl leading-[50px]">We make it easy for <span className="text-[#7065F0]">tenants</span> and <span className="text-[#7065F0]">landlords.</span></h1>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <p>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16'>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#403B77] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico3} className='bg-[#100A55] rounded-full p-2 border-4 shadow-md border-[#100A55]' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Virtual home tour</h1>
                            <p className='text-base opacity-70'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-white text-black p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico1} className='bg-[#E8E6F9] rounded-full p-2 border-4 shadow-md border-white' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Find the best deal</h1>
                            <p className='text-base opacity-70'>Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6 lg:flex-row bg-[#7065F0] text-white p-6 rounded-lg'>
                        <div className=' lg:w-[30%] w-full'>
                            <img src={ico2} className='bg-white rounded-full p-2 border-4 shadow-md border-white' alt="" />
                        </div>
                        <div className='lg:w-[70%]  w-full'>
                            <h1 className='text-2xl mb-6 font-semibold'>Get ready to apply</h1>
                            <p className='text-base opacity-70'>Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='h-[2px] bg-[#312F4B] my-16'></p>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[1440px] mx-auto px-4 gap-y-12'>
                <div className='text-white flex flex-col justify-center items-center text-center w-full lg:border-r-2'>
                    <h1 className='text-[40px]'>7.4%</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Property Return Rate</p>
                    <p className='w-16 h-[2px] lg:hidden bg-slate-400 mx-auto'></p>
                </div>
                <div className='text-white flex flex-col justify-center items-center text-center w-full lg:border-r-2'>
                    <h1 className='text-[40px]'>3,856</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Property in Sell & Rent</p>
                    <p className='w-16 h-[2px] lg:hidden bg-slate-400 mx-auto'></p>
                </div>
                <div className='text-white flex flex-col justify-center items-center text-center w-full '>
                    <h1 className='text-[40px]'>2,540</h1>
                    <p className='mt-2 opacity-70 pb-12 '>Daily Completed Transactions</p>
                </div>
            </div>
        </div>
    );
};

export default Section4;