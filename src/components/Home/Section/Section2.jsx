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
                    <h1 className="lg:text-[32px] text-[#2D286A] font-bold">The new way to find your new home</h1>
                    <p className="text-base my-6 text-[#100A55]">Find your dream place to live in with more than 10k+ properties listed.</p>
                    <button className="btn btn-sm bg-[#100A55] text-white">Browse Properties</button>
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
                        <h1 className='text-2xl mb-6 font-semibold'>Property Insurance</h1>
                        <p className='text-base text-[#4D5461]'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
                    </div>
                </div>

                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon2} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon8} className='bg-[#7166F0] p-1 rounded-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Best Price</h1>
                        <p className='text-base text-[#4D5461]'>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                    </div>
                </div>

                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon4} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon9} className='bg-[#7166F0] p-1 rounded-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Lowest Commission</h1>
                        <p className='text-base text-[#4D5461]'>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col'>
                    <div className=' w-[30%] lg:w-full'>
                        <img src={icon5} className='bg-[#E0DEF7] rounded-full p-4 border-4 shadow-md border-white' alt="" />
                        <img src={icon10} className='bg-[#7166F0] p-1 rounded-t-full relative left-11 -top-5' alt="" />
                    </div>
                    <div className='w-[70%] lg:w-full'>
                        <h1 className='text-2xl mb-6 font-semibold'>Overall Control</h1>
                        <p className='text-base text-[#4D5461]'>Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;