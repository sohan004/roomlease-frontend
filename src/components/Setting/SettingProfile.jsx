import { FaArrowLeft, FaChessKing, FaEdit, FaSave } from "react-icons/fa";
import logo from '../../assets/settingIcon/Frame.svg'
import ball from '../../assets/settingIcon/Icon.svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import profileImg from '../../assets/settingIcon/Icon (2).svg'
import google from '../../assets/settingIcon/google.svg'
import { useEffect, useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useLocation } from "react-router-dom";
import { baseURL } from "../../App";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { BiSolidSelectMultiple } from "react-icons/bi";
import DigitalVerify from "../DigitalVerify/DigitalVerify";
import moment from "moment";


const SettingProfile = () => {
    const { userData, listing, setListing, setUserData, setRefresh, setUserDataRefresh, refresh, listingLoading, searchDrpopDown, setSearchDrpopDown } = useContext(AuthContext)
    const [value, setValue] = useState('p')
    const [con, setCon] = useState({ phone: userData?.username })
    const [profilePicture, setProfilePicture] = useState(null)
    const [nameEdit, setNameEdit] = useState(false)
    const [name, setName] = useState(userData?.full_name)
    const [dateOBEdit, setDateOBEdit] = useState(false)
    const [dateOB, setDateOB] = useState(userData?.dob)
    const [email, setEmail] = useState(userData?.email)
    const [emailEdit, setEmailEdit] = useState(false)


    const cngEmail = () => {
       

        fetch(`${baseURL}/account/change-email/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmailEdit(false)
                setUserDataRefresh(prev => prev + 1)
            })
    }

    const quary = new URLSearchParams(useLocation().search)
    const tw = quary.get('r')

    useEffect(() => {
        if (tw) {
            setValue('n')
        }
    }, [])



    const fullNameUpdate = () => {
        const useObjectData = userData
        useObjectData.full_name = name ? name : userData.full_name

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setNameEdit(false)
                setUserDataRefresh(prev => prev + 1)
            })
    }

    const dateOBFunction = () => {
        const useObjectData = userData
        useObjectData.dob = dateOB ? dateOB : userData.dob

        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setDateOBEdit(false)
                setUserDataRefresh(prev => prev + 1)
            })
    }

    const changeProfilePicture = () => {
        if (!profilePicture) {
            toast.error('Please select a picture', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        }
        const formData = new FormData()
        formData.append('profile_picture', profilePicture)
        fetch(`${baseURL}/account/change-profile-picture/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    window.upload_profile_img2.close()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Profile picture changed successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setUserDataRefresh(prev => prev + 1)
                }
                else if (data.message) {
                    toast.error(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                } else if (data.detail === "Invalid token.") {
                    window.upload_img.close()
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please login again',
                    })
                    localStorage.removeItem('user-token')
                    window.location.href = '/'
                }
                else {
                    toast.error('Something went wrong', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            })

    }

    const activeStatusCng = (t) => {
        let userOb = userData
        userOb.active = t
        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userOb)
        })
            .then(res => res.json())
            .then(data => {
                setUserDataRefresh(prev => prev + 1)
            })
    }


    const chgNotification = (t, keyName) => {
        const useObjectData = userData
        useObjectData[keyName] = t
        fetch(`${baseURL}/account/api/profile/${userData.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(useObjectData)
        })
            .then(res => res.json())
            .then(data => {
                setUserDataRefresh(prev => prev + 1)
            })
    }


    const deleteAccount = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't delete your account!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`${baseURL}/account/delete-account/`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Token ${localStorage.getItem('user-token')} `
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setListing(null)
                        setUserData(null)
                        localStorage.removeItem('user-token')
                        window.location.href = '/'
                        // if (data) {
                        //     Swal.fire({
                        //         position: 'top-center',
                        //         icon: 'success',
                        //         title: 'Account deleted successfully',
                        //         showConfirmButton: false,
                        //         timer: 1500
                        //     })
                        //     localStorage.removeItem('user-token')
                        //     window.location.href = '/'
                        // }
                        // else {
                        //     Swal.fire({
                        //         position: 'top-center',
                        //         icon: 'error',
                        //         title: 'Something went wrong',
                        //         showConfirmButton: false,
                        //         timer: 1500
                        //     })
                        // }
                    })
            }
        })


    }


    return (
        <div className="bg-[#F7F7FD]">

            <div className="bg-white">
                <div className=" max-w-[1440px] mx-auto px-4 lg:hidden">
                    <div className="flex ">
                        <p onClick={() => setValue('p')} className={`text-sm  ${value === 'p' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>Profile</p>
                        {/* <p onClick={() => setValue('a')} className={`text-sm  ${value === 'a' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>My Account</p> */}
                        <p onClick={() => setValue('n')} className={`text-sm  ${value === 'n' ? 'font-bold border-b-4 border-[#7065F0]' : ''} py-3 flex-grow text-center`}>Notifications</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">

                <div className="pt-10 flex flex-col lg:flex-row gap-44">
                    <div className="hidden lg:block">
                        <p onClick={() => setValue('p')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'p' ? "border-s-4 border-s-[#7065F0]" : ''}`}>Profile</p>
                        {/* <p onClick={() => setValue('a')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'a' ? "border-s-4 border-s-[#7065F0]" : ''}`}>My Account</p> */}
                        <p onClick={() => setValue('n')} className={`py-4 ps-5 pe-20 cursor-pointer border-b-2 ${value === 'n' ? "border-s-4 border-s-[#7065F0]" : ''}`}>Notifications</p>
                    </div>



                    {/* profile section start */}
                    {value === 'p' && <div className=" bg-white mb-20 p-6 rounded-lg flex-grow w-full lg:max-w-[630px] border-2 border-[#E0DEF7]">
                        <p className="text-xl font-bold">Personal Info</p>
                        <p className="font-medium mt-6 mb-4">Avatar</p>
                        <div className="flex gap-6 items-center mb-6 pb-6 border-b-2">
                            <div>
                                <img className="bg-[#E0DEF7]  rounded-full h-20 w-20" alt="" src={userData?.profile_picture ? userData?.profile_picture : profileImg} />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 ">
                                <button onClick={() => window.upload_profile_img2.showModal()} className="btn btn-sm bg-[#7065F0] w-[155px] lg:w-[105px] hover:bg-[#5047aa] text-white">Upload</button>
                                {/* <button onClick={removePhoto} className="btn btn-sm border-2 w-[155px] lg:w-[105px] border-[#E0DEF7] bg-transparent text-[#7065F0]">Remove</button> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-8">
                            <div>
                                <p className="font-medium text-sm mb-1">Full Name</p>
                                <h1 className='font-semibold flex  items-center gap-2 '>
                                    {!nameEdit && userData?.full_name}
                                    {nameEdit && <input type="text" defaultValue={userData.full_name} onChange={(e) => setName(e.target.value)} className='border p-2  outline-none  text-center w-full' />}
                                    {!nameEdit && <FaEdit onClick={() => setNameEdit(true)} className={`text-2xl text-[#7065F0] cursor-pointer ${userData?.verified && 'hidden'}`} />}
                                    {nameEdit && <FaSave onClick={() => fullNameUpdate()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                                </h1>
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-1">Date Of Birth</p>
                                <h1 className=' flex font-semibold items-center gap-2  mt-2 '>
                                    {!dateOBEdit && <span>{userData?.dob ? moment(userData?.dob).format('Do MMMM YYYY') : 'date of birth'}</span>}
                                    {dateOBEdit && <input placeholder='YYYY-MM-DD' type="date" defaultValue={userData?.dob} onChange={(e) => setDateOB(e.target.value)} className='border p-2  outline-none  text-center w-full' />}
                                    {!dateOBEdit && <FaEdit onClick={() => setDateOBEdit(true)} className={`text-2xl text-[#7065F0] cursor-pointer ${userData?.verified && 'hidden'}`} />}
                                    {dateOBEdit && <FaSave onClick={() => dateOBFunction()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                                </h1>
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-1">Phone</p>
                                <h1 className="font-semibold">+{userData?.username}</h1>
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-1">Email</p>
                                <h1 className='font-semibold flex  items-center gap-2 '>
                                    {!emailEdit && userData?.email}
                                    {emailEdit && <input type="text" defaultValue={userData.email} onChange={(e) => setEmail(e.target.value)} className='border p-2  outline-none  text-center w-full' />}
                                    {!emailEdit && <FaEdit onClick={() => setEmailEdit(true)} className={`text-2xl text-[#7065F0] cursor-pointer`} />}
                                    {emailEdit && <FaSave onClick={() => cngEmail()} className='text-4xl text-[#7065F0] cursor-pointer' />}
                                </h1>
                            </div>
                            {/* <div className="col-span-1 lg:col-span-2">
                                <p className="font-medium text-sm mb-2">Number</p>
                                <PhoneInput
                                    className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg"
                                    international
                                    defaultCountry="AU"
                                    value={con.p}
                                    onChange={p => setCon({ p })}
                                />
                            </div> */}
                        </div>
                        <div className='px-4 lg:px-6 py-6 bg-white bg-opacity-50  border-2 rounded-md '>
                            <h1 className='text-lg: lg:text-xl font-semibold'>Why Digital iD verification by Australia Post?</h1>
                            <p className='mt-4 font-light'>Stand out as a verified member and join a community that values safety, integrity, and transparency.</p>
                            {userData?.verified ? <h1 className='text-xl font-medium flex items-center gap-2 mt-4'><BiSolidSelectMultiple className='text-2xl text-blue-500'></BiSolidSelectMultiple> Digital ID Verified</h1> : <DigitalVerify></DigitalVerify>}
                        </div>
                        {userData?.subscription == 'Free' && <>
                            <Link to={userData?.account_type == 'homeowner' ? '/homeowner-pricing' : '/roomseeker-pricing'}><button className='btn border-0 block hover:bg-[#4e46a1] bg-[#7065F0] text-white mt-7 w-full'>upgrade</button></Link>
                            <div className="text-center">
                                <Link to="/Benifits-of-upgrade" className='text-xs mx-auto text-center lg:text-sm mt-2 text-[#7065F0]'>Benefits of upgrade?</Link>
                            </div>
                        </>}


                        <div>
                            <p className="font-bold mt-7">Account Status</p>

                            <div className='mt-2 flex flex-col lg:flex-row gap-x-7 gap-y-4'>
                                <p onClick={() => {
                                    activeStatusCng(true)
                                }} className='flex items-center gap-2 '><input type="radio" className="radio radio-primary" checked={userData?.active} />Active</p>
                                <p onClick={() => {
                                    activeStatusCng(false)
                                }} className='flex items-center gap-2 '><input type="radio" className="radio radio-primary" checked={!userData?.active} />Deactive</p>
                            </div>
                        </div>

                        <div className="mt-6 mb-6 pb-6 border-b-2 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                            <div>
                                <p className="font-bold">Delete Account</p>
                                <p className=" mt-2 opacity-80 text-sm">Delete your account and all the data</p>
                            </div>
                            <button onClick={deleteAccount} className="btn border-2 w-[130px]  border-red-400 bg-transparent text-red-400">Remove</button>
                        </div>

                    </div>}
                    {/* profile section end */}


                    {/* my account section start */}
                    {value === 'a' && <div className=" bg-white mb-20 p-6 rounded-lg flex-grow w-full lg:max-w-[630px] border-2 border-[#E0DEF7]">
                        <p className="text-xl font-bold">Personal Info</p>
                        <p className="text-sm font-medium mb-2 mt-9">Email</p>
                        <div className="relative">
                            <input defaultValue={userData.email} type="text" name="" className="w-full py-3 px-4 border-2 border-[#E0DEF7] rounded-lg" />
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
                            <div className="flex justify-between">
                                <p className="text-sm font-medium">Send email when someone messages you?</p>
                                <input
                                    onClick={e => chgNotification(e.target.checked, 'send_message_email')}
                                    type="checkbox" checked={userData?.send_message_email} className="toggle toggle-primary" />
                            </div>
                        </div>
                        <div className="mt-6 mb-6 pb-6 border-b-2 ">
                            <div className="flex justify-between">
                                <p className="text-sm font-medium">Send email when a listing matches?</p>
                                <input
                                    onClick={e => chgNotification(e.target.checked, 'send_match_email')}
                                    type="checkbox" checked={userData?.send_match_email} className="toggle toggle-primary" />
                            </div>
                        </div>

                    </div>}
                </div>


                <dialog id="upload_profile_img2" className="modal">
                    <div method="dialog" className="modal-box">
                        <div className="flex flex-col items-center gap-7 mb-14">
                            <h3 className="font-bold font-mono text-lg text-center">Upload Profile Picture</h3>
                            <input onChange={e => setProfilePicture(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className="modal-action mt-7">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => changeProfilePicture()} className="btn border-0 btn-primary">save changes</button>
                            <button onClick={() => window.upload_profile_img2.close()} className="btn">Close</button>
                        </div>
                    </div>
                </dialog>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SettingProfile;