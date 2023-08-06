import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterestP, FaTiktok, FaTwitter } from "react-icons/fa";

const Section5 = () => {
    return (
        <div className="bg-[#F9F9FD] py-12 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col justify-center text-center items-center ">
                <h1 className=" text-3xl lg:text-[40px] font-bold mt-2 mb-4" >Signup for real estate news!</h1>
                <p className="mb-8 opacity-80">{`Your dream living space awaits! Come and discover hassle-free room rentals that fit your unique style and requirements.`}</p>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between w-full md:w-[540px] mb-4 lg:mb-6">
                    <input type="text" name="" className=" bg-transparent p-1" placeholder="Enter your email address" />
                    <button className="btn hover:scale-110 duration-500 cursor-pointer   bg-[#7065F0] text-white px-6 hidden md:block">submit</button>
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