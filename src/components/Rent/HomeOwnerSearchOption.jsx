import React from 'react';
import { useState } from 'react';
import { baseURL } from '../../App';

const HomeOwnerSearchOption = (props) => {
    const {
        type,
        location,
        house_type,
        parking_option,
        rent_per_week_single: rent_per_week_single2,
        rent_per_week_couple: rent_per_week_couple2,
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
    const [rent_per_week_couple, setRent_per_week_couple] = useState(rent_per_week_single2)
    const [rent_per_week_single, setRent_per_week_single] = useState(rent_per_week_couple2)
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

    const [selectedAge, setSelectedAge] = useState(age_range ? age_range : '');

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

    const checkOptionsList = [
        'Any',
        'Digital ID Verification',
        'Student ID',
        'Passport',
        'Medicare',
        "Driver's License",
        'Bank Statement',
        'Government Issued ID',
        'National Police Check',
        'Working with Children Check',
        'Income Proof',
        'References',
    ];
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
        setRent_per_week_couple('')
        setRent_per_week_single('')
        setSelectedFeatures([])
        setSelectedPlaceFriendliness([])
        setSelectedSpaces([])
        setSelectedTransportOptions([])
        setSelectedGenders([])
        setSelectedAge('')
        setSelectedChecks([])
        setSelectedOccupations([])
    }
    const clickApply = () => {
        window.location.href = `/rent?type=homeowner&location=${location}&page=1&house_type=${houseType}&parking_option=${parkingOptions}&rent_per_week_single=${rent_per_week_single}&rent_per_week_couple=${rent_per_week_couple}&bond=${bond}&bills_included_in_rent=${billRent}&bedroom_type=${bedroomType}&private_bathroom=${privateBath}&bed_size=${bedSize}&room_features=${selectedFeatures.join(',')}&amenities=${selectedAmenities.join(',')}&place_friendliness=${selectedPlaceFriendliness.join(',')}&nearby_community_spaces=${selectedSpaces.join(',')}&public_transport_access=${selectedTransportOptions.join(',')}&gender=${selectedGenders.join(',')}&age_range=${selectedAge}&ids_and_checks=${selectedChecks.join(',')}&occupation_preference=${selectedOccupations.join(',')}`
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
                <p className='font-bold mb-4'>House Type:</p>
                <p onClick={() => setHouseType('House')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={houseType === 'House'}
                        onChange={() => setHouseType('House')}
                    /> House
                </p>
                <p onClick={() => setHouseType('Unit')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={houseType === 'Unit'}
                        onChange={() => setHouseType('Unit')}
                    /> Unit
                </p>
                <p onClick={() => setHouseType('Apartment')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={houseType === 'Apartment'}
                        onChange={() => setHouseType('Apartment')}
                    /> Apartment
                </p>
                <p onClick={() => setHouseType('Townhouse')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={houseType === 'Townhouse'}
                        onChange={() => setHouseType('Townhouse')}
                    /> Townhouse
                </p>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Parking Options:</p>
                <p onClick={() => setParkingOptions('Garage')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={parkingOptions === 'Garage'}
                        onChange={() => setParkingOptions('Garage')}
                    /> Garage
                </p>
                <p onClick={() => setParkingOptions('Driveway')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={parkingOptions === 'Driveway'}
                        onChange={() => setParkingOptions('Driveway')}
                    /> Driveway
                </p>
                <p onClick={() => setParkingOptions('On Street')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={parkingOptions === 'On Street'}
                        onChange={() => setParkingOptions('On Street')}
                    /> On Street
                </p>
                <p onClick={() => setParkingOptions('of Street')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={parkingOptions === 'of Street'}
                        onChange={() => setParkingOptions('of Street')}
                    /> of Street
                </p>
                <p onClick={() => setParkingOptions('No Parking')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={parkingOptions === 'No Parking'}
                        onChange={() => setParkingOptions('No Parking')}
                    /> No Parking
                </p>
            </div>

            <div className='my-4 pb-6 border-b'>
                <p className="text-[#100A55] font-bold text-lg">Rent per Week:</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                        <label className="input-group">
                            <span className="bg-white border-e border-[#7065F0] ">$</span>
                            <input placeholder="Singles" onChange={(e) => setRent_per_week_single(e.target.value)} type="text" className="input   w-full " />
                        </label>
                    </div>
                    <div className="form-control mt-4 border-[#7065F0] border hover:border-2 focus:border-2 rounded-lg">
                        <label className="input-group">
                            <span className="bg-white border-e border-[#7065F0] ">$</span>
                            <input placeholder="Couples" onChange={(e) => setRent_per_week_couple(e.target.value)} type="text" className="input   w-full " />
                        </label>
                    </div>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Bond:</p>
                <p onClick={() => setBond('2 weeks')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bond === '2 weeks'}
                        onChange={() => setBond('2 weeks')}
                    /> 2 weeks
                </p>
                <p onClick={() => setBond('1 month')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bond === '1 month'}
                        onChange={() => setBond('1 month')}
                    /> 1 month
                </p>
                <p onClick={() => setBond('No bond')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bond === 'No bond'}
                        onChange={() => setBond('No bond')}
                    /> No bond
                </p>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Bills Included in Rent:</p>
                <p onClick={() => setBillRent('yes')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={billRent === 'yes'}
                        onChange={() => setBillRent('yes')}
                    /> Yes
                </p>
                <p onClick={() => setBillRent('no')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={billRent === 'no'}
                        onChange={() => setBillRent('no')}
                    /> No
                </p>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Bedroom Type:</p>
                <p onClick={() => setBedroomType('Private Bedroom')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedroomType === 'Private Bedroom'}
                        onChange={() => setBedroomType('Private Bedroom')}
                    /> Private Bedroom
                </p>
                <p onClick={() => setBedroomType('Shared Bedroom')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedroomType === 'Shared Bedroom'}
                        onChange={() => setBedroomType('Shared Bedroom')}
                    /> Shared Bedroom
                </p>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Private Bathroom:</p>
                <p onClick={() => setPrivateBath('yes')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={privateBath === 'yes'}
                        onChange={() => setPrivateBath('yes')}
                    /> Yes
                </p>
                <p onClick={() => setPrivateBath('no')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={privateBath === 'no'}
                        onChange={() => setPrivateBath('no')}
                    /> No
                </p>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Bed Size:</p>
                <p onClick={() => setBedSize('single')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedSize === 'single'}
                        onChange={() => setBedSize('single')}
                    /> Single
                </p>
                <p onClick={() => setBedSize('double')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedSize === 'double'}
                        onChange={() => setBedSize('double')}
                    /> Double
                </p>
                <p onClick={() => setBedSize('queen')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedSize === 'queen'}
                        onChange={() => setBedSize('queen')}
                    /> Queen
                </p>
                <p onClick={() => setBedSize('king')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedSize === 'king'}
                        onChange={() => setBedSize('king')}
                    /> King
                </p>
                <p onClick={() => setBedSize('none')} className='flex items-center gap-2 mb-5'>
                    <input
                        type="radio"
                        className="radio radio-primary"
                        checked={bedSize === 'none'}
                        onChange={() => setBedSize('none')}
                    /> None
                </p>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Room Furnishing and Features:</p>
                <div className='mt-4  text-center font-medium'>
                    {featureOptionsList.map((option) => (
                        <div key={option} className='flex items-center gap-2 mb-5'>
                            <input
                                type='checkbox'
                                className='radio radio-primary'
                                id={option.toLowerCase().replace(/ /g, '-')}
                                checked={selectedFeatures.includes(option)}
                                onChange={() => toggleFeature(option)}
                            />
                            <label htmlFor={option.toLowerCase().replace(/ /g, '-')}>
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Amenities</p>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='outdoor'
                        checked={selectedAmenities.includes('Outdoor Area')}
                        onChange={() => toggleAmenity('Outdoor Area')}
                    />
                    <label htmlFor='outdoor'>Outdoor Area</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='kitchen'
                        checked={selectedAmenities.includes('Kitchen')}
                        onChange={() => toggleAmenity('Kitchen')}
                    />
                    <label htmlFor='kitchen'>Kitchen</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='tv'
                        checked={selectedAmenities.includes('TV')}
                        onChange={() => toggleAmenity('TV')}
                    />
                    <label htmlFor='tv'>TV</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='laundry'
                        checked={selectedAmenities.includes('Laundry')}
                        onChange={() => toggleAmenity('Laundry')}
                    />
                    <label htmlFor='laundry'>Laundry</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='bbq'
                        checked={selectedAmenities.includes('BBQ')}
                        onChange={() => toggleAmenity('BBQ')}
                    />
                    <label htmlFor='bbq'>BBQ</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='pool'
                        checked={selectedAmenities.includes('Pool')}
                        onChange={() => toggleAmenity('Pool')}
                    />
                    <label htmlFor='pool'>Pool</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='spa'
                        checked={selectedAmenities.includes('Spa')}
                        onChange={() => toggleAmenity('Spa')}
                    />
                    <label htmlFor='spa'>Spa</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='sauna'
                        checked={selectedAmenities.includes('Sauna')}
                        onChange={() => toggleAmenity('Sauna')}
                    />
                    <label htmlFor='sauna'>Sauna</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='radio radio-primary'
                        id='na'
                        checked={selectedAmenities.includes('N/A')}
                        onChange={() => toggleAmenity('N/A')}
                    />
                    <label htmlFor='na'>N/A</label>
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Place friendliness:</p>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        id='pets'
                        value='Pets'
                        checked={selectedPlaceFriendliness.includes('Pets')}
                        onChange={() => togglePlaceFriendliness('Pets')}
                    />
                    <label htmlFor='pets'>Pets</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        id='couples'
                        value='Couples'
                        checked={selectedPlaceFriendliness.includes('Couples')}
                        onChange={() => togglePlaceFriendliness('Couples')}
                    />
                    <label htmlFor='couples'>Couples</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        id='children'
                        value='Children'
                        checked={selectedPlaceFriendliness.includes('Children')}
                        onChange={() => togglePlaceFriendliness('Children')}
                    />
                    <label htmlFor='children'>Children</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        id='visitors'
                        value='Visitors'
                        checked={selectedPlaceFriendliness.includes('Visitors')}
                        onChange={() => togglePlaceFriendliness('Visitors')}
                    />
                    <label htmlFor='visitors'>Visitors</label>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        id='na'
                        value='N/A'
                        checked={selectedPlaceFriendliness.includes('N/A')}
                        onChange={() => togglePlaceFriendliness('N/A')}
                    />
                    <label htmlFor='na'>N/A</label>
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Nearby Community Spaces</p>
                {nearbySpacesList.map((space) => (
                    <div key={space} className='flex items-center gap-2 mb-5'>
                        <input
                            type='checkbox'
                            className='radio radio-primary'
                            id={space.toLowerCase().replace(' ', '-')}
                            checked={selectedSpaces.includes(space)}
                            onChange={() => toggleSpace(space)}
                        />
                        <label htmlFor={space.toLowerCase().replace(' ', '-')}>{space}</label>
                    </div>
                ))}
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold mb-4'>Public Transport Access</p>
                {transportOptionsList.map((option) => (
                    <div key={option} className='flex items-center gap-2 mb-5'>
                        <input
                            type='checkbox'
                            className='radio radio-primary'
                            id={option.toLowerCase().replace(' ', '-')}
                            checked={selectedTransportOptions.includes(option)}
                            onChange={() => toggleTransportOption(option)}
                        />
                        <label htmlFor={option.toLowerCase().replace(' ', '-')}>{option}</label>
                    </div>
                ))}
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Gender:</p>
                <div className='mt-4 '>
                    {genderOptionsList.map((option) => (
                        <div key={option} className='flex items-center gap-2 mb-5'>
                            <input
                                type='checkbox'
                                className='radio radio-primary'
                                id={option.toLowerCase()}
                                checked={selectedGenders.includes(option)}
                                onChange={() => toggleGender(option)}
                            />
                            <label htmlFor={option.toLowerCase()}>{option}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Age Range:</p>
                <div className='mt-4 text-center font-medium'>
                    {ageRanges.map((range) => (
                        <div key={range} className='flex items-center gap-2 mb-5'>
                            <input
                                type='checkbox'
                                className='radio radio-primary'
                                id={range.toLowerCase()}
                                checked={selectedAge === range}
                                onChange={() => setSelectedAge(range)}
                            />
                            <label htmlFor={range.toLowerCase()}>{range}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>IDs & Checks</p>
                <div className='mt-4  text-center font-medium'>
                    {checkOptionsList.map((option) => (
                        <div key={option} className='flex items-center gap-2 mb-5'>
                            <input
                                type='checkbox'
                                className='radio radio-primary'
                                id={option.toLowerCase().replace(/ /g, '-')}
                                checked={selectedChecks.includes(option)}
                                onChange={() => toggleCheck(option)}
                            />
                            <label htmlFor={option.toLowerCase().replace(/ /g, '-')}>{option}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-4 pb-6 border-b flex flex-col gap-4'>
                <p className='font-bold text-lg'>Occupation Preference:</p>
                <div className='mt-4 text-center font-medium'>
                    {occupationOptionsList.map((option) => (
                        <div key={option} className='flex items-center gap-2 mb-5'>
                            <input
                                type='checkbox'
                                className='radio radio-primary'
                                id={option.toLowerCase().replace(/ /g, '-')}
                                checked={selectedOccupations.includes(option)}
                                onChange={() => toggleOccupation(option)}
                            />
                            <label htmlFor={option.toLowerCase().replace(/ /g, '-')} >{option}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div className='flex justify-center items-center gap-6 mt-16'>
                <button onClick={clickReset} className='btn text-[#7065F0]  flex-grow'>Reset</button>
                <button onClick={clickApply} className='btn bg-[#7065F0] hover:bg-[#3f3981] text-white flex-grow '>Apply</button>
            </div>
        </>
    );
};

export default HomeOwnerSearchOption;