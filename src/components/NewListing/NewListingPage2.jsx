import { FaArrowLeft } from "react-icons/fa";
import logo from '../../assets/Frame.svg'
import arow from '../../assets/newlistingIcon/Icon.svg'
import tik from '../../assets/newlistingIcon/tik.svg'
import homeIcon from '../../assets/newlistingIcon/homeIcon.svg'
import plus from '../../assets/newlistingIcon/plus.svg'
import { NavLink } from "react-router-dom";

const NewListingPage2 = () => {
    return (
        <div>
            <div className="border-b">
                <div className="max-w-[1440px] mx-auto px-4 relative py-6 lg:py-9">
                    <p className="text-sm flex items-center gap-1"><FaArrowLeft className="me-2"></FaArrowLeft> Back <span className="hidden lg:block">to Dashboard</span></p>
                    <div className='flex absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 cursor-pointer items-center gap-1'>
                        <img src={logo} alt="" />
                        <p className='font-bold text-xl text-[#100A55]'>Estatery</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[736px] mx-auto px-4">
                <h1 className="text-center text-3xl font-bold mt-8 mb-4">Add New Property</h1>
                <p className="text-center opacity-80 mb-10">Make sure you have filled in all the necessary fields and have uploaded all the required files.</p>


                <div className="lg:flex items-center gap-4 hidden justify-center pb-8 mb-8 border-b">
                    <div className="flex gap-2">
                        <p className="bg-[#E0DEF7] border-2 border-[#7065F0] h-7 w-7 flex justify-center items-center text-white rounded-full"><img src={tik} alt="" /></p>
                        <p className="font-medium">Personal</p>
                    </div>
                    <img src={arow} alt="" />
                    <div className="flex gap-2">
                        <p className="bg-[#7065F0] h-7 w-7 flex justify-center items-center text-white rounded-full">2</p>
                        <p className="font-medium">Listing Information</p>
                    </div>
                </div>

                <div className="flex mb-4 lg:hidden justify-between items-center">
                    <h1 className="font-bold  text-[#7065F0]">Listing Information</h1>
                    <h1 className="font-bold  text-[#7065F0] ">2<span className="text-slate-400">/2</span></h1>
                </div>
                <div className="flex gap-1 lg:hidden mb-8 pb-8 border-b">
                    <div className="flex-grow">

                        <progress className="progress progress-primary w-full" value="100" max="100"></progress>
                    </div>
                    <div className="flex-grow">

                        <progress className="progress progress-primary w-full" value="100" max="100"></progress>
                    </div>
                </div>

                <div className="p-4 lg:p-6 border-2 rounded-lg mb-8 flex items-center gap-6 shadow-lg">
                    <img src={homeIcon} className="bg-[#100A55] p-4 rounded-full" alt="" />
                    <div>
                        <h1 className="font-bold mb-1 lg:mb-2 lg:text-lg">Property Address</h1>
                        <p className="opacity-80 text-sm lg:text-base">Woodland St, 105, Phoenix, AZ 850001</p>
                    </div>
                </div>

                <div className="p-4 lg:p-6 border-2 rounded-lg">
                <h1 className="text-lg font-bold mb-6">Listing Information</h1>
                    <p className="text-sm mb-2 font-medium">Property Type*</p>
                    <select className="select select-bordered w-full ">
                        <option disabled selected>Select type</option>
                        <option>Home</option>
                        <option>Condominium</option>
                        <option>Apartment</option>
                        <option>Townhouse</option>
                        <option>Dorm / Room / Student housing</option>
                        <option>Other</option>
                    </select>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-4">
                        <div className="">
                            <p className="text-sm mb-2 font-medium">Bedrooms*</p>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>How many beds</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-sm mb-2 font-medium">Bath*</p>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>How many Bath*</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div className="">
                            <p className="text-sm mb-2 font-medium">Square Feet</p>
                            <input type="text" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="Zipcode" />
                        </div>
                    </div>
                    <div className="flex mb-4 gap-6 flex-col lg:flex-row">
                        <div className="flex-grow">
                            <p className="text-sm mb-2 font-medium">Monthly Rent*</p>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className="bg-white border ">$</span>
                                    <input type="text" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className=" mb-2 flex items-center gap-2">
                                <p className="text-sm font-medium">Security Deposit</p>
                                <p className="bg-[#E8E6F9] h-5 w-5 flex justify-center items-center rounded-full text-[#7065F0]">!</p>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className="bg-white border ">$</span>
                                    <input type="text" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mb-2 font-medium">Select Amenitites</p>
                    <div className="p-4 border rounded-lg">
                        <div className=" gap-4 flex flex-wrap">
                            <p className="inline border-2 bg-[#E8E6F9] text-[#7065F0] border-[#7065F0] py-2 px-4 rounded-lg font-medium">A/C</p>
                            <p className="inline border-2 py-2 px-4 rounded-lg font-medium">Deck</p>
                            <p className="inline border-2  bg-[#E8E6F9] text-[#7065F0] border-[#7065F0] py-2 px-4 rounded-lg font-medium">Pet Friendly</p>
                            <p className="inline border-2  bg-[#E8E6F9] text-[#7065F0] border-[#7065F0] py-2 px-4 rounded-lg font-medium">Pool</p>
                            <p className="inline border-2 py-2 px-4 rounded-lg font-medium">Yard</p>
                            <p className="inline border-2 py-2 px-4 rounded-lg font-medium">Free Wi-Fi</p>
                            <p className="inline border-2  bg-[#E8E6F9] text-[#7065F0] border-[#7065F0] py-2 px-4 rounded-lg font-medium">Gym</p>
                            <p className="inline border-2 py-2 px-4 rounded-lg font-medium">Hardwood Floor</p>
                            <p className="inline border-2 py-2 px-4 rounded-lg font-medium">Jacuzzi</p>
                        </div>
                        <p className="font-medium text-[#7065F0] flex items-center gap-2 mt-4"><img src={plus} alt="" />Add amenity</p>
                    </div>

                    <p className="text-sm mb-2 mt-4 font-medium">Description*</p>
                    <textarea name="" id="" cols="30" className="border w-full rounded-lg p-4" placeholder="Tell us about your home here" rows="5"></textarea>

                    <div className="flex gap-6 mt-4 flex-col lg:flex-row">
                        <div className="flex-grow">
                            <p className="text-sm mb-2 font-medium">Date Available</p>
                            <input type="date" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="Enter address" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm mb-2 font-medium">Lease Duration</p>
                            <select className="select select-bordered w-full ">
                                <option disabled selected>Select state</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center lg:items-center gap-4 justify-end my-8 ">
                  <NavLink to='/new_listing1'><button className="btn text-[#7065F0] w-2/4  lg:w-40 bg-[#F7F7FD]">Previous</button></NavLink>
                    <button className="btn text-white  w-2/4 lg:w-40 bg-[#7065F0]">Next</button>
                </div>

            </div>
        </div>
    );
};

export default NewListingPage2;