import img from '../../../assets/g12.png'
import icon8 from '../../../assets/sec2Icon/Frame (1).svg'
import icon1 from '../../../assets/sec2Icon/Frame.svg'
import icon2 from '../../../assets/sec2Icon/Icon (1).svg'
import icon4 from '../../../assets/sec2Icon/Icon (3).svg'
import icon5 from '../../../assets/sec2Icon/Icon (4).svg'
import icon7 from '../../../assets/sec2Icon/Icon.svg'
import icon9 from '../../../assets/sec2Icon/Icon2.svg'
import icon10 from '../../../assets/sec2Icon/Icon3.svg'
const Section2 = () => {
    return (
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-16 mt-24">

            <div className="w-full lg:w-[40%] bg-[#F7F7FD]  border border-[#E0DEF7] rounded-lg ">
                <div className='p-8 lg:p-10 pb-0'>
                    <h1 className="lg:text-[32px] text-[#2D286A] font-bold">Rent the Most Attractive Rooms</h1>
                    <p className="text-base my-6 text-[#100A55]">Find your dream place to live in with more than 10k+ properties listed.</p>
                    <button className="btn btn-sm bg-[#100A55] text-white">Browse Room</button>
                </div>
                <img src={img} className='w-4/5 ms-auto' alt="" />
            </div>

            <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon7} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon1} className='bg-[#7166F0] p-1 rounded-b-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Room Lease Assurance</h1>
                        <p className='text-base text-[#4D5461]'>We provide our customers with property protection and liability coverage for a secure living experience.</p>
                    </div>
                </div>

                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon2} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon8} className='bg-[#7166F0] p-1 rounded-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Competitive Rates</h1>
                        <p className='text-base text-[#4D5461]'>Uncertain about the right price for your room? Leave it to us! We'll calculate the best price for you.</p>
                    </div>
                </div>

                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon4} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon9} className='bg-[#7166F0] p-1 rounded-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Minimal Fees</h1>
                        <p className='text-base text-[#4D5461]'>No more commission negotiations or agent haggling; our service comes with a low cost!</p>
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon5} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon10} className='bg-[#7166F0] p-1 rounded-t-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Total Autonomy</h1>
                        <p className='text-base text-[#4D5461]'>Take advantage of virtual tours and scheduled visits before finalizing your room lease. You'll have complete control throughout the process.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;