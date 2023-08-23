import React from 'react';
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/settingIcon/Frame.svg'
import ball from '../../assets/settingIcon/Icon.svg'
import menu from '../../assets/messagePageIcon/menu.svg'
import arrowDown from '../../assets/settingIcon/Icon (1).svg'
import personSvg from '../../assets/messagePageIcon/person.svg'
import imgTop from '../../assets/messagePageIcon/Group 14057.svg'
import imgTop2 from '../../assets/messagePageIcon/Group 14061.svg'
import imgTop3 from '../../assets/messagePageIcon/Group 14060.svg'
import imgTop4 from '../../assets/messagePageIcon/Rectangle 2598.png'
import icon1 from '../../assets/messagePageIcon/Icon.svg'
import icon2 from '../../assets/messagePageIcon/Icon (1).svg'
import icon3 from '../../assets/messagePageIcon/Icon (2).svg'
import icon4 from '../../assets/messagePageIcon/Icon (3).svg'
import icon5 from '../../assets/messagePageIcon/Icon (4).svg'
import icon6 from '../../assets/messagePageIcon/Icon (5).svg'
import icon7 from '../../assets/messagePageIcon/Icon (6).svg'
import icon8 from '../../assets/messagePageIcon/Icon (7).svg'
import messagePerson from '../../assets/messagePageIcon/Image.png'
import { useEffect, useState } from "react";
import ico7 from '../../assets/sec3Icon/Icon (3).svg'
import mes1 from '../../assets/messagePageIcon/message1.svg'
import mes2 from '../../assets/messagePageIcon/message2.svg'
import mes3 from '../../assets/messagePageIcon/message3.svg'
import mes4 from '../../assets/messagePageIcon/message4.svg'
import mes5 from '../../assets/messagePageIcon/message5.svg'

import text1 from '../../assets/messagePageIcon/text1.svg'
import text2 from '../../assets/messagePageIcon/text2.svg'
import text3 from '../../assets/messagePageIcon/text3.svg'
import text4 from '../../assets/messagePageIcon/text4.svg'
import text5 from '../../assets/messagePageIcon/text5.svg'
import text6 from '../../assets/messagePageIcon/text6.svg'
import text7 from '../../assets/messagePageIcon/text7.svg'
import { baseURL } from "../../App";
import { useRef } from "react";
import backarrow from '../../assets/detailsPageIcon/Icon.svg'


const EmtyMessage = () => {
    return (
        <>
            <div className="w-full flex justify-center max-w-[348px] mx-auto  ">
                <div className=" text-center">
                    <div className="mt-16 lg:mt-24">
                        <div className="relative ms-2 mb-1 w-[72px]">
                            <img src={personSvg} className="bg-[#E0DEF7] p-1 rounded-full border-2 border-white shadow-md" alt="" />
                            <img src={imgTop} className="absolute right-0 -top-3" alt="" />
                        </div>
                        <img src={imgTop2} alt="" />
                    </div>
                    <div className="-mt-10 mb-12">
                        <div className="relative -me-3 mb-1 ms-auto w-[72px]">
                            <img src={personSvg} className="bg-[#E0DEF7] p-1 rounded-full border-2 border-white shadow-md" alt="" />
                            <img src={imgTop4} className="absolute -left-4 -top-3" alt="" />
                        </div>
                        <img className="ms-auto" src={imgTop3} alt="" />
                    </div>

                    <h1 className="text-2xl font-bold mb-3 text-center">Messages</h1>
                    <p className="opacity-70 text-center ">Messages is a feature that helps you converse with applicants and landlords. Let’s send your first message.</p>
                </div>
            </div>
        </>
    );
};

export default EmtyMessage;