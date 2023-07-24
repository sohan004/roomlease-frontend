import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input'
import OTPInput, { ResendOTP } from "otp-input-react";


const OtpSend = () => {
    const [con, setCon] = useState({ phone: '' })
    const [seconds, setSeconds] = useState(0);
    const [OTP, setOTP] = useState('')

    console.log(seconds);

    useEffect(() => {
        if (seconds === 0) return
        let intervalId;

        if (seconds < 20) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        if (seconds === 20) {
            setTimeout(() => {
                setSeconds(0)
            }, 1000);
        }

        return () => {

            clearInterval(intervalId);
        };
    }, [seconds]);

    const startTimer = () => {

        setSeconds(1);
    };

    return (
        <div className="px-4 max-w-[550px] mx-auto">
            <h1 className="text-2xl mt-8 lg:mt-12 lg:text-4xl font-medium">Enter your mobile phone number to verify or create an account </h1>
            <p className="mt-3">VOIP numbers are not excepted.</p>
            <p className="font-bold mt-10">Phone Number: </p>
           
            <PhoneInput
                className="w-full py-3 px-4 border-b border-black"
                international
                defaultCountry="AU"
                value={con.phone}
                onChange={p => setCon({ p })}
            />
            <div className='text-center mb-44 mt-16'>
                <button onClick={() => {
                    window.send_otp.showModal()
                    setSeconds(1)
                }} className='btn  hover:bg-[#4e46a1] w-3/4 bg-[#7065F0] text-white '>Continue <FaArrowRight /></button>
            </div>
            <dialog id="send_otp" className="modal">
                <div method="dialog" className="modal-box max-w-[640px] p-0 rounded-3xl ">
                    <div className="text-center py-3 px-16 lg:px-28 shadow-lg bg-[#969de0] font-medium ">
                        <h1 className="text-xs lg:text-2xl">Enter OTP</h1>
                    </div>
                    <div className="p-6 mb-7 mt-4  lg:my-16">
                        <h1 className='text-center text-5xl lg:text-7xl mb-7'>{seconds}</h1>
                        <div className='flex flex-col gap-8 justify-center items-center text-center'>
                            <div>
                            <p className='text-left text-xs mb-2'>Time 20 second</p>
                                <OTPInput
                                    inputClassName='border-2 rounded py-4 border-black flex-grow'
                                    className="text-center flex justify-center w-full"
                                    value={OTP} onChange={setOTP}
                                    autoFocus OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                />
                                <div className='text-right mt-5'>
                                    <button onClick={()=>setSeconds(1)} disabled={seconds === 0 ? false : true} className="btn btn-sm  hover:bg-[#484196] bg-[#7065F0] text-white">Resend</button>
                                </div>
                            </div>
                            <button disabled={seconds === 0 ? true : false} className="w-[150px] hover:bg-[#484196] bg-[#7065F0] text-white btn">Verify OTP</button>
                        </div>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default OtpSend;