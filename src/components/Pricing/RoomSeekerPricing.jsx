import React from 'react';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const RoomSeekerPricing = () => {
    const [value, setValue] = useState(1)
    const navigate = useNavigate()
    return (
        <div>
            <div className="min-h-screen pb-28 sm:pb-0">
                <div className=" ">
                    <div className="max-w-7xl min-h-screen mx-auto p-4 sm:p-10 ">

                        <div className="flex flex-col lg:flex-row justify-center items-center  gap-8 lg:gap-0 lg:mt-4">
                            <div
                                onMouseEnter={() => setValue(2)}
                                onMouseLeave={() => setValue(1)}
                                className={` mb-6  duration-500 w-full  bg-white rounded-xl shadow-xl ${value === 2 ? 'relative scale-110 lg:w-[35%] border-2  border-[#7065F0] z-10' : 'lg:w-[30%] lg:scale-95'}`}>
                                <div className="text-center p-12">
                                    <p className="text-3xl lg:text-2xl xl:text-3xl pb-4">Free</p>
                                    <div className="flex justify justify-center items-center">
                                        <span className={`duration-300 font-extrabold ${value === 2 ? ' text-5xl lg:text-4xl xl:text-5xl' : 'text-4xl'}  align-text-middle pe-2`}>$ 00</span>
                                        <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">/month</span>
                                    </div>
                                </div>
                                <div className={`${value === 2 ? 'bg-[#7065F0]' : 'bg-[#aea9dd]'}  duration-500 rounded-b-xl border-t-2 border-gray-200/20 p-10`}>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-2">
                                            <RxCross2 className="text-2xl"></RxCross2>
                                            <span className="text-gray-100">Suitability Match</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <RxCross2 className="text-2xl"></RxCross2>
                                            <span className="text-gray-100">Highlight Listing</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <RxCross2 className="text-2xl"></RxCross2>
                                            <span className="text-gray-100">Mobile SMS notification</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <RxCross2 className="text-2xl"></RxCross2>
                                            <span className="text-gray-100">Featured listing on website</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <RxCross2 className="text-2xl"></RxCross2>
                                            <span className="text-gray-100">Digital Id verification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Duration of listing	30 days	</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Enlist background verification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Instant messaging	</span>
                                        </li>
                                    </ul>
                                    <button onClick={()=>navigate('/profile')} type="button" className="w-full text-center bg-white text-lg text-indigo-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-600">Start your trial</button>
                                </div>
                            </div>
                            <div className={` mb-6  duration-500 w-full  bg-white rounded-xl shadow-xl    ${value === 1 ? 'relative scale-110 lg:w-[35%] border-2 z-10  border-[#7065F0]' : 'lg:w-[30%] lg:scale-95'}`}>
                                <div className="text-center p-12">
                                    <p className="text-3xl lg:text-2xl xl:text-3xl pb-4 font-semibold">Best value</p>
                                    <div className="flex justify justify-center items-center">
                                        <span className={`duration-300 font-extrabold ${value === 1 ? ' text-5xl lg:text-4xl xl:text-5xl' : 'text-4xl'}  align-text-middle pe-2`}>  $19.99</span>
                                        <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">/  ONE TIME	</span>
                                    </div>
                                </div>
                                <div className={`${value === 1 ? 'bg-[#7065F0]' : 'bg-[#aea9dd]'} duration-500 rounded-b-xl border-t-2 border-gray-200/20 p-10`}>
                                    <ul className="space-y-4">
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Suitability Match </span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Highlight Listing</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Mobile SMS notification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Featured listing on website</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Digital Id verification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Duration Until you find it</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Enlist background verification
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Instant messaging</span>
                                        </li>
                                    </ul>
                                    <button type="button" className="w-full text-center bg-white text-lg text-indigo-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-600">Start your trial</button>
                                </div>
                                <div className="absolute rounded-full w-40 bg-indigo-600 text-white text-center text-sm tracking-wider px-4 py-1 -top-3 inset-x-0 mx-auto">MOST POPULAR</div>
                            </div>
                            <div onMouseEnter={() => setValue(3)}
                                onMouseLeave={() => setValue(1)}
                                className={` mb-6  duration-500 w-full  bg-white rounded-xl shadow-xl    ${value === 3 ? 'relative scale-110 lg:w-[35%] border-2 z-10  border-[#7065F0]' : 'lg:w-[30%] lg:scale-95'}`}>
                                <div className="text-center p-12">
                                    <p className="text-3xl lg:text-2xl xl:text-3xl pb-4">Premium</p>
                                    <div className="flex justify justify-center items-center">
                                        <span className={ `duration-300 font-extrabold ${value === 3 ? ' text-5xl lg:text-4xl xl:text-5xl': 'text-4xl'}  align-text-middle pe-2`}>  $14.99 </span>
                                        <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">/ 30 days</span>
                                    </div>
                                </div>
                                <div className={`${value === 3 ? 'bg-[#7065F0]' : 'bg-[#aea9dd]'} duration-500 rounded-b-xl border-t-2 border-gray-200/20 p-10`}>
                                    <ul className="space-y-4">
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Suitability Match </span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Highlight Listing</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Mobile SMS notification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Featured listing on website</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Digital Id verification</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Duration of listing	30 days</span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Enlist background verification
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-100">Instant messaging</span>
                                        </li>
                                    </ul>
                                    <button type="button" className="w-full text-center bg-white text-lg text-indigo-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-600">Start your trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSeekerPricing;