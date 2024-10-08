import { useEffect, useRef, useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "../Account/RoomFurnishingAndFeture";
import { FaArrowRight, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import arow from '../../assets/newlistingIcon/Icon.svg'
import homeIcon from '../../assets/newlistingIcon/homeIcon.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../App";
import Autocomplete from "react-google-autocomplete";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const ListingHomeOwnerUpdate = ({ setRoomEdit }) => {

    const { listing, setRefresh, refresh } = useContext(AuthContext)
    const listingData = listing || {}

    const navigate = useNavigate()








    // all from data
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [houseType, setHouseType] = useState(listingData?.house_type ? listingData?.house_type : [])
    // const [homeAddress, setHomeAddress] = useState(listingData?.suburb ? listingData?.suburb : '')
    const [parkingOptions, setParkingOptions] = useState(listingData?.parking_option ? listingData?.parking_option : '')
    const [furnished, setFurnished] = useState(listingData?.bedroom_type ? listingData?.bedroom_type : '')
    const [privateBath, setPrivateBath] = useState(listingData?.private_bathroom ? listingData?.private_bathroom : '')
    const [selectedOption, setSelectedOption] = useState(null);
    const [bedSize, setBedSize] = useState(listingData?.bed_size ? listingData?.bed_size : '')
    const [roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures] = useState(listingData?.room_features ? listingData?.room_features : [])
    const [rentPerWeek, setRentPerWeek] = useState('')
    const [bond, setBond] = useState(listingData?.bond ? listingData?.bond : '')
    const [billRent, setBillRent] = useState(listingData?.bills_included_in_rent ? listingData?.bills_included_in_rent : '')
    const [approximatecost, setApproximatecost] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [minimumStay, setMinimumStay] = useState(listingData?.minimum_stay ? listingData?.minimum_stay : '')
    const [minimumStayOthers, setMinimumStayOthers] = useState(false)
    const [minimumStayOthersValue, setMinimumStayOthersValue] = useState('')
    const [maximumStay, setMaximumStay] = useState(listingData?.maximum_stay ? listingData?.maximum_stay : '')
    const [maximumStayOthers, setmaximumStayOthers] = useState(false)
    const [maximumStayOthersValue, setmaximumStayOthersValue] = useState('')
    const [animate, setAnimate] = useState(listingData?.amenities ? listingData?.amenities : [])
    const [rentPerweeksingle, setRentPerweeksingle] = useState(listingData?.rent_per_week_single ? listingData?.rent_per_week_single : '')
    const [rentPerweekcouple, setRentPerweekcouple] = useState(listingData?.rent_per_week_couple ? listingData?.rent_per_week_couple : '')
    const [placeFriendless, setPlaceFriendless] = useState(listingData?.place_friendliness ? listingData?.place_friendliness : [])
    const [nearbyCommunitySpaces, setNearbyCommunitySpaces] = useState(listingData?.nearby_community_spaces ? listingData?.nearby_community_spaces : [])
    const [publicTransportAccess, setPublicTransportAccess] = useState(listingData?.public_transport_access ? listingData?.public_transport_access : [])
    const [gender, setGender] = useState(listing?.gender ? listing?.gender : [])
    const [age, setAge] = useState(listing?.age_range ? listing?.age_range.split(',') : [])
    const [checks, setChecks] = useState(listing?.ids_and_checks ? listing?.ids_and_checks : [])
    const [smoke, setSmoke] = useState('')
    const [pets, setPets] = useState('')
    const [child, setChild] = useState('')
    const [couple, setCouple] = useState('')
    const [occuption, setOccuption] = useState(listing?.occupation_preference ? listing?.occupation_preference : [])
    const [lifestyle, setLifestyle] = useState('')
    const [clean, setClean] = useState('')
    const [diat, setDiat] = useState('')
    const [alcohol, setAlcohol] = useState('')
    const [nois, setNois] = useState('')
    const [additional, setAdditional] = useState('')
    const [additional2, setAdditional2] = useState('')
    const [photo, setPhoto] = useState([])
    const [load, setLoad] = useState(false)
    const [homeaddress2, setHomeaddress2] = useState(listing?.home_address ? listing?.home_address : '')
    const [street, setStreet] = useState([])
   
    useEffect(() => {
        
    }, [listing])

    console.log(age);

    const [minimumStayArray, setMinimumStayArray] = useState([
        {
            name: '1 week',
        },
        {
            name: '2 week',
        },
        {
            name: '1 month',
        },
        {
            name: '2 month',
        },
        {
            name: '3 month',
        },
        {
            name: '6 month',
        },
        {
            name: '9 month',
        },
        {
            name: '12 month+',
        },
    ])
    const [maximumStayArray, setMaximumStayArray] = useState([
        {
            name: '1 week',
        },
        {
            name: '2 week',
        },
        {
            name: '1 month',
        },
        {
            name: '2 month',
        },
        {
            name: '3 month',
        },
        {
            name: '6 month',
        },
        {
            name: '9 month',
        },
        {
            name: '12 month+',
        },
    ])


    const maximumStayFunction = (p) => {
        if (p == '1 week') {
            setMaximumStayArray(minimumStayArray)
            return
        }
        if (p == '2 week') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week'))
            return
        }
        if (p == '1 month') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week'))
            return
        }
        if (p == '2 month') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week' && filt.name != '1 month'))
            return
        }
        if (p == '3 month') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week' && filt.name != '1 month' && filt.name != '2 month'))
            return
        }
        if (p == '6 month') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week' && filt.name != '1 month' && filt.name != '2 month' && filt.name != '3 month'))
            return
        }
        if (p == '9 month') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week' && filt.name != '1 month' && filt.name != '2 month' && filt.name != '3 month' && filt.name != '6 month'))
            return
        }
        if (p == '12 month+') {
            setMaximumStayArray(minimumStayArray.filter(filt => filt.name != '1 week' && filt.name != '2 week' && filt.name != '1 month' && filt.name != '2 month' && filt.name != '3 month' && filt.name != '6 month' && filt.name != '9 month'))
            return
        }
    }




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
    const ageFunction = (p) => {
        if (p == 'Any') {
            setAge(['Any'])
            return
        }
        const filter = age.filter(filt => filt != 'Any')
        const findData = age.find(r => r == p)
        if (findData) {
            const filterData = age.filter(filt => filt != p && filt != 'Any')
            setAge(filterData)
            return
        }
        setAge([...filter, p])
    }

    const aminetAddFunction = (p) => {
        if (p == 'N/A') {
            setAnimate(['N/A'])
            return
        }
        const filter = animate.filter(filt => filt != 'N/A')
        const findData = animate.find(r => r == p)
        if (findData) {
            const filterData = animate.filter(filt => filt != p && filt != 'N/A')
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


    const placeFriendFunction = (p) => {
        if (p == 'N/A') {
            setPlaceFriendless(['N/A'])
            return
        }
        const filter = placeFriendless.filter(filt => filt != 'N/A')
        const findData = placeFriendless.find(r => r == p)
        if (findData) {
            const filterData = placeFriendless.filter(filt => filt != p && filt != 'N/A')
            setPlaceFriendless(filterData)
            return
        }
        setPlaceFriendless([...filter, p])
    }

    const nearbyAddFunction = (p) => {
        if (p == 'N/A') {
            setNearbyCommunitySpaces(['N/A'])
            return
        }
        const filter = nearbyCommunitySpaces.filter(filt => filt != 'N/A')
        const findData = nearbyCommunitySpaces.find(r => r == p)
        if (findData) {
            const filterData = nearbyCommunitySpaces.filter(filt => filt != p && filt != 'N/A')
            setNearbyCommunitySpaces(filterData)
            return
        }
        setNearbyCommunitySpaces([...filter, p])
    }

    const publicAddFunction = (p) => {
        if (p == 'N/A') {
            setPublicTransportAccess(['N/A'])
            return
        }
        const filter = publicTransportAccess.filter(filt => filt != 'N/A')
        const findData = publicTransportAccess.find(r => r == p)
        if (findData) {
            const filterData = publicTransportAccess.filter(filt => filt != p && filt != 'N/A')
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

        // if (!homeAddress) {
        //     toast.error('Please type your home address', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         theme: "colored",
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     return
        // }

        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, "0");
        const day = String(startDate.getDate()).padStart(2, "0");


        const listingObject = listing
        const photoKey = listingObject['photo']
        if (photoKey) {
            delete listingObject['photo']
        }

        listingObject.house_type = houseType,
            listingObject.home_address = homeaddress2,
            // listingObject.suburb = homeAddress,
            listingObject.parking_option = parkingOptions,
            listingObject.available_from = `${year}-${month}-${day}`,
            listingObject.minimum_stay = minimumStay,
            listingObject.maximum_stay = maximumStay,
            listingObject.rent_per_week_single = rentPerweeksingle,
            listingObject.rent_per_week_couple = rentPerweekcouple,
            listingObject.bond = bond,
            listingObject.bills_included_in_rent = billRent,
            listingObject.approximate_cost = approximatecost,
            listingObject.bedroom_type = furnished,
            listingObject.private_bathroom = privateBath,
            listingObject.bed_size = bedSize,
            listingObject.room_features = roomFurnishingsAndFeatures,
            listingObject.amenities = animate,
            listingObject.place_friendliness = placeFriendless,
            listingObject.nearby_community_spaces = nearbyCommunitySpaces,
            listingObject.public_transport_access = publicTransportAccess,
            listingObject.gender = gender,
            listingObject.age_range = age.join(','),
            listingObject.ids_and_checks = checks,
            listingObject.occupation_preference = occuption,
            // setLoad(true)




            fetch(`${baseURL}/listing/home-listings/${listing?.id}/`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('user-token')}`,
                    'Content-Type': 'application/json',
                }
                , body: JSON.stringify(listingObject)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRefresh(refresh + 1)
                    setRoomEdit(false)
                })
                .catch((error) => {
                    console.log(error);
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



    const getStreetAddress = (a) => {
        if (a.length === 0) {
            setHomeaddress2('')
            setStreet([])
            return
        }
        fetch(`${baseURL}/search/street-address/${a}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')} `,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setStreet(data.predictions)

            })
            .catch(err => setStreet([]))

    }

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const tgdropdown = (t) => {
        setIsOpen(t);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="max-w-[736px]  mx-auto  ">
            <h1 className="text-center text-3xl font-bold mt-8 mb-4">Update Your Listing</h1>
            <p className="text-center opacity-80 pb-8 mb-8 border-b">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>
            <form onSubmit={handle} >
                <div className="p-4 border-2 bg-white lg:p-6 lg:px-14  rounded-lg">
                    <p className="text-center text-xl lg:text-2xl font-semibold  mb-6 text-[#100A55]">Property Details</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className=" text-[#100A55] font-bold text-lg ">Home Address: </p>
                            <div className="relative mt-4">
                                <input onClick={() => tgdropdown(true)} tabIndex={0} value={homeaddress2} onChange={e => { setHomeaddress2(e.target.value); ; getStreetAddress(e.target.value) }} placeholder="Home Address: " type="text" name="" className="w-full  hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg bg-white " />

                                {isOpen && <ul className=" menu p-2 shadow-2xl  bg-white text-base rounded-none absolute top-full w-full">
                                    {street.map((item, i) => <li onClick={() => { setHomeaddress2(item?.description); tgdropdown(false) }} key={i}><a>  <FaMapMarkerAlt />{item?.description}</a></li>)}
                                </ul>}
                            </div>
                        </div>
                        {/* <div>
                            <p className=" text-[#100A55] font-bold text-lg">Suburb: </p>



                            <Autocomplete
                                defaultValue={homeAddress}
                                className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg"
                                apiKey={import.meta.env.VITE_googleApiKey}


                                options={{
                                    componentRestrictions: { country: "au" },
                                }}

                                onPlaceSelected={(place) => {
                                    if (place.formatted_address) {
                                        setHomeAddress(place.formatted_address)
                                    }
                                }}
                            />
                        </div> */}
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4 text-center font-medium">
                                <p onClick={() => setHouseType('House')} className={`font-bold text-[#7065F0] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>House</p>
                                <p onClick={() => setHouseType('Unit')} className={`font-bold text-[#7065F0] border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 lg:border-[#7065F0] rounded-md border -y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Unit</p>
                                <p onClick={() => setHouseType('Apartment')} className={`font-bold text-[#7065F0] border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Apartment</p>
                                <p onClick={() => setHouseType('Townhouse')} className={`font-bold text-[#7065F0] border-[#7065F0] rounded-md border  duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] py-3 cursor-pointer text-xs lg:text-base`}>Townhouse</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Parking Options:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setParkingOptions('Garage')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${parkingOptions === 'Garage' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Garage</p>
                                <p onClick={() => setParkingOptions('Driveway')} className={`border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 lg:border-[#7065F0] rounded-md border -y duration-500 ${parkingOptions === 'Driveway' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Driveway</p>
                                <p onClick={() => setParkingOptions('On Street')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${parkingOptions === 'On Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>On-Street</p>
                                <p onClick={() => setParkingOptions('of Street')} className={`border-[#7065F0] rounded-md border  duration-500 ${parkingOptions === 'of Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Off-Street</p>
                                <p onClick={() => setParkingOptions('No Parking')} className={`duration-500 col-span-2 lg:col-span-1 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t lg:border-[#7065F0] rounded-md border -s-0  ${parkingOptions === 'No Parking' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>No Parking</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Details</p>
                    <div className="grid gap-2 grid-cols-1 gap-10  ">
                        <div className="w-full">
                            <p className="text-[#100A55]font-bold text-lg">Available from:</p>
                            <DatePicker
                                defaultValue={listing?.available_from}
                                className="mt-4 py-3 px-4 border-[#7065F0] bg-transparent rounded-md border  hover:border-[#7065F0] rounded-md border -2 focus:border-[#7065F0] rounded-md border -2 focus:bg-[#f7f6ff] border-[#7065F0] rounded-md border -[#7065F0] focus:outline-none w-full rounded-lg"
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Minimum Stay :</p>
                            {!minimumStayOthers && <div className="mt-4 grid gap-2 gap-y-1 grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                {minimumStayArray.map((item, index) =>
                                    <p key={index} onClick={() => {
                                        setMaximumStay('')
                                        maximumStayFunction(item.name)
                                        setMinimumStay(item.name)
                                    }} className={` duration-500 h-full border-[#7065F0] rounded-md border  ${minimumStay === item.name ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>{item.name}</p>)}
                            </div>}

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Maximum Stay :</p>
                            {!maximumStayOthers && <div className="mt-4 grid gap-2 gap-y-1 grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                {maximumStayArray.map((item, index) =>
                                    <p key={index} onClick={() => setMaximumStay(item.name)} className={` duration-500 h-full border-[#7065F0] rounded-md border  ${maximumStay === item.name ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>{item.name}</p>)}

                            </div>}

                        </div>
                        <div >
                            <p className="text-[#100A55] font-bold text-lg mt-5">Rent per Week:</p>
                            <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="form-control mt-4 border-[#7065F0] rounded-md border -[#7065F0] border-[#7065F0] rounded-md border  hover:border-[#7065F0] rounded-md border -2 focus:border-[#7065F0] rounded-md border -2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] rounded-md border-[#7065F0] ">$</span>
                                        <input defaultValue={listing?.rent_per_week_single} placeholder="Singles" onChange={(e) => setRentPerweeksingle(e.target.value)} type="number" className="input bg-transparent  w-full " />
                                    </label>
                                </div>
                                <div className="form-control mt-4 border-[#7065F0] rounded-md border -[#7065F0] border-[#7065F0] rounded-md border  hover:border-[#7065F0] rounded-md border -2 focus:border-[#7065F0] rounded-md border -2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white  rounded-md border-e border-[#7065F0]  ">$</span>
                                        <input defaultValue={listing?.rent_per_week_couple} placeholder="Couples" onChange={(e) => setRentPerweekcouple(e.target.value)} type="number" className="input bg-transparent  w-full " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Bond:</p>
                            <div className="mt-4 grid gap-2 grid-cols-3  text-center font-medium">
                                <p onClick={() => setBond('2 weeks')} className={` duration-500 border-[#7065F0] rounded-md border  ${bond === '2 weeks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>2 weeks</p>
                                <p onClick={() => setBond('1 month')} className={` duration-500 border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -e ${bond === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>1 month</p>
                                <p onClick={() => setBond('No bond')} className={` duration-500 border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -e ${bond === 'No bond' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>No bond</p>

                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Bills Included in Rent:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2  text-center font-medium">
                                <p onClick={() => setBillRent('yes')} className={`border-[#7065F0] rounded-md border   duration-500 ${billRent === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Yes</p>
                                <p onClick={() => setBillRent('no')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 duration-500 
                            ${billRent == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>No</p>
                            </div>
                            {billRent == 'no' &&
                                <div className="form-control mt-4 border-[#7065F0] rounded-md border -[#7065F0] border-[#7065F0] rounded-md border  hover:border-[#7065F0] rounded-md border -2 focus:border-[#7065F0] rounded-md border -2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-[#7065F0] rounded-md border-e border-[#7065F0] rounded-md border-[#7065F0] ">$</span>
                                        <input onChange={(e) => setApproximatecost(e.target.value)} type="number" className="input   w-full bg-transparent" />
                                    </label>
                                </div>}

                        </div>

                    </div>

                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Features Preference</p>
                    <div className="grid gap-2 grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bedroom Type:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2  text-center font-medium">
                                <p onClick={() => setFurnished('Private Bedroom')} className={`border-[#7065F0] rounded-md border   duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Private Bedroom</p>
                                <p onClick={() => setFurnished('Shared Bedroom')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Private Bathroom:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2  text-center font-medium">
                                <p onClick={() => setPrivateBath('yes')} className={`border-[#7065F0] rounded-md border   duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Yes</p>
                                <p onClick={() => setPrivateBath('no')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Bed Size:</p>
                            <div className="mt-4 grid gap-2 grid-cols-3 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => setBedSize('single')} className={`border-[#7065F0] rounded-md border  ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Single</p>
                                <p onClick={() => setBedSize('double')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Double</p>
                                <p onClick={() => setBedSize('queen')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Queen</p>
                                <p onClick={() => setBedSize('king')} className={`border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -s-0 border-[#7065F0] rounded-md border -y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>King</p>
                                <p onClick={() => setBedSize('none')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#100A55] font-bold text-lg mt-5">Room Features Preference :</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                        ></RoomFurnishingAndFeture>
                    </div>
                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Amenities </p>
                    <div className="grid gap-2 grid-cols-1 gap-10  ">
                        <div className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-center font-medium">
                            <p onClick={() => aminetAddFunction('Outdoor Area')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${animate.find(a => a == 'Outdoor Area') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white   border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100 '}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Outdoor Area</p>
                            <p onClick={() => aminetAddFunction('Kitchen')} className={`border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 lg:border-[#7065F0] rounded-md border -y duration-500 ${animate.find(a => a == 'Kitchen') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Kitchen</p>
                            <p onClick={() => aminetAddFunction('TV')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${animate.find(a => a == 'TV') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>TV</p>
                            <p onClick={() => aminetAddFunction('Laundry')} className={`border-[#7065F0] rounded-md border  duration-500 ${animate.find(a => a == 'Laundry') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Laundry</p>
                            <p onClick={() => aminetAddFunction('BBQ')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s border-[#7065F0] rounded-md border -y-0 lg:border-[#7065F0] rounded-md border -y lg:border-[#7065F0] rounded-md border -s-0 duration-500 ${animate.find(a => a == 'BBQ') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>BBQ</p>
                            <p onClick={() => aminetAddFunction('Pool')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s duration-500 ${animate.find(a => a == 'Pool') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Pool</p>
                            <p onClick={() => aminetAddFunction('Spa')} className={`border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -s-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${animate.find(a => a == 'Spa') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Spa</p>
                            <p onClick={() => aminetAddFunction('Sauna')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${animate.find(a => a == 'Sauna') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Sauna</p>
                            <p onClick={() => aminetAddFunction('N/A')} className={`border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -s-0 col-span-2 lg:col-span-1 duration-500 ${animate.find(a => a == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>N/A</p>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Place friendliness:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 text-center font-medium">
                                <p onClick={() => placeFriendFunction('Pets')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 duration-500 ${placeFriendless.find(p => p == 'Pets') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Pets</p>
                                <p onClick={() => placeFriendFunction('Couples')} className={`border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e duration-500 ${placeFriendless.find(p => p == 'Couples') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Couples</p>
                                <p onClick={() => placeFriendFunction('Children')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${placeFriendless.find(p => p == 'Children') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Children</p>
                                <p onClick={() => placeFriendFunction('Visitors')} className={`border-[#7065F0] rounded-md border  duration-500 ${placeFriendless.find(p => p == 'Visitors') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Visitors</p>
                                <p onClick={() => placeFriendFunction('N/A')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 col-span-2 duration-500 ${placeFriendless.find(p => p == 'N/A') ? ' border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]  hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>N/A</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 grid-cols-1 gap-10 mt-5 ">
                        <div>
                            <p className="text-[#100A55] font-bold mt-6 text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => nearbyAddFunction('Parks')} className={`duration-500 border-[#7065F0] rounded-md border  ${nearbyCommunitySpaces.find(n => n == 'Parks') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Parks</p>
                                <p onClick={() => nearbyAddFunction('Aquatic Centres')} className={`duration-500 border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 ${nearbyCommunitySpaces.find(n => n == 'Aquatic Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Aquatic Centres</p>
                                <p onClick={() => nearbyAddFunction('Gyms')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -y-0 lg:border-[#7065F0] rounded-md border -t ${nearbyCommunitySpaces.find(n => n == 'Gyms') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Gyms</p>
                                <p onClick={() => nearbyAddFunction('Libraries')} className={`duration-500 border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -e-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b ${nearbyCommunitySpaces.find(n => n == 'Libraries') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Libraries</p>
                                <p onClick={() => nearbyAddFunction('Community Centres')} className={`duration-500 border-[#7065F0] rounded-md border  ${nearbyCommunitySpaces.find(n => n == 'Community Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Community Centres</p>
                                <p onClick={() => nearbyAddFunction('Sports Facilities')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 ${nearbyCommunitySpaces.find(n => n == 'Sports Facilities') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Sports Facilities</p>
                                <p onClick={() => nearbyAddFunction('N/A')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces.find(n => n == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>N/A</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg mt-5">Public Transport Access:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => publicAddFunction('Bus Stop')} className={`duration-500 border-[#7065F0] rounded-md border  ${publicTransportAccess.find(p => p == 'Bus Stop') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bus Stop</p>
                                <p onClick={() => publicAddFunction('Tram Station')} className={`duration-500 border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 ${publicTransportAccess.find(p => p == 'Tram Station') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Tram Station</p>
                                <p onClick={() => publicAddFunction('Train Station')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -y-0 lg:border-[#7065F0] rounded-md border -t ${publicTransportAccess.find(p => p == 'Train Station') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Train Station</p>
                                <p onClick={() => publicAddFunction('Ferry Terminal')} className={`duration-500 border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -e-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b ${publicTransportAccess.find(p => p == 'Ferry Terminal') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Ferry Terminal</p>
                                <p onClick={() => publicAddFunction('Bike Paths')} className={`duration-500 border-[#7065F0] rounded-md border  ${publicTransportAccess.find(p => p == 'Bike Paths') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bike Paths</p>
                                <p onClick={() => publicAddFunction('N/A')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 ${publicTransportAccess.find(p => p == 'N/A') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>N/A</p>
                            </div>


                        </div>
                    </div>
                    <div className="grid gap-2 grid-cols-1 gap-10 mt-5 ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-6">Gender:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => genderFunction('Any')} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${gender.find(g => g == 'Any') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => genderFunction('Male')} className={`border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 lg:border-[#7065F0] rounded-md border -y duration-500 ${gender.find(g => g == 'Male') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>Male</p>
                                <p onClick={() => genderFunction('Female')} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${gender.find(g => g == 'Female') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Female</p>
                                <p onClick={() => genderFunction('LGBTIQA+')} className={`border-[#7065F0] rounded-md border  duration-500 ${gender.find(g => g == 'LGBTIQA+') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>LGBTIQA+</p>
                                <p onClick={() => genderFunction('Unspecified')} className={`duration-500 col-span-2 lg:col-span-1 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t lg:border-[#7065F0] rounded-md border -s-0  ${gender.find(g => g == 'Unspecified') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">Age Range:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => { ageFunction('Any'); }} className={`border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b duration-500 ${age.find(g => g == 'Any') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => { ageFunction('18 - 25'); }} className={`border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 lg:border-[#7065F0] rounded-md border -y duration-500 ${age.find(g => g == '18 - 25') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base `}>18 - 25</p>
                                <p onClick={() => { ageFunction('26 - 35'); }} className={`border-[#7065F0] rounded-md border -y border-[#7065F0] rounded-md border -s duration-500 ${age.find(g => g == '26 - 35') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>26 - 35</p>
                                <p onClick={() => { ageFunction('36 - 45'); }} className={`border-[#7065F0] rounded-md border  duration-500 ${age.find(g => g == '36 - 45') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>36 - 45</p>
                                <p onClick={() => { ageFunction('46 - 60'); }} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t lg:border-[#7065F0] rounded-md border -s-0  ${age.find(g => g == '46 - 60') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>46 - 60</p>
                                <p onClick={() => { ageFunction('61+'); }} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 lg:border-[#7065F0] rounded-md border -t lg:border-[#7065F0] rounded-md border -s-0  ${age.find(g => g == '61+') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'}  border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>61+</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg mt-5">IDs & Checks Preference</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => addFunction('Any')} className={`duration-500 border-[#7065F0] rounded-md border  ${check1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => addFunction('Digital ID Verification')} className={`duration-500 border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 ${check2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Digital ID Verification</p>
                                <p onClick={() => addFunction('Student ID')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -y-0 lg:border-[#7065F0] rounded-md border -t ${check3 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Student ID</p>
                                <p onClick={() => addFunction('Passport')} className={`duration-500 border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -e-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b ${check4 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Passport</p>
                                <p onClick={() => addFunction('Medicare')} className={`duration-500 border-[#7065F0] rounded-md border  ${check5 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Medicare</p>
                                <p onClick={() => addFunction(`Driver's License`)} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 ${check6 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Driver's License</p>
                                <p onClick={() => addFunction('Bank Statement')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0  lg:border-[#7065F0] rounded-md border -e-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b ${check7 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Bank Statement</p>
                                <p onClick={() => addFunction('Government Issued ID')} className={`duration-500 border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s border-[#7065F0] rounded-md border  ${check8 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Government Issued ID</p>
                                <p onClick={() => addFunction('National Police Check')} className={`duration-500 border-[#7065F0] rounded-md border -t lg:border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -s-0 ${check9 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>National Police Check</p>
                                <p onClick={() => addFunction('Working with Children Check')} className={`duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -e-0  ${check10 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Working with Children Check</p>
                                <p onClick={() => addFunction('Income Proof')} className={`duration-500 border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border  ${check11 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Income Proof</p>
                                <p onClick={() => addFunction('References')} className={`duration-500 border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0 ${check12 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>References</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg mt-5">Occupation Preference:</p>
                            <div className="mt-4 grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => occuptionFunction('Any')} className={` duration-500 border-[#7065F0] rounded-md border  ${occuption.find(o => o == 'Any') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Any</p>
                                <p onClick={() => occuptionFunction('Student')} className={` duration-500 border-[#7065F0] rounded-md border -t border-[#7065F0] rounded-md border -e lg:border-[#7065F0] rounded-md border -e-0 ${occuption.find(o => o == 'Student') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Student</p>
                                <p onClick={() => occuptionFunction('Professional')} className={` duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -y-0 lg:border-[#7065F0] rounded-md border -t ${occuption.find(o => o == 'Professional') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Professional</p>
                                <p onClick={() => occuptionFunction('Backpackers')} className={` duration-500 border-[#7065F0] rounded-md border  lg:border-[#7065F0] rounded-md border -t-0 border-[#7065F0] rounded-md border -s-0 lg:border-[#7065F0] rounded-md border -s lg:border-[#7065F0] rounded-md border -e-0 border-[#7065F0] rounded-md border -b-0 lg:border-[#7065F0] rounded-md border -b  ${occuption.find(o => o == 'Backpackers') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Backpackers</p>
                                <p onClick={() => occuptionFunction('On welfare')} className={` duration-500 border-[#7065F0] rounded-md border   ${occuption.find(o => o == 'On welfare') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>On welfare</p>
                                <p onClick={() => occuptionFunction('Retired')} className={` duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -s-0  ${occuption.find(o => o == 'Retired') ? 'hover:bg-[#554db3] border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Retired</p>
                                <p onClick={() => occuptionFunction('Job Seeker')} className={` duration-500 border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -t-0 col-span-2 lg:col-span-3  ${occuption.find(o => o == 'Job Seeker') ? 'border-[#7065F0] rounded-md border  border-[#7065F0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer text-xs lg:text-base`}>Job Seeker</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center flex flex-col lg:flex-row items-center gap-4 mt-7">
                    <button disabled={load} className='btn flex-grow  hover:bg-[#4e46a1] bg-[#7065F0] border-0 text-white '>{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} save</button>
                    <Link className="flex-grow " ><button onClick={() => setRoomEdit(false)} className="btn border-0 bg-slate-300 w-full">cancel</button></Link>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ListingHomeOwnerUpdate;





