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
import { useNavigate } from "react-router-dom";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const Rent = () => {
    const navigate = useNavigate()
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

    return (
        <div className=" bg-[#F7F7FD]">
            <div className="max-w-[1440px] mx-auto px-4 py-12">
                <div className="flex items-center flex-col justify-center gap-y-8 text-center lg:flex-row lg:justify-between">
                    <h1 className=" font-bold text-4xl">Search properties to rent</h1>
                    <Select
                        className="w-full lg:w-64 border border-[#E0DEF7] rounded-lg placeholder:text-[#100A55]"
                        placeholder='Search with Search Bar'
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>
                <div className='bg-white mt-4 p-4 rounded-md shadow-lg w-full lg:hidden flex items-center justify-around  '>
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
                        <div className="">
                            <button className='btn bg-[#7065F0] text-white ms-3'>Search</button>
                        </div>
                    </div>
                </div>

                {/* popular card */}
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-12'>
                    {popular.map(p => <div onClick={() => navigate(`/details/${p.id}`)} key={p.id} className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
                        <img src={img} className='w-full rounded-lg -z-0' alt="" />
                        <div className='bg-[#7065F0]  text-white relative -mt-6 -left-2  flex items-center gap-1 p-2 w-28 rounded-e-lg rounded-ss-lg'>
                            <img src={ico4} alt="" />
                            <p className='font-medium'>POPULAR</p>
                            <img src={kona} className='absolute top-full -left-0' alt="" />
                        </div>
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

                {/* non popular */}
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                    {currentItems.map(p => <div onClick={() => navigate(`/details/${p.id}`)} key={p.id} className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
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

                {/* pagination */}
                <div className="">
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
                </div>
            </div>
        </div>
    );
};

export default Rent;