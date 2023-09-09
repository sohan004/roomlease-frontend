import { useEffect, useState } from "react";
import Select from 'react-select';
import calender from '../../assets/rentIcon/Icon.svg'
import arow from '../../assets/rentIcon/Icon (1).svg'
import { FaSearch, FaTimes } from "react-icons/fa";
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'
import arrow from '../../assets/mapIcon/Icon.svg'
import search from '../../assets/mapIcon/Icon (1).svg'
import plus from '../../assets/mapIcon/Icon (2).svg'
import topArrow from '../../assets/mapIcon/Frame.svg'
import box from '../../assets/mapIcon/box.svg'
import list from '../../assets/mapIcon/list.svg'
import { NavLink } from 'react-router-dom'
import filter from '../../assets/mapIcon/filter.svg'
import rangepic from '../../assets/mapIcon/Range.png'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import minus from '../../assets/mapIcon/Button.svg'
import plusicon from '../../assets/mapIcon/Button (1).svg'
import fill from '../../assets/mapIcon/Radio Button.svg'
import blank from '../../assets/mapIcon/Radio Button (1).svg'
import cross from '../../assets/mapIcon/cross.svg'
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { baseURL } from "../../App";
import ListingCard from "../ListingCard/ListingCard";
import LoadingCard from "../LoadingCard/LoadingCard";
import Autocomplete from "react-google-autocomplete";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";




const Rent = () => {
    const navigate = useNavigate()


    const quary = new URLSearchParams(useLocation().search)
    const type = quary.get('type')
    const location = quary.get('location')
    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true);
    const [btnState, setBtnState] = useState(true);
    const [reFatch, setReFatch] = useState(1)
    const { userData } = useContext(AuthContext)

    const [listingData, setListingData] = useState([])
    const [value, setValue] = useState([1, 1500000]);


    useEffect(() => {
        setBtnState(true)
        if (type == 'homeowner') {
            fetch(`${baseURL}/search/home-listings/?location=${location}&page=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setListingData(data);
                    setLoading(false);
                    if (data.length < 12) {
                        setBtnState(false)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        if (type == 'roomseeker') {
            fetch(`${baseURL}/search/room-seekers/?location=${location}&page=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setListingData(data);
                    setLoading(false);
                    if (data.length < 12) {
                        setBtnState(false)
                    }
                    // console.log(type, location);

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [type, location, reFatch])

    console.log(listingData);

    const paginateFunctiono = () => {
        setBtnState(true)
        if (type == 'homeowner') {
            fetch(`${baseURL}/search/home-listings/?location=${location}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setListingData(d => [...d, ...data]);
                    setLoading(false);
                    if (data.length < 12) {
                        setBtnState(false)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        if (type == 'roomseeker') {
            fetch(`${baseURL}/search/room-seekers/?location=${location}&page=${page}`, {
                method: 'GET',
                headers: {

                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setListingData(d => [...d, ...data]);
                    setLoading(false);
                    if (data.length < 12) {
                        setBtnState(false)
                    }
                    // console.log(type, location);

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const [type2, setType2] = useState('')
    const [addresEmpty, setAddresEmpty] = useState('')
    const [suburbValue, setSuburbValue] = useState([])


    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(d => setData(d))
    }, [])



    // paginate functino 
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 6;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 6);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 6) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const [right, setRight] = useState(false)

    if (loading) {
        return <LoadingCard></LoadingCard>
    }

    return (
        <div className=" bg-[#F7F7FD]">
            <div className="max-w-[1440px] mx-auto px-4 py-5">

                {right && <div onClick={() => setRight(false)} className="fixed left-0 top-0 w-full bg-opacity-40 h-full bg-black z-30">

                </div>}


                <div className={`bg-white  duration-500 fixed   h-full overflow-y-auto ${right ? 'right-0 w-full  lg:w-[423px]' : '-right-[150%]'} border lg:border-0  top-0 z-40 py-8 px-6 lg:px-12 `}>
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



                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
                    <div className=" grid grid-cols-2   text-center font-medium  ">
                        <p onClick={() => setType2('homeowner')} className={`border lg:h-[50px]  duration-500 ${type2 === 'homeowner' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 text-xs lg:text-base cursor-pointer`}>Home Owner</p>
                        <p onClick={() => setType2('roomseeker')} className={`border lg:h-[50px] border-s-0 duration-500 
  ${type2 == 'roomseeker' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 text-xs lg:text-base cursor-pointer `}>Room Seeker</p>
                    </div>

                    <div className="lg:col-span-2">
                        <Autocomplete

                            className="w-full    border border-[#7065F0]  focus:outline-none py-3 px-5 h-[50px]   bg-[#f6f6ff] "
                            apiKey={`AIzaSyAMJbH4KtMl-oDgAFJXF1teH_Y6vzO4JqA`}

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
                        {suburbValue.length > 0 && <>
                            <div className="p-2  flex flex-wrap gap-3 border-t-0 border-[#7065F0] border w-full ">
                                {suburbValue.map((sub, i) => {
                                    return <p className="bg-slate-200 flex items-center gap-1" key={i}>{sub} <FaTimes onClick={() => { setSuburbValue(suburbValue.filter((_, index) => index !== i)); }} className=' text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes></p>

                                })}
                            </div>
                        </>}
                    </div>

                    <button
                        onClick={() => {
                            const urlString = suburbValue.join(', ')
                            // console.log(urlString);
                            navigate(`/rent?type=${type}&location=${urlString}`)
                            setSuburbValue([])

                        }} className='btn h-[50px] w-full hover:bg-[#4e46a1] bg-[#7065F0] text-white '>search</button>

                    <button onClick={() => setRight(true)} className='btn border-0 w-full h-[50px] hover:bg-[#4e46a1] bg-[#7065F0] text-white '>+ more filters</button>
                </div>



                {listingData.length > 0 && <h1 className="text-xl font-medium">This listing for {location ? location : type}</h1>}
                {/* <div className="flex items-center flex-col justify-center gap-y-8 text-center lg:flex-row lg:justify-between">
                    <h1 className=" font-bold text-4xl">Search properties to rent</h1>
                    <Select
                        className="w-full lg:w-64 border border-[#E0DEF7] rounded-lg placeholder:text-[#100A55]"
                        placeholder='Search with Search Bar'
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div> */}
                {/* <div className='bg-white mt-4 p-4 rounded-md shadow-lg w-full lg:hidden flex items-center justify-around  '>
                    <input type="text" name="sear" className='p-2 rounded-lg bg-white border-0 ' placeholder='search location' />
                    <FaSearch className='bg-[#7065F0] p-2 text-4xl text-stone-50 rounded-lg' />
                </div>
                <div className="p-6 bg-white rounded mt-8 mb-12 hidden lg:grid grid-cols-5">
                    <div className=" ">
                        <div className="border-r-2 px-5">
                            <p className="opacity-60">Location</p>
                            <h1 className="text-lg font-bold ">New York, USA</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="border-r-2 px-5 ">
                            <p className="opacity-60">When</p>
                            <h1 className="text-lg font-bold flex items-center justify-between">Select Move-in Date <img src={calender} className="bg-[#F0EFFB] p-1 rounded-full" alt="" /></h1>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="border-r-2 px-5">
                            <p className="opacity-60">Price</p>
                            <h1 className="text-lg font-bold flex items-center justify-between">$500-$2,500<img src={arow} className="bg-[#F0EFFB] p-1 rounded-full" alt="" /></h1>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="border-r-2 px-5">
                            <p className="opacity-60">Property Type</p>
                            <h1 className="text-lg font-bold flex items-center justify-between">Houses<img src={arow} className="bg-[#F0EFFB] p-1 rounded-full" alt="" /></h1>
                        </div>
                    </div>
                    <div className="px-5 ">
                        <div className="text-center">
                            <button className='btn bg-[#7065F0] text-white ms-3'>Search</button>
                        </div>
                    </div>
                </div> */}

                {/* popular card */}
                {listingData.length === 0 && <div>
                    <h1 className="text-center mt-5 text-2xl font-semibold text-[#7065F0]">No listings at this address!!</h1>
                </div>}

                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-5'>
                    {listingData.map((p, i) => <ListingCard key={i} p={p} reFatch={reFatch} setReFatch={setReFatch} />)}

                </div>

                {btnState && <div className="text-center">
                    <button onClick={() => { setPage(page + 1); paginateFunctiono() }} className='btn w-36 hover:bg-[#4e46a1] bg-[#7065F0] text-white '>Next</button>
                </div>}


                {/* pagination */}
                {/* <div className="">
                    <ReactPaginate
                        containerClassName="flex justify-center w-[316px] items-center justify-between mx-auto overflow-hidden mt-[48px] "
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageClassName="py-2 font-medium px-4  rounded-full"
                        activeClassName="bg-[#100A55] text-white"
                        pageRangeDisplayed={3}
                        previousLinkClassName=" me-4"
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Rent;