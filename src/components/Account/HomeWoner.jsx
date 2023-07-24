import { useState } from "react";
import Select from 'react-select'
import RoomFurnishingAndFeture from "./RoomFurnishingAndFeture";

const HomeWoner = () => {
    const [roomFeutureOthers, setRoomFeutureOthers] = useState(false)
    const [stayOters, setStayOters] = useState(false)
    const [billRent, setBillRent] = useState(true)
    const [roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures] = useState([])
    const [photo, setPhoto] = useState([])
    const [bedSize, setBedSize] = useState('double')



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
        { value: 'TV', label: 'TV' },
        { value: 'TV', label: 'TV' },
    ]
    return (
        <div className="max-w-2xl mt-14 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
                <div>
                    <input placeholder="First Name" type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                </div>
                <div>
                    <input placeholder="Last Name" type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                </div>
                <div className="col-span-1 lg:col-span-2 ">
                    <input placeholder="Email" type="email" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Property Details</p>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <p className="font-medium">House Type:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />House</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Unit</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Apartment</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Townhouse</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium ">Home Address: </p>
                        <input placeholder="Home Address: " type="text" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                    </div>

                    <div>
                        <p className="font-medium ">Parking Options:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-5">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Garage</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Driveway</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />On Street</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />of Street</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />No Parking</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Room Details</p>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <p className="font-medium">Furnished:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Yes</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />No</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Private Bathroom:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Yes</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />No</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium ">Room Features:</p>
                        {!roomFeutureOthers && <Select
                            isMulti
                            name="colors"
                            options={options}
                            className="basic-multi-select mt-4"
                            classNamePrefix="select"
                        />}
                        {roomFeutureOthers && <input placeholder="Others" type="text" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />}
                        <p className="flex mt-4 items-center gap-1"><input onClick={() => setRoomFeutureOthers(!roomFeutureOthers)} type="radio" name="parkingOptions" className="radio radio-primary" checked={roomFeutureOthers ? true : false} />others</p>
                    </div>
                    <div>
                        <p className="font-medium ">Bed Size:</p>
                        <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 text-center font-medium">
                            <p onClick={() => setBedSize('single')} className={`border ${bedSize === 'single' && 'bg-slate-900 text-white'} border-slate-900 py-3 cursor-pointer`}>Single</p>
                            <p onClick={() => setBedSize('double')} className={`border ${bedSize === 'double' && 'bg-slate-900 text-white'} border-slate-900 py-3 cursor-pointer`}>Double</p>
                            <p onClick={() => setBedSize('queen')} className={`border ${bedSize === 'queen' && 'bg-slate-900 text-white'} border-slate-900 py-3 cursor-pointer`}>Queen</p>
                            <p onClick={() => setBedSize('king')} className={`border ${bedSize === 'king' && 'bg-slate-900 text-white'} border-slate-900 py-3 cursor-pointer`}>King</p>
                            <p onClick={() => setBedSize('none')} className={`border ${bedSize === 'none' && 'bg-slate-900 text-white'} border-slate-900 py-3 cursor-pointer`}>None</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium mb-4">Room furnishings and features:</p>
                        <RoomFurnishingAndFeture
                            roomFurnishingsAndFeatures={roomFurnishingsAndFeatures}
                            setRoomFurnishingsAndFeatures={setRoomFurnishingsAndFeatures}
                        ></RoomFurnishingAndFeture>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Rent and Bills</p>
                <div className="grid grid-cols-1 gap-10">
                    <div className="grid grid-cols-2 gap-6">
                        <div >
                            <p className="font-medium">Rent per Week:</p>
                            <input placeholder="Rent per Week" type="number" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                        </div>
                        <div>
                            <p className="font-medium">Bond:</p>
                            <input placeholder="Bond" type="number" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Bills Included in Rent:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={billRent} />Yes</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={!billRent} />No</p>
                        </div>
                        {!billRent &&
                            <div>
                                <p className="font-medium mt-6">approximate cost of bills per month:</p>
                                <input type="number" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                            </div>}
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Availability</p>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <p className="font-medium">Available from:</p>
                        <input placeholder="Available from" type="date" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                    </div>
                    <div>
                        <p className="font-medium">Minimum Stay (months):</p>
                        {!stayOters && <div className="mt-4 grid grid-cols-3 gap-6 lg:grid-cols-6">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />1</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />2</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />3</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />6</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />9</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />12+</p>
                        </div>}
                        {stayOters && <input placeholder="Others" type="text" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />}
                        <p className="flex mt-4 items-center gap-1"><input onClick={() => setStayOters(!stayOters)} type="radio" className="radio radio-primary" checked={stayOters ? true : false} />others</p>
                    </div>
                    <div>
                        <p className="font-medium">Maximum Stay (months):</p>
                        {!stayOters && <div className="mt-4 grid grid-cols-3 gap-6 lg:grid-cols-6">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />1</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />2</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />3</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />6</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />9</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />12+</p>
                        </div>}
                        {stayOters && <input placeholder="Others" type="text" name="" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />}
                        <p className="flex mt-4 items-center gap-1"><input onClick={() => setStayOters(!stayOters)} type="radio" className="radio radio-primary" checked={stayOters ? true : false} />others</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Preferences for Potential Person</p>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <p className="font-medium">Gender:</p>
                        <div className="mt-4 grid grid-cols-3 gap-5 lg:grid-cols-5">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Any</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Male</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Female</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />Non-Binary</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Transgender</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Age Range:</p>
                        <div className="mt-4 grid grid-cols-3 gap-5 lg:grid-cols-6">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />Any</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />18 - 25</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />26-35</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />36-45</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />46-60</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />61+</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Checks:</p>
                        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />National police check</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />working with children check</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />credit history</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" />references</p>
                            <p className="flex items-center gap-1"><input type="radio" name="radio-2" className="radio radio-primary" checked />ID verification </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Smoking Allowed:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={billRent} />Yes</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={!billRent} />No</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Pets Allowed:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={billRent} />Yes</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={!billRent} />No</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Children Allowed:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={billRent} />Yes</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={!billRent} />No</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Couples Allowed:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={billRent} />Yes</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" checked={!billRent} />No</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Occupation Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Student</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Professional</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Backpackers</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />On welfare</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Retired</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Lifestyle Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Early Bird</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Night Owl</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Homebody</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Social Butterfly</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Cleanliness Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" /> Very Clean</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Average</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Not too concerned</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Diet Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" /> Vegetarian</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Vegan</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Non-Vegetarian</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Alcohol Consumption Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" /> Regular </p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Drinker</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Social Drinker</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Non-Drinker</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Noise Level Preference:</p>
                        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
                            <p onClick={() => setBillRent(true)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Any</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" /> Quiet </p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Average</p>
                            <p onClick={() => setBillRent(false)} className="flex items-center gap-1"><input type="radio" className="radio radio-primary" />Noisy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Additional Information</p>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <p className="font-medium">Describe the property and the room:</p>
                        <textarea name="" id="" cols="30" rows="5" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg"></textarea>
                    </div>
                    <div>
                        <p className="font-medium">Describe the current occupants and what type of person would be a good fit:</p>
                        <textarea name="" id="" cols="30" rows="5" className="w-full mt-4 py-3 px-4 border-2 border-[#E0DEF7] rounded-lg"></textarea>
                    </div>

                </div>
            </div>
            <div>
                <p className="text-center text-lg lg:text-xl font-semibold mt-14 mb-6 ">Photos</p>
                <h1 className="mb-4">Upload {photo.length} photos</h1>
                <input type="file" onChange={e => setPhoto([...photo, e.target.files[0]])} className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <div className="text-center mt-12">
                <button className='btn w-full  hover:bg-[#4e46a1] bg-[#7065F0] text-white btn-lg'>submit all Information</button>
            </div>
        </div>
    );
};

export default HomeWoner;