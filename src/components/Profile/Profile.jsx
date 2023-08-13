import React, { useContext } from 'react';
import blankImag from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'
import { FaBed, FaCarSide, FaCopy, FaEdit, FaFacebook, FaHome, FaInstagramSquare, FaPenAlt, FaPencilAlt, FaPlay, FaRegCalendarAlt, FaRegPlayCircle, FaSave, FaShare, FaTimes, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { BsHouseAddFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import ListingHomeOwnerUpdate from '../HomeListingUpdate/ListingHomeOwnerUpdate';
import ListingRoomSeekerUpdate from '../HomeListingUpdate/ListingRoomSeekerUpdate';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { MdDelete } from 'react-icons/md';


const Profile = () => {
    const [userData, setUserData] = useState(null)
    const [title, setTitle] = useState(false)
    const [titleValue, setTitleValue] = useState('')
    const [roomDetails, setRoomDetails] = useState(false)
    const [roomEdit, setRoomEdit] = useState(false)
    const [description, setDescription] = useState(false)
    const [descriptionValue, setDescriptionValue] = useState('')
    const [type, setType] = useState(false)
    const [img, setImg] = useState([])
    const navigate = useNavigate()
    const { listing, setRefresh, refresh } = useContext(AuthContext)
    const [imgValue, setImgValue] = useState([])
    const [roomSeekerImg, setRoomSeekerImg] = useState('')
    const [name, setName] = useState('')
    const [nameEdit, setNameEdit] = useState(false)
    const [dateOB, setDateOB] = useState('')
    const [dateOBEdit, setDateOBEdit] = useState(false)




    const [loading, setLoading] = useState(true)
    const [reFatch, setReFatch] = useState(1)


    const [houseType, setHouseType] = useState('')
    const [bedRoom, setBedRoom] = useState('')
    const [parking, setParking] = useState('')


    useEffect(() => {
        setLoading(true)

        fetch(`${baseURL}/listing/house-listing-photos/?pk=${listing?.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {

                setImgValue(data);
                // console.log(data);
                // setReFatch(reFatch + 1)

            }).catch(() => setImgValue([]))

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
                    setLoading(false)
                    setUserData(data.data)
                }
                else {
                    navigate('/')
                    setLoading(false)
                    setUserData(null)
                }
            })
            .catch(err => {
                navigate('/')
                setLoading(false)
                setUserData(null)
            })
    }, [localStorage.getItem('user-token'), reFatch])


    console.log(listing);


    const listingPhotoDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseURL}/listing/house-listing-photos/${id}/`, {
                    method: 'DELETE'
                })
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your listing image has been deleted.',
                            'success'
                        )
                        setReFatch(reFatch + 1)
                    }).catch(err => console.log(err))

            }
        })

    }





    const profileUpdate = () => {
        const useObjectData = userData
        useObjectData.bio = titleValue ? titleValue : userData.bio

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setTitle(false)
                setReFatch(reFatch + 1)
            })
    }

    const fullNameUpdate = () => {
        const useObjectData = userData
        useObjectData.full_name = name ? name : userData.full_name

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setNameEdit(false)
                setReFatch(reFatch + 1)
            })
    }


    const dateOBFunction = () => {
        const useObjectData = userData
        useObjectData.dob = dateOB ? dateOB : userData.dob

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setDateOBEdit(false)
                setReFatch(reFatch + 1)
            })
    }


    const activeUpdate = (functionValue) => {
        // console.log(functionValue)
        const useObjectData = listing || {}
        useObjectData.active = functionValue

        fetch(`${baseURL}/listing/home-listings/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(refresh + 1)
            })
    }

    const roomSeekersactiveUpdate = (functionValue) => {
        // console.log(functionValue)
        const useObjectData = listing || {}
        useObjectData.active = functionValue

        fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(refresh + 1)
            })
    }


    const houseUpdate = () => {
        const useObjectData = listing
        useObjectData.house_type = houseType ? houseType : listing.house_type
        useObjectData.bedroom_type = bedRoom ? bedRoom : listing.bedroom_type
        useObjectData.parking_option = parking ? parking : listing.parking_option
        fetch(`${baseURL}/listing/home-listings/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(refresh + 1)
                setRoomDetails(false)
            })
    }


    const imgUpload = () => {
        img.map((item, index) => {
            const formData = new FormData()
            formData.append('home_listing', listing?.id)
            formData.append('photo', item)
            fetch(`${baseURL}/listing/house-listing-photos/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setRefresh(refresh + 1)
                })
        })
    }

    const roomseekerImgUplaod = () => {
        const listingObject = listing
        const formData = new FormData()
        for (let key in listingObject) {
            formData.append(key, listingObject[key])
        }
        formData.append('photo', roomSeekerImg)
        fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setRoomSeekerImg(null);
                setRefresh(refresh + 1)
            }).catch(err => console.log(err))

    }


    const phoneStatusUpdate = (phoneStatus) => {
        const useObjectData = userData
        useObjectData.show_phone_number = phoneStatus

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setReFatch(reFatch + 1)
            })
    }


    const addDescription = () => {
        const useObjectData = listing
        useObjectData.describe_occupants = descriptionValue ? descriptionValue : listing.describe_occupants

        fetch(`${baseURL}/listing/home-listings/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setDescription(false)
                setRefresh(refresh + 1)
            })
    }


    const [profilePicture, setProfilePicture] = useState(null)
    const [profileImgState, setProfileImgState] = useState(false)


    const changeProfilePicture = () => {
        if (!profilePicture) {
            toast.error('Please select a picture', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        }
        const formData = new FormData()
        formData.append('profile_picture', profilePicture)
        fetch(`${baseURL}/account/change-profile-picture/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    window.upload_profile_img.close()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Profile picture changed successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setReFatch(reFatch + 1)
                }
                else if (data.message) {
                    toast.error(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                } else if (data.detail === "Invalid token.") {
                    window.upload_img.close()
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please login again',
                    })
                    localStorage.removeItem('user-token')
                    window.location.href = '/'
                }
                else {
                    toast.error('Something went wrong', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            })

    }


    const roomseekerPhotoDelete = () => {
        const listingObject = listing
        listingObject.photo = null

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('user-token')}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(listingObject)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your listing image has been deleted.',
                            'success'
                        )
                        setRefresh(refresh + 1)
                    })

            }
        })
    }


    const deleteListing = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (userData.account_type === 'roomseeker') {
                    fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('user-token')}`,
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(data => {
                            setRefresh(refresh + 1)
                        })
                        .catch(err => console.log(err))
                }
                else {
                    fetch(`${baseURL}/listing/home-listings/${listing?.id}/`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('user-token')}`,
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(data => {
                            setRefresh(refresh + 1)
                        })
                        .catch(err => console.log(err))
                }

            }
        })


    }

    // console.log(listing);

    return (
        <div className='home'>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-center lg:items-end gap-9 lg:gap-14 pt-20'>
                    <div className='w-full lg:w-[40%] '>
                        <div className='w-full text-center p-4 lg:p-6  border-2 rounded-lg  bg-white bg-opacity-50'>
                            <div onClick={() => window.upload_profile_img.showModal()} onMouseEnter={() => setProfileImgState(true)} onMouseLeave={() => setProfileImgState(false)} className={`w-20 overflow-hidden -mt-14 lg:-mt-20 h-20 lg:w-28  border-2   rounded-full lg:h-28 mx-auto relative cursor-pointer duration-500 ${profileImgState ? 'border-gray-600 bg-black' : 'bg-white border-white'}`}>

                                {userData?.profile_picture ? <img src={userData?.profile_picture} className={`${profileImgState ? 'opacity-60' : 'opacity-100'} rounded-full mx-auto  h-full w-full `} alt="" /> :
                                    <img src={blankImag} className={`${profileImgState ? 'opacity-60' : 'opacity-100'} rounded-full mx-auto   w-full `} alt="" />}
                                <p className={`text-xl text-white cursor-pointer duration-300 absolute ${!profileImgState ? 'scale-0' : 'scale-100'} left-2/4  -translate-x-2/4 top-2/4 -translate-y-2/4`}>Edit</p>
                            </div>
                            <h1 className='font-semibold flex justify-center items-center gap-2 text-xl lg:text-2xl mt-7 mb-4'>
                                {!nameEdit && userData?.full_name}
                                {nameEdit && <input type="text" defaultValue={userData.full_name} onChange={(e) => setName(e.target.value)} className='border p-2  outline-none  text-center w-full' />}
                                {!nameEdit && <FaEdit onClick={() => setNameEdit(true)} className='text-2xl text-[#7065F0] cursor-pointer' />}
                                {nameEdit && <FaSave onClick={() => fullNameUpdate()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </h1>
                            <h1 className=' flex justify-center items-center gap-2  mt-2 '>
                                {!dateOBEdit && <span>{userData?.dob ? userData?.dob : 'date of birth'}</span>}
                                {dateOBEdit && <input placeholder='YYYY-MM-DD' type="text" defaultValue={userData.dob} onChange={(e) => setDateOB(e.target.value)} className='border p-2  outline-none  text-center w-full' />}
                                {!dateOBEdit && <FaEdit onClick={() => setDateOBEdit(true)} className='text-2xl text-[#7065F0] cursor-pointer' />}
                                {dateOBEdit && <FaSave onClick={() => dateOBFunction()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </h1>
                            <h1 className='font-medium text-lg lg:text-lg my-3'>+{userData?.username}</h1>
                            <p >Free Account</p>
                            {/* <h1 className=' lg:text-lg font-semibold'>Do you want members to be able to contact you directly on your mobile?</h1> */}
                            <h1 className='  mt-7 text-center'>Make mobile number visible on profile?</h1>
                            <div className='flex mt-2 items-center justify-center gap-4'>
                                <p onClick={() => phoneStatusUpdate(true)} className='flex text-sm items-center gap-2 '><input type="radio" name="radio-2" className="radio radio-primary" checked={userData?.show_phone_number} />Yes</p>
                                <p onClick={() => phoneStatusUpdate(false)} className='flex text-sm items-center gap-2 '><input type="radio" name="radio-3" className="radio radio-primary" checked={!userData?.show_phone_number} />No</p>
                            </div>
                            <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-7 w-full'>upgrade</button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl lg:text-2xl font-bold text-[#302b68]'>Profile Score</h1>
                            <h1 className='text-2xl font-extrabold text-green-600'>56%</h1>
                        </div>
                        <div className='p-1 bg-slate-100 border-2 border-gray-300 rounded-lg my-4'>
                            <p className='p-6 w-[56%] bg-gradient-to-r from-green-400 to-teal-600 rounded-s-lg'></p>
                        </div>
                        <p className='font-medium '>Answer these questioons so you get the best response from preple who read your profile </p>
                        <div className='px-4 lg:px-6 py-10 bg-white bg-opacity-60 border-2 rounded-md mt-10 '>
                            <h1 className='text-center text-2xl lg:text-3xl font-bold '>About you</h1>
                            <div className='flex justify-center items-center  gap-2 mt-3'>
                                {title && <textarea onChange={e => setTitleValue(e.target.value)} defaultValue={userData?.bio} className='p-2 text-xl border w-full rounded max-w-[500px]' name="" id="" cols="30" rows="3"></textarea>}
                                {!title && <p className='text-center  text-xl '>{userData?.bio ? userData.bio : 'one or two line'}</p>}
                                {!title && <FaEdit onClick={() => setTitle(true)} className='text-2xl text-[#7065F0] cursor-pointer' />}
                                {title && <FaSave onClick={() => profileUpdate()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </div>
                        </div>
                    </div>
                </div>






                <div className='mt-10 lg:mt-20  flex justify-end gap-4'>
                    <div className='flex items-center cursor-pointer border-2 border-[#7065F0] rounded-md'>
                        <p className='text-5xl font-extrabold px-2 pb-2 border-e-2 border-[#7065F0] bg-[#7065F0] text-white'>+</p>
                        <p className='py-4 flex-grow px-4 hover:bg-[#dbd7fd] cursor-pointer duration-300 h-full my-auto font-medium'>Add New Listing</p>
                    </div>
                </div>

                {userData?.account_type == 'homeowner' && <div className='grid grid-cols-4 lg:grid-cols-7 gap-3 mb-5'>
                    {img.map((im, i) => {
                        return (
                            <div key={i} className='relative w-full'>
                                <img src={URL.createObjectURL(im)} alt="" className='w-full h-32 object-cover' />
                                <FaTimes onClick={() => setImg(img.filter((_, index) => index !== i))} className='absolute top-1 right-1 text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes>
                            </div>
                        )
                    })}
                </div>}

                {userData?.account_type == 'roomseeker' && roomSeekerImg &&
                    <div className='relative w-full mb-4'>
                        <img src={URL.createObjectURL(roomSeekerImg)} alt="" className='max-w-[550px] mx-auto  object-cover' />
                        <FaTimes onClick={() => setRoomSeekerImg(null)} className='absolute top-1 right-1 text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer'></FaTimes>
                    </div>
                }

                {img.length > 0 && userData?.account_type == 'homeowner' && <div className='flex justify-start mt-3'>
                    <button onClick={() => setImg([])} className="btn  bg-slate-300">Cencle</button>
                    <button onClick={() => {
                        imgUpload()
                        setImg([])
                    }} className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload images</button>
                </div>}
                {roomSeekerImg && userData?.account_type == 'roomseeker' && <div className='flex justify-start mt-3'>
                    <button onClick={() => setRoomSeekerImg(null)} className="btn  bg-slate-300">Cencle</button>
                    <button onClick={() => {
                        roomseekerImgUplaod()
                    }} className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload images</button>
                </div>}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-7'>

                    <div className=' bg-slate-200 relative'>
                        <label className='absolute z-50 bottom-8 hover:bg-[#4e46a1] py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 left-2/4 -translate-x-2/4' htmlFor="img">Add Photo</label>

                        {userData?.account_type == 'homeowner' && <div className='w-full  relative'  >


                            <Swiper
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper "
                            >
                                {imgValue.map((image, i) => {

                                    return <SwiperSlide className='w-full' key={i}>
                                        <div className='max-w-[700px] mx-auto h-[250px] lg:h-[350px] relative'>
                                            <img src={image.photo} className='w-full h-full' alt="" />
                                            <MdDelete onClick={() => listingPhotoDelete(image.id)} className='absolute top-3 right-3 text-4xl rounded-full text-white cursor-pointer duration-200 hover:scale-110 bg-[#7065F0] p-2'></MdDelete>
                                        </div>
                                    </SwiperSlide>
                                })}

                            </Swiper>

                        </div>}

                        {
                            userData?.account_type == 'roomseeker' &&
                            <div className='w-full  bg-slate-50 relative'>
                                <img className='w-full lg:h-[400px]' src={`${baseURL}${listing?.photo}`} alt="" />
                                {listing?.photo && <MdDelete onClick={() => roomseekerPhotoDelete()} className='absolute top-3 right-3 text-4xl rounded-full text-white  cursor-pointer duration-200 hover:scale-110 bg-[#7065F0] p-2'></MdDelete>}

                                <label className='absolute z-40 bottom-8 hover:bg-[#4e46a1] py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 left-2/4 -translate-x-2/4' htmlFor="img">Add Photo</label>
                            </div>
                        }


                    </div>


                    <div className='w-full  p-4 lg:p-6 flex justify-center items-center bg-white bg-opacity-60 border-2 rounded-md text-center'>
                        <div className=''>
                            <FaPlay className='mx-auto text-5xl border-2 p-2 rounded-lg border-blue-950 px-3 text-[#7065F0] ' />
                            <h1 className=' font-medium text-xl mb-2 mt-4'>Upload video tour (recommended)</h1>
                            <p className='text-center text-sm'>Uploading a video of your home can reduce the need for in-person inspections</p>
                            <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-7 '>add video</button>
                        </div>
                    </div>

                    <div className='w-full p-4 lg:p-6 text-center  bg-white bg-opacity-60 border-2 rounded-md flex justify-center items-center'>
                        <div>
                            <FaRegCalendarAlt className='mx-auto text-5xl  text-[#7065F0] ' />
                            <h1 className=' font-medium text-xl mt-4'>Finalise your inspection times</h1>
                            <p className='text-sm my-2'>Once completed, you can invite potential flamates to book times via messages</p>
                            <a href='' className='text-blue-500'>Learn more</a>
                            <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-4 block mx-auto'>Finish setting up inspections</button>
                        </div>

                    </div>
                </div>


                {/* <div className=' mt-10 mb-7 flex flex-col lg:flex-row gap-9 lg:gap-14'>
                    
                    

                </div> */}


                {/* {

                    <div>


                        <div className='flex flex-col lg:flex-row gap-9 lg:gap-14'>
                            <div className='flex w-full lg:w-[40%] justify-center items-center text-center bg-[#7065F0] text-white py-20 lg:py-24'>
                                <div className='text-center'>
                                    <label htmlFor="img"> <BsHouseAddFill className='text-5xl mx-auto cursor-pointer duration-300 hover:scale-125'></BsHouseAddFill></label>
                                   
                                    <p className=' lg:text-xl'>Add photos to your profile</p>
                                </div>
                            </div>


                        </div>


                    </div>
                } */}

                <input onChange={e => {
                    if (userData?.account_type == 'homeowner') {
                        if (img.length >= 10) return toast.error('You can upload only 10 images  ', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            theme: "colored",
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setImg([...img, e.target.files[0]])
                    }
                    else {
                        if (roomSeekerImg) return toast.error('You can upload only 1 image  ', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            theme: "colored",
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setRoomSeekerImg(e.target.files[0])
                    }

                }} type="file" className='h-0 w-0 overflow-hidden' name="img" id="img" />



                {/* {userData?.account_type == 'homeowner' &&

                    <div>
                        <div className='p-4 lg:p-6 py-10 relative  bg-white bg-opacity-60 border-2 rounded-md mt-10'>

                            {!roomDetails && <div onClick={() => setRoomDetails(true)} className=' rounded-full border cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0] py-1 px-2 lg:px-3 right-2 top-2 text-center absolute'>
                                <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                                <p className='text-xs'>edit</p>
                            </div>}

                            <h1 className='font-bold text-3xl'>Ashwood</h1>
                            <p className='font-medium '>19 queens parada, VLC, 447 (private)</p>
                            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-10' >
                                <div className='flex gap-2 lg:gap-5 items-center'>
                                    <FaHome className='text-3xl lg:text-6xl text-[#7065F0]' />
                                    <div className=''>
                                        <p className='opacity-50 text-xs lg:text-base'>House Type</p>
                                        {!roomDetails && <p className='lg:text-lg font-medium '>{listing?.house_type}</p>}
                                        {roomDetails && <input onChange={e => setHouseType(e.target.value)} defaultValue={listing?.house_type} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-5 items-center'>
                                    <FaBed className='text-3xl lg:text-6xl text-[#7065F0]' />
                                    <div>
                                        <p className='opacity-50 text-xs lg:text-base'>Home Size</p>
                                        {!roomDetails && <p className='lg:text-lg font-medium '>{listing?.bedroom_type}</p>}
                                        {roomDetails && <input onChange={e => setBedRoom(e.target.value)} defaultValue={listing?.bedroom_type} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-5 items-center'>
                                    <FaCarSide className='text-3xl lg:text-6xl text-[#7065F0]' />
                                    <div>
                                        <p className='opacity-50 text-xs lg:text-base'>Parking</p>
                                        {!roomDetails && <p className='lg:text-lg font-medium '>{listing?.parking_option}</p>}
                                        {roomDetails && <input onChange={e => setParking(e.target.value)} defaultValue={listing?.parking_option} type="text" name="" id="" className='w-full border bg-transparent rounded p-1' />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {roomDetails && <div className='flex justify-start mt-3'>
                            <button onClick={() => setRoomDetails(false)} className="btn bg-slate-300">Cencle</button>
                            <button onClick={houseUpdate} className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>save chenges</button>
                        </div>}


                    </div>} */}





                {!roomEdit && <div className='bg-white bg-opacity-60 border-2 rounded-md mt-6'>
                    <div className='flex justify-between items-center border-b-2'>
                        <p className='p-4 lg:p-6 text-xl font-bold'>Private Listing</p>
                        <div onClick={() => {
                            setRoomEdit(true)
                        }} className='  py-3 px-4 border-s-2  cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0]   text-center '>
                            <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                            <p className=' mt-1'>edit</p>
                        </div>

                    </div>
                    <div className='p-4 lg:p-6 '>
                        {listing && Object.keys(listing).map((key, index) => {

                            if (key === 'id' || key === 'photo' || key === 'created_at' || key === 'updated_at' || key === 'active' || key === 'user' || key === 'describe_occupants' || key === 'describe_property' || !listing[key] || listing[key]?.length === 0) return

                            const stringWithoutHyphens = key.replace(/_/g, ' ');
                            const words = stringWithoutHyphens.split(' ');

                            const capitalizedWords = words.map(word => {
                                if (word.length === 0) {
                                    return word;
                                }
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            });


                            const vlidarray = Array.isArray(listing[key]);

                            return <div key={index} className='flex gap-3 items-start lg:items-center lg:gap-7 border-b pb-4  mb-4'>
                                <p className='font-medium opacity-70   lg:w-[250px] '>{capitalizedWords.join(' ')}</p>
                                <p className='font-medium opacity-70 lg:w-[100px]'>:</p>
                                {
                                    vlidarray ? <div className='flex items-center flex-wrap gap-2'>
                                        {listing[key].map((item, i) => <p className='font-semibold' key={i}>{item}{listing[key].length > 1 && ','}</p>)}
                                    </div> :

                                        <p className='font-semibold'>{listing[key]}</p>
                                }

                            </div>
                        })}
                    </div>
                    <div className='px-6 flex flex-col lg:flex-row justify-between gap-7'>
                        <div>
                            <h1 className='  font-bold text-xl '>Listing Status</h1>

                            <div className='mt-4 flex flex-col lg:flex-row gap-x-7 gap-y-4'>
                                <p onClick={() => {

                                    if (userData?.account_type == 'roomseeker') {
                                        roomSeekersactiveUpdate(true)
                                    }
                                    else {
                                        activeUpdate(true)
                                    }
                                }} className='flex items-center gap-2 '><input type="radio" className="radio radio-primary" checked={listing?.active} />Active</p>
                                <p onClick={() => {
                                    if (userData?.account_type == 'roomseeker') {
                                        roomSeekersactiveUpdate(false)
                                    }
                                    else {
                                        activeUpdate(false)
                                    }
                                }} className='flex items-center gap-2 '><input type="radio" className="radio radio-primary" checked={!listing?.active} />Deactive</p>
                            </div>
                        </div>


                        <div>
                            <h1 className=' text-xl text-center font-semibold'>Share your listing </h1>
                            <div className='flex justify-center items-center gap-6 mt-4'>
                                <div className='relative tooltip tooltip-bottom cursor-pointer'  data-tip="Facebook share">
                                    <FaFacebook className='text-5xl text-blue-600' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Instagram share">
                                    <FaInstagramSquare className='text-5xl text-rose-600' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Teitter share">
                                    <FaTwitterSquare className='text-5xl text-blue-400' />
                                    <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white rounded-full p-1 text-xl'></FaShare>
                                </div>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Copy Link">
                                    <FaCopy className='text-5xl text-gray-400' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mb-6'>
                        <button
                            onClick={() => {
                                deleteListing()
                            }}
                            className='btn rounded-none lg:w-56 mt-7 btn-lg  hover:bg-[#b34f4f] bg-[#f06565] text-white '>delete</button>
                        <button onClick={() => {
                            setRoomEdit(true)
                        }} className='btn rounded-none lg:w-56 mt-7 btn-lg  hover:bg-[#4e46a1] bg-[#7065F0] text-white '><FaPencilAlt></FaPencilAlt> edit</button>
                    </div>
                </div>}


                {
                    roomEdit &&
                    userData?.account_type === 'homeowner' &&
                    <ListingHomeOwnerUpdate setRoomEdit={setRoomEdit}></ListingHomeOwnerUpdate>
                }
                {
                    roomEdit &&
                    userData?.account_type === 'roomseeker' &&
                    <ListingRoomSeekerUpdate setRoomEdit={setRoomEdit}></ListingRoomSeekerUpdate>
                }

                {userData?.account_type == 'homeowner' &&
                    <div>
                        <div className='bg-white bg-opacity-60 border-2 rounded-md mt-10 relative'>
                            <div className='flex justify-between items-center border-b-2'>
                                <p className='p-4 lg:p-6 text-xl font-bold'>Home Description</p>
                                <div onClick={() => setDescription(true)} className='  py-3 px-4 border-s-2  cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0]   text-center '>
                                    <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                                    <p className=' mt-1'>edit</p>
                                </div>
                            </div>
                            <div className='p-4 lg:p-6'>
                                {!description && <p>{listing?.describe_occupants ? listing?.describe_occupants : 'write home description...'}</p>}
                                {description && <textarea defaultValue={listing?.describe_occupants} onChange={e => setDescriptionValue(e.target.value)} name="" id="" cols="30" rows="3" className='p-2 border-2 rounded-md w-full'></textarea>}
                                {description && <div className='flex gap-3 justify-start mt-3'>
                                    <button onClick={() => setDescription(false)} className="btn bg-slate-300">calcel</button>
                                    <button onClick={addDescription} className='btn  hover:bg-[#4e46a1] bg-[#7065F0] text-white '>save changes</button>
                                </div>}
                            </div>
                        </div>

                    </div>
                }





                {/* <div>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold mt-10 lg:mt-16'>Your Listing</h1>
                    <h1 className='mt-6 lg:mt-12 lg:text-lg font-semibold text-center'>Do you want members to be able to contact you directly on your mobile?</h1>
                </div> */}
            </div>
            <dialog id="upload_profile_img" className="modal">
                <div method="dialog" className="modal-box">
                    <div className="flex flex-col items-center gap-7 mb-14">
                        <h3 className="font-bold text-lg text-center">Upload Profile Picture</h3>
                        <input onChange={e => setProfilePicture(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="modal-action mt-7">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => changeProfilePicture()} className="btn btn-primary">save chenges</button>
                        <button onClick={() => window.upload_profile_img.close()} className="btn">Close</button>
                    </div>
                </div>
            </dialog>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;