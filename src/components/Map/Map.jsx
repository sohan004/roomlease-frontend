import arrow from '../../assets/mapIcon/Icon.svg'
import search from '../../assets/mapIcon/Icon (1).svg'
import plus from '../../assets/mapIcon/Icon (2).svg'
import topArrow from '../../assets/mapIcon/Frame.svg'
import box from '../../assets/mapIcon/box.svg'
import list from '../../assets/mapIcon/list.svg'
import { NavLink } from 'react-router-dom'
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import filter from '../../assets/mapIcon/filter.svg'
import rangepic from '../../assets/mapIcon/Range.png'
import { useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import minus from '../../assets/mapIcon/Button.svg'
import plusicon from '../../assets/mapIcon/Button (1).svg'
import fill from '../../assets/mapIcon/Radio Button.svg'
import blank from '../../assets/mapIcon/Radio Button (1).svg'
import cross from '../../assets/mapIcon/cross.svg'

const Map = () => {
    const [up, setUp] = useState(false)
    const [right, setRight] = useState(false)
    const [value, setValue] = useState([300000, 1200000]);
    console.log(value);
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

    const openOf = (proman) => {
        if (up) {
            return
        }
        setUp(true)
    }
    return (
        <div>

            {/* popartise bottom bar start  */}
            <div onClick={() => openOf()} className={`bg-white fixed lg:hidden w-full duration-500 h-full ${up ? 'overflow-y-auto top-0 rounded-t-0' : 'top-[89%] rounded-t-3xl'}  z-30`}>
                <p onClick={() => setUp(false)} className='h-[5px] w-14 bg-slate-300 rounded-full mx-auto mt-2 mb-5 '></p>

                {!up && <p className='text-center font-semibold'>325 properties available to rent</p>}

                <div className={`px-4 duration-300 ${up ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <NavLink to='/'><p className='opacity-60'>Home</p></NavLink>
                            <img src={arrow} alt="" />
                            <p className='font-medium'>Search</p>
                        </div>
                        <button onClick={() => setRight(true)} className="btn border lg:hidden border-gray-400 bg-transparent"><img src={filter} alt="" /></button>
                    </div>
                    <div className='flex items-center flex-grow gap-4 bg-[#F7F7FD] px-4 py-3 border-2 border-[#E0DEF7] rounded-lg mt-6'>
                        <img src={search} alt="" />
                        <input type="text" name="" className=' px-2 border-0 bg-transparent flex-grow ' placeholder='Search...' />
                    </div>
                </div>


                <div className={`${up ? 'grid grid-cols-1' : 'opacity-0'}  duration-500 mt-8 gap-4 px-4 `}>
                    {popular.map(p => <div key={p.id} className='w-full flex flex-col lg:flex-row  border rounded-lg gap-4 bg-white  border-[#F0EFFB]'>
                        <img src={img} className='w-full lg:w-[40%] rounded-lg -z-0' alt="" />
                        <div className='p-6 w-full  lg:w-[60%]'>
                            <div className='flex items-center justify-between'>
                                <h1 className=' font-bold text-[#7065F0]'>${p.price}<span className='text-sm font-medium text-gray-500'>/month</span></h1>
                                <img src={ico3} className='border p-3 rounded-full' alt="" />
                            </div>
                            <h1 className='text-xl font-bold mb-2 mt-1'>{p.name}</h1>
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
            {/* popartise bottom bar end */}


            <div className="max-w-[1440px] mx-auto px-4 relative  overflow-hidden">

                {/* search filter side bar start*/}
                <div className={`bg-white overflow-y-auto  duration-500 fixed lg:absolute w-full  lg:w-[423px] h-full ${right ? 'lg:right-0 lg:left-auto top-7 lg:top-0 left-0' : 'lg:-right-[150%] lg:top-0 top-[200%]'} border lg:border-0 rounded-t-3xl lg:rounded-t-0 top-0 z-40 py-8 px-6 lg:px-12 `}>
                    <p onClick={() => setRight(false)} className='pb-4 mb-4 border-b lg:hidden'><img src={cross} alt="" /></p>
                    <h1 className='text-2xl hidden mb-8 lg:block font-bold'>More Filters</h1>
                    <p className='font-semibold   mb-3 '>Category</p>
                    <div className='flex items-center gap-3 pb-6 mb-6 border-b'>
                        <button className='btn bg-[#7065F0] text-white '>Houses</button>
                        <button className='btn bg-transparent border border-black '>Apartment</button>
                        <button className='btn bg-transparent border border-black '>Rooms</button>
                    </div>
                    <p className='font-bold mb-3 '>Price Range</p>
                    <img className='mx-auto' src={rangepic} alt="" />
                    <RangeSlider id="range-slider-yellow" className='bg-slate-800 ' min={1} max={1500000} value={value} onInput={setValue} />
                    <div className='mt-3 flex items-center justify-between pb-6 mb-6 border-b'>
                        <p className='font-bold text-lg'>${value[0]}</p>
                        <p className='font-bold text-lg'>${value[1]}</p>
                    </div>
                    <p className='font-bold mb-4'>Features</p>
                    <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                            <p className=''>Bedroom</p>
                            <p className='flex items-center gap-2'><img src={minus} alt="" /> 4 <img src={plusicon} alt="" /></p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className=''>Bathroom</p>
                            <p className='flex items-center gap-2'><img src={minus} alt="" /> 2 <img src={plusicon} alt="" /></p>
                        </div>
                    </div>
                    <p className='font-bold mb-4'>Rental Period</p>
                    <p className='flex items-center gap-2 mb-5'><img src={fill} alt="" /> Any</p>
                    <p className='flex items-center gap-2 mb-5'><img src={blank} alt="" /> 1 - 12 months</p>
                    <p className='flex items-center gap-2 mb-5'><img src={blank} alt="" /> 13 - 24 months</p>
                    <p className='flex items-center gap-2 mb-5'><img src={blank} alt="" /> 24+ months</p>
                    <div className='flex justify-center items-center gap-6 mt-16'>
                        <button className='btn text-[#7065F0]  flex-grow'>Reset</button>
                        <button className='btn bg-[#7065F0] text-white flex-grow '>Apply</button>
                    </div>
                </div>
                {/* search filter side bar end*/}



                <div onClick={() => {
                    if (!right) {
                        return
                    }
                    setRight(false)
                }} className={`flex flex-col-reverse   relative duration-500 lg:flex-row ${right ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="w-full lg:w-2/4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042159.3194971556!2d-70.73944298691842!3d43.82295373468856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3c4d1e99f0edf%3A0xe8598f7ba299c815!2sWhite%20Mountain%20National%20Forest!5e0!3m2!1sen!2sbd!4v1689147394916!5m2!1sen!2sbd" width="100%" className='rounded-lg h-[540px] lg:h-[947px]'  ></iframe>
                    </div>
                    <div className="w-full lg:w-2/4 lg:px-8 py-8">
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <NavLink to='/'><p className='opacity-60'>Home</p></NavLink>
                                <img src={arrow} alt="" />
                                <p className='font-medium'>Search</p>
                            </div>
                            <button onClick={() => setRight(true)} className="btn border lg:hidden border-gray-400 bg-transparent"><img src={filter} alt="" /></button>
                        </div>
                        <h1 className='text-3xl font-bold mt-4 mb-2 hidden lg:block'>Search properties</h1>
                        <p className='font-light hidden lg:block'>10,325 properties available to rent</p>

                        <div className='flex items-center gap-4 my-6'>
                            <div className='flex items-center flex-grow gap-4 bg-[#F7F7FD] px-4 py-3 border-2 border-[#E0DEF7] rounded-lg'>
                                <img src={search} alt="" />
                                <input type="text" name="" className=' px-2 border-0 bg-transparent flex-grow ' placeholder='Search...' />
                            </div>
                            <button onClick={() => setRight(true)} className="btn hidden lg:flex text-white bg-[#7065F0]"><img src={plus} alt="" />More filters</button>
                        </div>

                        <div className='flex items-center gap-8'>
                            <div className='grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2 w-full lg:w-[90%]'>
                                <button className="   text-[10px] btn-sm  btn bg-transparent border-2 w-full border-[#E0DEF7]">Any Price <img className='bg-[#E8E6F9] p-1 rounded-full' src={topArrow} alt="" /></button>
                                <button className="   text-[10px]  btn-sm   btn bg-transparent border-2 w-full border-[#E0DEF7]">2-4 Beds <img className='bg-[#E8E6F9] p-1 rounded-full' src={topArrow} alt="" /></button>
                                <button className="   text-[10px]  btn-sm  btn bg-transparent border-2 w-full border-[#E0DEF7]">All Types <img className='bg-[#E8E6F9] p-1 rounded-full' src={topArrow} alt="" /></button>
                                <button className="hidden lg:flex   text-[10px]  btn-sm   btn bg-transparent border-2 w-full border-[#E0DEF7]">Newest <img className='bg-[#E8E6F9] p-1 rounded-full' src={topArrow} alt="" /></button>
                            </div>
                            <div className='lg:flex items-center hidden  gap-2'>
                                <img src={box} alt="" />
                                <button className="btn bg-transparent border-2  border-[#E0DEF7]"><img className='bg-[#E8E6F9] p-1 rounded-full' src={list} alt="" /></button>
                            </div>
                        </div>


                        <div className='hidden  lg:grid grid-cols-1  mt-8 gap-4 h-[640px] overflow-y-auto'>
                            {popular.map(p => <div key={p.id} className='w-full flex flex-col lg:flex-row  border rounded-lg gap-4 bg-white  border-[#F0EFFB]'>
                                <img src={img} className='w-full lg:w-[40%] rounded-lg -z-0' alt="" />
                                <div className='p-6 w-full  lg:w-[60%]'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className=' font-bold text-[#7065F0]'>${p.price}<span className='text-sm font-medium text-gray-500'>/month</span></h1>
                                        <img src={ico3} className='border p-3 rounded-full' alt="" />
                                    </div>
                                    <h1 className='text-xl font-bold mb-2 mt-1'>{p.name}</h1>
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
        </div>
    );
};

export default Map;