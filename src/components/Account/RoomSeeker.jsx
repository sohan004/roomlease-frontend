import { useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "./RoomFurnishingAndFeture";
import { FaArrowRight, FaSpinner, FaTimes } from "react-icons/fa";
import arow from '../../assets/newlistingIcon/Icon.svg'
import homeIcon from '../../assets/newlistingIcon/homeIcon.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../App";
import { GoogleMap, LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const RoomSeeker = () => {

    const { userData, listing } = useContext(AuthContext)

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
    const [animate, setAnimate] = useState([])
    const [placeFriendless, setPlaceFriendless] = useState([])
    const [nearbyCommunitySpaces, setNearbyCommunitySpaces] = useState([])
    const [publicTransportAccess, setPublicTransportAccess] = useState([])
    const [gender, setGender] = useState([])
    const [age, setAge] = useState('')
    const [checks, setChecks] = useState([])
    const [occuption, setOccuption] = useState([])
    const [lookingForPlace, setLookingForPlace] = useState('')
    const [suburbValue, setSuburbValue] = useState([])
    const [weeklybudget, setWeeklybudget] = useState('')

    const [url, setUrl] = useState('/listing/room-seekers/')
    const [apiMethod, setApiMethod] = useState('POST')







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
    const aminetAddFunction = (p) => {
        if (p == 'None') {
            setAnimate(['None'])
            return
        }
        const filter = animate.filter(filt => filt != 'None')
        const findData = animate.find(r => r == p)
        if (findData) {
            const filterData = animate.filter(filt => filt != p && filt != 'None')
            setAnimate(filterData)
            return
        }
        setAnimate([...filter, p])
    }

    const occuptionFunction = (p) => {
        if (p == 'N/A') {
            setOccuption(['N/A'])
            return
        }
        const filter = occuption.filter(filt => filt != 'N/A')
        const findData = occuption.find(r => r == p)
        if (findData) {
            const filterData = occuption.filter(filt => filt != p && filt != 'N/A')
            setOccuption(filterData)
            return
        }
        setOccuption([...filter, p])
    }

    const genderFunction = (p) => {
        if (p == 'Any') {
            setGender(['Any'])
            return
        }
        const filter = gender.filter(filt => filt != 'Any')
        const findData = gender.find(r => r == p)
        if (findData) {
            const filterData = gender.filter(filt => filt != p && filt != 'Any')
            setGender(filterData)
            return
        }
        setGender([...filter, p])
    }

    const nearbyAddFunction = (p) => {
        if (p == 'None') {
            setNearbyCommunitySpaces(['None'])
            return
        }
        const filter = nearbyCommunitySpaces.filter(filt => filt != 'None')
        const findData = nearbyCommunitySpaces.find(r => r == p)
        if (findData) {
            const filterData = nearbyCommunitySpaces.filter(filt => filt != p && filt != 'None')
            setNearbyCommunitySpaces(filterData)
            return
        }
        setNearbyCommunitySpaces([...filter, p])
    }

    const placeFriendFunction = (p) => {
        if (p == 'None') {
            setPlaceFriendless(['None'])
            return
        }
        const filter = placeFriendless.filter(filt => filt != 'None')
        const findData = placeFriendless.find(r => r == p)
        if (findData) {
            const filterData = placeFriendless.filter(filt => filt != p && filt != 'None')
            setPlaceFriendless(filterData)
            return
        }
        setPlaceFriendless([...filter, p])
    }

    const publicAddFunction = (p) => {
        if (p == 'None') {
            setPublicTransportAccess(['None'])
            return
        }
        const filter = publicTransportAccess.filter(filt => filt != 'None')
        const findData = publicTransportAccess.find(r => r == p)
        if (findData) {
            const filterData = publicTransportAccess.filter(filt => filt != p && filt != 'None')
            setPublicTransportAccess(filterData)
            return
        }
        setPublicTransportAccess([...filter, p])
    }
    const navigate = useNavigate()
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


    const handle = (e) => {
        e.preventDefault();

        if (!listing) {
            if (firstName === '' || secondName === '' || email === '' || lookingForPlace === '') {
                return
            }
        }


        const allInfo = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            looking_place: lookingForPlace,
            suburb: suburbValue,
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
            "weekly_budget" : weeklybudget,
            "ids_and_checks": checks,
            "occupation": occuption,
            "user": userData?.user_id,

        }
        setLoad(true)
        fetch(`${baseURL}${url}`, { // <--
            method: apiMethod,
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
            , body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.id) {
                    setLoad(false)
                    window.location.href = `/profile`
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

    const [sta, setSta] = useState(false)

    const [addresEmpty, setAddresEmpty] = useState('')

    const onchengeFunction = () => {
        if (sta) {
            return
        }

        if (firstName === '' || secondName === '' || email === '' || lookingForPlace === '') {
            return
        }

        const allInfo = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            looking_place: lookingForPlace,
            suburb: suburbValue,
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
            "weekly_budget" : weeklybudget,
            "ids_and_checks": checks,
            "occupation": occuption,
            "user": userData?.user_id,

        }

        fetch(`${baseURL}${url}`, { // <--
            method: apiMethod, // <-- 
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
            , body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.id) {
                    setSta(false)
                    setLoad(false)
                    // window.location.href = `/homeowner-pricing`
                   
                }
                else {
                    console.log(data);
                    // setLoad(false)
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
            .catch((err) => {
                // setLoad(false)
                console.log(err);
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
        setSta(true)
    }

    return (
        <div className="max-w-[736px]  mx-auto px-4 ">
            {!listing && <div>
                <h1 className="text-center text-3xl font-bold mt-8 mb-4">Add New Listing</h1>
                <p className="text-center opacity-80 pb-8 mb-8 border-b">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>
            </div>}
            <form onSubmit={handle}>
                <div className="p-4 border-2 lg:p-6  rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">

                        <div>
                            <input onChange={(e) => { setFirstName(e.target.value); }} placeholder="First Name" type="text" name="" className="w-full py-3 rounded-md px-4 border hover:border-2 focus:border-2 focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  bg-white  rounded-lg" />
                        </div>
                        <div>
                            <input onChange={(e) => { setSecondName(e.target.value); }} placeholder="Last Name" type="text" name="" className="w-full py-3 rounded-md px-4 hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]   bg-white rounded-lg" />
                        </div>
                        <div className="col-span-1 lg:col-span-2 ">
                            <input onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" type="email" name="" className="w-full py-3 rounded-md px-4 hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  bg-white  rounded-lg" />
                        </div>
                    </div>
                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Preferences</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">I am looking for a place:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => { setLookingForPlace('For Myself'); onchengeFunction() }} className={`border  duration-500 ${lookingForPlace === 'For Myself' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>For Myself</p>
                                <p onClick={() => { setLookingForPlace('As a couple'); onchengeFunction() }} className={`border border-s-0 duration-500 
                            ${lookingForPlace == 'As a couple' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>As a couple</p>
                            </div>
                        </div>
                        <div className="">
                            <p className=" text-[#100A55] font-bold text-lg">Suburb: </p>
                            <div className="w-full mt-4 border border-[#7065F0] rounded-lg">
                                <Autocomplete

                                    className="w-full  rounded-lg rounded-b-none border-b mb-4  focus:outline-none py-3 rounded-md px-5   bg-[#f6f6ff] "
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
                                            onchengeFunction()
                                            setAddresEmpty('')
                                        }
                                    }}
                                />

                                <div className="p-2  flex flex-wrap gap-3 py-5 w-full ">
                                    {suburbValue.map((sub, i) => {
                                        return <p className="bg-slate-200 flex items-center gap-1" key={i}>{sub} <FaTimes onClick={() => { setSuburbValue(suburbValue.filter((_, index) => index !== i)); onchengeFunction() }} className=' text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer text-xs lg:text-base'></FaTimes></p>

                                    })}
                                </div>
                                {/* <input onChange={e => setHomeAddress(e.target.value)} placeholder="Home Address: " type="text" name="" className="w-full mt-4 hover:border-2 focus:border-2 py-3 rounded-md px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg" /> */}

                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 text-center font-medium">
                                <p onClick={() => { setHouseType('House'); onchengeFunction() }} className={`font-bold text-[#7065F0] border border-b-0 lg:border-b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 rounded-md cursor-pointer text-xs lg:text-base`}>House</p>
                                <p onClick={() => { setHouseType('Unit'); onchengeFunction() }} className={`font-bold text-[#7065F0] border-t border-e lg:border-e-0 lg:border-y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Unit</p>
                                <p onClick={() => { setHouseType('Apartment'); onchengeFunction() }} className={`font-bold text-[#7065F0] border-y border-s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Apartment</p>
                                <p onClick={() => { setHouseType('Townhouse'); onchengeFunction() }} className={`font-bold text-[#7065F0] border duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Townhouse</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Room Type:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => { setFurnished('Private Bedroom'); onchengeFunction() }} className={`border  duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Private Bedroom</p>
                                <p onClick={() => { setFurnished('Shared Bedroom'); onchengeFunction() }} className={`border border-s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Private Bathroom:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => { setPrivateBath('yes'); onchengeFunction() }} className={`border  duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Yes</p>
                                <p onClick={() => { setPrivateBath('no'); onchengeFunction() }} className={`border border-s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bed Size:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => { setBedSize('single'); onchengeFunction() }} className={`border ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Single</p>
                                <p onClick={() => { setBedSize('double'); onchengeFunction() }} className={`border-y border-e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Double</p>
                                <p onClick={() => { setBedSize('queen'); onchengeFunction() }} className={`border-y border-e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Queen</p>
                                <p onClick={() => { setBedSize('king'); onchengeFunction() }} className={`border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>King</p>
                                <p onClick={() => { setBedSize('none'); onchengeFunction() }} className={`border border-t-0 lg:border-t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#100A55] font-bold text-lg">Room Features :</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                            onchengeFunction={onchengeFunction}
                        ></RoomFurnishingAndFeture>
                    </div>
                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Amenities </p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-center font-medium">
                            <p onClick={() => { aminetAddFunction('Outdoor Area'); onchengeFunction() }} className={`border border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Outdoor Area') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white   border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100 '}  border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Outdoor Area</p>
                            <p onClick={() => { aminetAddFunction('Kitchen'); onchengeFunction() }} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${animate.find(a => a == 'Kitchen') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>Kitchen</p>
                            <p onClick={() => { aminetAddFunction('TV'); onchengeFunction() }} className={`border-y border-s duration-500 ${animate.find(a => a == 'TV') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>TV</p>
                            <p onClick={() => { aminetAddFunction('Laundry'); onchengeFunction() }} className={`border duration-500 ${animate.find(a => a == 'Laundry') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Laundry</p>
                            <p onClick={() => { aminetAddFunction('BBQ'); onchengeFunction() }} className={`border border-s border-y-0 lg:border-y lg:border-s-0 duration-500 ${animate.find(a => a == 'BBQ') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>BBQ</p>
                            <p onClick={() => { aminetAddFunction('Pool'); onchengeFunction() }} className={`border border-t-0 border-s-0 lg:border-s duration-500 ${animate.find(a => a == 'Pool') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Pool</p>
                            <p onClick={() => { aminetAddFunction('Spa'); onchengeFunction() }} className={`border lg:border-t-0 lg:border-s-0 border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Spa') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Spa</p>
                            <p onClick={() => { aminetAddFunction('Sauna'); onchengeFunction() }} className={`border border-t-0 border-s-0 border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Sauna') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Sauna</p>
                            <p onClick={() => { aminetAddFunction('None'); onchengeFunction() }} className={`border lg:border-t-0 lg:border-s-0 col-span-2 lg:col-span-1 duration-500 ${animate.find(a => a == 'None') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>None</p>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Place friendliness:</p>
                            <div className="mt-4 grid grid-cols-2 text-center font-medium">
                                <p onClick={() => { placeFriendFunction('Pets'); onchengeFunction() }} className={`border border-b-0 duration-500 ${placeFriendless.find(p => p == 'Pets') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Pets</p>
                                <p onClick={() => { placeFriendFunction('Couples'); onchengeFunction() }} className={`border-t border-e duration-500 ${placeFriendless.find(p => p == 'Couples') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>Couples</p>
                                <p onClick={() => { placeFriendFunction('Children'); onchengeFunction() }} className={`border-y border-s duration-500 ${placeFriendless.find(p => p == 'Children') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Children</p>
                                <p onClick={() => { placeFriendFunction('Visitors'); onchengeFunction() }} className={`border duration-500 ${placeFriendless.find(p => p == 'Visitors') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Visitors</p>
                                <p onClick={() => { placeFriendFunction('None'); onchengeFunction() }} className={`border border-t-0 col-span-2 duration-500 ${placeFriendless.find(p => p == 'None') ? ' border border-[#bab7e4]  hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>None</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold mt-6  text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { nearbyAddFunction('Parks'); onchengeFunction() }} className={`duration-500 border ${nearbyCommunitySpaces.find(n => n == 'Parks') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Parks</p>
                                <p onClick={() => { nearbyAddFunction('Aquatic Centres'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${nearbyCommunitySpaces.find(n => n == 'Aquatic Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Aquatic Centres</p>
                                <p onClick={() => { nearbyAddFunction('Gyms'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${nearbyCommunitySpaces.find(n => n == 'Gyms') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Gyms</p>
                                <p onClick={() => { nearbyAddFunction('Libraries'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${nearbyCommunitySpaces.find(n => n == 'Libraries') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Libraries</p>
                                <p onClick={() => { nearbyAddFunction('Community Centres'); onchengeFunction() }} className={`duration-500 border ${nearbyCommunitySpaces.find(n => n == 'Community Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Community Centres</p>
                                <p onClick={() => { nearbyAddFunction('Sports Facilities'); onchengeFunction() }} className={`duration-500 border border-s-0 ${nearbyCommunitySpaces.find(n => n == 'Sports Facilities') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Sports Facilities</p>
                                <p onClick={() => { nearbyAddFunction('None'); onchengeFunction() }} className={`border border-t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces.find(n => n == 'None') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>None</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Public Transport Access:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { publicAddFunction('Bus Stop'); onchengeFunction() }} className={`duration-500 border ${publicTransportAccess.find(p => p == 'Bus Stop') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Bus Stop</p>
                                <p onClick={() => { publicAddFunction('Tram Station'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${publicTransportAccess.find(p => p == 'Tram Station') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Tram Station</p>
                                <p onClick={() => { publicAddFunction('Train Station'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${publicTransportAccess.find(p => p == 'Train Station') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Train Station</p>
                                <p onClick={() => { publicAddFunction('Ferry Terminal'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${publicTransportAccess.find(p => p == 'Ferry Terminal') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Ferry Terminal</p>
                                <p onClick={() => { publicAddFunction('Bike Paths'); onchengeFunction() }} className={`duration-500 border ${publicTransportAccess.find(p => p == 'Bike Paths') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Bike Paths</p>
                                <p onClick={() => { publicAddFunction('None'); onchengeFunction() }} className={`duration-500 border border-s-0 ${publicTransportAccess.find(p => p == 'None') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>None</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Personal Details</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Gender:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => { genderFunction('Any'); onchengeFunction() }} className={`border border-b-0 lg:border-b duration-500 ${gender.find(g => g == 'Any') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { genderFunction('Male'); onchengeFunction() }} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${gender.find(g => g == 'Male') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base `}>Male</p>
                                <p onClick={() => { genderFunction('Female'); onchengeFunction() }} className={`border-y border-s duration-500 ${gender.find(g => g == 'Female') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Female</p>
                                <p onClick={() => { genderFunction('LGBTIQA+'); onchengeFunction() }} className={`border duration-500 ${gender.find(g => g == 'LGBTIQA+') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>LGBTIQA+</p>
                                <p onClick={() => { genderFunction('Unspecified'); onchengeFunction() }} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${gender.find(g => g == 'Unspecified') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Weekly Budget:</p>
                            <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input placeholder="weekly_budget" onChange={(e) => { setWeeklybudget(e.target.value); onchengeFunction() }} type="text" className="input bg-white  w-full " />
                                    </label>
                                </div>

                        </div>
                        <div>

                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => { setAge('Any'); onchengeFunction() }} className={`border ${age === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { setAge('18 - 25'); onchengeFunction() }} className={`border-y border-e ${age === '18 - 25' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>18 - 25</p>
                                <p onClick={() => { setAge('26 - 35'); onchengeFunction() }} className={`border-y border-e ${age === '26 - 35' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>26 - 35</p>
                                <p onClick={() => { setAge('36 - 45'); onchengeFunction() }} className={`border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${age === '36 - 45' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>36 - 45</p>
                                <p onClick={() => { setAge('46 - 60'); onchengeFunction() }} className={`border border-t-0 lg:border-t ${age === '46 - 60' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>46 - 60</p>
                                <p onClick={() => { setAge('61+'); onchengeFunction() }} className={`border border-s-0 border-t-0 lg:border-t ${age === '61+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>61+</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">IDs & Checks</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { addFunction('Any'); onchengeFunction() }} className={`duration-500 border ${check1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { addFunction('Digital ID Verification'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${check2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Digital ID Verification</p>
                                <p onClick={() => { addFunction('Student ID'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${check3 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Student ID</p>
                                <p onClick={() => { addFunction('Passport'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${check4 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Passport</p>
                                <p onClick={() => { addFunction('Medicare'); onchengeFunction() }} className={`duration-500 border ${check5 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Medicare</p>
                                <p onClick={() => { addFunction(`Driver's License`); onchengeFunction() }} className={`duration-500 border border-s-0 ${check6 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Driver's License</p>
                                <p onClick={() => { addFunction('Bank Statement'); onchengeFunction() }} className={`duration-500 border border-t-0  lg:border-e-0 border-b-0 lg:border-b ${check7 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Bank Statement</p>
                                <p onClick={() => { addFunction('Government Issued ID'); onchengeFunction() }} className={`duration-500 border-t-0 border-s-0 lg:border-s border ${check8 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Government Issued ID</p>
                                <p onClick={() => { addFunction('National Police Check'); onchengeFunction() }} className={`duration-500 border-t lg:border-t-0 border border-s lg:border-s-0 ${check9 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>National Police Check</p>
                                <p onClick={() => { addFunction('Working with Children Check'); onchengeFunction() }} className={`duration-500 border border-t-0 border-s-0 lg:border-s lg:border-e-0  ${check10 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Working with Children Check</p>
                                <p onClick={() => { addFunction('Income Proof'); onchengeFunction() }} className={`duration-500 border-t-0 border ${check11 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Income Proof</p>
                                <p onClick={() => { addFunction('References'); onchengeFunction() }} className={`duration-500 border-t-0 border border-s-0 ${check12 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>References</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Occupation Preference:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { occuptionFunction('Any'); onchengeFunction() }} className={` duration-500 border ${occuption.find(o => o == 'Any') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { occuptionFunction('Student'); onchengeFunction() }} className={` duration-500 border-t border-e lg:border-e-0 ${occuption.find(o => o == 'Student') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Student</p>
                                <p onClick={() => { occuptionFunction('Professional'); onchengeFunction() }} className={` duration-500 border border-y-0 lg:border-t ${occuption.find(o => o == 'Professional') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Professional</p>
                                <p onClick={() => { occuptionFunction('Backpackers'); onchengeFunction() }} className={` duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b  ${occuption.find(o => o == 'Backpackers') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Backpackers</p>
                                <p onClick={() => { occuptionFunction('On welfare'); onchengeFunction() }} className={` duration-500 border  ${occuption.find(o => o == 'On welfare') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>On welfare</p>
                                <p onClick={() => { occuptionFunction('Retired'); onchengeFunction() }} className={` duration-500 border border-s-0  ${occuption.find(o => o == 'Retired') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Retired</p>
                                <p onClick={() => { occuptionFunction('Job Seeker'); onchengeFunction() }} className={` duration-500 border border-t-0 col-span-2 lg:col-span-3  ${occuption.find(o => o == 'Job Seeker') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 rounded-md cursor-pointer text-xs lg:text-base`}>Job Seeker</p>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="text-center mt-7">
                    <button disabled={load} className='btn w-full border-0  hover:bg-[#4e46a1] bg-[#7065F0] text-white '>{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} submit all Information</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RoomSeeker