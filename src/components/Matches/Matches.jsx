import { useEffect } from "react";
import { baseURL } from "../../App";
import { useState } from "react";
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
import Autocomplete from "react-google-autocomplete";


import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import ListingCard from "../ListingCard/ListingCard";
import LoadingCard from "../LoadingCard/LoadingCard";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Matches = () => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const { userData } = useContext(AuthContext)
    const [reFatch, setReFatch] = useState(1)
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
        // setLoading(true);

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
    }, [reFatch]);
    const [type, setType] = useState('')
    const [addresEmpty, setAddresEmpty] = useState('')
    const [suburbValue, setSuburbValue] = useState([])

    useEffect(() => {
        if (!userData) return
        if (userData?.account_type == 'roomseeker') {
            setType('homeowner')
        }
        if (userData?.account_type == 'homeowner') {
            setType('roomseeker')
        }
    }, [userData])
    // console.log(list)
    return (
        <div className="max-w-[1440px] mx-auto px-3">
            <div className=' w-full mx-auto bg-white p-1  lg:p-3  flex flex-col lg:flex-row lg:items-center lg:gap-4'>


                <div className="mt-4 grid grid-cols-2 px-4  text-center font-medium  flex-grow">
                    <p onClick={() => setType('homeowner')} className={`border  duration-500 ${type === 'homeowner' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Home Owner</p>
                    <p onClick={() => setType('roomseeker')} className={`border border-s-0 duration-500 
                  ${type == 'roomseeker' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Room Seeker</p>
                </div>

                <div className=" mt-4 border border-[#7065F0] rounded-lg flex-grow">
                    <Autocomplete

                        className="w-full  rounded-lg rounded-b-none border-b mb-4  focus:outline-none py-3 px-5   bg-[#f6f6ff] "
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

                    <div className="p-2  flex flex-wrap gap-3 py-5 w-full ">
                        {suburbValue.map((sub, i) => {
                            return <p className="bg-slate-200 flex items-center gap-1" key={i}>{sub} <FaTimes onClick={() => { setSuburbValue(suburbValue.filter((_, index) => index !== i)); }} className=' text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes></p>

                        })}
                    </div>
                    {/* <input onChange={e => setHomeAddress(e.target.value)} placeholder="Home Address: " type="text" name="" className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg" /> */}

                </div>
                <button
                    onClick={() => {
                        const urlString = suburbValue.join(', ')
                        // console.log(urlString);
                        navigate(`/rent?type=${type}&location=${urlString}`)
                        setSuburbValue([])

                    }} className='btn mt-2 w-[150px] hover:bg-[#4e46a1] bg-[#7065F0] text-white '>search</button>
                {/* <p className='p-1 bg-slate-300 mt-5'>Recent a search</p>
<p className='flex gap-1 items-center text-sm mt-2'><FaMapMarkerAlt></FaMapMarkerAlt> Austrelia mauntail</p> */}


            </div>

            {!loading && <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                {list.map(p => <ListingCard setReFatch={setReFatch} reFatch={reFatch} key={p.id} p={p} />)}
            </div>}

            {loading && <LoadingCard></LoadingCard>}

            {showMore && <div className="text-center mt-5">
                <button onClick={nextListing} className='btn text-l hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>show more listing</button>
            </div>}
        </div>
    );
};

export default Matches;