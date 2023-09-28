import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight, FaCross, FaSpinner, FaWindowClose } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input'
import OTPInput, { ResendOTP } from "otp-input-react";
import Swal from 'sweetalert2';
import { baseURL } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { formatPhoneNumberIntl } from 'react-phone-number-input'


const OtpSend = () => {
    const [con, setCon] = useState('+61')
    const [seconds, setSeconds] = useState(120);
    const [sec, setSec] = useState(120);
    const [timer, setTimer] = useState(false);
    const [otp, setOtp] = useState('')
    const [err, setErr] = useState('')
    const [verifyStatus, setVerifyStatus] = useState(false)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const { listing, setLoading, setRefresh, refresh } = useContext(AuthContext)

    useEffect(() => {
        if (!timer) return
        let intervalId;

        intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
            setSec(prevSec => prevSec - 1);
        }, 1000);

        if (sec === 0) {
            setTimeout(() => {
                setTimer(false)
                setSeconds(120)
                setSec(120)
            }, 1000);
        }

        return () => {

            clearInterval(intervalId);
        };
    }, [seconds, timer]);

    const sendOtp = () => {
        setLoad(true)
        if (!con) {
            setLoad(false)
            Swal.fire(
                'Please Type Your Phone Number',
                '',
                'error'
            )
            return
        }
        fetch(`${baseURL}/account/phone/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: con
            })
        })
            .then(res => res.json())
            .then(data => {
                setLoad(false)
                if (data.success) {
                    window.send_otp.showModal()
                    setTimer(true)
                    setSec(120)
                }
                else {
                    setLoad(false)
                    Swal.fire(
                        data.message,
                        '',
                        'error'
                    )
                }
            })
    }
    const verifyOtp = (e) => {
        setOtp(e)
        setErr('')
        if (e.length === 4) {
            setVerifyStatus(true)
            fetch(`${baseURL}/account/verify-phone/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    otp: e,
                    phone_number: con
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {

                        localStorage.setItem('user-token', data.token)
                        setLoading(true)
                        window.send_otp.close()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: `<h5 style='color:#7065F0'>Code verified</h5>`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setRefresh(refresh + 1)
                        setErr('')
                        navigate('/register')
                        setVerifyStatus(false)
                    }
                    else {
                        setVerifyStatus(false)
                        setErr(data.message)
                    }
                })
            return
        }
    }
    const resend = () => {
        fetch(`${baseURL}/account/phone/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: con
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTimer(true)
                }
                else {
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
                }
            })
    }
    
    return (
        <div className="px-4 max-w-[550px] mx-auto">
            <p className="font-bold text-2xl mb-4 mt-12 lg:mt-16">Mobile number: </p>

            <PhoneInput
            
                className="w-full py-3 px-4 border-b border-black bg-white"
                international
                 usenationalFormatForDefaultCountryValue={true}
                inputClassName="focus:outline-none bg-white border-0 w-full p-2"
                defaultCountry="AU"
                value={con}
                onChange={p => {
                    console.log(formatPhoneNumberIntl(p));
                    if (p) {
                        setCon(p)
                    }
                    else {
                        setCon('')
                    }
                }}
            />
            <div className='text-center mb-44 mt-16'>
                <button disabled={load ? true : false} onClick={sendOtp} className="w-full hover:bg-[#454094] bg-[#7065F0] text-white btn border-0">{load ? <FaSpinner className='text-xl animate-spin'></FaSpinner> : ''} Continue <FaArrowRight /></button>
            </div>
            <dialog id="send_otp" className="modal">
                <div method="dialog" className="modal-box max-w-[640px] bg-white p-0 rounded-3xl relative text-[#100A55] ">
                    <FaWindowClose onClick={() => window.send_otp.close()} className='absolute text-[#100A55]  top-4 text-3xl cursor-pointer left-4'></FaWindowClose>
                    <h1 className="text-2xl mt-7 text-center text-[#100A55] lg:text-4xl">Enter Code</h1>
                    <p className='text-center font-medium my-4 text-red-500'>{err}</p>
                    <div className="p-6 mb-7   lg:mb-5">
                        <h1 className='text-center  text-2xl lg:text-5xl mb-14'>{sec}</h1>
                        <div className=' max-w-[500px] mx-auto text-center '>
                            <div>
                                <OTPInput
                                    inputClassName='border-2 text-black bg-white rounded py-6 border-[#100A55] focus:outline-none flex-grow'
                                    className="text-center flex justify-center w-full max-w-[300px] mx-auto"
                                    value={otp} onChange={e => {
                                        verifyOtp(e)

                                    }}
                                    autoFocus OTPLength={4}
                                    otpType="number"
                                    disabled={verifyStatus}
                                />
                                <div className='text-center mt-5'>
                                    <button disabled={sec != 120} onClick={resend} className="btn btn-sm border-0  hover:bg-[#484196] bg-[#7065F0] text-white">Resend Code</button>

                                </div>
                            </div> </div>
                    </div>

                </div>
            </dialog>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default OtpSend;