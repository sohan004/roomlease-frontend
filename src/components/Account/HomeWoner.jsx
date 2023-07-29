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

const HomeWoner = () => {
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
    const [maximumStayOthers, setmaximumStayOthers] = useState(false)
    const [maximumStayOthersValue, setmaximumStayOthersValue] = useState('')
    const [animate, setAnimate] = useState('')
    const [rentPerweeksingle, setRentPerweeksingle] = useState('')
    const [rentPerweekcouple, setRentPerweekcouple] = useState('')
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
    const [load, setLoad] = useState(false)




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
        e.preventDefault()
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
        if (!homeAddress) {
            toast.error('Please type your home address', {
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
        if (!parkingOptions) {
            toast.error('Please select your parking options', {
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
        if (!startDate) {
            toast.error('Please select Available from', {
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
        if (!minimumStayOthers) {
            if (!minimumStay) {
                toast.error('Please select minimum stay', {
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
        }
        if (!maximumStayOthers) {
            if (!maximumStay) {
                toast.error('Please select maximum stay', {
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
        }
        if (minimumStayOthers) {
            if (!minimumStayOthersValue) {
                toast.error('Please type minimum stay', {
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
        }
        if (maximumStayOthers) {
            if (!maximumStayOthersValue) {
                toast.error('Please type maximum stay', {
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
        }
        if (!rentPerweeksingle) {
            toast.error('Please type rent per week for single', {
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
        if (!rentPerweekcouple) {
            toast.error('Please type rent per week for couple', {
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
        if (!bond) {
            toast.error('Please select bond', {
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
        if (!billRent) {
            if (!approximatecost) {
                toast.error('Please type approximate cost', {
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
        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, "0");
        const day = String(startDate.getDate()).padStart(2, "0");

        const allInfo = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            "house_type": houseType,
            "home_address": homeAddress,
            "parking_option": parkingOptions,
            "available_from": `${year}-${month}-${day}`,
            "minimum_stay": minimumStay,
            "minimum_stay_others": minimumStayOthersValue,
            "maximum_stay": maximumStay,
            "maximum_stay_others": maximumStayOthersValue,
            "rent_per_week_single": rentPerweeksingle,
            "rent_per_week_couple": rentPerweekcouple,
            "bond": bond,
            "bills_included_in_rent": billRent,
            "approximate_cost": approximatecost,
            "bedroom_type": furnished,
            "private_bathroom": privateBath,
            "bed_size": bedSize,
            "room_features": roomFurnishingsAndFeatures,
            "amenities": animate,
            "place_friendliness": placeFriendless,
            "nearby_community_spaces": nearbyCommunitySpaces,
            "public_transport_access": publicTransportAccess,
            "gender": gender,
            "age_range": age,
            "ids_and_checks": checks,
            "occupation_preference": occuption,
            "user": localStorage.getItem('user-token'),
        }
        setLoad(true)
        fetch(`${baseURL}/listing/home-listings/`, {
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
            <form onSubmit={handle} >
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
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Property Details**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className=" text-[#7065F0] font-bold text-lg">Home Address: </p>
                            <input onChange={e => setHomeAddress(e.target.value)} placeholder="Home Address: " type="text" name="" className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg" />
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 text-center font-medium">
                                <p onClick={() => setHouseType('House')} className={`font-bold text-[#7065F0] border border-b-0 lg:border-b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>House</p>
                                <p onClick={() => setHouseType('Unit')} className={`font-bold text-[#7065F0] border-t border-e lg:border-e-0 lg:border-y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Unit</p>
                                <p onClick={() => setHouseType('Apartment')} className={`font-bold text-[#7065F0] border-y border-s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Apartment</p>
                                <p onClick={() => setHouseType('Townhouse')} className={`font-bold text-[#7065F0] border duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Townhouse</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Parking Options:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setParkingOptions('Garage')} className={`border border-b-0 lg:border-b duration-500 ${parkingOptions === 'Garage' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Garage</p>
                                <p onClick={() => setParkingOptions('Driveway')} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${parkingOptions === 'Driveway' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Driveway</p>
                                <p onClick={() => setParkingOptions('On Street')} className={`border-y border-s duration-500 ${parkingOptions === 'On Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>On Street</p>
                                <p onClick={() => setParkingOptions('of Street')} className={`border duration-500 ${parkingOptions === 'of Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>of Street</p>
                                <p onClick={() => setParkingOptions('No Parking')} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${parkingOptions === 'No Parking' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>No Parking</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Room Details**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="w-full">
                            <p className="text-[#7065F0] font-bold text-lg">Available from:</p>
                            <DatePicker
                                className="mt-4 py-3 px-4 border hover:border-2 focus:border-2 focus:bg-[#f7f6ff] border-[#7065F0] hover:outline-none w-full rounded-lg"
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Minimum Stay :</p>
                            {!minimumStayOthers && <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => setMinimumStay('1 week')} className={` duration-500 border ${minimumStay === '1 week' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 week</p>
                                <p onClick={() => setMinimumStay('2 week')} className={` duration-500 border-y border-e ${minimumStay === '2 week' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 week</p>
                                <p onClick={() => setMinimumStay('1 month')} className={` duration-500 border-y border-e ${minimumStay === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 month</p>
                                <p onClick={() => setMinimumStay('2 month')} className={` duration-500 border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${minimumStay === '2 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 month</p>
                                <p onClick={() => setMinimumStay('3 month')} className={` duration-500 border border-t-0 lg:border-t ${minimumStay === '3 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>3 month</p>
                                <p onClick={() => setMinimumStay('6 month')} className={` duration-500 border border-s-0 border-t-0 lg:border-t ${minimumStay === '6 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>6 month</p>
                                <p onClick={() => setMinimumStay('9 month')} className={` duration-500 border  border-t-0  ${minimumStay === '9 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>9 month</p>
                                <p onClick={() => setMinimumStay('12+ month')} className={` duration-500 border border-s-0 border-t-0  ${minimumStay === '12+ month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>12+ month</p>
                            </div>}
                            {minimumStayOthers && <input onChange={e => setMinimumStayOthersValue(e.target.value)} placeholder="Others" type="text" name="" className="w-full hover:border-2 focus:border-2 focus:outline-none mt-4 py-3 px-4 border focus:bg-[#f3f2fd] border-[#7065F0] rounded-lg" />}
                            <p className="flex mt-4 items-center gap-1"><input onClick={() => setMinimumStayOthers(!minimumStayOthers)} type="radio" className="radio radio-primary" checked={minimumStayOthers ? true : false} />others</p>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Maximum Stay :</p>
                            {!maximumStayOthers && <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => setMaximumStay('1 week')} className={` duration-500 border ${maximumStay === '1 week' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 week</p>
                                <p onClick={() => setMaximumStay('2 week')} className={` duration-500 border-y border-e ${maximumStay === '2 week' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 week</p>
                                <p onClick={() => setMaximumStay('1 month')} className={` duration-500 border-y border-e ${maximumStay === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 month</p>
                                <p onClick={() => setMaximumStay('2 month')} className={` duration-500 border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${maximumStay === '2 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 month</p>
                                <p onClick={() => setMaximumStay('3 month')} className={` duration-500 border border-t-0 lg:border-t ${maximumStay === '3 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>3 month</p>
                                <p onClick={() => setMaximumStay('6 month')} className={` duration-500 border border-s-0 border-t-0 lg:border-t ${maximumStay === '6 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>6 month</p>
                                <p onClick={() => setMaximumStay('9 month')} className={` duration-500 border  border-t-0  ${maximumStay === '9 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>9 month</p>
                                <p onClick={() => setMaximumStay('12+ month')} className={` duration-500 border border-s-0 border-t-0  ${maximumStay === '12+ month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>12+ month</p>
                            </div>}
                            {maximumStayOthers && <input onChange={e => setmaximumStayOthersValue(e.target.value)} placeholder="Others" type="text" name="" className="w-full  hover:border-2 focus:border-2 focus:outline-none mt-4 py-3 px-4 border focus:bg-[#f6f5ff] border-[#7065F0] rounded-lg" />}
                            <p className="flex mt-4 items-center gap-1"><input onClick={() => setmaximumStayOthers(!maximumStayOthers)} type="radio" className="radio radio-primary" checked={maximumStayOthers ? true : false} />others</p>
                        </div>
                        <div >
                            <p className="text-[#7065F0] font-bold text-lg">Rent per Week:</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input placeholder="Singles" onChange={(e) => setRentPerweeksingle(e.target.value)} type="text" className="input   w-full " />
                                    </label>
                                </div>
                                <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input placeholder="Couples" onChange={(e) => setRentPerweekcouple(e.target.value)} type="text" className="input   w-full " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Bond:</p>
                            <div className="mt-4 grid grid-cols-3  text-center font-medium">
                                <p onClick={() => setBond('2 weeks')} className={` duration-500 border ${bond === '2 weeks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 weeks</p>
                                <p onClick={() => setBond('1 month')} className={` duration-500 border-y border-e ${bond === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 month</p>
                                <p onClick={() => setBond('No bond')} className={` duration-500 border-y border-e ${bond === 'No bond' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>No bond</p>

                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Bills Included in Rent:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setBillRent('yes')} className={`border  duration-500 ${billRent === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Yes</p>
                                <p onClick={() => setBillRent('no')} className={`border border-s-0 duration-500 
                            ${billRent == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>No</p>
                            </div>
                            {billRent == 'no' &&
                                <div>
                                    <p className="text-[#7065F0] font-bold mt-6 text-lg">approximate cost of bills per month:</p>
                                    <input onChange={(e) => setApproximatecost(e.target.value)} type="text" name="" className="w-full mt-4 py-3 px-4 border hover:border-2 focus:border-2 focus:bg-[#f7f6ff] border-[#7065F0] hover:outline-none  rounded-lg" />
                                </div>}

                        </div>

                    </div>

                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Room Features**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Bedroom Type:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setFurnished('Private Bedroom')} className={`border  duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Private Bedroom</p>
                                <p onClick={() => setFurnished('Shared Bedroom')} className={`border border-s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Private Bathroom:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setPrivateBath('yes')} className={`border  duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Yes</p>
                                <p onClick={() => setPrivateBath('no')} className={`border border-s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Bed Size:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setBedSize('single')} className={`border ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Single</p>
                                <p onClick={() => setBedSize('double')} className={`border-y border-e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Double</p>
                                <p onClick={() => setBedSize('queen')} className={`border-y border-e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Queen</p>
                                <p onClick={() => setBedSize('king')} className={`border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>King</p>
                                <p onClick={() => setBedSize('none')} className={`border border-t-0 lg:border-t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#7065F0] font-bold text-lg">Room Features :</p>
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
                            <p onClick={() => setAnimate('N/A')} className={`border lg:border-t-0 lg:border-s-0 col-span-2 lg:col-span-1 duration-500 ${animate === 'N/A' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>N/A</p>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Place friendliness:</p>
                            <div className="mt-4 grid grid-cols-2 text-center font-medium">
                                <p onClick={() => setPlaceFriendless('Pets')} className={`border border-b-0 duration-500 ${placeFriendless === 'Pets' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Pets</p>
                                <p onClick={() => setPlaceFriendless('Couples')} className={`border-t border-e duration-500 ${placeFriendless === 'Couples' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Couples</p>
                                <p onClick={() => setPlaceFriendless('Children')} className={`border-y border-s duration-500 ${placeFriendless === 'Children' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Children</p>
                                <p onClick={() => setPlaceFriendless('Visitors')} className={`border duration-500 ${placeFriendless === 'Visitors' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Visitors</p>
                                <p onClick={() => setPlaceFriendless('N/A')} className={`border border-t-0 col-span-2 duration-500 ${placeFriendless === 'N/A' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>N/A</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Local Amenities and Transport**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#7065F0] font-bold  text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setNearbyCommunitySpaces('Parks')} className={`duration-500 border ${nearbyCommunitySpaces === 'Parks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Parks</p>
                                <p onClick={() => setNearbyCommunitySpaces('Aquatic Centres')} className={`duration-500 border-t border-e lg:border-e-0 ${nearbyCommunitySpaces === 'Aquatic Centres' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Aquatic Centres</p>
                                <p onClick={() => setNearbyCommunitySpaces('Gyms')} className={`duration-500 border border-y-0 lg:border-t ${nearbyCommunitySpaces === 'Gyms' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Gyms</p>
                                <p onClick={() => setNearbyCommunitySpaces('Libraries')} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${nearbyCommunitySpaces === 'Libraries' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Libraries</p>
                                <p onClick={() => setNearbyCommunitySpaces('Community Centres')} className={`duration-500 border ${nearbyCommunitySpaces === 'Community Centres' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Community Centres</p>
                                <p onClick={() => setNearbyCommunitySpaces('Sports Facilities')} className={`duration-500 border border-s-0 ${nearbyCommunitySpaces === 'Sports Facilities' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Sports Facilities</p>
                                <p onClick={() => setNearbyCommunitySpaces('N/A')} className={`border border-t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces === 'N/A' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>N/A</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold  text-lg">Public Transport Access:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setPublicTransportAccess('Bus Stop')} className={`duration-500 border ${publicTransportAccess === 'Bus Stop' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bus Stop</p>
                                <p onClick={() => setPublicTransportAccess('Tram Station')} className={`duration-500 border-t border-e lg:border-e-0 ${publicTransportAccess === 'Tram Station' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Tram Station</p>
                                <p onClick={() => setPublicTransportAccess('Train Station')} className={`duration-500 border border-y-0 lg:border-t ${publicTransportAccess === 'Train Station' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Train Station</p>
                                <p onClick={() => setPublicTransportAccess('Ferry Terminal')} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${publicTransportAccess === 'Ferry Terminal' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Ferry Terminal</p>
                                <p onClick={() => setPublicTransportAccess('Bike Paths')} className={`duration-500 border ${publicTransportAccess === 'Bike Paths' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bike Paths</p>
                                <p onClick={() => setPublicTransportAccess('N/A')} className={`duration-500 border border-s-0 ${publicTransportAccess === 'N/A' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>N/A</p>
                            </div>


                        </div>
                    </div>
                    <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">**Preferences for Potential Tenant**</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Gender:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setGender('Any')} className={`border border-b-0 lg:border-b duration-500 ${gender === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => setGender('Male')} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${gender === 'Male' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Male</p>
                                <p onClick={() => setGender('Female')} className={`border-y border-s duration-500 ${gender === 'Female' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Female</p>
                                <p onClick={() => setGender('LGBTIQA+')} className={`border duration-500 ${gender === 'LGBTIQA+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>LGBTIQA+</p>
                                <p onClick={() => setGender('Unspecified')} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${gender === 'Unspecified' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">Age Range:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => setAge('Any')} className={` duration-500 border ${age === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => setAge('18 - 25')} className={` duration-500 border-y border-e ${age === '18 - 25' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>18 - 25</p>
                                <p onClick={() => setAge('26-35')} className={` duration-500 border-y border-e ${age === '26-35' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>26-35</p>
                                <p onClick={() => setAge('36-45')} className={` duration-500 border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${age === '36-45' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>36-45</p>
                                <p onClick={() => setAge('46-60')} className={` duration-500 border border-t-0 lg:border-t ${age === '46-60' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>46-60</p>
                                <p onClick={() => setAge('61+')} className={` duration-500 border border-s-0 border-t-0 lg:border-t ${age === '61+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>61+</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#7065F0] font-bold text-lg">IDs & Checks</p>
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
                            <p className="text-[#7065F0] font-bold  text-lg">Occupation Preference:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => setOccuption('Any')} className={` duration-500 border ${occuption === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => setOccuption('Student')} className={` duration-500 border-t border-e lg:border-e-0 ${occuption === 'Student' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Student</p>
                                <p onClick={() => setOccuption('Professional')} className={` duration-500 border border-y-0 lg:border-t ${occuption === 'Professional' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Professional</p>
                                <p onClick={() => setOccuption('Backpackers')} className={` duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b  ${occuption === 'Backpackers' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Backpackers</p>
                                <p onClick={() => setOccuption('On welfare')} className={` duration-500 border  ${occuption === 'On welfare' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>On welfare</p>
                                <p onClick={() => setOccuption('Retired')} className={` duration-500 border border-s-0  ${occuption === 'Retired' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Retired</p>
                                <p onClick={() => setOccuption('Joob Seeker')} className={` duration-500 border border-t-0 col-span-2 lg:col-span-3  ${occuption === 'Joob Seeker' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Joob Seeker</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-7">
                    <button disabled={load} className='btn w-full  hover:bg-[#4e46a1] bg-[#7065F0] text-white '>{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} submit all Information</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default HomeWoner;