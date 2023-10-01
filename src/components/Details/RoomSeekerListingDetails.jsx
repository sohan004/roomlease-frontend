import backarrow from '../../assets/detailsPageIcon/Icon.svg'
import share from '../../assets/detailsPageIcon/Icon (1).svg'
import fav from '../../assets/detailsPageIcon/Icon (2).svg'
import search from '../../assets/detailsPageIcon/Icon (3).svg'
import img1 from '../../assets/detailsPageIcon/pexels-binyamin-mellish-1396122 1.png'
import img2 from '../../assets/detailsPageIcon/roberto-nickson-rEJxpBskj3Q-unsplash.png'
import img3 from '../../assets/detailsPageIcon/spacejoy-YI2YkyaREHk-unsplash.png'
import galary from '../../assets/detailsPageIcon/galary.svg'
import bed from '../../assets/detailsPageIcon/Icon (4).svg'
import bath from '../../assets/detailsPageIcon/Icon (5).svg'
import size from '../../assets/detailsPageIcon/Icon (6).svg'
import jaru from '../../assets/detailsPageIcon/Icon (7).svg'
import active from '../../assets/detailsPageIcon/Icon (8).svg'
import person from '../../assets/detailsPageIcon/christopher-campbell-rDEOVtE7vOs-unsplash 1.png'
import qn from '../../assets/detailsPageIcon/Icon (12).svg'
import btnicon from '../../assets/detailsPageIcon/Icon (9).svg'
import home from '../../assets/detailsPageIcon/Icon (10).svg'
import play from '../../assets/detailsPageIcon/Icon (11).svg'
// import calender from '../../assets/detailsPageIcon/Icon (12).svg'
import location from '../../assets/detailsPageIcon/location.svg'
import { useState } from 'react'
import logo from '../../assets/Frame.svg'
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico5 from '../../assets/sec3Icon/Icon (1).svg'
import ico6 from '../../assets/sec3Icon/Icon (2).svg'
import ico7 from '../../assets/sec3Icon/Icon (3).svg'
import ico8 from '../../assets/sec3Icon/Icon.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { baseURL } from '../../App'
import { Swiper, SwiperSlide } from 'swiper/react';
import verifyed2 from '../../assets/profileIcon/WhatsApp 3 Image 2023-09-28 at 09.59.19_7e3764cf.png'
import blank from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaCarAlt, FaCopy, FaFacebook, FaHome, FaLinkedin, FaPersonBooth, FaShare, FaSpinner, FaTwitterSquare } from 'react-icons/fa'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import { MdFavorite } from 'react-icons/md'
import moment from 'moment'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'


const RoomSeekerListingDetails = () => {

    const id = useParams().id
    // !! this page  data fully dynamic

    const [listingDetails, setListingDetails] = useState(null)
    const [listingUser, setListingUser] = useState(null)
    const [imgValue, setImgValue] = useState([])
    const [reFatch, setReFatch] = useState(1)

    const navigate = useNavigate()

    const [load, setLoad] = useState(true)

    const { userData } = useContext(AuthContext)

    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        if (!listingDetails) {
            return
        }
        setIsFav(listingDetails?.is_favourite)
    }, [listingDetails])

    useEffect(() => {
        const token = localStorage.getItem('user-token')
        fetch(`${baseURL}/listing/room-seekers/${id}/`, token ? {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')} `,
                'content-type': 'application/json',
            }
        } : {
            method: 'GET',
            headers: {
                // 'Authorization': `Token ${localStorage.getItem('user-token')} `,
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.detail == 'Invalid token.') {
                    setListingDetails({})
                    setLoad(false)
                    return
                }
                console.log(data);
                setListingDetails(data);
                setLoad(false)

            })
            .catch(err => {
                console.log(err);
                navigate('/matches')
            })
    }, [reFatch])

    useEffect(() => {
        if (!userData) return
        if (!listingDetails?.user) {
            return
        }
        fetch(`${baseURL}/account/get-user-profile/${listingDetails?.user}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')} `,
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    setListingUser(data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [listingDetails])



    // console.log(listingDetails)

    const currentDate = new Date().toISOString().slice(0, 10);


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

    const [message, setMessage] = useState('')

    const sendMessageFunction = () => {
        if (!message) return

        if (!userData) {
            return navigate('/otp-send')
        }

        const formData = new FormData()
        formData.append('message', message)

        fetch(`${baseURL}/message/send-message/${listingDetails?.user}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setMessage('')
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Message sent successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    if (load) {
        return <div className='flex justify-center items-center mt-7'>
            <FaSpinner className='text-4xl animate-spin text-[#7065F0]'></FaSpinner>
        </div>
    }

    const roomSeekerAddFavorite = (id) => {
        if (!userData) return navigate('/otp-send')
        // console.log(id);
        setIsFav(true)
        toast.success('Add favorite Succesfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        fetch(`${baseURL}/listing/add-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const roomSeekerFavouriteDelete = (id) => {
        if (!userData) return navigate('/otp-send')
        setIsFav(false)
        toast.success('Remove favorite Succesfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        fetch(`${baseURL}/listing/remove-room-seeker-favorite/${id}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="max-w-[1440px] mx-auto px-4">
                <Link to='/matches'>
                    <h3 className="font-medium cursor-pointer mt-6 mb-6 lg:mt-8 lg:mb-4 text-lg flex items-center gap-2 text-[#7065F0]"><img src={backarrow} alt="" /> Back to Matches</h3>

                </Link>
                <div className='flex mb-8 flex-col lg:flex-row gap-y-6 lg:items-end justify-between'>
                    <div >
                        <h1 className='text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4'>{listingDetails?.house_type}</h1>
                        <p className='lg:text-xl text-base  opacity-60'>{listingDetails?.suburb?.length > 0 ? listingDetails?.suburb[0] : 'Australia'}</p>
                    </div>
                    <div className='flex items-center gap-4 justify-center'>
                        <button
                            onClick={() => {
                                window.share_modal.showModal()
                            }}
                            className='btn text-[#7065F0] w-[45%] lg:w-28 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'><img src={share} alt="" /> Share</button>
                        <button onClick={() => {
                            if (isFav) {
                                roomSeekerFavouriteDelete(listingDetails?.id)
                            }
                            if (isFav == false) {
                                roomSeekerAddFavorite(listingDetails?.id)
                            }
                        }} className='btn text-[#7065F0] w-[45%] lg:w-32 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'>{isFav ? <MdFavorite className='text-[17px] rounded-full  text-[#7065F0] '></MdFavorite> : <img src={fav} alt="" />} Favorite</button>
                    </div>
                </div>

                <dialog id="share_modal" className="modal">
                    <div method="dialog" className="modal-box h-52  relative">
                        <button onClick={() => window.share_modal.close()} className="btn  absolute right-2 bottom-2">close</button>
                        <div className='flex justify-center items-center gap-6 mt-4'>
                            <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Facebook share">
                                <FacebookShareButton url={!listingDetails?.looking_place ? `https://bristo-boss-2efa1.web.app/home-listing/${listingDetails?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listingDetails?.id}`}>
                                    <FaFacebook className='text-5xl text-blue-600' />
                                    <FaShare
                                        className='absolute -right-1 shadow-lg -bottom-2 bg-white bg-opacity-50 rounded-full p-1 text-xl'></FaShare>
                                </FacebookShareButton>
                            </div>
                            <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Linkedin share">
                                <LinkedinShareButton url={!listingDetails?.looking_place ? `https://bristo-boss-2efa1.web.app/home-listing/${listingDetails?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listingDetails?.id}`}>
                                    <FaLinkedin className='text-5xl text-blue-600' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white bg-opacity-50 rounded-full p-1 text-xl'></FaShare>
                                </LinkedinShareButton>
                            </div>
                            <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Twitter share">
                                <TwitterShareButton url={!listingDetails?.looking_place ? `https://bristo-boss-2efa1.web.app/home-listing/${listingDetails?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listingDetails?.id}`}>
                                <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                                                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                            </svg>
                                        </div>
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white bg-opacity-50 rounded-full p-1 text-xl'></FaShare>
                                </TwitterShareButton>
                            </div>
                            <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Copy Link">
                                <FaCopy
                                    onClick={() => {
                                        const copyText = `${!listingDetails?.looking_place ? `https://bristo-boss-2efa1.web.app/home-listing/${listingDetails?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listingDetails?.id}`}`
                                        navigator.clipboard.writeText(copyText)
                                            .then(() => {
                                                toast.success('Listing Copy Succesfully', {
                                                    position: "top-center",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                });
                                            })
                                            .catch((error) => {
                                                console.error('Unable to copy text: ', error);
                                            });
                                    }}
                                    className='text-5xl text-gray-400' />
                            </div>
                        </div>
                    </div >
                </dialog >

                <div className='flex flex-col gap-2 lg:gap-6 lg:flex-row'>
                    <div className='w-full lg:w-[70%] relative'>

                        {<>{listingDetails?.photo ? <img className='h-[250px] rounded-md lg:h-[500px] w-full' src={listingDetails?.photo} /> : <div className='w-full h-[250px] lg:h-[500px] flex justify-center items-center text-6xl opacity-60 rounded-lg bg-slate-200'>
                            <FaHome></FaHome>
                        </div>}</>}
                    </div>
                    <div className='w-full lg:w-[30%] '>
                        {/* <img src={img2} className='w-2/4 lg:w-full h-full lg:h-2/4  rounded-lg' alt="" />
                        <div className='w-2/4 lg:w-full h-full lg:h-2/4 relative'>
                            <img src={img3} className='w-full h-full   rounded-lg' alt="" />
                            <button className='btn hidden absolute lg:flex items-center right-3 bottom-3   bg-[#F7F7FD] border border-[#E0DEF7] '><img src={galary} alt="" /> View all photos</button>
                        </div> */}
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full py-3 px-4 border hover:border-2 focus:border-2 focus:bg-[#f8f8fc] focus:outline-none bg-white border-[#7065F0]  rounded-lg' placeholder='write message..' cols="30" rows="5"></textarea>
                        <div className='text-right'>
                            <button onClick={sendMessageFunction} className='btn border-0 w-full hover:bg-[#4e46a1] bg-[#7065F0] text-white '>send message</button>
                        </div>
                        {
                            listingDetails?.inspection_time &&
                            <div className='mt-5 '>
                                <h1 className=' font-semibold text-xl'>Inspections</h1>
                                <div className='h-[250px] lg:h-[150px] overflow-y-auto'>
                                    {listingDetails?.inspection_time.split(',').map((time, i) => {
                                        return <div key={i} className='flex items-center justify-between text-white bg-[#9288fff3] mt-2 p-2'>
                                            <p className='font-medium'>{moment(time).format("MMM Do YY,  h:mm a")}</p>
                                            <p className='opacity-60'>Available</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                </div>


                <div className='flex flex-col gap-6  lg:flex-row mt-6 lg:mt-8'>
                    <div className='w-full lg:w-[70%] '>
                        <div className='grid grid-cols-2 lg:grid-cols-4 border rounded-lg p-6 gap-x-8'>
                            <div>
                                <p className='opacity-70 mb-4 text-xs lg:text-base'>Bedrooms Type</p>
                                <p className='text-xs md:text-base font-semibold flex items-center gap-2 mb-4'><img src={bed} alt="" />{listingDetails?.bedroom_type || listingDetails?.room_type}</p>
                            </div>
                            <div>
                                <p className='opacity-70 mb-4 text-xs lg:text-base'>Private Bathroom</p>
                                <p className='text-xs md:text-base font-semibold flex items-center gap-2 mb-4'><img src={bath} alt="" />{listingDetails?.private_bathroom}</p>
                            </div>
                            {listingDetails?.parking_option && <div className=''>
                                <p className='opacity-70 mb-4 text-xs lg:text-base '>Parking</p>
                                <p className='text-xs md:text-base font-semibold flex items-center gap-2 mb-4'><FaCarAlt className='text-2xl opacity-60' /> {listingDetails?.parking_option}</p>
                            </div>}
                            {listingDetails?.looking_place && <div className=''>
                                <p className='opacity-70 mb-4 text-xs lg:text-base '>Looking Place</p>
                                <p className='text-xs md:text-base font-semibold flex items-center gap-2 mb-4'><FaPersonBooth className='text-2xl opacity-60' /> {listingDetails?.looking_place}</p>
                            </div>}
                            <div>
                                <p className='opacity-70 mb-4 text-xs lg:text-base'>Status</p>
                                <p className='text-xs md:text-base font-semibold flex items-center gap-2 mb-4'>{listingDetails?.active ? <><img src={active} alt="" />Active</> : 'Deactive'}</p>
                            </div>
                        </div>
                        <h1 className='text-xl lg:text-2xl font-bold mt-8  lg:mt-12 '>About this home</h1>
                        <p className='my-4 opacity-80'>{listingDetails?.describe_occupants}</p>
                        <div className='p-6 bg-[#F7F7FD] border-2 border-[#E0DEF7] rounded-lg'>
                            <p className='opacity-80 mb-6'>Listed by property owner</p>
                            <div className='flex lg:items-center flex-col lg:flex-row gap-y-8 lg:justify-between'>
                                <div className='flex items-center gap-3'>
                                    <div className='rounded-full w-16 h-16 overflow-hidden relative'>
                                        <img src={listingUser?.profile_picture ? listingUser?.profile_picture : blank} className='rounded-full h-16 w-16' alt="" />
                                        {listingUser?.verified && <img src={verifyed2} className='absolute w-full  rotate-[25deg] -left-[6px] opacity-70 bottom-0' alt="" />}
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{listingUser?.full_name}</p>
                                        {listingUser?.show_phone_number && <p className='opacity-75'>+{listingUser?.username}</p>}
                                    </div>
                                </div>
                                <div className='flex lg:items-center gap-4 flex-col lg:flex-row'>
                                    <button disabled={userData?.user_id == listingDetails?.user} onClick={() => {
                                        if (!userData) return navigate('/otp-send')
                                        fetch(`${baseURL}/message/create-conversation/${listingDetails?.user}/`, {
                                            method: 'POST',
                                            headers: {
                                                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                                                'Content-Type': 'application/json',
                                            }
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                console.log(data);
                                                navigate(`/message`)
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            })
                                    }} className="btn border-0 flex-grow lg:flex-grow-0  bg-[#E8E6F9] text-[#7065F0]">send message</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-full lg:w-[30%] p-6 border-2 border-[#E0DEF7] rounded-lg'>
                        <div className='hidden lg:block'>
                            <p className='text-sm opacity-80'>Rent price</p>
                            <h1 className='text-2xl font-bold text-[#7065F0] mt-1 mb-6'>$2500<span className='text-base font-medium text-gray-500'>/month</span></h1>
                            <button className="btn bg-[#7065F0] text-white w-full"><img src={btnicon} alt="" />Apply now</button>
                            <h1 className='h-[2px] my-6 bg-slate-200'></h1>
                        </div>
                        <h1 className='text-lg font-bold mb-6'>Request a home tour</h1>
                        <div className='flex gap-4'>
                            <button className="btn border-2 flex-grow border-[#E0DEF7]  bg-transparent"><img src={home} alt="" />In Person</button>
                            <button className="btn border-2 flex-grow border-[#7065F0] text[#7065F0]  bg-[#E8E6F9]"><img src={play} alt="" />Virtual</button>
                        </div>
                        <input className='p-2 w-full rounded-md bg-transparent border mt-4' value={selectedDate}
                            onChange={handleDateChange} type="date" />
                        <button className="btn bg-[#100A55] text-white w-full my-6"><img src={location} alt="" />Request a tour</button>
                        <p className='text-xs opacity-75'>It’s free, with no obligation － cancel anytime.</p>
                    </div> */}
                </div>

                <div className='w-full lg:w-[70%] '>

                    <p className='h-[2px] bg-slate-200 my-8 lg:my-12'></p>

                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Rental features </h1>

                    <div className='p-4 lg:p-6 '>
                        {listingDetails && Object.keys(listingDetails).map((key, index) => {

                            if (key === 'id' || key === 'photo' || key === 'created_at' || key === 'updated_at' || key === 'active' || key === 'user' || key === 'describe_occupants' || key === 'describe_property' || !listingDetails[key] || listingDetails[key]?.length === 0) return

                            if (key == 'inspection_time' || key == 'is_favourite') return

                            const stringWithoutHyphens = key.replace(/_/g, ' ');
                            const words = stringWithoutHyphens.split(' ');

                            const capitalizedWords = words.map(word => {
                                if (word.length === 0) {
                                    return word;
                                }
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            });


                            const vlidarray = Array.isArray(listingDetails[key]);

                            return <div key={index} className='flex gap-3 items-start lg:items-center lg:gap-7 border-b pb-4  mb-4'>
                                <p className='font-medium text-xs lg:text-base opacity-70  w-32 lg:w-[250px] '>{capitalizedWords.join(' ')}</p>
                                <p className='font-medium opacity-70 lg:w-[100px]'>:</p>
                                {
                                    vlidarray ? <div className='flex items-center flex-wrap gap-2'>
                                        {listingDetails[key].map((item, i) => <p className='font-semibold text-xs lg:text-base' key={i}>{item}{listingDetails[key].length > 1 && ','}</p>)}
                                    </div> :

                                        <p className='font-semibold text-xs lg:text-base'>{listingDetails[key]}</p>
                                }

                            </div>
                        })}
                    </div>


                    {/* <div className='flex gap-x-20   flex-col lg:flex-row   '>
                        <div className='flex  justify-between flex-grow'>
                            <div className='opacity-70'>
                                <p className='flex items-center gap-1  mb-5  text-[#100A55]'>Listed on<img src={logo} alt="" /><span className='font-bold'>Estatery</span> </p>
                                <p className='mb-5'>Date available</p>
                                <p className='mb-5'>Type</p>
                                <p className='mb-5'>Laundry</p>
                                <p className='mb-5'>Cooling</p>
                                <p className='mb-5'>Heating</p>
                            </div>
                            <div className='font-bold text-base lg:text-lg text-end'>
                                <p className='mb-5'>1 week</p>
                                <p className='mb-5'>Available Now</p>
                                <p className='mb-5'>Home</p>
                                <p className='mb-5'>In Unit</p>
                                <p className='mb-5'>Air Conditioner</p>
                                <p className='mb-5'>Forced Air</p>
                            </div>
                        </div>

                        <div className='flex  justify-between flex-grow'>
                            <div className='opacity-70'>

                                <p className='mb-5'>city </p>
                                <p className='mb-5'>year Bulit</p>
                                <p className='mb-5'>Size</p>
                                <p className='mb-5'>Lot Size</p>
                                <p className='mb-5'>Parking Area</p>
                                <p className='mb-5'>Deposit & Fees</p>
                            </div>
                            <div className='font-bold text-base lg:text-lg text-end'>
                                <p className='mb-5'>Miami</p>
                                <p className='mb-5'>2018</p>
                                <p className='mb-5'>2,173 sqft</p>
                                <p className='mb-5'>9,060 sqft</p>
                                <p className='mb-5'>Yes</p>
                                <p className='mb-5'>$2,400</p>
                            </div>
                        </div>
                    </div>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>

                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Rent Price History For st. crystal</h1>


                    <div className="overflow-x-auto hidden lg:block">
                        <table className="table">
                            <thead>
                                <tr className="bg-base-200 text-black rounded-md font-bold">
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Event</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                                <tr >
                                    <td>28/12/2021</td>
                                    <td>$2,400/mo</td>
                                    <td>Listed for Sale</td>
                                    <td>Estatery</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <div className='border rounded-xl lg:hidden'>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex border-b items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                        <div className='flex  items-center py-4 px-6 justify-between'>
                            <div>
                                <p className='text-sm'>28/12/2021</p>
                                <h1 className='font-bold my-1'>Listed for Sale</h1>
                                <p className='text-sm text-[#7065F0]'>Estary</p>
                            </div>
                            <p className='font-medium'>$2,400/mo</p>
                        </div>
                    </div>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>
                    <h1 className='text-xl lg:text-2xl font-bold mb-8'>Map</h1>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042159.3194971556!2d-70.73944298691842!3d43.82295373468856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3c4d1e99f0edf%3A0xe8598f7ba299c815!2sWhite%20Mountain%20National%20Forest!5e0!3m2!1sen!2sbd!4v1689147394916!5m2!1sen!2sbd" width="100%" className='rounded-lg' height="400" ></iframe>

                    <p className='font-semibold text-[#7065F0] mt-6 flex items-center gap-2'>See more listings in Houston <img src={backarrow} className='rotate-180' alt="" /></p>

                    <p className='h-[2px] bg-slate-200  my-8 lg:my-12'></p>

                    <p className='text-sm opacity-80'>{`You agree to Estatery's Terms of Use & Privacy Policy. By choosing to contact a property, you also agree that Estatery Group, landlords, and property managers may call or text you about any inquiries you submit through our services, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.`}</p> */}
                </div>
            </div>
            {/* <div className='bg-[#F7F7FD] mt-16'>
                <div className='max-w-[1440px] mx-auto px-4 py-12 lg:py-16'>
                    <h1 className='text-2xl font-bold '>Similar listings</h1>

                    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-5 lg:mt-12'>
                        {popular.map(p => <div key={p.id} className='w-full border rounded-lg bg-white  border-[#F0EFFB]'>
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
                </div>

            </div> */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RoomSeekerListingDetails;