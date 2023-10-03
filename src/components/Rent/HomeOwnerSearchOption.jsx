import React from 'react';
import { useState } from 'react';
import { baseURL } from '../../App';
import { GrTable, GrLock, } from "react-icons/gr";
import { RiArchiveDrawerLine, } from "react-icons/ri";
import { TbAirConditioning, TbSofa, TbToolsKitchen2 } from "react-icons/tb";
import { MdBalcony, MdOutlineHotTub, MdOutlineMonitor, MdTableRestaurant, MdOutlineBedroomParent, MdSecurity } from "react-icons/md";
import { LuLampDesk } from "react-icons/lu";
import { PiOfficeChairFill, PiLock, PiFan } from "react-icons/pi";
import { FaCheck, FaWifi } from "react-icons/fa";

const HomeOwnerSearchOption = (props) => {
    const {
        type,
        location,
        house_type,
        parking_option,
        rent_per_week_single_min,
        rent_per_week_single_max,
        rent_per_week_couple_min,
        rent_per_week_couple_max,
        bond: bond2,
        bills_included_in_rent,
        bedroom_type,
        private_bathroom,
        bed_size,
        room_features,
        amenities,
        place_friendliness,
        nearby_community_spaces,
        public_transport_access,
        gender,
        age_range,
        ids_and_checks,
        occupation_preference,
        looking_place
    } = props;



    const [houseType, setHouseType] = useState(house_type)
    const [parkingOptions, setParkingOptions] = useState(parking_option)
    const [bond, setBond] = useState(bond2)
    const [billRent, setBillRent] = useState(bills_included_in_rent)
    const [bedroomType, setBedroomType] = useState(bedroom_type)
    const [privateBath, setPrivateBath] = useState(private_bathroom)
    const [bedSize, setBedSize] = useState(bed_size)
    const [selectedAmenities, setSelectedAmenities] = useState(amenities ? amenities.split(',') : []);
    const [rent_per_week_single_min1, setRent_per_week_single_min1] = useState(rent_per_week_single_min)
    const [rent_per_week_single_max1, setRent_per_week_single_max1] = useState(rent_per_week_single_max)
    const [rent_per_week_couple_min1, setRent_per_week_couple_min1] = useState(rent_per_week_couple_min)
    const [rent_per_week_couple_max1, setRent_per_week_couple_max1] = useState(rent_per_week_couple_max)
    const [selectedFeatures, setSelectedFeatures] = useState(room_features ? room_features.split(',') : []);

    const toggleFeature = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };

    const featureOptionsList = [
        'Air Conditioner',
        'Drawers',
        'Heater',
        'Desk',
        'Fan',
        'Ensuite',
        'WiFi',
        'Balcony',
        'Door Lock',
        'Private Entrance',
    ];

    const fetures = [

        {
            icon: TbAirConditioning,
            name: 'Air Conditioner',
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Drawars',
        },
        {
            icon: MdOutlineHotTub,
            name: 'Heater',
        },
        {
            icon: MdTableRestaurant,
            name: 'Desk',
        },
        {
            icon: PiFan,
            name: 'Fan',
        },
        {
            icon: MdOutlineBedroomParent,
            name: 'Ensuite',
        },
        {
            icon: FaWifi,
            name: 'WiFi',
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Wardrobe',
        },
        {
            icon: MdOutlineMonitor,
            name: 'TV',
        },
        {
            icon: MdBalcony,
            name: 'Balcony',
        },
        {
            icon: PiLock,
            name: 'Door Lock',
        },
        {
            icon: MdSecurity,
            name: 'Private Entrance',
        },
    ]


    const toggleAmenity = (amenity) => {
        const isSelected = selectedAmenities.includes(amenity);
        if (isSelected) {
            setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
        } else {
            setSelectedAmenities([...selectedAmenities, amenity]);
        }
    };
    const [selectedPlaceFriendliness, setSelectedPlaceFriendliness] = useState(place_friendliness ? place_friendliness.split(',') : []);

    const togglePlaceFriendliness = (value) => {
        if (selectedPlaceFriendliness.includes(value)) {
            setSelectedPlaceFriendliness(
                selectedPlaceFriendliness.filter((item) => item !== value)
            );
        } else {
            setSelectedPlaceFriendliness([...selectedPlaceFriendliness, value]);
        }
    };
    const [selectedSpaces, setSelectedSpaces] = useState(nearby_community_spaces ? nearby_community_spaces.split(',') : []);

    const toggleSpace = (space) => {
        const isSelected = selectedSpaces.includes(space);
        if (isSelected) {
            setSelectedSpaces(selectedSpaces.filter((s) => s !== space));
        } else {
            setSelectedSpaces([...selectedSpaces, space]);
        }
    };

    const nearbySpacesList = [
        'Parks',
        'Aquatic Centres',
        'Gyms',
        'Libraries',
        'Community Centres',
        'Sports Facilities',
        'N/A',
    ];
    const [selectedTransportOptions, setSelectedTransportOptions] = useState(public_transport_access ? public_transport_access.split(',') : []);

    const toggleTransportOption = (option) => {
        const isSelected = selectedTransportOptions.includes(option);
        if (isSelected) {
            setSelectedTransportOptions(selectedTransportOptions.filter((o) => o !== option));
        } else {
            setSelectedTransportOptions([...selectedTransportOptions, option]);
        }
    };

    const transportOptionsList = [
        'Bus Stop',
        'Tram Station',
        'Train Station',
        'Ferry Terminal',
        'Bike Paths',
        'N/A',
    ];
    const [selectedGenders, setSelectedGenders] = useState(gender ? gender.split(',') : []);

    const toggleGender = (gender) => {
        const isSelected = selectedGenders.includes(gender);
        if (isSelected) {
            setSelectedGenders(selectedGenders.filter((g) => g !== gender));
        } else {
            setSelectedGenders([...selectedGenders, gender]);
        }
    };

    const genderOptionsList = ['Any', 'Male', 'Female', 'LGBTIQA+', 'Unspecified'];

    const [selectedAge, setSelectedAge] = useState(age_range ? age_range.split(',') : []);

    const handleSelect = (age) => {
        setSelectedAge(age);
    };

    const ageRanges = ['Any', '18-25', '26-35', '36-45', '46-60', '61+'];
    const [selectedChecks, setSelectedChecks] = useState(ids_and_checks ? ids_and_checks.split(',') : []);

    const toggleCheck = (check) => {
        if (selectedChecks.includes(check)) {
            setSelectedChecks(selectedChecks.filter((c) => c !== check));
        } else {
            setSelectedChecks([...selectedChecks, check]);
        }
    };

    const check1 = selectedChecks.find(r => r == 'Any')
    const check2 = selectedChecks.find(r => r == 'Digital ID Verification')
    const check3 = selectedChecks.find(r => r == 'Student ID')
    const check4 = selectedChecks.find(r => r == 'Passport')
    const check5 = selectedChecks.find(r => r == 'Medicare')
    const check6 = selectedChecks.find(r => r == `Driver's License`)
    const check7 = selectedChecks.find(r => r == 'Bank Statement')
    const check8 = selectedChecks.find(r => r == 'Government Issued ID')
    const check9 = selectedChecks.find(r => r == 'National Police Check')
    const check10 = selectedChecks.find(r => r == 'Working with Children Check')
    const check11 = selectedChecks.find(r => r == 'Income Proof')
    const check12 = selectedChecks.find(r => r == 'References')
    const [selectedOccupations, setSelectedOccupations] = useState(occupation_preference ? occupation_preference.split(',') : []);

    const toggleOccupation = (occupation) => {
        if (selectedOccupations.includes(occupation)) {
            setSelectedOccupations(selectedOccupations.filter((o) => o !== occupation));
        } else {
            setSelectedOccupations([...selectedOccupations, occupation]);
        }
    };

    const clickReset = () => {
        setHouseType('')
        setParkingOptions('')
        setBond('')
        setBillRent('')
        setBedroomType('')
        setPrivateBath('')
        setBedSize('')
        setSelectedAmenities([])
        setRent_per_week_single_min1('')
        setRent_per_week_single_max1('')
        setRent_per_week_couple_min1('')
        setRent_per_week_couple_max1('')
        setSelectedFeatures([])
        setSelectedPlaceFriendliness([])
        setSelectedSpaces([])
        setSelectedTransportOptions([])
        setSelectedGenders([])
        setSelectedAge([])
        setSelectedChecks([])
        setSelectedOccupations([])
    }
    const clickApply = () => {
        window.location.href = `/rent?type=homeowner&location=${location}&page=1&house_type=${houseType}&parking_option=${parkingOptions}&rent_per_week_single_max=${rent_per_week_single_max1}&rent_per_week_single_min=${rent_per_week_single_min1}&rent_per_week_couple_max=${rent_per_week_couple_max1}&rent_per_week_couple_min=${rent_per_week_couple_min1}&bond=${bond}&bills_included_in_rent=${billRent}&bedroom_type=${bedroomType}&private_bathroom=${privateBath}&bed_size=${bedSize}&room_features=${selectedFeatures.join(',')}&amenities=${selectedAmenities.join(',')}&place_friendliness=${selectedPlaceFriendliness.join(',')}&nearby_community_spaces=${selectedSpaces.join(',')}&public_transport_access=${selectedTransportOptions.join(',')}&gender=${selectedGenders.join(',')}&age_range=${selectedAge.join(',')}&ids_and_checks=${selectedChecks.join(',')}&occupation_preference=${selectedOccupations.join(',')}`
    }


    const ageFunction = (p) => {
        if (p == 'Any') {
            setSelectedAge(['Any'])
            return
        }
        const filter = selectedAge.filter(filt => filt != 'Any')
        const findData = selectedAge.find(r => r == p)
        if (findData) {
            const filterData = selectedAge.filter(filt => filt != p && filt != 'Any')
            setSelectedAge(filterData)
            return
        }
        setSelectedAge([...filter, p])
    }

    const occupationOptionsList = [
        'Any',
        'Student',
        'Professional',
        'Backpackers',
        'On welfare',
        'Retired',
        'Job Seeker',
    ];

    // RoomSeekerSearchOption
    return (
        <>
            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <h1 className='text-2xl  mt-3  font-bold'>Preference</h1>
                <p className='font-bold '>House Type:</p>
                <div className="grid gap-2 grid-cols-2 text-xs lg:grid-cols-4 text-center font-medium">
                    <p onClick={() => setHouseType('House')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${houseType === 'House' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3  cursor-pointer`}>House</p>
                    <p onClick={() => setHouseType('Unit')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${houseType === 'Unit' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3  cursor-pointer`}>Unit</p>
                    <p onClick={() => setHouseType('Apartment')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${houseType === 'Apartment' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3  cursor-pointer`}>Apartment</p>
                    <p onClick={() => setHouseType('Townhouse')} className={`font-bold text-[#7065F0] border-[#7065f0] rounded-md border  duration-500 ${houseType === 'Townhouse' ? 'hover:bg-[#554db3] bg-[#706?0] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] py-3  cursor-pointer`}>Townhouse</p>
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Parking Options:</p>
                <div className="grid gap-2 grid-cols-2 text-xs lg:grid-cols-5 text-center font-medium">
                    <p onClick={() => setParkingOptions('Garage')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${parkingOptions === 'Garage' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Garage</p>
                    <p onClick={() => setParkingOptions('Driveway')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${parkingOptions === 'Driveway' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>Driveway</p>
                    <p onClick={() => setParkingOptions('On Street')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${parkingOptions === 'On Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>On-Street</p>
                    <p onClick={() => setParkingOptions('of Street')} className={`border-[#7065f0] rounded-md border  duration-500 ${parkingOptions === 'of Street' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Off-Street</p>
                    <p onClick={() => setParkingOptions('No Parking')} className={`duration-500 col-span-2 lg:col-span-1 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -s-0  ${parkingOptions === 'No Parking' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>No Parking</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b'>
                <p className="text-[#100A55] font-bold text-lg">Rent per Week Single:</p>
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='mt-2'>
                        <p>Minimum</p>
                        <div className="form-control mt-1 border-[#7065f0] rounded-md border -[#7065F0] border-[#7065f0] rounded-md border  hover:border-[#7065f0] rounded-md border -2 focus:border-[#7065f0] rounded-md border -2 rounded-lg">
                            <label className="input-group">
                                <span className="bg-white border-[#7065f0] rounded-md border-e border-[#7065f0] rounded-md border-[#7065F0] ">$</span>
                                <input placeholder="Minimum" value={rent_per_week_single_min1} onChange={(e) => setRent_per_week_single_min1(e.target.value)} type="text" className="input bg-white  w-full " />
                            </label>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p>Maximum</p>
                        <div className="form-control mt-1 border-[#7065f0] rounded-md border -[#7065F0] border-[#7065f0] rounded-md border  hover:border-[#7065f0] rounded-md border -2 focus:border-[#7065f0] rounded-md border -2 rounded-lg">
                            <label className="input-group">
                                <span className="bg-white border-[#7065f0] rounded-md border-e border-[#7065f0] rounded-md border-[#7065F0] ">$</span>
                                <input placeholder="Maximum" value={rent_per_week_single_max1} onChange={(e) => setRent_per_week_single_max1(e.target.value)} type="text" className="input bg-white  w-full " />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 pb-6 border-b'>
                <p className="text-[#100A55] font-bold text-lg">Rent per Week Couple:</p>
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='mt-2'>
                        <p>Minimum</p>
                        <div className="form-control mt-1 border-[#7065f0] rounded-md border -[#7065F0] border-[#7065f0] rounded-md border  hover:border-[#7065f0] rounded-md border -2 focus:border-[#7065f0] rounded-md border -2 rounded-lg">
                            <label className="input-group">
                                <span className="bg-white border-[#7065f0] rounded-md border-e border-[#7065f0] rounded-md border-[#7065F0] ">$</span>
                                <input placeholder="Minimum" value={rent_per_week_couple_min1} onChange={(e) => setRent_per_week_couple_min1(e.target.value)} type="text" className="input bg-white  w-full " />
                            </label>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p>Maximum</p>
                        <div className="form-control mt-1 border-[#7065f0] rounded-md border -[#7065F0] border-[#7065f0] rounded-md border  hover:border-[#7065f0] rounded-md border -2 focus:border-[#7065f0] rounded-md border -2 rounded-lg">
                            <label className="input-group">
                                <span className="bg-white border-[#7065f0] rounded-md border-e border-[#7065f0] rounded-md border-[#7065F0] ">$</span>
                                <input placeholder="Maximum" value={rent_per_week_couple_max1} onChange={(e) => setRent_per_week_couple_max1(e.target.value)} type="text" className="input bg-white  w-full " />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Bond:</p>
                <div className="text-xs grid gap-2 grid-cols-3  text-center font-medium">
                    <p onClick={() => setBond('2 weeks')} className={` duration-500 border-[#7065f0] rounded-md border  ${bond === '2 weeks' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>2 weeks</p>
                    <p onClick={() => setBond('1 month')} className={` duration-500 border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bond === '1 month' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>1 month</p>
                    <p onClick={() => setBond('No bond')} className={` duration-500 border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bond === 'No bond' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>No bond</p>

                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Bills Included in Rent:</p>
                <div className="text-xs grid gap-2 grid-cols-2  text-center font-medium">
                    <p onClick={() => setBillRent('yes')} className={`border-[#7065f0] rounded-md border   duration-500 ${billRent === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Yes</p>
                    <p onClick={() => setBillRent('no')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 
                            ${billRent == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>No</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Bedroom Type:</p>
                <div className=" grid gap-2 text-xs grid-cols-2  text-center font-medium">
                    <p onClick={() => setBedroomType('Private Bedroom')} className={`border-[#7065f0] rounded-md border   duration-500 ${bedroomType == 'Private Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Private Bedroom</p>
                    <p onClick={() => setBedroomType('Shared Bedroom')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 ${bedroomType == 'Shared Bedroom' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>Shared Bedroom</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Private Bathroom:</p>
                <div className="text-xs grid gap-2 grid-cols-2  text-center font-medium">
                    <p onClick={() => setPrivateBath('yes')} className={`border-[#7065f0] rounded-md border   duration-500 ${privateBath === 'yes' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Yes</p>
                    <p onClick={() => setPrivateBath('no')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 duration-500 
                            ${privateBath == 'no' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>No</p>
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Bed Size:</p>
                <div className="text-xs grid gap-2 grid-cols-3 lg:grid-cols-5 text-center font-medium">
                    <p onClick={() => setBedSize('single')} className={`border-[#7065f0] rounded-md border  ${bedSize === 'single' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Single</p>
                    <p onClick={() => setBedSize('double')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bedSize === 'double' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Double</p>
                    <p onClick={() => setBedSize('queen')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -e ${bedSize === 'queen' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Queen</p>
                    <p onClick={() => setBedSize('king')} className={`border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -y  ${bedSize === 'king' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>King</p>
                    <p onClick={() => setBedSize('none')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t ${bedSize === 'none' ? 'hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>None</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Room Furnishing and Features:</p>
                <div className="grid gap-2 grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 ">
                    {fetures.map((f, i) => <div onClick={() =>
                        toggleFeature(f.name)
                    } className="cursor-pointer" key={i}>
                        <div className="max-w-[70px] mx-auto relative">
                            <f.icon className={`duration-500 ${selectedFeatures.includes(f.name) ? 'bg-[#7065F0] hover:bg-[#5149ac] text-white' : 'text-[#7065F0] bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#7065F0]  text-4xl p-1 rounded-xl mx-auto`} />

                        </div>
                        <p className="text-center text-xs mt-2">{f.name}</p>
                    </div>)}
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Amenities</p>
                <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 text-xs text-center font-medium">
                    <p onClick={() => toggleAmenity('Outdoor Area')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${selectedAmenities.find(a => a == 'Outdoor Area') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white   border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100 '}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Outdoor Area</p>
                    <p onClick={() => toggleAmenity('Kitchen')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${selectedAmenities.find(a => a == 'Kitchen') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>Kitchen</p>
                    <p onClick={() => toggleAmenity('TV')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${selectedAmenities.find(a => a == 'TV') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>TV</p>
                    <p onClick={() => toggleAmenity('Laundry')} className={`border-[#7065f0] rounded-md border  duration-500 ${selectedAmenities.find(a => a == 'Laundry') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Laundry</p>
                    <p onClick={() => toggleAmenity('BBQ')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -y lg:border-[#7065f0] rounded-md border -s-0 duration-500 ${selectedAmenities.find(a => a == 'BBQ') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>BBQ</p>
                    <p onClick={() => toggleAmenity('Pool')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s duration-500 ${selectedAmenities.find(a => a == 'Pool') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Pool</p>
                    <p onClick={() => toggleAmenity('Spa')} className={`border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${selectedAmenities.find(a => a == 'Spa') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Spa</p>
                    <p onClick={() => toggleAmenity('Sauna')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${selectedAmenities.find(a => a == 'Sauna') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Sauna</p>
                    <p onClick={() => toggleAmenity('N/A')} className={`border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -s-0 col-span-2 lg:col-span-1 duration-500 ${selectedAmenities.find(a => a == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>N/A</p>
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Place friendliness:</p>
                <div className="text-xs grid gap-2 grid-cols-2 text-center font-medium">
                    <p onClick={() => togglePlaceFriendliness('Pets')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 duration-500 ${selectedPlaceFriendliness.find(p => p == 'Pets') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Pets</p>
                    <p onClick={() => togglePlaceFriendliness('Couples')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e duration-500 ${selectedPlaceFriendliness.find(p => p == 'Couples') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>Couples</p>
                    <p onClick={() => togglePlaceFriendliness('Children')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${selectedPlaceFriendliness.find(p => p == 'Children') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Children</p>
                    <p onClick={() => togglePlaceFriendliness('Visitors')} className={`border-[#7065f0] rounded-md border  duration-500 ${selectedPlaceFriendliness.find(p => p == 'Visitors') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Visitors</p>
                    <p onClick={() => togglePlaceFriendliness('N/A')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 col-span-2 duration-500 ${selectedPlaceFriendliness.find(p => p == 'N/A') ? ' border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]  hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>N/A</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Nearby Community Spaces</p>
                <div className="text-xs grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                    <p onClick={() => toggleSpace('Parks')} className={`duration-500 border-[#7065f0] rounded-md border  ${selectedSpaces.find(n => n == 'Parks') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Parks</p>
                    <p onClick={() => toggleSpace('Aquatic Centres')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${selectedSpaces.find(n => n == 'Aquatic Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Aquatic Centres</p>
                    <p onClick={() => toggleSpace('Gyms')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${selectedSpaces.find(n => n == 'Gyms') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Gyms</p>
                    <p onClick={() => toggleSpace('Libraries')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${selectedSpaces.find(n => n == 'Libraries') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Libraries</p>
                    <p onClick={() => toggleSpace('Community Centres')} className={`duration-500 border-[#7065f0] rounded-md border  ${selectedSpaces.find(n => n == 'Community Centres') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Community Centres</p>
                    <p onClick={() => toggleSpace('Sports Facilities')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${selectedSpaces.find(n => n == 'Sports Facilities') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Sports Facilities</p>
                    <p onClick={() => toggleSpace('N/A')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 col-span-2 lg:col-span-3 duration-500 ${selectedSpaces.find(n => n == 'N/A') ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>N/A</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold '>Public Transport Access</p>
                <div className="text-xs grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                    <p onClick={() => toggleTransportOption('Bus Stop')} className={`duration-500 border-[#7065f0] rounded-md border  ${selectedTransportOptions.find(p => p == 'Bus Stop') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Bus Stop</p>
                    <p onClick={() => toggleTransportOption('Tram Station')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${selectedTransportOptions.find(p => p == 'Tram Station') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Tram Station</p>
                    <p onClick={() => toggleTransportOption('Train Station')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${selectedTransportOptions.find(p => p == 'Train Station') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Train Station</p>
                    <p onClick={() => toggleTransportOption('Ferry Terminal')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${selectedTransportOptions.find(p => p == 'Ferry Terminal') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Ferry Terminal</p>
                    <p onClick={() => toggleTransportOption('Bike Paths')} className={`duration-500 border-[#7065f0] rounded-md border  ${selectedTransportOptions.find(p => p == 'Bike Paths') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Bike Paths</p>
                    <p onClick={() => toggleTransportOption('N/A')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${selectedTransportOptions.find(p => p == 'N/A') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>N/A</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Gender:</p>
                <div className="text-xs grid gap-2 grid-cols-2 lg:grid-cols-5 text-center font-medium">
                    <p onClick={() => toggleGender('Any')} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${selectedGenders.find(g => g == 'Any') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Any</p>
                    <p onClick={() => toggleGender('Male')} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${selectedGenders.find(g => g == 'Male') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer `}>Male</p>
                    <p onClick={() => toggleGender('Female')} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${selectedGenders.find(g => g == 'Female') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Female</p>
                    <p onClick={() => toggleGender('LGBTIQA+')} className={`border-[#7065f0] rounded-md border  duration-500 ${selectedGenders.find(g => g == 'LGBTIQA+') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>LGBTIQA+</p>
                    <p onClick={() => toggleGender('Unspecified')} className={`duration-500 col-span-2 lg:col-span-1 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -s-0  ${selectedGenders.find(g => g == 'Unspecified') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Unspecified</p>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className="text-[#100A55] font-bold text-lg">Age Range:</p>
                <div className=" grid gap-2 grid-cols-2 lg:grid-cols-6 text-center font-medium">
                    <p onClick={() => { ageFunction('Any'); }} className={`border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b duration-500 ${selectedAge.find(g => g == 'Any') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs `}>Any</p>
                    <p onClick={() => { ageFunction('18 - 25'); }} className={`border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 lg:border-[#7065f0] rounded-md border -y duration-500 ${selectedAge.find(g => g == '18 - 25') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs  `}>18 - 25</p>
                    <p onClick={() => { ageFunction('26 - 35'); }} className={`border-[#7065f0] rounded-md border -y border-[#7065f0] rounded-md border -s duration-500 ${selectedAge.find(g => g == '26 - 35') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs `}>26 - 35</p>
                    <p onClick={() => { ageFunction('36 - 45'); }} className={`border-[#7065f0] rounded-md border  duration-500 ${selectedAge.find(g => g == '36 - 45') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white ' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs `}>36 - 45</p>
                    <p onClick={() => { ageFunction('46 - 60'); }} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -s-0  ${selectedAge.find(g => g == '46 - 60') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs `}>46 - 60</p>
                    <p onClick={() => { ageFunction('61+'); }} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 lg:border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -s-0  ${selectedAge.find(g => g == '61+') ? 'border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4] hover:bg-[#554db3] bg-[#7065F0] text-white' : 'bg-white hover:bg-indigo-100'}  border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer text-xs `}>61+</p>
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>IDs & Checks Preference</p>
                <div className="text-xs grid gap-2 grid-cols-2 lg:grid-cols-3 text-center font-medium">
                    <p onClick={() => toggleCheck('Any')} className={`duration-500 border-[#7065f0] rounded-md border  ${check1 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Any</p>
                    <p onClick={() => toggleCheck('Digital ID Verification')} className={`duration-500 border-[#7065f0] rounded-md border -t border-[#7065f0] rounded-md border -e lg:border-[#7065f0] rounded-md border -e-0 ${check2 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Digital ID Verification</p>
                    <p onClick={() => toggleCheck('Student ID')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -y-0 lg:border-[#7065f0] rounded-md border -t ${check3 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Student ID</p>
                    <p onClick={() => toggleCheck('Passport')} className={`duration-500 border-[#7065f0] rounded-md border  lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${check4 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Passport</p>
                    <p onClick={() => toggleCheck('Medicare')} className={`duration-500 border-[#7065f0] rounded-md border  ${check5 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Medicare</p>
                    <p onClick={() => toggleCheck(`Driver's License`)} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${check6 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Driver's License</p>
                    <p onClick={() => toggleCheck('Bank Statement')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0  lg:border-[#7065f0] rounded-md border -e-0 border-[#7065f0] rounded-md border -b-0 lg:border-[#7065f0] rounded-md border -b ${check7 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Bank Statement</p>
                    <p onClick={() => toggleCheck('Government Issued ID')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s border-[#7065f0] rounded-md border  ${check8 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Government Issued ID</p>
                    <p onClick={() => toggleCheck('National Police Check')} className={`duration-500 border-[#7065f0] rounded-md border -t lg:border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -s-0 ${check9 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>National Police Check</p>
                    <p onClick={() => toggleCheck('Working with Children Check')} className={`duration-500 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border -s-0 lg:border-[#7065f0] rounded-md border -s lg:border-[#7065f0] rounded-md border -e-0  ${check10 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Working with Children Check</p>
                    <p onClick={() => toggleCheck('Income Proof')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  ${check11 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>Income Proof</p>
                    <p onClick={() => toggleCheck('References')} className={`duration-500 border-[#7065f0] rounded-md border -t-0 border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -s-0 ${check12 ? 'hover:bg-[#554db3] bg-[#7065F0] text-white  border-[#7065f0] rounded-md border  border-[#7065f0] rounded-md border -[#bab7e4]' : 'bg-white hover:bg-indigo-100'} border-[#7065f0] rounded-md border -[#7065F0] text-[#7065F0] font-bold py-3  cursor-pointer`}>References</p>
                </div>
            </div>



            <div className='flex justify-center items-center gap-6  bg-white p-3 -bottom-8 lg:bottom-0 sticky w-full'>
                <button onClick={clickReset} className='btn bg-gray-200 border-[#7065f0] rounded-md border-0 text-[#7065F0]  flex-grow capitalize'>Reset</button>
                <button onClick={clickApply} className='btn bg-[#7065F0] border-[#7065f0] rounded-md border-0 hover:bg-[#3f3981] text-white flex-grow capitalize'>Apply</button>
            </div>
        </>
    );
};

export default HomeOwnerSearchOption;