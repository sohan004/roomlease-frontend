import { Link } from 'react-router-dom';
import google from '../../assets/login-signup-icon/Frame.svg'
import ico1 from '../../assets/sec3Icon/Bath.svg'
import ico2 from '../../assets/sec3Icon/Bed.svg'
import ico3 from '../../assets/sec3Icon/Frame (1).svg'
import ico4 from '../../assets/sec3Icon/Frame.svg'
import ico9 from '../../assets/sec3Icon/Square Meters.svg'
import img from '../../assets/sec3Icon/dillon-kydd-XGvwt544g8k-unsplash 1.png'
import kona from '../../assets/sec3Icon/Vector 2.svg'
import shp1 from '../../assets/login-signup-icon/Shape (1).png'
import shp2 from '../../assets/login-signup-icon/Shape.png'
import shp3 from '../../assets/login-signup-icon/Shape.svg'
import book from '../../assets/login-signup-icon/Icon (1).svg'
import arrow from '../../assets/login-signup-icon/Icon.svg'
import eye from '../../assets/login-signup-icon/eye.svg'
import logo from '../../assets/Frame.svg'
import { useState } from 'react';
import { baseURL } from '../../App';
import Swal from 'sweetalert2';
import { FaSpinner } from 'react-icons/fa';
import OTPInput, { ResendOTP } from "otp-input-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {
    const p = {
        id: 1,
        price: 1800,
        name: 'Hotel Relax',
        address: '12/1200 Mohakhali Dhaka',
        bed: 3,
        bath: 2,
        size: '5 x 7',
    }

    const [isTenant, setIsTenant] = useState(true)
    const [fullName, setFullName] = useState('')
    const [subUrb, setSubUrb] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [spareRoom, setSpareRoom] = useState('')
    const [load, setLoad] = useState(false)
    const [OTP, setOTP] = useState('')
    const [otpLoad, setOtpLoad] = useState(false)


    const handleSignup = () => {
        setLoad(true)
        if (fullName === '' || subUrb === '' || email === '' || password === '' || confirmPass === '') {
            Swal.fire(
                'Please fill all the fields',
                '',
                'error'
            )
            setLoad(false)
            return
        }
        else if (password !== confirmPass) {
            Swal.fire(
                'Password and confirm password does not match',
                '',
                'error'
            )
            setLoad(false)
            return
        }
        else if (password.length < 6) {
            Swal.fire(
                'Password must be at least 6 characters',
                '',
                'error'
            )
            setLoad(false)
            return
        }

        fetch(`${baseURL}/account/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                full_name: fullName,
                suburb: subUrb,
                email: email,
                password: password,
                confirm_password: confirmPass
            })
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.success) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Signup successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setLoad(false)
                    localStorage.setItem('room-lease-token', data.token)
                    window.otp_modal.showModal()

                }
                else if (data.message) {
                    Swal.fire(
                        data.message,
                        '',
                        'error'
                    )
                    setLoad(false)
                } else {
                    Swal.fire(
                        'Signup failed',
                        '',
                        'error'
                    )
                    setLoad(false)
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire(
                    'Signup failed',
                    '',
                    'error'
                )
                setLoad(false)
            })
    }

    const verifyOTP = () => {
        setOtpLoad(true)
        if (OTP.length < 6) {
            toast.error('Please fill all the fields', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setOtpLoad(false)
            return
        }
        fetch(`${baseURL}/account/verify-otp/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "otp": OTP,
                "email": email
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.success) {
                    toast.error(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setOtpLoad(false)
                    return
                }
                if (data.success) {
                    setOtpLoad(false)
                    window.otp_modal.close()
                    window.location.href = '/setting_profile'
                }
            })
    }

    return (
        <div>
            <div className="flex  flex-col lg:flex-row">
                <div className="w-full lg:w-2/4 pt-12 lg:pt-20 flex justify-center">
                    <div>
                        <h1 className="text-3xl font-bold text-center lg:text-left
                    ">Welcome back</h1>
                        <p className="mb-8 mt-2 text-center lg:text-left">Welcome back! Please enter your details.</p>

                        <p className="text-sm font-medium mb-2">Full Name</p>
                        <input type="text" name="" className="w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] " placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                        <p className="text-sm font-medium mb-2 mt-4">Suburb</p>
                        <input type="text" name="" className="w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] " placeholder="Suburb" value={subUrb} onChange={(e) => setSubUrb(e.target.value)} />

                        <p className="text-sm font-medium mb-2 mt-4">Email</p>
                        <input type="email" name="" className="w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] " placeholder="hi@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <p className="text-sm font-medium mb-2 mt-4">Password</p>
                        <div className='relative'>
                            <input type="password" name="" className="w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] " placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {/* <img src={eye} className='absolute right-5 top-2/4 -translate-y-2/4' alt="" /> */}
                        </div>

                        <p className="text-sm font-medium mb-2 mt-4">Confirm Password</p>
                        <div className='relative'>
                            <input type="password" name="" className="w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] " placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                            {/* <img src={eye} className='absolute right-5 top-2/4 -translate-y-2/4' alt="" /> */}
                        </div>

                        <div className='mt-2 flex items-center justify-between'>
                            <p className='text-sm opacity-70'>Must be at least 8 characters.</p>
                            <p className="  text-sm font-medium text-[#7065F0] ">Forgot Password?</p>
                        </div>

                        {!isTenant &&
                            <>
                                <p className="text-sm font-medium mb-2 mt-4">Number of spare rooms </p>
                                <select name="" className='w-full rounded-lg bg-[#F7F7FD] border py-3 px-4 border-[#E0DEF7] ' value={spareRoom} onChange={(e) => setSpareRoom(e.target.value)}>
                                    <option value="" selected>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </>}

                        <p className='my-8 flex items-center gap-2'><input type="checkbox" name="" className='border ' checked={isTenant} onChange={() => setIsTenant(!isTenant)} />
                            I am a Tenant
                        </p>

                        <button disabled={load ? true : false} onClick={handleSignup} className="w-full hover:bg-[#484196] bg-[#7065F0] text-white btn">{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} Sign Up</button>
                        <button className="w-full bg-transparent border border-[#E0DEF7] mt-4 mb-8 btn"><img src={google} alt="" />Continue with Google</button>
                        <p className='text-sm opacity-80 text-center'>Already have an account? <Link className='font-bold border-b border-black' to="/sign-in"> Login</Link></p>
                    </div>
                </div>
                <div className="w-full lg:w-2/4 bg-[#F7F7FD] overflow-hidden hidden lg:flex justify-center items-center py-32 relative">
                    <img src={shp2} className='absolute top-0 left-0 w-[47%] -z-0' alt="" />
                    <div className=' z-10' >
                        <div className=' border rounded-lg bg-white  relative  border-[#F0EFFB] '>
                            <img src={shp1} className='absolute w-28 -rotate-90 right-full top-11' alt="" />
                            <img src={shp3} className='absolute w-12   -top-16 left-36 -rotate-[135deg]' alt="" />

                            <img src={img} className='w-full rounded-lg p-6 -z-0' alt="" />
                            <div className='bg-[#7065F0]  text-white relative -mt-9 -left-2  flex items-center gap-1 p-2 w-28 rounded-e-lg rounded-ss-lg'>
                                <img src={ico4} alt="" />
                                <p className='font-medium'>POPULAR</p>
                                <img src={kona} className='absolute top-full -left-0' alt="" />
                            </div>
                            <div className='px-6 pt-6 pb-8'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-xl font-bold my-2'>{p.name}</h1>
                                        <h1 className='text-base font-medium text-gray-500 pb-4  '>{p.address}</h1>
                                    </div>
                                    <img src={ico3} className='border p-3 rounded-full' alt="" />
                                </div>

                                <p className='my-4 h-[2px] bg-slate-100'></p>

                                <div className='flex items-center justify-between'>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico1} alt="" />{p.bed} Beds</p>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico2} alt="" />{p.bath} Bathroom</p>
                                    <p className='font-medium text-slate-600 text-xs md:text-base flex items-center gap-2'><img src={ico9} alt="" />{p.size} m<sup>2</sup></p>
                                </div>

                                <div className='mt-4 p-4 bg-[#F7F7FD] border rounded-xl border-[#E0DEF7] flex justify-between items-center'>
                                    <div>
                                        <p className='mb-2 font-bold'>Rent Sale</p>
                                        <h1 className='text-2xl font-bold text-[#7065F0]'>${p.price}<span className='text-base font-medium text-gray-500'>/month</span></h1>
                                    </div>
                                    <button className='bg-[#100A55] btn text-white '><img src={book} alt="" />Apply now <img src={arrow} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <p className='font-semibold text-sm mt-20 flex gap-2 items-center mb-4'>Powered by <img src={logo} alt="" /></p>
                        <p className='text-xs w-80'>You agree to Estatery's <span className='text-[#7065F0]'>Terms of Use & Privacy Policy</span> . You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                    </div>
                </div>
                {/* otp modal start */}
                <dialog id="otp_modal" className="modal">
                    <div method="dialog" className="modal-box max-w-[640px] p-0 rounded-3xl ">
                        <div className="text-center py-3 px-16 lg:px-28 shadow-lg bg-[#969de0] font-medium ">
                            <h1 className="text-xs lg:text-2xl">See, an OTP has been sent to your mail. Verify your account by submitting the OTP here</h1>
                        </div>
                        <div className="p-6 mb-7 mt-16 lg:my-28">
                            <div className='flex flex-col gap-14 justify-center items-center text-center'>
                                <OTPInput
                                    inputClassName='border-b-2 border-black flex-grow'
                                    className="text-center flex justify-center w-full"
                                    value={OTP} onChange={setOTP}
                                    autoFocus OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                />
                                <button  disabled={otpLoad ? true : false} onClick={verifyOTP} className="w-[150px] hover:bg-[#484196] bg-[#7065F0] text-white btn">{otpLoad ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} Verify OTP</button>
                            </div>
                        </div>

                    </div>
                </dialog>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;