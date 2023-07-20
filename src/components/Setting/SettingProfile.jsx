import { FaArrowLeft, FaChessKing } from "react-icons/fa";
import logo from '../../assets/settingIcon/Frame.svg'
import ball from '../../assets/settingIcon/Icon.svg'
import profileImg from '../../assets/settingIcon/Icon (2).svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import google from '../../assets/settingIcon/google.svg'
import { useEffect, useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";
import { baseURL } from "../../App";


const SettingProfile = () => {
    const [value, setValue] = useState('p')
    const [con, setCon] = useState({ phone: '' })
    const [userData, setUserData] = useState({})
    console.log(userData);


    useEffect(() => {
        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('room-lease-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.success) {
                    setUserData(data.data)
                }
                else if (data.message) {
                    alert(data.message)
                } else {
                    alert('Something went wrong')
                }
            })
    }, [])

    return (
        <div className="bg-[#F7F7FD]">
            <div className="border-b bg-white">
                <div className="max-w-[1440px] mx-auto px-4  py-6 lg:py-9 flex items-center justify-between">
                    
                        <p className="text-sm lg:hidden flex items-center gap-1"><FaArrowLeft className="me-2"></FaArrowLeft> <Link to='/'>Back <span className="">to Dashboard</span></Link></p>
                    
                    <div className="hidden lg:flex items-center  gap-12">
                        <img src={logo} className="bg-[#7065F0] p-2 rounded-lg" alt="" />
                        <p className="text-2xl font-bold ">Settings</p>
                    </div>
                    <div className="flex gap-4 lg:gap-6 items-center">
                        <div>
                            <img src={ball} className="p-2 bg-slate-100 rounded-lg" alt="" />
                        </div>
                        <div className="lg:ps-6 lg:border-s-2">
                            <div className="flex items-center gap-2 py-2 lg:py-3 px-2 lg:px-4 border-2 border-[#E0DEF7] rounded-xl">
                                <p className="bg-[#7065F0] text-white font-medium rounded-full h-8 w-8 flex items-center justify-center">FR</p>
                                <p className="font-medium hidden lg:block">Francis</p>
                                <img src={arrowDown} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <p className="  max-w-[1440px] mx-auto px-4  py-6 lg:py-9 text-sm hidden lg:flex items-center gap-1"><FaArrowLeft className="me-2"></FaArrowLeft> <Link to='/'>Back <span className="">to Dashboard</span></Link></p>
                <div className=" max-w-[1440px] mx-auto px-4 lg:hidden">
                    <h1 className="text-2xl font-bold py-6">Settings</h1>
                    <div className="flex ">
                        <p onClick={() => setValue('p')} className={`text-sm  ${value === 'p' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>Profile</p>
                        <p onClick={() => setValue('a')} className={`text-sm  ${value === 'a' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>My Account</p>
                        <p onClick={() => setValue('n')} className={`text-sm  ${value === 'n' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>Notifications</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">

                <div className="mt-6 flex flex-col lg:flex-row gap-44">
                    <div className="hidden lg:block">
                        <p onClick={() => setValue('p')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'p' ? "border-s-4 border-s-[#7065F0]" : ''}`}>Profile</p>
                        <p onClick={() => setValue('a')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'a' ? "border-s-4 border-s-[#7065F0]" : ''}`}>My Account</p>
                        <p onClick={() => setValue('n')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'n' ? "border-s-4 border-s-[#7065F0]" : ''}`}>Notifications</p>
                    </div>



                    {/* profile section start */}
                    {value === 'p' && <div className=" bg-white mb-20 p-6 rounded-lg flex-grow w-full lg:max-w-[630px] border-2 border-[#E0DEF7]">
                        <p className="text-xl font-bold">Personal Info</p>
                        <p className="font-medium mt-6 mb-4">Avatar</p>
                        <div className="flex gap-6 items-center mb-6 pb-6 border-b-2">
                            <div>
                                <img className="bg-[#E0DEF7] p-6 rounded-full" src={profileImg} alt="" />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 ">
                                <button className="btn bg-[#7065F0] w-[155px] lg:w-[105px] text-white">Upload</button>
                                <button className="btn border-2 w-[155px] lg:w-[105px] border-[#E0DEF7] bg-transparent text-[#7065F0]">Remove</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <p className="font-medium text-sm mb-2">Display Name <span className="opacity-50">(Visible to others)</span></p>
                                <input defaultValue={userData?.first_name} type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-2">Name<span className="opacity-50"> (Your given name)</span></p>
                                <input defaultValue={userData?.last_name} type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <p className="font-medium text-sm mb-2">Number</p>
                                <PhoneInput
                                    className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg"
                                    international
                                    defaultCountry="US"
                                    value={con.phone}
                                    onChange={p => setCon({ p })}
                                />
                            </div>
                        </div>
                        <p className="mt-6 text-sm font-medium">Reviews</p>
                        <p className="text-sm font-medium mt-2 mb-4 opacity-60">Manage the reviews you’ve written for professionals, rentals, and more.</p>
                        <p className="font-medium mb-6 pb-6 border-b-2 text-[#7065F0]">Manage</p>
                        <div className="text-right">
                            <button className="btn bg-[#7065F0]  text-white w-full lg:w-[156px]">Save changes</button>
                        </div>
                    </div>}
                    {/* profile section end */}


                    {/* my account section start */}
                    {value === 'a' && <div className=" bg-white mb-20 p-6 rounded-lg flex-grow w-full lg:max-w-[630px] border-2 border-[#E0DEF7]">
                        <p className="text-xl font-bold">Personal Info</p>
                        <p className="text-sm font-medium mb-2 mt-9">Email</p>
                        <div className="relative">
                            <input defaultValue={'francis@gmail.com'} type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                            <p className="absolute top-4 right-3 text-[#7065F0] font-bold text-sm ">Verify</p>
                        </div>
                        <p className="text-sm font-medium mb-2 mt-6">Password</p>
                        <div className="relative">
                            <input defaultValue={'Change Password'} disabled type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
                            <img src={arrowDown} className="absolute right-3 top-4 -rotate-90" alt="" />
                        </div>
                        <div className="mt-6 mb-6 pb-6 border-b-2">
                            <div className="flex justify-between">
                                <p className="text-sm font-medium">Enable 2-steps verification</p>
                                <input type="checkbox" className="toggle toggle-primary" />
                            </div>
                            <p className="text-sm opacity-70 mt-2">Make your account extra secure. Along with your password, you’ll need to enter a code that we text to your phone each time you sign in.</p>
                        </div>
                        <p className="font-bold">Linked Accounts</p>
                        <p className=" mt-2 opacity-80 text-sm">We use this to let you sign in easily.</p>
                        <div className="mt-4 mb-6 pb-6 border-b-2 flex items-center justify-between">
                            <p className="font-medium text-sm flex items-center gap-4"><img src={google} alt="" />Sign in with Google</p>
                            <button className="btn border-2  border-[#E0DEF7] bg-transparent text-[#7065F0]">Remove</button>
                        </div>
                        <div className="mt-4 mb-6 pb-6 border-b-2 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                            <div>
                                <p className="font-bold">Delete Account</p>
                                <p className=" mt-2 opacity-80 text-sm">Delete your account and all the data</p>
                            </div>
                            <button className="btn border-2 w-[130px]  border-red-400 bg-transparent text-red-400">Remove</button>
                        </div>
                        <div className="text-right">
                            <button className="btn bg-[#7065F0]  text-white w-full lg:w-[156px]">Save changes</button>
                        </div>
                    </div>}
                    {/* my accout sectioon end */}



                    {/* notification section start */}
                    {value === 'n' && <div className=" bg-white mb-20 p-6 rounded-lg flex-grow w-full lg:max-w-[630px] border-2 border-[#E0DEF7]">
                        <p className="text-xl font-bold">Notifications</p>
                        <div className="mt-6 mb-6 pb-6 border-b-2 ">
                            <p className="font-bold mb-4">General</p>
                            <div className="flex justify-between">
                                <p className="text-sm font-medium">Get notifications from estatery to stay up-to-date.</p>
                                <input type="checkbox" className="toggle toggle-primary" />
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b-2 ">
                            <p className="font-bold mb-4">Rent Reminder</p>
                            <div className="flex items-center  gap-4">
                                <input type="checkbox" checked className="checkbox checkbox-primary" />
                                <p className="font-medium">When your tenant’s rent due date is approaching</p>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b-2 ">
                            <p className="font-bold mb-4"> Payments</p>
                            <div className="flex items-center mb-4 gap-4">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <p className="font-medium">When tenant’s payments are overdue</p>

                            </div>
                            <div className="flex items-center  gap-4">
                                <input type="checkbox" checked className="checkbox checkbox-primary" />
                                <p className="font-medium">Notification about payment status</p>

                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b-2 ">
                            <p className="font-bold mb-4">Email Newsletter</p>
                            <div className="flex items-center  gap-8">
                                <div className="flex gap-4 items-center">
                                    <input type="radio" name="radio-1" className="radio radio-primary" />
                                    <p>on</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <input type="radio" name="radio-1" className="radio radio-primary" checked />
                                    <p>off</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="btn bg-[#7065F0]  text-white w-full lg:w-[156px]">Save changes</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default SettingProfile;