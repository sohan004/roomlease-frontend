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
import ListingCard from "../ListingCard/ListingCard";
import LoadingCard from "../LoadingCard/LoadingCard";

const Matches = () => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [userData, setUserData] = useState(null)
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
    // console.log(list)
    return (
        <div className="max-w-[1440px] mx-auto px-3">
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