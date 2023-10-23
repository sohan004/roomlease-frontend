import { useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "../Account/RoomFurnishingAndFeture";
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
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ListingRoomSeekerUpdate = ({ setRoomEdit }) => {

    const { listing, setRefresh, refresh } = useContext(AuthContext)




    // all from data
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [houseType, setHouseType] = useState(listing?.house_type ? listing?.house_type : '')
    const [homeAddress, setHomeAddress] = useState('')
    const [parkingOptions, setParkingOptions] = useState('')
    const [furnished, setFurnished] = useState(listing?.room_type ? listing?.room_type : '')
    const [privateBath, setPrivateBath] = useState(listing?.private_bathroom ? listing?.private_bathroom : '')
    const [selectedOption, setSelectedOption] = useState(null);
    const [bedSize, setBedSize] = useState(listing?.bed_size ? listing?.bed_size : 'Single')
    const [roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures] = useState(listing?.room_features ? listing?.room_features : [])
    const [animate, setAnimate] = useState(listing?.amenities ? listing?.amenities : [])
    const [placeFriendless, setPlaceFriendless] = useState(listing?.place_friendliness ? listing?.place_friendliness : [])
    const [nearbyCommunitySpaces, setNearbyCommunitySpaces] = useState(listing?.nearby_community_spaces ? listing?.nearby_community_spaces : [])
    const [publicTransportAccess, setPublicTransportAccess] = useState(listing?.public_transport_access ? listing?.public_transport_access : [])
    const [gender, setGender] = useState(listing?.gender ? listing?.gender : [])
    const [age, setAge] = useState(listing?.age ? listing?.age : '')
    const [checks, setChecks] = useState(listing?.ids_and_checks ? listing?.ids_and_checks : [])
    const [occuption, setOccuption] = useState(listing?.occupation ? listing?.occupation : [])
    const [lookingForPlace, setLookingForPlace] = useState(listing?.looking_place ? listing?.looking_place : '')
    const [suburbValue, setSuburbValue] = useState(listing?.suburb ? listing?.suburb : [])
    const [weeklybudget, setWeeklybudget] = useState(listing?.weekly_budget ? listing?.weekly_budget : '')






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
    const navigate = useNavigate()
    // console.log(listing.ids_and_checks)


    const handle = (e) => {
        e.preventDefault();



        const listingObject = listing

        const photoKey = listingObject['photo']
        if (photoKey) {
            delete listingObject['photo']
        }


        listingObject.suburb = suburbValue
        listingObject.house_type = houseType
        listingObject.room_type = furnished
        listingObject.private_bathroom = privateBath
        listingObject.bed_size = bedSize
        listingObject.room_features = roomFurnishingsAndFeatures
        listingObject.amenities = animate
        listingObject.place_friendliness = placeFriendless
        listingObject.nearby_community_spaces = nearbyCommunitySpaces
        listingObject.public_transport_access = publicTransportAccess
        listingObject.gender = gender
        listingObject.age = age
        listingObject.weekly_budget = weeklybudget
        listingObject.ids_and_checks = checks
        listingObject.occupation = occuption
        listingObject.looking_place = lookingForPlace



        const allInfo = {
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
            "ids_and_checks": checks,
            "occupation": occuption,
            "user": localStorage.getItem('user-token'),

        }
        // setLoad(true)
        fetch(`${baseURL}/listing/room-seekers/${listing?.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
            , body: JSON.stringify(listingObject)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(refresh + 1)
                setRoomEdit(false)
            })
            .catch((err) => {
                console.log(err)
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

    const [subEpty, setSubEpty] = useState('')


    return (
        <div className="max-w-[736px]  mx-auto  ">
            <h1 className="text-center text-3xl font-bold mt-8 mb-4">Update your listing</h1>
            <p className="text-center opacity-80 pb-8 mb-8 border-b">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>
            <form onSubmit={handle}>
                <div className="p-4 border-2 lg:p-6 bg-white lg:px-14  rounded-lg">
                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Preferences</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">I am looking for a place:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium gap-2">
                                <p onClick={() => setLookingForPlace('For Myself')} className={`border-[#7065f0] rounded-md border   duration-500 ${lookingForPlace === 'For Myself' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>For Myself</p>
                                <p onClick={() => setLookingForPlace('As a couple')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 
                            ${lookingForPlace == 'As a couple' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>As a couple</p>
                            </div>
                        </div>
                        <div className="">
                            <p className=" text-[#100A55] font-bold text-lg">Suburb: </p>
                            <div className="w-full mt-4 border border-[#7065F0] rounded-lg">
                                <Autocomplete
                                    value={subEpty}
                                    onChange={(e) => setSubEpty(e.target.value)}

                                    className="w-full  rounded-lg rounded-b-none border-b mb-4  focus:outline-none py-3 px-5   bg-[#f6f6ff] "
                                    apiKey={import.meta.env.VITE_googleApiKey}

                                    options={{
                                        componentRestrictions: { country: "au" },
                                    }}
                                    onPlaceSelected={(place) => {
                                        if (place.formatted_address) {
                                            // console.log(place.formatted_address);
                                            const address = place.formatted_address
                                            setSuburbValue(prevSuburbValue => [...prevSuburbValue, address]);
                                            setSubEpty('')
                                        }
                                    }}
                                />

                                <div className="p-2  flex flex-wrap gap-3 py-5 w-full ">
                                    {suburbValue.map((sub, i) => {
                                        return <p className="bg-slate-200 flex items-center gap-1" key={i}>{sub} <FaTimes onClick={() => setSuburbValue(suburbValue.filter((_, index) => index !== i))} className=' text-2xl text-white bg-[#7065F0] rounded-full p-1 cursor-pointer text-xs lg:text-base'></FaTimes></p>

                                    })}
                                </div>
                                {/* <input onChange={e => setHomeAddress(e.target.value)} placeholder="Home Address: " type="text" name="" className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg" /> */}

                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 text-center font-medium gap-2">
                                <p onClick={() => setHouseType('House')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>House</p>
                                <p onClick={() => setHouseType('Unit')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Unit</p>
                                <p onClick={() => setHouseType('Apartment')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Apartment</p>
                                <p onClick={() => setHouseType('Townhouse')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border  duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Townhouse</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Room Type:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium gap-2">
                                <p onClick={() => setFurnished('Private Bedroom')} className={`border-[#7065f0] rounded-md border   duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Private Bedroom</p>
                                <p onClick={() => setFurnished('Shared Bedroom')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Private Bathroom:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium gap-2">
                                <p onClick={() => setPrivateBath('yes')} className={`border-[#7065f0] rounded-md border   duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Yes</p>
                                <p onClick={() => setPrivateBath('no')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bed Size:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium gap-2">
                                <p onClick={() => setBedSize('single')} className={`border-[#7065f0] rounded-md border  ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Single</p>
                                <p onClick={() => setBedSize('double')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Double</p>
                                <p onClick={() => setBedSize('queen')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Queen</p>
                                <p onClick={() => setBedSize('king')} className={`border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>King</p>
                                <p onClick={() => setBedSize('none')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#100A55] font-bold text-lg">Room Features Preference :</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                        ></RoomFurnishingAndFeture>
                    </div>
                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Amenities </p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-center font-medium gap-2">
                            <p onClick={() => aminetAddFunction('Outdoor Area')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${animate.find(a => a == 'Outdoor Area') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white   border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100 '}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Outdoor Area</p>
                            <p onClick={() => aminetAddFunction('Kitchen')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${animate.find(a => a == 'Kitchen') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Kitchen</p>
                            <p onClick={() => aminetAddFunction('TV')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${animate.find(a => a == 'TV') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>TV</p>
                            <p onClick={() => aminetAddFunction('Laundry')} className={`border-[#7065f0] rounded-md border  duration-500 ${animate.find(a => a == 'Laundry') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Laundry</p>
                            <p onClick={() => aminetAddFunction('BBQ')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -y lg:border-[#7065f0] rounded-md border -s-0 duration-500 ${animate.find(a => a == 'BBQ') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>BBQ</p>
                            <p onClick={() => aminetAddFunction('Pool')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s duration-500 ${animate.find(a => a == 'Pool') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Pool</p>
                            <p onClick={() => aminetAddFunction('Spa')} className={`border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${animate.find(a => a == 'Spa') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Spa</p>
                            <p onClick={() => aminetAddFunction('Sauna')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${animate.find(a => a == 'Sauna') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Sauna</p>
                            <p onClick={() => aminetAddFunction('None')} className={`border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -s-0 col-span-2 lg:col-span-1 duration-500 ${animate.find(a => a == 'None') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>None</p>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Place friendliness:</p>
                            <div className="mt-4 grid grid-cols-2 text-center font-medium gap-2">
                                <p onClick={() => placeFriendFunction('Pets')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 duration-500 ${placeFriendless.find(p => p == 'Pets') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Pets</p>
                                <p onClick={() => placeFriendFunction('Couples')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e duration-500 ${placeFriendless.find(p => p == 'Couples') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Couples</p>
                                <p onClick={() => placeFriendFunction('Children')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${placeFriendless.find(p => p == 'Children') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Children</p>
                                <p onClick={() => placeFriendFunction('Visitors')} className={`border-[#7065f0] rounded-md border  duration-500 ${placeFriendless.find(p => p == 'Visitors') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Visitors</p>
                                <p onClick={() => placeFriendFunction('None')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 col-span-2 duration-500 ${placeFriendless.find(p => p == 'None') ? ' border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]  hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>None</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold mt-6 text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium gap-2">
                                <p onClick={() => nearbyAddFunction('Parks')} className={`duration-500 border-[#7065f0] rounded-md border  ${nearbyCommunitySpaces.find(n => n == 'Parks') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Parks</p>
                                <p onClick={() => nearbyAddFunction('Aquatic Centres')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${nearbyCommunitySpaces.find(n => n == 'Aquatic Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Aquatic Centres</p>
                                <p onClick={() => nearbyAddFunction('Gyms')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${nearbyCommunitySpaces.find(n => n == 'Gyms') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Gyms</p>
                                <p onClick={() => nearbyAddFunction('Libraries')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${nearbyCommunitySpaces.find(n => n == 'Libraries') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Libraries</p>
                                <p onClick={() => nearbyAddFunction('Community Centres')} className={`duration-500 border-[#7065f0] rounded-md border  ${nearbyCommunitySpaces.find(n => n == 'Community Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Community Centres</p>
                                <p onClick={() => nearbyAddFunction('Sports Facilities')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${nearbyCommunitySpaces.find(n => n == 'Sports Facilities') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Sports Facilities</p>
                                <p onClick={() => nearbyAddFunction('None')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces.find(n => n == 'None') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>None</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Public Transport Access:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium gap-2">
                                <p onClick={() => publicAddFunction('Bus Stop')} className={`duration-500 border-[#7065f0] rounded-md border  ${publicTransportAccess.find(p => p == 'Bus Stop') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bus Stop</p>
                                <p onClick={() => publicAddFunction('Tram Station')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${publicTransportAccess.find(p => p == 'Tram Station') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Tram Station</p>
                                <p onClick={() => publicAddFunction('Train Station')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${publicTransportAccess.find(p => p == 'Train Station') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Train Station</p>
                                <p onClick={() => publicAddFunction('Ferry Terminal')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${publicTransportAccess.find(p => p == 'Ferry Terminal') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Ferry Terminal</p>
                                <p onClick={() => publicAddFunction('Bike Paths')} className={`duration-500 border-[#7065f0] rounded-md border  ${publicTransportAccess.find(p => p == 'Bike Paths') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bike Paths</p>
                                <p onClick={() => publicAddFunction('None')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${publicTransportAccess.find(p => p == 'None') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>None</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-lg lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Personal Details</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Gender:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium gap-2">
                                <p onClick={() => genderFunction('Any')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${gender.find(g => g == 'Any') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => genderFunction('Male')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${gender.find(g => g == 'Male') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Male</p>
                                <p onClick={() => genderFunction('Female')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${gender.find(g => g == 'Female') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Female</p>
                                <p onClick={() => genderFunction('LGBTIQA+')} className={`border-[#7065f0] rounded-md border  duration-500 ${gender.find(g => g == 'LGBTIQA+') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>LGBTIQA+</p>
                                <p onClick={() => genderFunction('Unspecified')} className={`duration-500 col-span-2 lg:col-span-1 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -s-0  ${gender.find(g => g == 'Unspecified') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Weekly Budget:</p>
                            <div className="form-control mt-4 border-[#7065f0] rounded-md border -[#7065F0] border-[#7065f0] rounded-md border  hover:border-[#7065f0] rounded-md border -2 focus:border-[#7065f0] rounded-md border -2 rounded-lg">
                                <label className="input-group">
                                    <span className="bg-white border-e border-[#7065f0] rounded-md border-[#7065F0] ">$</span>
                                    <input placeholder="200" value={weeklybudget} onChange={(e) => { setWeeklybudget(e.target.value);  }} type="number" className="input bg-white  w-full " />
                                </label>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Age Range:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium gap-2">
                                <p onClick={() => { setAge('Any'); }} className={`border-[#7065f0] rounded-md border  ${age === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { setAge('18 - 25'); }} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${age === '18 - 25' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>18 - 25</p>
                                <p onClick={() => { setAge('26 - 35'); }} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${age === '26 - 35' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>26 - 35</p>
                                <p onClick={() => { setAge('36 - 45'); }} className={`border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -y  ${age === '36 - 45' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>36 - 45</p>
                                <p onClick={() => { setAge('46 - 60'); }} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t ${age === '46 - 60' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>46 - 60</p>
                                <p onClick={() => { setAge('61+'); }} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t ${age === '61+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>61+</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">IDs & Checks Preference</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium gap-2">
                                <p onClick={() => addFunction('Any')} className={`duration-500 border-[#7065f0] rounded-md border  ${check1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => addFunction('Digital ID Verification')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${check2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Digital ID Verification</p>
                                <p onClick={() => addFunction('Student ID')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${check3 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Student ID</p>
                                <p onClick={() => addFunction('Passport')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${check4 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Passport</p>
                                <p onClick={() => addFunction('Medicare')} className={`duration-500 border-[#7065f0] rounded-md border  ${check5 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Medicare</p>
                                <p onClick={() => addFunction(`Driver's License`)} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${check6 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Driver's License</p>
                                <p onClick={() => addFunction('Bank Statement')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0  lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${check7 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bank Statement</p>
                                <p onClick={() => addFunction('Government Issued ID')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s border-[#7065f0] rounded-md border  ${check8 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Government Issued ID</p>
                                <p onClick={() => addFunction('National Police Check')} className={`duration-500 border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -s-0 ${check9 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>National Police Check</p>
                                <p onClick={() => addFunction('Working with Children Check')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0  ${check10 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Working with Children Check</p>
                                <p onClick={() => addFunction('Income Proof')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  ${check11 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Income Proof</p>
                                <p onClick={() => addFunction('References')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${check12 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>References</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Occupation Preference:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium gap-2">
                                <p onClick={() => occuptionFunction('Any')} className={` duration-500 border-[#7065f0] rounded-md border  ${occuption.find(o => o == 'Any') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => occuptionFunction('Student')} className={` duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${occuption.find(o => o == 'Student') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Student</p>
                                <p onClick={() => occuptionFunction('Professional')} className={` duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${occuption.find(o => o == 'Professional') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Professional</p>
                                <p onClick={() => occuptionFunction('Backpackers')} className={` duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b  ${occuption.find(o => o == 'Backpackers') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Backpackers</p>
                                <p onClick={() => occuptionFunction('On welfare')} className={` duration-500 border-[#7065f0] rounded-md border   ${occuption.find(o => o == 'On welfare') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>On welfare</p>
                                <p onClick={() => occuptionFunction('Retired')} className={` duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0  ${occuption.find(o => o == 'Retired') ? 'hover:bg-[#554db3] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Retired</p>
                                <p onClick={() => occuptionFunction('Job Seeker')} className={` duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 col-span-2 lg:col-span-3  ${occuption.find(o => o == 'Job Seeker') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Job Seeker</p>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="text-center flex flex-col lg:flex-row items-center gap-4 mt-7">
                    <button onClick={() => setRoomEdit(false)} className="btn bg-slate-300 border-0 flex-grow">cancel</button>
                    <button disabled={load} className='btn flex-grow border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white '>{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} save</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ListingRoomSeekerUpdate