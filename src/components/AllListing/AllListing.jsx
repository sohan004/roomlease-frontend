import React from 'react';
import { baseURL } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';
import ListingCard from '../ListingCard/ListingCard';

const AllListing = () => {
    const [loading, setLoading] = useState(true);
    const [btnState, setBtnState] = useState(true);
    const [reFatch, setReFatch] = useState(1)
    const [page, setPage] = useState(1)

    const [listingData, setListingData] = useState([])

    useEffect(() => {
        setLoading(true);
        fetch(`${baseURL}/search/all-listings/1/`, {
            method: 'GET',
            headers: {
                // 'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListingData(data);
                if (data.length < 12) {
                    setBtnState(false);
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [reFatch])

    const pageChange = () => {
        fetch(`${baseURL}/search/all-listings/${page}/`, {
            method: 'GET',
            headers: {
                // 'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListingData(d => [...d, ...data]);
                if (data.length < 12) {
                    setBtnState(false);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    if (loading) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                {listingData.map(p => <ListingCard key={p.id} p={p} reFatch={reFatch} setReFatch={setReFatch} />)}
            </div>
            {btnState && <div className='text-center'>
                <button onClick={() => pageChange()} className='btn w-52 hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-4'>next</button>
            </div>}
        </div>

    );
};

export default AllListing;