import { FaArrowLeft } from "react-icons/fa";
import logo from '../../assets/Frame.svg'
import arow from '../../assets/newlistingIcon/Icon.svg'
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const NewListingPage1 = () => {
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
                        <p className="bg-[#7065F0] h-7 w-7 flex justify-center items-center text-white rounded-full">1</p>
                        <p className="font-medium">Request</p>
                    </div>
                    <img src={arow} alt="" />
                    <div className="flex gap-2">
                        <p className="bg-slate-200 h-7 w-7 flex justify-center items-center  rounded-full">2</p>
                        <p className="font-medium">Listing Information</p>
                    </div>
                </div>

                <div className="flex mb-4 lg:hidden justify-between items-center">
                    <h1 className="font-bold  text-[#7065F0]">Request</h1>
                    <h1 className="font-bold  text-[#7065F0] ">2<span className="text-slate-400">/2</span></h1>
                </div>
                <div className="flex gap-1 lg:hidden mb-8 pb-8 border-b">
                    <div className="flex-grow">
                        <progress className="progress progress-primary w-full" value="100" max="100"></progress>
                    </div>
                    <div className="flex-grow">
                        
                        <progress className="progress progress-primary w-full" value="0" max="100"></progress>
                    </div>
                </div>

                <div className="p-4 lg:p-6 border-2 rounded-lg">
                    <h1 className="text-lg font-bold mb-6">Property Address</h1>
                    <div className="flex gap-6 flex-col lg:flex-row">
                        <div className="flex-grow">
                            <p className="text-sm mb-2 font-medium">Street Address*</p>
                            <input type="email" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="Enter address" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm mb-2 font-medium">Unit Number</p>
                            <input type="number" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="Unit Number" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                        <div className="">
                            <p className="text-sm mb-2 font-medium">City*</p>
                            <input type="text" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="City Name" />
                        </div>
                        <div>
                            <p className="text-sm mb-2 font-medium">State*</p>
                            <select className="select select-bordered w-full ">
                                <option disabled selected>Select state</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className="">
                            <p className="text-sm mb-2 font-medium">Zipcode*</p>
                            <input type="text" name="" className="border w-full border-[#E0DEF7] rounded-lg py-3 px-4" placeholder="Zipcode" />
                        </div>
                    </div>
                    <div className="mt-6 mb-4 flex items-center gap-1">
                        <p className="text-sm font-medium">I’m representing</p>
                        <p className="bg-[#E8E6F9] h-5 w-5 flex justify-center items-center rounded-full text-[#7065F0]">!</p>
                    </div>
                    <div className="flex lg:items-center flex-col lg:flex-row gap-x-10 gap-y-4 ">
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="radio-7" className="radio radio-primary" checked readOnly />
                            <p className="font-medium text-xs">The landlord or property</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="radio-7" className="radio radio-primary" />
                            <p className="font-medium text-xs">Listing Information</p>
                        </div>
                    </div>
                </div>
                <div className="text-right my-8 ">
                    <NavLink to='/new_listing2'> <button className="btn text-white w-full lg:w-40 bg-[#7065F0]">Next</button></NavLink>
                </div>

            </div>
        </div>
    );
};

export default NewListingPage1;