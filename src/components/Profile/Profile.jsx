import React, { useContext } from 'react';
import blankImag from '../../assets/profileIcon/blank-profile-picture-gb085c28e0_1280.png'
import { FaBed, FaCarSide, FaCopy, FaEdit, FaFacebook, FaFileImage, FaHome, FaInstagram, FaInstagramSquare, FaLink, FaLinkedin, FaPenAlt, FaPencilAlt, FaPlay, FaRegCalendarAlt, FaRegPlayCircle, FaSave, FaShare, FaTiktok, FaTimes, FaTwitter, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { BsHouseAddFill } from "react-icons/bs";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import ListingHomeOwnerUpdate from '../HomeListingUpdate/ListingHomeOwnerUpdate';
import ListingRoomSeekerUpdate from '../HomeListingUpdate/ListingRoomSeekerUpdate';
import { Swiper, SwiperSlide } from 'swiper/react';
import DatePicker, { Calendar } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import verifyed from '../../assets/profileIcon/Untitled-1.png'
import verifyed2 from '../../assets/profileIcon/WhatsApp_Image_2023-09-06_at_22.26.16-removebg-preview.png'
import verifyed3 from '../../assets/profileIcon/WhatsApp 3 Image 2023-09-28 at 09.59.19_7e3764cf.png'
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { MdDelete } from 'react-icons/md';
import DigitalVerify from '../DigitalVerify/DigitalVerify';
import moment from 'moment/moment';
import ListingCard from '../ListingCard/ListingCard';


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
    const { listing, setListing, setRefresh, refresh } = useContext(AuthContext)
    const [imgValue, setImgValue] = useState([])
    const [roomSeekerImg, setRoomSeekerImg] = useState('')
    const [name, setName] = useState('')
    const [nameEdit, setNameEdit] = useState(false)
    const [dateOB, setDateOB] = useState('')
    const [dateOBEdit, setDateOBEdit] = useState(false)

    const [score, setScore] = useState(0)

    const [video, setVideo] = useState('')




    useEffect(() => {
        setScore(0)
        if (userData?.verified) {
            setScore(s => s + 25)
        }
        if (userData?.profile_picture) {
            setScore(s => s + 15)
        }
        if (userData?.bio) {
            setScore(s => s + 15)
        }
        if (userData?.full_name) {
            setScore(s => s + 15)
        }
        if (userData?.dob) {
            setScore(s => s + 15)
        }
        if (userData?.show_phone_number) {
            setScore(s => s + 15)
        }
    }, [userData])




    const [loading, setLoading] = useState(true)
    const [reFatch, setReFatch] = useState(1)


    const [houseType, setHouseType] = useState('')
    const [bedRoom, setBedRoom] = useState('')
    const [parking, setParking] = useState('')
    const [videoDetails, setVideoDetails] = useState({})
    const [imgRefresh, setImgRefresh] = useState(1)
    const [userAllListing, setUserAllListing] = useState([])


    useEffect(() => {
        fetch(`${baseURL}/listing/my-all-listings/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserAllListing(data);
            })
    }, [refresh])

    useEffect(() => {
        if (!listing) {
            return
        }
        if (userData?.account_type === 'roomseeker') return

        fetch(`${baseURL}/listing/get-house-listing-video/${listing?.id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setVideoDetails(data);
            })
            .catch(err => console.log(err))
    }, [listing, imgRefresh])

    useEffect(() => {
        if (!listing || userData?.account_type === 'roomseeker') {
            return
        }

        fetch(`${baseURL}/listing/get-house-listing-photos/${listing?.id}/`, {
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
    }, [imgRefresh, listing, userData])


    useEffect(() => {
        setLoading(true)



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


    // console.log(listing);


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
        useObjectData.bio = titleValue

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

        const photoKey = useObjectData['photo']
        if (photoKey) {
            delete useObjectData['photo']
        }

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
                // console.log(data);
                setRefresh(refresh + 1)
            })
            .catch(err => console.log(err))
    }
    // console.log(listing);
    const roomSeekersactiveUpdate = (functionValue) => {
        // console.log(functionValue)
        const useObjectData = listing || {}
        useObjectData.active = functionValue

        const photoKey = useObjectData['photo']
        if (photoKey) {
            delete useObjectData['photo']
        }

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
                console.log(data);
                setRefresh(refresh + 1)
            })
            .catch(err => console.log(err))
    }

    console.log(listing);


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


    const imgUpload = (e) => {
        const image = e.target.files[0]
        // ensure this is image file
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            const formData = new FormData()
            formData.append('home_listing', listing?.id)
            formData.append('photo', image)
            fetch(`${baseURL}/listing/house-listing-photos/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setImg([])
                    setImgRefresh(imgRefresh + 1)
                })
        }
    }

    const roomseekerImgUplaod = (e) => {
        const image = e.target.files[0]
        // ensure this is image file
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            const formData = new FormData()
            formData.append('photo', image)
            fetch(`${baseURL}/listing/upload-room-seeker-photo/${listing?.id}/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRoomSeekerImg(null);
                    setRefresh(refresh + 1)
                }).catch(err => console.log(err))
        }



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
                console.log(data);
                setReFatch(reFatch + 1)
            })
            .catch(err => console.log(err))
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
                // return console.log(listing?.id);
                if (userData.account_type == 'roomseeker') {
                    fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('user-token')}`,
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(data => {
                            console.log(data);
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

    const videoUpload = (e) => {
        if (userData?.account_type == 'roomseeker') {
            return toast.error('Only Home Owner can add videos', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        const vd = e.target.files[0]
        if (vd.type === 'video/mp4' || vd.type === 'video/mkv' || vd.type === 'video/avi') {
            if (!userData) return
            if (userData?.subscription == 'Free') {
                return navigate('/homeowner-pricing')
            }
            const formData = new FormData()
            formData.append('video', vd)
            formData.append('video_type', 'video')
            formData.append('home_listing', listing?.id)


            fetch(`${baseURL}/listing/house-listing-videos/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                    // 'content-type': 'multipart/form-data'
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.video) {
                        setVideo('')
                        toast.success('video add successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setImgRefresh(imgRefresh + 1)
                        // setRefresh(refresh + 1)
                    }
                })
                .catch(err => console.log(err))
        }


        // ensure this is video


    }


    const addYoutubeVideoLink = async () => {
        if (!userData) return
        if (userData.subscription === 'Free') {
            return navigate('/homeowner-pricing')
        }
        const { value: link } = await Swal.fire({
            title: 'Input Youtube Video Link',
            input: 'text',
            inputPlaceholder: 'Enter your Youtube Video Link',
            showCancelButton: true
        })
        if (link) {
            const formData = new FormData()
            formData.append('youtube_link', link)
            formData.append('video_type', 'youtube_link')
            formData.append('home_listing', listing?.id)

            fetch(`${baseURL}/listing/house-listing-videos/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                    // 'content-type': 'multipart/form-data'
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.youtube_link) {
                        toast.success('youtube link add successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        // setRefresh(refresh + 1)
                        setImgRefresh(imgRefresh + 1)
                    }
                })
                .catch(err => console.log(err))
        }
        else {
            console.log(false);
        }
    }
    const [inspectionDate, setInspectionDate] = useState([])

    useEffect(() => {
        setInspectionDate(listing?.inspection_time ? listing?.inspection_time.split(',').map(ins => new Date(ins)) : [])
    }, [listing])
    // console.log(listing?.inspection_time.split(',').map(ins => moment(ins).format('MMMM Do YYYY, h:mm:ss a')));


    const videoUrl = new URL(videoDetails?.youtube_link ? videoDetails?.youtube_link : 'https://www.youtube.com/watch?v=GWJD1TpicFo');
    const videoId = videoUrl.searchParams.get('v');
    // console.log(`${inspectionDate[0].day}/${inspectionDate[0].month}/${inspectionDate[0].year} ${inspectionDate[0].hour}:${inspectionDate[0].minute}`);

    const inspectionDateUpdate = () => {
        if (!userData) return

        const inpecDate = inspectionDate.map(ins => new Date(ins)).toString()
        if (inpecDate.length === 0) return


        if (userData?.account_type === 'roomseeker') {
            const useObjectData = listing || {}
            useObjectData.inspection_time = inpecDate

            const photoKey = useObjectData['photo']
            if (photoKey) {
                delete useObjectData['photo']
            }

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
                    // console.log(data);
                    setRefresh(refresh + 1)
                    window.inspection.close()
                })
                .catch(err => console.log(err))
        }
        if (userData?.account_type === 'homeowner') {
            const useObjectData = listing || {}
            useObjectData.inspection_time = inpecDate

            const photoKey = useObjectData['photo']
            if (photoKey) {
                delete useObjectData['photo']
            }

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
                    console.log(data);
                    setRefresh(refresh + 1)
                    window.inspection.close()
                })
                .catch(err => console.log(err))
        }
    }

    const [linkInputValue, setLinkInputValue] = useState('')
    const [linkFb, setLinkFb] = useState('')
    const [linkInsta, setLinkInsta] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')
    const [linkTiktok, setLinkTiktok] = useState('')

    useEffect(() => {
        if (!userData) return
        setLinkFb(userData?.facebook_link ? userData?.facebook_link : '')
        setLinkInsta(userData?.instagram_link ? userData?.instagram_link : '')
        setLinkTwitter(userData?.twitter_link ? userData?.twitter_link : '')
        setLinkTiktok(userData?.tiktok_link ? userData?.tiktok_link : '')
    }, [userData])

    const checkLink = userData?.facebook_link || userData?.instagram_link || userData?.twitter_link || userData?.tiktok_link


    const addSocialLink = () => {
        if (!userData) return



        if (userData?.account_type === 'roomseeker') {
            const useObjectData = userData || {}
            useObjectData.facebook_link = linkFb
            useObjectData.instagram_link = linkInsta
            useObjectData.twitter_link = linkTwitter
            useObjectData.tiktok_link = linkTiktok

            const photoKey = useObjectData['photo']
            if (photoKey) {
                delete useObjectData['photo']
            }

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
                    console.log(data);
                    setAddLinkTf(false)
                    setRefresh(refresh + 1)
                    toast.success('Link add Succesfully', {
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
                .catch(err => console.log(err))
        }
    }


    const removesocialLink = () => {
        if (userData?.account_type === 'roomseeker') {
            const useObjectData = listing || {}
            useObjectData.social_media_link = ''

            const photoKey = useObjectData['photo']
            if (photoKey) {
                delete useObjectData['photo']
            }

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
                    // console.log(data);
                    setAddLinkTf(false)
                    setRefresh(refresh + 1)
                    toast.success('Link remove Succesfully', {
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
                .catch(err => console.log(err))
        }
        if (userData?.account_type === 'homeowner') {
            const useObjectData = listing || {}
            useObjectData.social_media_link = ''

            const photoKey = useObjectData['photo']
            if (photoKey) {
                delete useObjectData['photo']
            }

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
                    setAddLinkTf(false)
                    setRefresh(refresh + 1)
                    toast.success('Link remove Succesfully', {
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
                .catch(err => console.log(err))
        }
    }

    const deleteVideo = () => {
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
                fetch(`${baseURL}/listing/house-listing-videos/${videoDetails?.id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('user-token')}`,
                    }
                })
                    .then(data => {
                        setVideoDetails(null)
                    })
                    .catch(err => console.log(err))

            }
        })

    }

    const [favListing, setFavListing] = useState([])
    const [favRoomSeeker, setFavRoomSeeker] = useState([])

    useEffect(() => {
        if (!userData) return

        fetch(`${baseURL}/listing/get-home-listing-favorites/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setFavListing(data);
            })
            .catch(err => console.log(err))


    }, [userData])

    const [addLinkTf, setAddLinkTf] = useState(false)

    useEffect(() => {
        if (!userData) return
        fetch(`${baseURL}/listing/get-room-seeker-favorites/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setFavRoomSeeker(data);
            })
            .catch(err => console.log(err))
    }, [userData])

    let fav = [...favListing, ...favRoomSeeker]

    if (!userData) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    // console.log(userData);
    return (
        <div className='home text-black'>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='flex flex-col  lg:flex-row justify-center lg:items-start gap-9 lg:gap-14 pt-20'>
                    <div className='w-full lg:w-[40%] h-full bg-white   bg-opacity-50'>
                        <div className='w-full text-center p-4 lg:p-6  border-2 rounded-lg  '>
                            <div onClick={() => window.upload_profile_img.showModal()} onMouseEnter={() => setProfileImgState(true)} onMouseLeave={() => setProfileImgState(false)} className={`w-20 overflow-hidden -mt-14 lg:-mt-20 h-20 lg:w-28  border-2   rounded-full lg:h-28 mx-auto relative cursor-pointer duration-500 ${profileImgState ? 'border-gray-600 bg-black' : 'bg-white bg-opacity-50 border-white'}`}>

                                {userData?.verified && <img src={verifyed3} className='absolute w-full rotate-[25deg] opacity-70 lg:-left-3 -left-2 bottom-0' alt="" />}

                                {userData?.profile_picture ?
                                    <img src={userData?.profile_picture} className={`${profileImgState ? 'opacity-60' : 'opacity-100'} rounded-full mx-auto  h-full w-full `} alt="" /> :
                                    <img src={blankImag} className={`${profileImgState ? 'opacity-60' : 'opacity-100'} rounded-full mx-auto   w-full `} alt="" />}
                                <p className={`text-xl text-white cursor-pointer duration-300 absolute ${!profileImgState ? 'scale-0' : 'scale-100'} left-2/4  -translate-x-2/4 top-2/4 -translate-y-2/4`}>Edit</p>
                            </div>


                            <h1 className='font-semibold flex justify-center items-center gap-2 text-xl lg:text-2xl mt-7 mb-4'>
                                {!nameEdit && userData?.full_name}
                                {nameEdit && <input type="text" defaultValue={userData.full_name} onChange={(e) => setName(e.target.value)} className='border p-2 bg-white outline-none  text-center w-full' />}
                                {!nameEdit && <FaEdit onClick={() => setNameEdit(true)} className={`text-2xl text-[#7065F0] cursor-pointer ${userData?.verified && 'hidden'}`} />}
                                {nameEdit && <FaSave onClick={() => fullNameUpdate()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </h1>
                            <h1 className=' flex justify-center items-center gap-2  mt-2 '>
                                {!dateOBEdit && <span>{userData?.dob ? moment(userData?.dob).format('Do MMMM YYYY') : 'date of birth'}</span>}
                                {dateOBEdit && <input placeholder='YYYY-MM-DD' type="date" defaultValue={userData.dob} onChange={(e) => setDateOB(e.target.value)} className='border p-2 bg-white outline-none  text-center w-full' />}
                                {!dateOBEdit && <FaEdit onClick={() => setDateOBEdit(true)} className={`text-2xl text-[#7065F0] cursor-pointer ${userData?.verified && 'hidden'}`} />}
                                {dateOBEdit && <FaSave onClick={() => dateOBFunction()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </h1>
                            <h1 className='font-medium text-lg lg:text-lg my-3'>+{userData?.username}</h1>
                            <h1 className='font-medium   my-3'>{userData?.email}</h1>
                            {/* <h1 className=' lg:text-lg font-semibold'>Do you want members to be able to contact you directly on your mobile?</h1> */}
                            <h1 className='  mt-4 text-center'>Make mobile number visible on profile?</h1>
                            <div className='flex mt-2 items-center justify-center gap-4'>
                                <div onClick={() => phoneStatusUpdate(true)} className='flex text-sm items-center gap-2 '> <div className='p-1 border cursor-pointer rounded-full border-[#7065F0]'><p className={`h-4 w-4  ${userData?.show_phone_number && 'bg-[#6156db]'} rounded-full`}></p></div>Yes</div>
                                <div onClick={() => phoneStatusUpdate(false)} className='flex text-sm items-center gap-2 '> <div className='p-1 border cursor-pointer rounded-full border-[#7065F0]'><p className={`h-4 w-4  ${!userData?.show_phone_number && 'bg-[#6156db]'} rounded-full`}></p></div>No</div>
                            </div>

                            <p className='mt-4'>{userData?.subscription} Account</p>
                            {userData.subscription == 'Free' && <>
                                <Link to={userData?.account_type == 'homeowner' ? '/homeowner-pricing' : '/roomseeker-pricing'}><button className='btn border-0 capitalize block hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-3 w-full'>upgrade</button></Link>
                                <Link to="/Benifits-of-upgrade" className='text-xs lg:text-sm mt-2 text-[#7065F0]'>Benefits of upgrade?</Link>
                            </>}
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='px-4 lg:px-6 py-6 bg-white bg-opacity-50  border-2 rounded-md '>
                            <h1 className='text-lg: lg:text-xl font-semibold'>Why Digital iD verification by Australia Post?</h1>
                            <p className='mt-4 font-light'>Stand out as a verified member and join a community that values safety, integrity, and transparency.</p>
                            {userData?.verified ? <h1 className='text-xl font-medium flex items-center gap-2 mt-4'><BiSolidSelectMultiple className='text-2xl text-blue-500'></BiSolidSelectMultiple> Digital ID Verified</h1> : <DigitalVerify></DigitalVerify>}
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <h1 className='text-xl lg:text-2xl font-bold text-[#302b68]'>Profile Score</h1>
                            <h1 className='text-2xl font-extrabold text-green-600'>{score}%</h1>
                        </div>
                        <div className='pt-1 px-1  bg-slate-100 border-2 border-gray-300 rounded-lg my-4'>
                            <progress className="progress rounded-none progress-success w-full h-12" value={score} max="100"></progress>

                        </div>
                        <div className='px-4 lg:px-6 py-4 bg-white bg-opacity-50  border-2 rounded-md mt-6 '>
                            <h1 className='text-center text-xl  font-bold '>About you</h1>
                            <div className='flex justify-center items-center  gap-2 mt-3'>
                                {title && <textarea onChange={e => setTitleValue(e.target.value)} defaultValue={userData?.bio} className='p-2 text-xl border w-full bg-white rounded max-w-[500px]' name="" id="" cols="30" rows="3"></textarea>}
                                {!title && <p className='text-center '>{userData?.bio ? userData.bio : 'one or two line'}</p>}
                                {!title && <FaEdit onClick={() => setTitle(true)} className='text-2xl text-[#7065F0] cursor-pointer' />}
                                {title && <FaSave onClick={() => profileUpdate()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                            </div>
                        </div>
                    </div>
                </div>



                {<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 lg:mt-20 gap-4'>

                    {userAllListing.length > 1 && userAllListing?.map((list, i) => <div onClick={() => setListing(list)} key={i} className={`p-2 cursor-pointer border-2 w-full hover:bg-[#dbd7fd] ${listing?.id == list?.id && 'bg-[#dbd7fd]'} duration-300 border-[#7065F0] rounded-md`}>
                        <h1 className='text-lg md:text-2xl font-bold '>{list?.house_type ? list?.house_type : 'ToDo'}</h1>
                        {userData?.account_type == 'homeowner' && <p className='font-medium  text-xs md:text-base text-gray-500'>{list?.home_address ? list?.home_address : 'Australia'}</p>}
                        {userData?.account_type == 'roomseeker' && <p className='font-medium text-xs md:text-base  text-gray-500'>{list?.suburb ? list?.suburb[0] : 'Australia'}</p>}
                    </div>)}

                    <div onClick={() => {
                        if (userData?.subscription == 'Free') {
                            if (userData?.account_type == 'homeowner') {
                                navigate('/homeowner-pricing')
                            }
                            if (userData?.account_type == 'roomseeker') {
                                navigate('/roomseeker-pricing')

                            }
                        }
                        else {
                            if (userData?.account_type == 'homeowner') {
                                navigate('/homeowner')
                            }
                            if (userData?.account_type == 'roomseeker') {
                                navigate('/roomseeker')

                            }
                        }
                    }} className='flex items-center cursor-pointer border-2 w-full border-[#7065F0] rounded-md'>
                        <p className='text-5xl font-extrabold px-2 pb-2 border-e-2 h-full border-[#7065F0] bg-[#7065F0] text-white'>+</p>
                        <p className='py-4 flex-grow px-4 hover:bg-[#dbd7fd] cursor-pointer duration-300 h-full my-auto font-medium text-xs md:text-base'>Add New Listing</p>
                    </div>
                </div>}


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
                    <button onClick={() => setImg([])} className="btn border-0 bg-slate-300">Cencle</button>
                    <button onClick={() => {
                        imgUpload()
                        setImg([])
                    }} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload images</button>
                </div>}
                {roomSeekerImg && userData?.account_type == 'roomseeker' && <div className='flex justify-start mt-3'>
                    <button onClick={() => setRoomSeekerImg(null)} className="btn border-0 bg-slate-300">Cencle</button>
                    <button onClick={() => {
                        roomseekerImgUplaod()
                    }} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload images</button>
                </div>}

                {video && <video className='w-40 ' controls>
                    <source src={URL.createObjectURL(video)} type="video/mp4" />
                </video>}
                {video && <div className='flex justify-start mt-3'>
                    <button onClick={() => setVideo('')} className="btn border-0 bg-slate-300">Cencle</button>
                    <button onClick={() => {
                        videoUpload()
                        // roomseekerImgUplaod()
                    }} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>Upload Videos</button>
                </div>}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-7'>

                    <div className=' bg-white bg-opacity-50 border relative h-[300px] lg:h-[350px]'>
                        <label className='absolute z-30 bottom-8 hover:bg-[#4e46a1] py-3 px-4 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 left-2/4 -translate-x-2/4' style={{ fontSize: '14px', fontWeight: '600px' }} htmlFor="img">Add Photo</label>

                        {userData?.account_type == 'homeowner' && <div className='w-full  relative'  >


                            <Swiper
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper h-full "
                            >
                                {imgValue?.length > 0 ? imgValue.map((image, i) => {

                                    return <SwiperSlide className='w-full h-full' key={i}>
                                        <div className='max-w-[700px] mx-auto h-full relative'>
                                            <img src={`${baseURL}${image.photo}`} className='w-full  h-[300px] lg:h-[350px]' alt="" />
                                            <MdDelete onClick={() => listingPhotoDelete(image.id)} className='absolute top-3 right-3 text-4xl rounded-full text-white cursor-pointer duration-200 hover:scale-110 bg-[#7065F0] p-2'></MdDelete>
                                        </div>
                                    </SwiperSlide>
                                }) : <div className='h-[300px] lg:h-[330px] flex flex-col justify-center items-center p-2'>
                                    <FaFileImage className='mx-auto text-5xl   rounded-lg border-blue-950 px-3 text-[#7065F0] ' />
                                    <h1 className=' font-medium text-xl mb-2 mt-4'>Upload Listing Image (optional)</h1>
                                    <p className='text-center text-sm mb-7'>Uploading a Image of your home can reduce the need for in-person inspections</p></div>}

                            </Swiper>

                        </div>}

                        {
                            userData?.account_type == 'roomseeker' &&
                            <div className='w-full h-full bg-slate-50 relative'>
                                {listing?.photo ? <img className='w-full  h-[300px] lg:h-[350px]' src={`${listing?.photo}`} alt="" /> :
                                    <div className='h-[300px] lg:h-[330px] flex flex-col justify-center items-center p-2'>
                                        <FaFileImage className='mx-auto text-5xl   rounded-lg border-blue-950 px-3 text-[#7065F0] ' />
                                        <h1 className=' font-medium text-xl mb-2 mt-4'>Upload Listing Image (optional)</h1>
                                        <p className='text-center text-sm mb-7'>Uploading a Image of your home can reduce the need for in-person inspections</p></div>}
                                {listing?.photo && <MdDelete onClick={() => roomseekerPhotoDelete()} className='absolute top-3 right-3 text-4xl rounded-full text-white  cursor-pointer duration-200 hover:scale-110 bg-[#7065F0] p-2'></MdDelete>}

                                {/* <label className='absolute z-40 bottom-8 hover:bg-[#4e46a1] py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 left-2/4 -translate-x-2/4' htmlFor="img">Add Photo</label> */}
                            </div>
                        }


                    </div>

                    {userData?.account_type == 'homeowner' ?
                        <>
                            {videoDetails?.video || videoDetails?.youtube_link ?
                                <div className='relative'>

                                    {videoDetails?.video ? <video className='w-full h-full lg:h-[350px]' controls>
                                        <source src={`${baseURL}${videoDetails?.video}`} type="video/mp4" />
                                    </video> : <iframe
                                        className='w-full  h-full lg:h-[350px]'
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>}
                                    <MdDelete onClick={deleteVideo} className='absolute cursor-pointer top-3 right-3 text-4xl rounded-full text-white \duration-200 hover:scale-110 bg-[#7065F0] p-2'></MdDelete>
                                </div>
                                : <div className='w-full  p-4 lg:p-6 flex justify-center items-center bg-white bg-opacity-50  border-2 rounded-md text-center'>
                                    <div className=''>
                                        <FaPlay className='mx-auto text-5xl border-2 p-2 rounded-lg border-blue-950 px-3 text-[#7065F0] ' />
                                        <h1 className=' font-medium text-xl mb-2 mt-4'>Upload Video tour (recommended)</h1>
                                        <p className='text-center text-sm mb-7 px-6'>Uploading a video of your home can reduce the need for in-person inspections</p>
                                        <div className="dropdown dropdown-bottom">
                                            <label tabIndex={0} className='btn border-0 capitalize hover:bg-[#4e46a1] bg-[#7065F0] text-white  '>add video</label>
                                            <ul tabIndex={0} className="dropdown-content z-[1] bg-[#c0baff]  menu p-2 shadow  rounded-box w-52">
                                                <li className='font-semibold'><label htmlFor='video'>Video</label></li>
                                                <li onClick={addYoutubeVideoLink} className='font-semibold'><a>Youtube Video Link</a></li>
                                            </ul>
                                        </div>

                                        <input onChange={(e) => videoUpload(e)} type="file" name="video" id="video" className='w-0 h-0 overflow-hidden' />
                                    </div>
                                </div>}
                        </>
                        :
                        ''}


                    {userData?.account_type == 'roomseeker' && <div className='w-full p-4 lg:p-6 text-center  bg-white bg-opacity-50  border-2 rounded-md flex justify-center items-center relative'>

                        {checkLink && <FaEdit onClick={() => setAddLinkTf(true)} className='absolute cursor-pointer top-3 right-3 text-4xl rounded-full text-white duration-200 hover:scale-110 bg-[#7065F0] p-2'></FaEdit>}

                        {!checkLink ?

                            <div>
                                {!addLinkTf ?
                                    <>
                                        <FaLink className='mx-auto text-3xl  text-[#7065F0] ' />
                                        <h1 className=' font-medium text-xl mt-2'>Social Media Link (optional)</h1>
                                        <p className='text-sm my-2 mb-20'>upload your any social media link</p>
                                    </>
                                    :
                                    <>
                                        <>
                                            <FaLink className='mx-auto text-3xl  text-[#7065F0] ' />
                                            <h1 className=' font-medium text-xl mt-2'>Social Media Link (optional)</h1>
                                            <input value={linkFb} onChange={e => setLinkFb(e.target.value)} placeholder='Facebook' type="text" className='w-full mt-2  border bg-transparent focus:outline-none p-2 rounded-md mb-2' />
                                            <input value={linkInsta} onChange={e => setLinkInsta(e.target.value)} placeholder='Instagram' type="text" className='w-full  border bg-transparent focus:outline-none p-2 rounded-md mb-2' />
                                            <input value={linkTwitter} onChange={e => setLinkTwitter(e.target.value)} placeholder='X.com(Twitter)' type="text" className='w-full  border bg-transparent focus:outline-none p-2 rounded-md mb-2' />
                                            <input value={linkTiktok} onChange={e => setLinkTiktok(e.target.value)} placeholder='TikTok' type="text" className='w-full  border bg-transparent focus:outline-none p-2 rounded-md mb-20' />
                                        </>
                                    </>
                                }
                            </div>
                            :
                            <div>
                                {!addLinkTf ?
                                    <>
                                        <div>
                                            <h1 className=' font-medium text-xl mt-4'>Your social media link</h1>

                                            <div className='mt-4 mb-20 lg:mb-6 flex justify-center items-center gap-3'>
                                                {userData?.facebook_link && <a href={linkFb} target='_blank' className='text-blue-500'><FaFacebook className='text-4xl' /></a>}
                                                {userData?.instagram_link && <a href={linkInsta} target='_blank' className='text-pink-500'><FaInstagram className='text-4xl' /></a>}
                                                {userData?.twitter_link && <a href={linkTwitter} target='_blank' className='text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                                                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                                </svg></a>}
                                                {userData?.tiktok_link && <a href={linkTiktok} target='_blank' className='text-black'><FaTiktok className='text-4xl' /></a>}

                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <FaLink className='mx-auto text-3xl  text-[#7065F0] ' />
                                        <h1 className=' font-medium text-xl mt-2'>Social Media Link (optional)</h1>
                                        <input value={linkFb} onChange={e => setLinkFb(e.target.value)} placeholder='Facebook' type="text" className='w-full mt-2  border focus:outline-none p-2 rounded-md mb-2' />
                                        <input value={linkInsta} onChange={e => setLinkInsta(e.target.value)} placeholder='Instagram' type="text" className='w-full  border focus:outline-none p-2 rounded-md mb-2' />
                                        <input value={linkTwitter} onChange={e => setLinkTwitter(e.target.value)} placeholder='X.com(Twitter)' type="text" className='w-full  border focus:outline-none p-2 rounded-md mb-2' />
                                        <input value={linkTiktok} onChange={e => setLinkTiktok(e.target.value)} placeholder='TikTok' type="text" className='w-full  border focus:outline-none p-2 rounded-md mb-20' />
                                    </>
                                }
                            </div>
                        }



                        {!addLinkTf ?
                            <div>
                                {!checkLink && <btn onClick={() => setAddLinkTf(true)} className='absolute z-30 bottom-8 hover:bg-[#4e46a1] py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 left-2/4 -translate-x-2/4' >Add link</btn>}
                            </div>
                            :
                            <div className='absolute z-30 bottom-8 left-2/4 -translate-x-2/4'>
                                <btn onClick={addSocialLink} className=' hover:bg-[#4e46a1] py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#7065F0] text-white border-0 ' >save</btn>
                                <btn onClick={() => setAddLinkTf(false)} className=' hover:bg-[#974739] ms-2 py-2 px-3 rounded-md cursor-pointer duration-200 bg-[#df5037] text-white border-0 ' >cancel</btn>
                            </div>}




                    </div>}



                    {userData.account_type == 'homeowner' && <div className='w-full p-4 lg:p-6 text-center  bg-white bg-opacity-50  border-2 rounded-md flex justify-center items-center'>
                        {userData.account_type == 'homeowner' && <div>
                            {!listing?.inspection_time && <div>
                                <FaRegCalendarAlt className='mx-auto text-5xl  text-[#7065F0] ' />
                                <h1 className=' font-medium text-xl mt-4'>Finalise your inspection times</h1>
                                <p className='text-sm my-2'>Once completed, you can invite potential flamates to book times via messages</p>
                                <a href='' className='text-blue-500'>Learn more</a>
                            </div>}

                            {/* <Calendar  value={listing?.inspection_time.split(',')} disabled={true} /> */}
                            {listing?.inspection_time && <div className='h-48 overflow-y-auto'>
                                <p className='text-center text-lg font-medium pb-1 border-b'>Available Date</p>
                                {listing?.inspection_time.split(',').map((ins, i) => <p className='bg-slate-200 mt-2' key={i}>{moment(ins).format("MMM Do YY,  h:mm a")}</p>)}
                            </div>}
                            <button onClick={() => window.inspection.showModal()} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-4 block mx-auto capitalize'>Finish setting up inspections</button>
                        </div>}

                    </div>}
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
                        imgUpload(e)
                    }
                    else {
                        roomseekerImgUplaod(e)
                    }

                }} type="file" className='h-0 w-0 overflow-hidden' name="img" id="img" />



                {/* {userData?.account_type == 'homeowner' &&

                    <div>
                        <div className='p-4 lg:p-6 py-10 relative  bg-white bg-opacity-50 bg-opacity-60 border-2 rounded-md mt-10'>

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
                            <button onClick={() => setRoomDetails(false)} className="btn border-0bg-slate-300">Cencle</button>
                            <button onClick={houseUpdate} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ms-3'>save chenges</button>
                        </div>}


                    </div>} */}





                {!roomEdit && <div className='bg-white bg-opacity-50 border-2 rounded-md mt-6'>
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

                            if (key == 'inspection_time' || key == 'is_favourite') return

                            const stringWithoutHyphens = key.replace(/_/g, ' ');
                            const words = stringWithoutHyphens.split(' ');

                            const capitalizedWords = words.map(word => {
                                if (word.length === 0) {
                                    return word;
                                }
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            });


                            const vlidarray = Array.isArray(listing[key]);

                            const homeAddressListing = key == 'home_address' && listing[key].split(',')
                            const homeAddressListingLength = key == 'home_address' && homeAddressListing.length

                            return <div key={index} className='flex gap-3 items-start lg:items-center lg:gap-7 border-b pb-4  mb-4'>
                                <p className='font-medium opacity-70 text-xs lg:text-base w-32 lg:w-[250px] '>{capitalizedWords.join(' ')}</p>
                                <p className='font-medium opacity-70 lg:w-[100px]'>:</p>
                                {
                                    vlidarray ? <div className='flex items-center w-[128px] lg:w-[300px] flex-wrap gap-2'>
                                        {listing[key].map((item, i) => <p className='font-semibold text-xs lg:text-base' key={i}>{item}{listing[key].length > 1 && ','}</p>)}
                                    </div> :

                                        <p className='font-semibold w-[128px] lg:w-[300px] text-xs lg:text-base'>{key == 'home_address' ?
                                            <>
                                                {homeAddressListing.length === 1 && homeAddressListing[0]}
                                                {homeAddressListing.length > 1 && homeAddressListing[homeAddressListingLength - 2]}
                                            </>
                                            : listing[key]}</p>
                                }

                            </div>
                        })}
                    </div>
                    <div className='px-6 flex flex-col lg:flex-row justify-between gap-7'>
                        <div>
                            <h1 className='  font-bold text-xl '>Listing Status</h1>

                            <div className='mt-4 flex flex-col lg:flex-row gap-x-7 gap-y-4'>
                                {/* <p onClick={() => {

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
                                }} className='flex items-center gap-2 '><input type="radio" className="radio radio-primary" checked={!listing?.active} />Deactive</p> */}

                                <div onClick={() => {

                                    if (userData?.account_type == 'roomseeker') {
                                        roomSeekersactiveUpdate(true)
                                    }
                                    else {
                                        activeUpdate(true)
                                    }
                                }} className='flex text-sm items-center gap-2 '> <div className='p-1 border cursor-pointer rounded-full border-[#7065F0]'><p className={`h-4 w-4  ${listing?.active && 'bg-[#6156db]'} rounded-full`}></p></div>Active</div>
                                <div onClick={() => {

                                    if (userData?.account_type == 'roomseeker') {
                                        roomSeekersactiveUpdate(false)
                                    }
                                    else {
                                        activeUpdate(false)
                                    }
                                }} className='flex text-sm items-center gap-2 '> <div className='p-1 border cursor-pointer rounded-full border-[#7065F0]'><p className={`h-4 w-4  ${!listing?.active && 'bg-[#6156db]'} rounded-full`}></p></div>Deactive</div>
                            </div>
                        </div>


                        <div>
                            <h1 className=' text-xl text-center font-semibold'>Share your listing </h1>
                            <div className='flex justify-center items-center gap-6 mt-4'>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Facebook share">
                                    <FacebookShareButton url={userData?.account_type == 'homeowner' ? `https://bristo-boss-2efa1.web.app/home-listing/${listing?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listing?.id}`}>
                                        <FaFacebook className='text-5xl text-blue-600' />
                                        <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white bg-opacity-50 rounded-full p-1 text-xl'></FaShare>
                                    </FacebookShareButton>
                                </div>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Linkedin share">
                                    <LinkedinShareButton url={userData?.account_type == 'homeowner' ? `https://bristo-boss-2efa1.web.app/home-listing/${listing?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listing?.id}`}>
                                        <FaLinkedin className='text-5xl text-blue-600' />
                                        <FaShare className='absolute -right-1 shadow-lg -bottom-2 bg-white bg-opacity-50 rounded-full p-1 text-xl'></FaShare>
                                    </LinkedinShareButton>
                                </div>
                                <div className='relative tooltip tooltip-bottom cursor-pointer' data-tip="Twitter share">
                                    <TwitterShareButton url={userData?.account_type == 'homeowner' ? `https://bristo-boss-2efa1.web.app/home-listing/${listing?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listing?.id}`}>

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
                                            const copyText = `${userData?.account_type == 'homeowner' ? `https://bristo-boss-2efa1.web.app/home-listing/${listing?.id}` : `https://bristo-boss-2efa1.web.app/room-seeker/${listing?.id}`}`
                                            navigator.clipboard.writeText(copyText)
                                                .then(() => {
                                                    toast.success('Listing link copied', {
                                                        position: "top-center",
                                                        autoClose: 2000,
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
                        </div>
                    </div>
                    <div className='flex justify-center mb-6 gap-4'>
                        <button onClick={() => {
                            setRoomEdit(true)
                        }} className='btn border-0rounded-none lg:w-56 mt-7 btn-lg border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white capitalize'><FaPencilAlt></FaPencilAlt> Edit</button>
                        <button
                            onClick={() => {
                                deleteListing()
                            }}
                            className='btn border-0rounded-none lg:w-56 mt-7 btn-lg border-0 hover:bg-[#b34f4f] bg-[#f06565] text-white capitalize'>Delete</button>

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
                        <div className='bg-white bg-opacity-50  border-2 rounded-md mt-10 relative'>
                            <div className='flex justify-between items-center border-b-2'>
                                <p className='p-4 lg:p-6 text-xl font-bold'>Home Description</p>
                                <div onClick={() => setDescription(true)} className='  py-3 px-4 border-s-2  cursor-pointer hover:bg-[#7065F0] hover:text-white duration-300 border-[#7065F0] text-[#7065F0]   text-center '>
                                    <FaPencilAlt className='text-base lg:text-2xl mx-auto' />
                                    <p className=' mt-1'>edit</p>
                                </div>
                            </div>
                            <div className='p-4 lg:p-6'>
                                {!description && <p>{listing?.describe_occupants ? listing?.describe_occupants : 'write home description...'}</p>}
                                {description && <textarea defaultValue={listing?.describe_occupants} onChange={e => setDescriptionValue(e.target.value)} name="" id="" cols="30" rows="3" className='p-2 border-2 rounded-md w-full bg-white'></textarea>}
                                {description && <div className='flex gap-3 justify-start mt-3'>
                                    <button onClick={addDescription} className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white capitalize'>save changes</button>
                                    <button onClick={() => setDescription(false)} className="btn border-0 bg-slate-300 capitalize">cancel</button>
                                </div>}
                            </div>
                        </div>

                    </div>
                }

                {fav.length > 0 &&
                    <div className='flex justify-between items-center mt-12'>
                        <p className='p-4 lg:p-6 text-2xl font-bold'>Favourite Listing</p>
                    </div>}

                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 '>
                    {fav.map((p, i) => <ListingCard key={i} p={p} />)}
                </div>
                {/* <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
                    {favRoomSeeker.map(p => <ListingCard key={p.id} p={p} />)}
                </div> */}





                {/* <div>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold mt-10 lg:mt-16'>Your Listing</h1>
                    <h1 className='mt-6 lg:mt-12 lg:text-lg font-semibold text-center'>Do you want members to be able to contact you directly on your mobile?</h1>
                </div> */}
            </div>
            <dialog id="upload_profile_img" className="modal">
                <div method="dialog" className="modal-box bg-white">
                    <div className="flex flex-col items-center gap-7 mb-14 ">
                        <h3 className="font-bold font-mono text-lg text-center">Upload Profile Picture</h3>
                        <input onChange={e => setProfilePicture(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="modal-action mt-7">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => changeProfilePicture()} className="btn border-0 btn-primary">save changes</button>
                        <button onClick={() => window.upload_profile_img.close()} className="btn">Close</button>
                    </div>
                </div>
            </dialog>

            <dialog id="inspection" className="modal">
                <div method="dialog" className="modal-box max-w-3xl h-[500px] lg:h-[500px] relative bg-white">
                    <div className="flex flex-col items-start gap-7 mb-14 ">
                        <DatePicker
                            value={inspectionDate}
                            onChange={setInspectionDate}
                            multiple
                            type='Calendar'
                            format="MM/DD/YYYY HH:mm"
                            plugins={[
                                <TimePicker position="bottom" />, <DatePanel />
                            ]}
                        />
                    </div>
                    <div className="absolute bottom-4 right-4">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={inspectionDateUpdate} className="btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white ">save</button>
                        <button onClick={() => window.inspection.close()} className="btn border-0ms-3">Close</button>
                    </div>
                </div>
            </dialog>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;