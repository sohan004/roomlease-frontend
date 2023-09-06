import { useContext, useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "./RoomFurnishingAndFeture";
import { FaArrowRight, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import arow from '../../assets/newlistingIcon/Icon.svg'
import homeIcon from '../../assets/newlistingIcon/homeIcon.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../App";
import Autocomplete from "react-google-autocomplete";
import useUserData from "../Hook/useUserData";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const HomeWoner = () => {
    const [roomFeutureOthers, setRoomFeutureOthers] = useState(false)
    const { userData } = useContext(AuthContext)



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
    const [animate, setAnimate] = useState([])
    const [rentPerweeksingle, setRentPerweeksingle] = useState('')
    const [rentPerweekcouple, setRentPerweekcouple] = useState('')
    const [placeFriendless, setPlaceFriendless] = useState([])
    const [nearbyCommunitySpaces, setNearbyCommunitySpaces] = useState([])
    const [publicTransportAccess, setPublicTransportAccess] = useState([])
    const [gender, setGender] = useState([])
    const [age, setAge] = useState('')
    const [checks, setChecks] = useState([])
    const [smoke, setSmoke] = useState('')
    const [pets, setPets] = useState('')
    const [child, setChild] = useState('')
    const [couple, setCouple] = useState('')
    const [occuption, setOccuption] = useState([])
    const [lifestyle, setLifestyle] = useState('')
    const [clean, setClean] = useState('')
    const [diat, setDiat] = useState('')
    const [alcohol, setAlcohol] = useState('')
    const [nois, setNois] = useState('')
    const [additional, setAdditional] = useState('')
    const [additional2, setAdditional2] = useState('')
    const [photo, setPhoto] = useState([])
    const [load, setLoad] = useState(false)
    const [homeaddress2, setHomeaddress2] = useState('')
    const [street, setStreet] = useState([])

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

    const [url, setUrl] = useState('/listing/home-listings/')
    const [apiMethod, setApiMethod] = useState('POST')


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
    const navigate = useNavigate()
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
        if (!homeaddress2) {
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
        // if (!homeAddress) {
        //     toast.error('Please type suburb', {
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
            "home_address": homeaddress2,
            "suburb": homeAddress,
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
                console.log(data)
                if (data.id) {
                    setLoad(false)
                    if (userData?.subscription == 'Free') {
                        navigate('/homeowner-pricing')
                    }
                    else {
                        navigate('/profile')
                    }
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

    //click to scrool bottom 100px
    const clickToScrool = () => {
        window.scrollTo(0, 100);

    }

    const onchengeFunction = (e) => {
        if (firstName === '' || secondName === '' || email === '') {
            return
        }




        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, "0");
        const day = String(startDate.getDate()).padStart(2, "0");

        const allInfo = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            "house_type": houseType,
            "home_address": homeaddress2,
            // "suburb": homeAddress,
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
            "user": userData?.user_id,
        }
        setLoad(true)
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
                    setLoad(false)
                    // window.location.href = `/homeowner-pricing`
                    setUrl(`/listing/home-listings/${data.id}/`)
                    setApiMethod('PUT')
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
    return (
        <div className="max-w-[736px]  mx-auto px-4 ">
            <h1 className="text-center text-3xl font-bold mt-8 mb-4">Add New Listing</h1>
            <p className="text-center opacity-80 pb-8 mb-8 border-b">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>
            <form onSubmit={handle} >
                <div className="p-4 border-2 lg:p-6  rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
                        <div>
                            <input onChange={(e) => { onchengeFunction(); setFirstName(e.target.value) }} placeholder="First Name" type="text" name="" className="w-full py-3 bg-white px-4 border hover:border-2 focus:border-2 focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                        <div>
                            <input onChange={(e) => { onchengeFunction(); setSecondName(e.target.value) }} placeholder="Last Name" type="text" name="" className="w-full py-3 px-4  bg-white hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                        <div className="col-span-1 lg:col-span-2 ">
                            <input onChange={(e) => { onchengeFunction(); setEmail(e.target.value) }} placeholder="Email" type="email" name="" className="w-full py-3 px-4  bg-white  hover:border-2 focus:border-2 border focus:bg-[#f8f8fc] focus:outline-none border-[#7065F0]  rounded-lg" />
                        </div>
                    </div>
                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Property Details</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>

                            <p className=" text-[#100A55] font-bold text-lg">Home Address: </p>

                            <div className="dropdown dropdown-bottom dropdown-center w-full">
                                <input tabIndex={0} value={homeaddress2} onChange={e => { setHomeaddress2(e.target.value); onchengeFunction(); getStreetAddress(e.target.value) }} placeholder="Home Address: " type="text" name="" className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg bg-white " />
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl  bg-white text-base rounded-none ">
                                    {street.map((item, i) => <li onClick={() => setHomeaddress2(item?.description)} key={i}><a>  <FaMapMarkerAlt />{item?.description}</a></li>)}
                                </ul>
                            </div>

                        </div>
                        {/* <div>

                            <p className=" text-[#100A55] font-bold text-lg">Suburb: </p>
                            <Autocomplete

                                className="w-full mt-4 hover:border-2 focus:border-2 py-3 px-4 border focus:outline-none focus:bg-[#f6f6ff] border-[#7065F0] rounded-lg"
                                apiKey={`AIzaSyAMJbH4KtMl-oDgAFJXF1teH_Y6vzO4JqA`}

                                options={{
                                    componentRestrictions: { country: "au" },
                                }}

                                onPlaceSelected={(place) => {
                                    if (place.formatted_address) {
                                        setHomeAddress(place.formatted_address)
                                        onchengeFunction()
                                    }
                                }}
                            />
                        </div> */}
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">House Type:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 text-center font-medium">
                                <p onClick={() => { setHouseType('House'); onchengeFunction() }} className={`font-bold text-[#7065F0] border border-b-0 lg:border-b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>House</p>
                                <p onClick={() => { setHouseType('Unit'); onchengeFunction() }} className={`font-bold text-[#7065F0] border-t border-e lg:border-e-0 lg:border-y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Unit</p>
                                <p onClick={() => { setHouseType('Apartment'); onchengeFunction() }} className={`font-bold text-[#7065F0] border-y border-s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Apartment</p>
                                <p onClick={() => { setHouseType('Townhouse'); onchengeFunction() }} className={`font-bold text-[#7065F0] border duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] py-3 cursor-pointer`}>Townhouse</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Parking Options:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => { setParkingOptions('Garage'); onchengeFunction() }} className={`border border-b-0 lg:border-b duration-500 ${parkingOptions === 'Garage' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Garage</p>
                                <p onClick={() => { setParkingOptions('Driveway'); onchengeFunction() }} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${parkingOptions === 'Driveway' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Driveway</p>
                                <p onClick={() => { setParkingOptions('On Street'); onchengeFunction() }} className={`border-y border-s duration-500 ${parkingOptions === 'On Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>On Street</p>
                                <p onClick={() => { setParkingOptions('of Street'); onchengeFunction() }} className={`border duration-500 ${parkingOptions === 'of Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>of Street</p>
                                <p onClick={() => { setParkingOptions('No Parking'); onchengeFunction() }} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${parkingOptions === 'No Parking' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>No Parking</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Details</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="w-full">
                            <p className="text-[#100A55]font-bold text-lg">Available from:</p>
                            <DatePicker
                                className="mt-4 py-3 px-4 border hover:border-2 focus:border-2 focus:bg-[#f7f6ff] border-[#7065F0] hover:outline-none w-full rounded-lg"
                                showIcon
                                selected={startDate}
                                onChange={(date) => { setStartDate(date); onchengeFunction() }}
                            />
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Minimum Stay :</p>
                            {!minimumStayOthers && <div className="mt-4 grid gap-y-1 grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                {minimumStayArray.map((item, index) =>
                                    <p key={index} onClick={() => {
                                        setMaximumStay('')
                                        maximumStayFunction(item.name)
                                        setMinimumStay(item.name)
                                        onchengeFunction()
                                    }} className={` duration-500 h-full border ${minimumStay === item.name ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>{item.name}</p>)}
                            </div>}

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Maximum Stay :</p>
                            {!maximumStayOthers && <div className="mt-4 grid gap-y-1 grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                {maximumStayArray.map((item, index) =>
                                    <p key={index} onClick={() => { setMaximumStay(item.name); onchengeFunction() }} className={` duration-500 h-full border ${maximumStay === item.name ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>{item.name}</p>)}

                            </div>}

                        </div>
                        <div >
                            <p className="text-[#100A55] font-bold text-lg">Rent per Week:</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input placeholder="Singles" onChange={(e) => { setRentPerweeksingle(e.target.value); onchengeFunction() }} type="text" className="input   w-full " />
                                    </label>
                                </div>
                                <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input placeholder="Couples" onChange={(e) => { setRentPerweekcouple(e.target.value); onchengeFunction() }} type="text" className="input   w-full " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bond:</p>
                            <div className="mt-4 grid grid-cols-3  text-center font-medium">
                                <p onClick={() => { setBond('2 weeks'); onchengeFunction() }} className={` duration-500 border ${bond === '2 weeks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>2 weeks</p>
                                <p onClick={() => { setBond('1 month'); onchengeFunction() }} className={` duration-500 border-y border-e ${bond === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>1 month</p>
                                <p onClick={() => { setBond('No bond'); onchengeFunction() }} className={` duration-500 border-y border-e ${bond === 'No bond' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>No bond</p>

                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bills Included in Rent:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => setBillRent('yes')} className={`border  duration-500 ${billRent === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Yes</p>
                                <p onClick={() => setBillRent('no')} className={`border border-s-0 duration-500 
                            ${billRent == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>No</p>
                            </div>
                            {billRent == 'no' &&
                                <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                                    <label className="input-group">
                                        <span className="bg-white border-e border-[#7065F0] ">$</span>
                                        <input onChange={(e) => { setApproximatecost(e.target.value); onchengeFunction() }} type="text" className="input   w-full " />
                                    </label>
                                </div>}

                        </div>

                    </div>

                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Room Features</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bedroom Type:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => { setFurnished('Private Bedroom'); onchengeFunction() }} className={`border  duration-500 ${furnished == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Private Bedroom</p>
                                <p onClick={() => { setFurnished('Shared Bedroom'); onchengeFunction() }} className={`border border-s-0 duration-500 ${furnished == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Shared Bedroom</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Private Bathroom:</p>
                            <div className="mt-4 grid grid-cols-2  text-center font-medium">
                                <p onClick={() => { setPrivateBath('yes'); onchengeFunction() }} className={`border  duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Yes</p>
                                <p onClick={() => { setPrivateBath('no'); onchengeFunction() }} className={`border border-s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>No</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Bed Size:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => { setBedSize('single'); onchengeFunction() }} className={`border ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Single</p>
                                <p onClick={() => { setBedSize('double'); onchengeFunction() }} className={`border-y border-e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Double</p>
                                <p onClick={() => { setBedSize('queen'); onchengeFunction() }} className={`border-y border-e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Queen</p>
                                <p onClick={() => { setBedSize('king'); onchengeFunction() }} className={`border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>King</p>
                                <p onClick={() => { setBedSize('none'); onchengeFunction() }} className={`border border-t-0 lg:border-t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>None</p>
                            </div>
                        </div>
                        <p className="text-[#100A55] font-bold text-lg">Room Features :</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                            onchengeFunction={onchengeFunction}
                        ></RoomFurnishingAndFeture>
                    </div>
                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Amenities </p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-center font-medium">
                            <p onClick={() => { aminetAddFunction('Outdoor Area'); onchengeFunction() }} className={`border border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Outdoor Area') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white   border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100 '}  border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Outdoor Area</p>
                            <p onClick={() => { aminetAddFunction('Kitchen'); onchengeFunction() }} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${animate.find(a => a == 'Kitchen') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Kitchen</p>
                            <p onClick={() => { aminetAddFunction('TV'); onchengeFunction() }} className={`border-y border-s duration-500 ${animate.find(a => a == 'TV') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>TV</p>
                            <p onClick={() => { aminetAddFunction('Laundry'); onchengeFunction() }} className={`border duration-500 ${animate.find(a => a == 'Laundry') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Laundry</p>
                            <p onClick={() => { aminetAddFunction('BBQ'); onchengeFunction() }} className={`border border-s border-y-0 lg:border-y lg:border-s-0 duration-500 ${animate.find(a => a == 'BBQ') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>BBQ</p>
                            <p onClick={() => { aminetAddFunction('Pool'); onchengeFunction() }} className={`border border-t-0 border-s-0 lg:border-s duration-500 ${animate.find(a => a == 'Pool') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Pool</p>
                            <p onClick={() => { aminetAddFunction('Spa'); onchengeFunction() }} className={`border lg:border-t-0 lg:border-s-0 border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Spa') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Spa</p>
                            <p onClick={() => { aminetAddFunction('Sauna'); onchengeFunction() }} className={`border border-t-0 border-s-0 border-b-0 lg:border-b duration-500 ${animate.find(a => a == 'Sauna') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Sauna</p>
                            <p onClick={() => { aminetAddFunction('N/A'); onchengeFunction() }} className={`border lg:border-t-0 lg:border-s-0 col-span-2 lg:col-span-1 duration-500 ${animate.find(a => a == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>N/A</p>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Place friendliness:</p>
                            <div className="mt-4 grid grid-cols-2 text-center font-medium">
                                <p onClick={() => { placeFriendFunction('Pets'); onchengeFunction() }} className={`border border-b-0 duration-500 ${placeFriendless.find(p => p == 'Pets') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Pets</p>
                                <p onClick={() => { placeFriendFunction('Couples'); onchengeFunction() }} className={`border-t border-e duration-500 ${placeFriendless.find(p => p == 'Couples') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Couples</p>
                                <p onClick={() => { placeFriendFunction('Children'); onchengeFunction() }} className={`border-y border-s duration-500 ${placeFriendless.find(p => p == 'Children') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Children</p>
                                <p onClick={() => { placeFriendFunction('Visitors'); onchengeFunction() }} className={`border duration-500 ${placeFriendless.find(p => p == 'Visitors') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Visitors</p>
                                <p onClick={() => { placeFriendFunction('N/A'); onchengeFunction() }} className={`border border-t-0 col-span-2 duration-500 ${placeFriendless.find(p => p == 'N/A') ? ' border border-[#bab7e4]  hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>N/A</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Local Amenities and Transport</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Nearby Community Spaces:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { nearbyAddFunction('Parks'); onchengeFunction() }} className={`duration-500 border ${nearbyCommunitySpaces.find(n => n == 'Parks') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Parks</p>
                                <p onClick={() => { nearbyAddFunction('Aquatic Centres'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${nearbyCommunitySpaces.find(n => n == 'Aquatic Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Aquatic Centres</p>
                                <p onClick={() => { nearbyAddFunction('Gyms'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${nearbyCommunitySpaces.find(n => n == 'Gyms') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Gyms</p>
                                <p onClick={() => { nearbyAddFunction('Libraries'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${nearbyCommunitySpaces.find(n => n == 'Libraries') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Libraries</p>
                                <p onClick={() => { nearbyAddFunction('Community Centres'); onchengeFunction() }} className={`duration-500 border ${nearbyCommunitySpaces.find(n => n == 'Community Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Community Centres</p>
                                <p onClick={() => { nearbyAddFunction('Sports Facilities'); onchengeFunction() }} className={`duration-500 border border-s-0 ${nearbyCommunitySpaces.find(n => n == 'Sports Facilities') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Sports Facilities</p>
                                <p onClick={() => { nearbyAddFunction('N/A'); onchengeFunction() }} className={`border border-t-0 col-span-2 lg:col-span-3 duration-500 ${nearbyCommunitySpaces.find(n => n == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>N/A</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Public Transport Access:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { publicAddFunction('Bus Stop'); onchengeFunction() }} className={`duration-500 border ${publicTransportAccess.find(p => p == 'Bus Stop') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bus Stop</p>
                                <p onClick={() => { publicAddFunction('Tram Station'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${publicTransportAccess.find(p => p == 'Tram Station') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Tram Station</p>
                                <p onClick={() => { publicAddFunction('Train Station'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${publicTransportAccess.find(p => p == 'Train Station') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Train Station</p>
                                <p onClick={() => { publicAddFunction('Ferry Terminal'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${publicTransportAccess.find(p => p == 'Ferry Terminal') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Ferry Terminal</p>
                                <p onClick={() => { publicAddFunction('Bike Paths'); onchengeFunction() }} className={`duration-500 border ${publicTransportAccess.find(p => p == 'Bike Paths') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bike Paths</p>
                                <p onClick={() => { publicAddFunction('N/A'); onchengeFunction() }} className={`duration-500 border border-s-0 ${publicTransportAccess.find(p => p == 'N/A') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>N/A</p>
                            </div>


                        </div>
                    </div>
                    <p className="text-center text-xl lg:text-2xl font-semibold mt-14 mb-6 text-[#100A55]">Preferences for Potential Tenant</p>
                    <div className="grid grid-cols-1 gap-10  ">
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Gender:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 text-center font-medium">
                                <p onClick={() => { genderFunction('Any'); onchengeFunction() }} className={`border border-b-0 lg:border-b duration-500 ${gender.find(g => g == 'Any') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => { genderFunction('Male'); onchengeFunction() }} className={`border-t border-e lg:border-e-0 lg:border-y duration-500 ${gender.find(g => g == 'Male') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer `}>Male</p>
                                <p onClick={() => { genderFunction('Female'); onchengeFunction() }} className={`border-y border-s duration-500 ${gender.find(g => g == 'Female') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Female</p>
                                <p onClick={() => { genderFunction('LGBTIQA+'); onchengeFunction() }} className={`border duration-500 ${gender.find(g => g == 'LGBTIQA+') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>LGBTIQA+</p>
                                <p onClick={() => { genderFunction('Unspecified'); onchengeFunction() }} className={`duration-500 col-span-2 lg:col-span-1 border border-t-0 lg:border-t lg:border-s-0  ${gender.find(g => g == 'Unspecified') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Unspecified</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">Age Range:</p>
                            <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 text-center font-medium">
                                <p onClick={() => { setAge('Any'); onchengeFunction() }} className={` duration-500 border ${age === 'Any' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => { setAge('18 - 25'); onchengeFunction() }} className={` duration-500 border-y border-e ${age === '18 - 25' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>18 - 25</p>
                                <p onClick={() => { setAge('26-35'); onchengeFunction() }} className={` duration-500 border-y border-e ${age === '26-35' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>26-35</p>
                                <p onClick={() => { setAge('36-45'); onchengeFunction() }} className={` duration-500 border-t-0 lg:border-t border-s lg:border-s-0 border-y  ${age === '36-45' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>36-45</p>
                                <p onClick={() => { setAge('46-60'); onchengeFunction() }} className={` duration-500 border border-t-0 lg:border-t ${age === '46-60' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>46-60</p>
                                <p onClick={() => { setAge('61+'); onchengeFunction() }} className={` duration-500 border border-s-0 border-t-0 lg:border-t ${age === '61+' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>61+</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold text-lg">IDs & Checks</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { addFunction('Any'); onchengeFunction() }} className={`duration-500 border ${check1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => { addFunction('Digital ID Verification'); onchengeFunction() }} className={`duration-500 border-t border-e lg:border-e-0 ${check2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Digital ID Verification</p>
                                <p onClick={() => { addFunction('Student ID'); onchengeFunction() }} className={`duration-500 border border-y-0 lg:border-t ${check3 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Student ID</p>
                                <p onClick={() => { addFunction('Passport'); onchengeFunction() }} className={`duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b ${check4 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Passport</p>
                                <p onClick={() => { addFunction('Medicare'); onchengeFunction() }} className={`duration-500 border ${check5 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Medicare</p>
                                <p onClick={() => { addFunction(`Driver's License`); onchengeFunction() }} className={`duration-500 border border-s-0 ${check6 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Driver's License</p>
                                <p onClick={() => { addFunction('Bank Statement'); onchengeFunction() }} className={`duration-500 border border-t-0  lg:border-e-0 border-b-0 lg:border-b ${check7 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Bank Statement</p>
                                <p onClick={() => { addFunction('Government Issued ID'); onchengeFunction() }} className={`duration-500 border-t-0 border-s-0 lg:border-s border ${check8 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Government Issued ID</p>
                                <p onClick={() => { addFunction('National Police Check'); onchengeFunction() }} className={`duration-500 border-t lg:border-t-0 border border-s lg:border-s-0 ${check9 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>National Police Check</p>
                                <p onClick={() => { addFunction('Working with Children Check'); onchengeFunction() }} className={`duration-500 border border-t-0 border-s-0 lg:border-s lg:border-e-0  ${check10 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Working with Children Check</p>
                                <p onClick={() => { addFunction('Income Proof'); onchengeFunction() }} className={`duration-500 border-t-0 border ${check11 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Income Proof</p>
                                <p onClick={() => { addFunction('References'); onchengeFunction() }} className={`duration-500 border-t-0 border border-s-0 ${check12 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border border-[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>References</p>
                            </div>

                        </div>
                        <div>
                            <p className="text-[#100A55] font-bold  text-lg">Occupation Preference:</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 text-center font-medium">
                                <p onClick={() => { occuptionFunction('Any'); onchengeFunction() }} className={` duration-500 border ${occuption.find(o => o == 'Any') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Any</p>
                                <p onClick={() => { occuptionFunction('Student'); onchengeFunction() }} className={` duration-500 border-t border-e lg:border-e-0 ${occuption.find(o => o == 'Student') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Student</p>
                                <p onClick={() => { occuptionFunction('Professional'); onchengeFunction() }} className={` duration-500 border border-y-0 lg:border-t ${occuption.find(o => o == 'Professional') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Professional</p>
                                <p onClick={() => occuptionFunction('Backpackers')} className={` duration-500 border lg:border-t-0 border-s-0 lg:border-s lg:border-e-0 border-b-0 lg:border-b  ${occuption.find(o => o == 'Backpackers') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Backpackers</p>
                                <p onClick={() => occuptionFunction('On welfare')} className={` duration-500 border  ${occuption.find(o => o == 'On welfare') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>On welfare</p>
                                <p onClick={() => { occuptionFunction('Retired'); onchengeFunction() }} className={` duration-500 border border-s-0  ${occuption.find(o => o == 'Retired') ? 'hover:bg-[#554db3] border border-[#bab7e4] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Retired</p>
                                <p onClick={() => { occuptionFunction('Job Seeker'); onchengeFunction() }} className={` duration-500 border border-t-0 col-span-2 lg:col-span-3  ${occuption.find(o => o == 'Job Seeker') ? 'border border-[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065F0] text-[#7065F0] font-bold py-3 cursor-pointer`}>Job Seeker</p>
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