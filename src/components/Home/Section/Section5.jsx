import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterestP, FaTiktok, FaTwitter } from "react-icons/fa";
import { baseURL } from '../../../App'
import Swal from 'sweetalert2';

const Section5 = () => {
    const [email, setEmail] = useState("")

    const saveEmail = () => {
        console.log(email)
        fetch(`${baseURL}/cms/subscriber/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmail("")
                if (data.email) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank you for subscribing!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
   
    return (
        <div className="bg-[#F9F9FD] py-12 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col justify-center text-center items-center ">
                <h1 className=" text-3xl lg:text-[40px] font-bold mt-2 mb-4" >Subscribe to our newsletter</h1>
                <p className="mb-8 opacity-80">{`Get the latest insights, tips and trends straight to your inbox.`}</p>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between w-full md:w-[540px] mb-4 lg:mb-6">
                    <input type="text" name="" className="w-full focus:outline-none bg-transparent p-1" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={saveEmail} className="btn hover:scale-110 duration-500 border-0 cursor-pointer border-0  bg-[#7065F0] text-white px-6 hidden md:block">submit</button>
                </div>
                <button className="btn hover:bg-[#4e46a1] bg-[#7065F0]  text-white w-full  md:hidden mb-6">submit</button>
                <div className="flex justify-center items-center gap-4 lg:gap-10 mt-4 lg:mt-7">
                    <FaFacebookF className="hover:scale-110 duration-500 cursor-pointer  text-3xl lg:text-5xl hover:bg-blue-700 bg-blue-500 text-white p-1 lg:p-2 rounded-full"></FaFacebookF>
                    <FaInstagram className="hover:scale-110 duration-500 cursor-pointer text-3xl lg:text-5xl hover:bg-[#a1254e]   bg-[#E1306C] text-white p-1 lg:p-2 rounded-full"></FaInstagram>
                    <FaLinkedin className="hover:scale-110 duration-500 cursor-pointer  text-3xl lg:text-5xl hover:bg-[#1e4c83]   bg-[#2867B2] text-white p-1 lg:p-2 rounded-full"></FaLinkedin>
                    <FaPinterestP className="hover:scale-110 duration-500 cursor-pointer text-3xl lg:text-5xl hover:bg-red-800 bg-red-600 text-white p-1 lg:p-2 rounded-full"></FaPinterestP>
                    <FaTiktok className="hover:scale-110 duration-500 cursor-pointer  text-3xl lg:text-5xl hover:bg-[#aa0036]  bg-[#FF004F] text-white p-1 lg:p-2 rounded-full"></FaTiktok>
                    <FaTwitter className="hover:scale-110 duration-500 cursor-pointer  text-3xl lg:text-5xl hover:bg-[#126599]  bg-[#1DA1F2] text-white p-1 lg:p-2 rounded-full"></FaTwitter>
                </div>
            </div>
        </div>
    );
};

export default Section5;