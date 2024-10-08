import ico1 from '../../../assets/sec3Icon/Bath.svg'
import ico2 from '../../../assets/sec3Icon/Bed.svg'
import ico3 from '../../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../../assets/sec3Icon/Frame.svg'
import ico5 from '../../../assets/sec3Icon/Icon (1).svg'
import ico6 from '../../../assets/sec3Icon/Icon (2).svg'
import ico7 from '../../../assets/sec3Icon/Icon (3).svg'
import ico8 from '../../../assets/sec3Icon/Icon.svg'
import ico9 from '../../../assets/sec3Icon/Square Meters.svg'
import img from '../../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../../assets/sec3Icon/Vector 2.svg'
import { Link, NavLink } from 'react-router-dom'
import { TbMessage2 } from "react-icons/tb";
import { useEffect, useState } from 'react'
import { baseURL } from '../../../App'
import ListingCard from '../../ListingCard/ListingCard'
import LoadingCard from '../../LoadingCard/LoadingCard'

const Section3 = () => {
    const [data, setData] = useState([])
    const [reFatch, setReFatch] = useState(1)
    const [load, setLoad] = useState(true)
    const token = localStorage.getItem('user-token')
    useEffect(() => {
        fetch(`${baseURL}/listing/latest-listings/`, {
            method: 'GET',
            headers : token ? {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
            : {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
                setLoad(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (load) {
        return <LoadingCard></LoadingCard>
    }
    return (
        <div >
            <h1 className='text-center text-black text-4xl font-bold mt-24'>You may like
            </h1>
            <p className='text-center mb-16 mt-4'>Some of the listings that you may feel interested.</p>
            {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                <div className='order-2 lg:order-1 w-full bg-[#F7F7FD] flex items-center justify-between border p-2 border-[#E0DEF7] rounded-lg'>
                    <p className='flex gap-2  text-[#7065F0] items-center py-2 px-4 border border-[#E0DEF7]  rounded-lg font-medium bg-white'><img src={ico8} alt="" /> Rent</p>
                    <p className='flex gap-2 items-center py-2 px-4 rounded-lg font-medium '><img src={ico5} alt="" />Buy</p>
                    <p className='flex gap-2 items-center py-2 px-4 rounded-lg font-medium '><img src={ico6} alt="" />Sell</p>
                </div>
                <div className='hidden lg:flex order-2'>

                </div>
                <div className=' order-1 lg:order-3 w-full bg-[#F7F7FD]  border border-[#E0DEF7] rounded-lg flex gap-2 items-center p-2'>
                    <img src={ico7} alt="" />
                    <input className='bg-transparent border-0 p-2 w-full focus:border-0' placeholder='Search...' type="text" name='' />
                </div>
            </div> */}


            {/* popular data */}
            {/* <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-12'>
                {popular.map(p => <div key={p.id} className='w-full border rounded-lg bg-white  border-[#F0EFFB]'>
                    <img src={img} className='w-full rounded-lg -z-0' alt="" />
                    <div className='bg-[#7065F0]  text-white relative -mt-6 -left-2  flex items-center gap-1 p-2 w-28 rounded-e-lg rounded-ss-lg'>
                        <img src={ico4} alt="" />
                        <p className='font-medium'>POPULAR</p>
                        <img src={kona} className='absolute top-full -left-0' alt="" />
                    </div>
                    <div className='px-6 pt-6 pb-8'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl font-bold text-[#7065F0]'>${p.price}<span className='text-base font-medium text-gray-500'>/month</span></h1>
                            <div className='flex items-center gap-4'>
                                <TbMessage2 className='text-5xl border p-3 rounded-full text-[#7065F0]'></TbMessage2>
                                <img src={ico3} className='border p-3 rounded-full' alt="" />
                            </div>
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
            </div> */}



            {/* non popular data */}
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                {data.map(p => <ListingCard key={p.id} p={p} reFatch={reFatch} setReFatch={setReFatch} />)}
            </div>

            <div className='text-center'>
                <Link to='/rent?type=roomseeker&location='><button className='btn border-0 capitalize hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-4'>Show All</button></Link>
            </div>
        </div>
    );
};

export default Section3;