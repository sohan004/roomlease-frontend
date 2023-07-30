import { useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "./RoomFurnishingAndFeture";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import arow from '../../assets/newlistingIcon/Icon.svg'
import homeIcon from '../../assets/newlistingIcon/homeIcon.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../App";

const RoomSeeker = () => {
    const [roomFeutureOthers, setRoomFeutureOthers] = useState(false)




    // all from data
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [houseType, setHouseType] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [parkingOptions, setParkingOptions] = useState('')
    const [furnished, setFurnished] = useState('')
    const [privateBath, setPrivateBath] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const [bedSize, setBedSize] = useState('')
    const [roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures] = useState([])
    const [rentPerWeek, setRentPerWeek] = useState('')
    const [bond, setBond] = useState('')
    const [billRent, setBillRent] = useState('yes')
    const [approximatecost, setApproximatecost] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [minimumStay, setMinimumStay] = useState('')
    const [minimumStayOthers, setMinimumStayOthers] = useState(false)
    const [minimumStayOthersValue, setMinimumStayOthersValue] = useState('')
    const [maximumStay, setMaximumStay] = useState('')
    const [maximumStayOthersValue, setMaximumStayOthersValue] = useState('')
    const [maximumStayOthers, setmaximumStayOthers] = useState(false)
    const [animate, setAnimate] = useState('')
    const [placeFriendless, setPlaceFriendless] = useState('')
    const [nearbyCommunitySpaces, setNearbyCommunitySpaces] = useState('')
    const [publicTransportAccess, setPublicTransportAccess] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [checks, setChecks] = useState([])
    const [smoke, setSmoke] = useState('')
    const [pets, setPets] = useState('')
    const [child, setChild] = useState('')
    const [couple, setCouple] = useState('')
    const [occuption, setOccuption] = useState('')
    const [lifestyle, setLifestyle] = useState('')
    const [clean, setClean] = useState('')
    const [diat, setDiat] = useState('')
    const [alcohol, setAlcohol] = useState('')
    const [nois, setNois] = useState('')
    const [additional, setAdditional] = useState('')
    const [additional2, setAdditional2] = useState('')
    const [photo, setPhoto] = useState([])




    // ````````````````````
    const addFunction = (p) => {
        const findData = checks.find(r => r == p)
        if (findData) {
            const filterData = checks.filter(filt => filt != p)
            setChecks(filterData)
            return
        }
        setChecks([...checks, p])
    }
    const check1 = checks.find(r => r == 'Any')
    const check2 = checks.find(r => r == 'Digital ID Verification')
    const check3 = checks.find(r => r == 'Student ID')
    const check4 = checks.find(r => r == 'Passport')
    const check5 = checks.find(r => r == 'Medicare')
    const check6 = checks.find(r => r == `Driver's License`)
    const check7 = checks.find(r => r == 'Bank Statement')
    const check8 = checks.find(r => r == 'Government Issued ID')
    const check9 = checks.find(r => r == 'National Police Check')
    const check10 = checks.find(r => r == 'Working with Children Check')
    const check11 = checks.find(r => r == 'Income Proof')
    const check12 = checks.find(r => r == 'References')

    const [load, setLoad] = useState(false)

    const options = [
        { value: 'Air Conditioning', label: 'Air Conditioning' },
        { value: 'Heating, Wardrobe', label: 'Heating, Wardrobe' },
        { value: 'Desk', label: 'Desk' },
        { value: 'TV', label: 'TV' },
        { value: 'Balcony', label: 'Balcony' },
        { value: 'Ensuite', label: 'Ensuite' },
        { value: 'Wifi', label: 'Wifi' },
        { value: 'Private ', label: 'Private ' },
        { value: 'Entrance', label: 'Entrance' },
    ]



    const handle = (e) => {
        e.preventDefault();

        if (!firstName) {
            toast.error('Please type your first name', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return
        }
        if (!secondName) {
            toast.error('Please type your second name', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                progress: undefined,
            });
            return
        }
        if (!email) {
            toast.error('Please type your email address', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (!houseType) {
            toast.error('Please select your house type', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (!furnished) {
            toast.error('Please select Bedrom Type', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!privateBath) {
            toast.error('Please select Private Bathroom ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!bedSize) {
            toast.error('Please select Bed Size ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (roomFurnishingsAndFeatures.length === 0) {
            toast.error('Please select Room  Features ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!animate) {
            toast.error('Please select Amenities ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!placeFriendless) {
            toast.error('Please select Place Friendless ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!nearbyCommunitySpaces) {
            toast.error('Please select Nearby Community Spaces  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!publicTransportAccess) {
            toast.error('Please select Public Transport Access  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!gender) {
            toast.error('Please select gender  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!age) {
            toast.error('Please select age  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (checks.length === 0) {
            toast.error('Please select checks  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return
        }
        if (!occuption) {
            toast.error('Please select occuption  ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); return

        }
        const allInfo = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            "house_type": houseType,
            "room_type": furnished,
            "private_bathroom": privateBath,
            "bed_size": bedSize,
            "room_features": roomFurnishingsAndFeatures,
            "amenities": animate,
            "place_friendliness": placeFriendless,
            "nearby_community_spaces": nearbyCommunitySpaces,
            "public_transport_access": publicTransportAccess,
            "gender": gender,
            "age": age,
            "ids_and_checks": checks,
            "occupation": occuption,
            "user": localStorage.getItem('user-token'),

        }
        setLoad(true)
        fetch(`${baseURL}/listing/room-seekers/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
            , body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    setLoad(false)
                    window.location.href = `/setting_profile`
                }
                else {
                    setLoad(false)
                    toast.error('somthing want wrong!!!  ', {
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
            })
            .catch(() => {
                setLoad(false)
                toast.error('somthing want wrong!!!  ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    theme: "colored",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); return
            })
    }

    return (
        <div className="max-w-[736px]  mx-auto px-4 ">
            <h1 className="text-center text-3xl font-bold mt-8 mb-4">Add New Listing</h1>
            <p className="text-center opacity-80 pb-8 mb-8 border-b">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>
            <form onSubmit={handle}>
                <div className="p-4 border-2 lg:p-6  rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
                        <div>
                            <input onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" type="text" name="" className="w-full py-3 px-4 border hover:border-2 focus:border-2 focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                        <div>
                            <input onChange={(e) => setSecondName(e.target.value)} placeholder="Last Name" type="text" name="" className="w-full py-3 px-4 hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                        <div className="col-span-1 lg:col-span-2 ">
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" name="" className="w-full py-3 px-4 hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                    </div>
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Room Preferences**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 text-center font-medium">
                                <p onClick={() => setHouseType('House')} className={`font-bold text-[#7065F0] border border-b-0 lg:border-b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>House</p>
                                <p onClick={() => setHouseType('Unit')} className={`font-bold text-[#7065F0] border-t border-e lg:border-e-0 lg:border-y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Unit</p>
                                <p onClick={() => setHouseType('Apartment')} className={`font-bold text-[#7065F0] border-y border-s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Apartment</p>
                                <p onClick={() => setHouseType('Townhouse')} className={`font-bold text-[#7065F0] border duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Townhouse</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Room Type:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setFurnished('Private Bedroom')} className={`border  duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Private Bedroom</p>
                                <p onClick={() => setFurnished('Shared Bedroom')} className={`border border-s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Private Bathroom:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setPrivateBath('yes')} className={`border  duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Yes</p>
                                <p onClick={() => setPrivateBath('no')} className={`border border-s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Bed Size:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setBedSize('single')} className={`border ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Single</p>
                                <p onClick={() => setBedSize('double')} className={`border-y border-e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Double</p>
                                <p onClick={() => setBedSize('queen')} className={`border-y border-e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Queen</p>
                                <p onClick={() => setBedSize('king')} className={`border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>King</p>
                                <p onClick={() => setBedSize('none')} className={`border border-t-0 lg:border-t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#5249b1] font-bold text-lg">Room Features :</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                        ></RoomFurnishingAndFeture>
                    </div>
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Amenities** </p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-center font-medium">
                            <p onClick={() => setAnimate('Outdoor Area')} className={`border border-b-0 lg:border-b duration-500 ${animate === 'Outdoor Area' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Outdoor Area</p>
                            <p onClick={() => setAnimate('Kitchen')} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${animate === 'Kitchen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Kitchen</p>
                            <p onClick={() => setAnimate('TV')} className={`border-y border-s duration-500 ${animate === 'TV' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>TV</p>
                            <p onClick={() => setAnimate('Laundry')} className={`border duration-500 ${animate === 'Laundry' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Laundry</p>
                            <p onClick={() => setAnimate('BBQ')} className={`border border-s border-y-0 lg:border-y lg:border-s-0 duration-500 ${animate === 'BBQ' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>BBQ</p>
                            <p onClick={() => setAnimate('Pool')} className={`border border-t-0 border-s-0 lg:border-s duration-500 ${animate === 'Pool' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Pool</p>
                            <p onClick={() => setAnimate('Spa')} className={`border lg:border-t-0 lg:border-s-0 border-b-0 lg:border-b duration-500 ${animate === 'Spa' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Spa</p>
                            <p onClick={() => setAnimate('Sauna')} className={`border border-t-0 border-s-0 border-b-0 lg:border-b duration-500 ${animate === 'Sauna' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Sauna</p>
                            <p onClick={() => setAnimate('None')} className={`border lg:border-t-0 lg:border-s-0 col-span-2 lg:col-span-1 duration-500 ${animate === 'None' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>None</p>
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Place friendliness:</p>
                            <div className="mt-4 grid grid-cols-2 text-center font-medium">
                                <p onClick={() => setPlaceFriendless('Pets')} className={`border border-b-0 duration-500 ${placeFriendless === 'Pets' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Pets</p>
                                <p onClick={() => setPlaceFriendless('Couples')} className={`border-t border-e duration-500 ${placeFriendless === 'Couples' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Couples</p>
                                <p onClick={() => setPlaceFriendless('Children')} className={`border-y border-s duration-500 ${placeFriendless === 'Children' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Children</p>
                                <p onClick={() => setPlaceFriendless('Visitors')} className={`border duration-500 ${placeFriendless === 'Visitors' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Visitors</p>
                                <p onClick={() => setPlaceFriendless('None')} className={`border border-t-0 col-span-2 duration-500 ${placeFriendless === 'None' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>None</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Local Amenities and Transport**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#5249b1] font-bold  text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setNearbyCommunitySpaces('Parks')} className={`duration-500 border ${nearbyCommunitySpaces === 'Parks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Parks</p>
                                <p onClick={() => setNearbyCommunitySpaces('Aquatic Centres')} className={`duration-500 border-t border-e lg:border-e-0 ${nearbyCommunitySpaces === 'Aquatic Centres' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Aquatic Centres</p>
                                <p onClick={() => setNearbyCommunitySpaces('Gyms')} className={`duration-500 border border-y-0 lg:border-t ${nearbyCommunitySpaces === 'Gyms' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Gyms</p>
                                <p onClick={() => setNearbyCommunitySpaces('Libraries')} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${nearbyCommunitySpaces === 'Libraries' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Libraries</p>
                                <p onClick={() => setNearbyCommunitySpaces('Community Centres')} className={`duration-500 border ${nearbyCommunitySpaces === 'Community Centres' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Community Centres</p>
                                <p onClick={() => setNearbyCommunitySpaces('Sports Facilities')} className={`duration-500 border border-s-0 ${nearbyCommunitySpaces === 'Sports Facilities' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Sports Facilities</p>
                                <p onClick={() => setNearbyCommunitySpaces('None')} className={`border border-t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces === 'None' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>None</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold  text-lg">Public Transport Access:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setPublicTransportAccess('Bus Stop')} className={`duration-500 border ${publicTransportAccess === 'Bus Stop' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bus Stop</p>
                                <p onClick={() => setPublicTransportAccess('Tram Station')} className={`duration-500 border-t border-e lg:border-e-0 ${publicTransportAccess === 'Tram Station' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Tram Station</p>
                                <p onClick={() => setPublicTransportAccess('Train Station')} className={`duration-500 border border-y-0 lg:border-t ${publicTransportAccess === 'Train Station' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Train Station</p>
                                <p onClick={() => setPublicTransportAccess('Ferry Terminal')} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${publicTransportAccess === 'Ferry Terminal' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Ferry Terminal</p>
                                <p onClick={() => setPublicTransportAccess('Bike Paths')} className={`duration-500 border ${publicTransportAccess === 'Bike Paths' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bike Paths</p>
                                <p onClick={() => setPublicTransportAccess('None')} className={`duration-500 border border-s-0 ${publicTransportAccess === 'None' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>None</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Personal Details**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Gender:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setGender('Any')} className={`border border-b-0 lg:border-b duration-500 ${gender === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => setGender('Male')} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${gender === 'Male' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Male</p>
                                <p onClick={() => setGender('Female')} className={`border-y border-s duration-500 ${gender === 'Female' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Female</p>
                                <p onClick={() => setGender('LGBTIQA+')} className={`border duration-500 ${gender === 'LGBTIQA+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>LGBTIQA+</p>
                                <p onClick={() => setGender('Unspecified')} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${gender === 'Unspecified' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">Age Range:</p>
                            <input onChange={(e) => setAge(e.target.value)} placeholder="age" type="number" name="" className="w-full py-3 px-4 hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg mt-4" />
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold text-lg">IDs & Checks</p>
                            <div className="p-4 border rounded-lg mt-4">
                                <div className=" gap-4 flex flex-wrap">
                                    <p onClick={() => addFunction('Any')} className={`inline border-2  cursor-pointer ${check1 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Any</p>
                                    <p onClick={() => addFunction('Digital ID Verification')} className={`inline border-2 cursor-pointer ${check2 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Digital ID Verification</p>
                                    <p onClick={() => addFunction('Student ID')} className={`inline border-2 cursor-pointer ${check3 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Student ID</p>
                                    <p onClick={() => addFunction('Passport')} className={`inline border-2 cursor-pointer ${check4 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Passport</p>
                                    <p onClick={() => addFunction('Medicare')} className={`inline border-2 cursor-pointer ${check5 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Medicare</p>
                                    <p onClick={() => addFunction(`Driver's License`)} className={`inline cursor-pointer border-2 ${check6 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}> Driver's License </p>
                                    <p onClick={() => addFunction(`Bank Statement`)} className={`inline cursor-pointer border-2 ${check7 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}> Bank Statement </p>
                                    <p onClick={() => addFunction(`Government Issued ID`)} className={`inline cursor-pointer border-2 ${check8 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}> Government Issued ID </p>
                                    <p onClick={() => addFunction(`National Police Check`)} className={`inline cursor-pointer border-2 ${check9 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}> National Police Check </p>
                                    <p onClick={() => addFunction(`Working with Children Check`)} className={`inline cursor-pointer border-2 ${check10 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}> Working with Children Check </p>
                                    <p onClick={() => addFunction(`Income Proof`)} className={`inline cursor-pointer border-2 ${check11 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>Income Proof </p>
                                    <p onClick={() => addFunction(`References`)} className={`inline cursor-pointer border-2 ${check12 && ' bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]'} py-2 px-4 rounded-lg font-medium`}>References </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#5249b1] font-bold  text-lg">Occupation Preference:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setOccuption('Any')} className={` duration-500 border ${occuption === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => setOccuption('Student')} className={` duration-500 border-t border-e lg:border-e-0 ${occuption === 'Student' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Student</p>
                                <p onClick={() => setOccuption('Professional')} className={` duration-500 border border-y-0 lg:border-t ${occuption === 'Professional' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Professional</p>
                                <p onClick={() => setOccuption('Backpackers')} className={` duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b  ${occuption === 'Backpackers' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Backpackers</p>
                                <p onClick={() => setOccuption('On welfare')} className={` duration-500 border  ${occuption === 'On welfare' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>On welfare</p>
                                <p onClick={() => setOccuption('Retired')} className={` duration-500 border border-s-0  ${occuption === 'Retired' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Retired</p>
                                <p onClick={() => setOccuption('Joob Seeker')} className={` duration-500 border border-t-0 col-span-2 lg:col-span-3  ${occuption === 'Retired' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Joob Seeker</p>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="text-center mt-7">
                <button disabled={load} className='btn w-full  hover:bg-[#4e46a1] bg-[#7065F0] text-white '>{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} submit all Information</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RoomSeeker