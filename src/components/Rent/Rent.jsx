import { useEffect, useState } from "react";
import Select from 'react-select';
import calender from '../../assets/rentIcon/Icon.svg'
import arow from '../../assets/rentIcon/Icon (1).svg'
import { FaSearch } from "react-icons/fa";
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { baseURL } from "../../App";
import ListingCard from "../ListingCard/ListingCard";
import LoadingCard from "../LoadingCard/LoadingCard";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];




const Rent = () => {
    const navigate = useNavigate()


    const quary = new URLSearchParams(useLocation().search)
    const type = quary.get('type')
    const location = quary.get('location')
    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true);
    const [btnState, setBtnState] = useState(true);
    const [reFatch, setReFatch] = useState(1)

    const [listingData, setListingData] = useState([])



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



    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(d => setData(d))
    }, [])

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

    if (loading) {
        return <LoadingCard></LoadingCard>
    }

    return (
        <div className=" bg-[#F7F7FD]">
            <div className="max-w-[1440px] mx-auto px-4 py-5">
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