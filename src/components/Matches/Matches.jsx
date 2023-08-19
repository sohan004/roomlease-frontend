import { useEffect } from "react";
import { baseURL } from "../../App";
import { useState } from "react";
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
import { TbMessage2 } from "react-icons/tb";

const Matches = () => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (list.length === 12) {
            setShowMore(true)
        }
        if (list.length < 12) {
            setShowMore(false)
        }
    }, [list]);

    const nextListing = () => {
        setLoading(true);

        fetch(`${baseURL}/match/my-match/${pageNum + 1}`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length < 12) {
                    setShowMore(false);
                }
                setPageNum(pageNum + 1);
                setList(d => [...d, ...data]);
                setLoading(false);
            })
            .catch(err => {
                setList([]);
                setLoading(false);
                console.log(err)
            })
    }

    useEffect(() => {
        setLoading(true);


        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserData(data.data)
                }
                else {
                    navigate('/')
                    setUserData(null)
                }
            })
            .catch(err => {
                navigate('/')
                setUserData(null)
            })


        fetch(`${baseURL}/match/my-match/1`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setList(data);
                setLoading(false);
            })
            .catch(err => {
                setList([]);
                setLoading(false);
                console.log(err)
            })
    }, []);
    console.log(list);
    return (
        <div className="max-w-[1440px] mx-auto px-3">
            {!loading && <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                {list.map(p => {

                    return <div key={p.id} className='w-full border rounded-lg  border-[#F0EFFB] cursor-pointer bg-white'>
                        {p?.photo && <img src={`${baseURL}${p?.photo}`} className='w-full lg:h-64 rounded-lg -z-0' alt="" />}
                        {!p?.photo && <img src={img} className='w-full lg:h-64 rounded-lg -z-0' alt="" />}
                        <div className='px-6 pt-6 pb-8'>
                            <div className='flex items-center justify-between'>
                                {userData?.account_type == 'homeowner'? <h1 className='text-2xl font-bold text-[#7065F0]'>{p?.looking_place}</h1> :  <h1 className='text-2xl font-bold text-[#7065F0]'>${p?.rent_per_week_single}<span className='text-base font-medium text-gray-500'>/week</span></h1>}
                                <div className='flex items-center gap-4'>
                                    <TbMessage2 className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
                                    <img src={ico3} className='border p-3 rounded-full' alt="" />
                                </div>
                            </div>
                            <h1 className='text-2xl font-bold my-2'>{p?.house_type}</h1>
                            <h1 className='text-base font-medium text-gray-500 pb-4 border-b-2 mb-4'>{p?.home_address}</h1>
                            <div className='flex items-center justify-between'>
                                <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico1} alt="" />{p?.bedroom_type || p?.room_type}</p>
                                <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico2} alt="" />{p?.bed_size}</p>
                                <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico9} alt="" />{p?.bond || p?.private_bathroom}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>}

            {loading && <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="w-full h-96 border rounded-md p-2 animate-pulse bg-slate-50">
                    <div className="w-full h-[50%] bg-slate-300">
                    </div>
                    <div className="w-full h-[10%] mt-4 bg-slate-200 rounded-full"></div>
                </div>
            </div>}

            {showMore && <div className="text-center mt-5">
                <button onClick={nextListing} className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>show more listing</button>
            </div>}
        </div>
    );
};

export default Matches;