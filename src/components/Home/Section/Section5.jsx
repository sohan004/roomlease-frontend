
const Section5 = () => {
    return (
        <div className="bg-[#F9F9FD] py-12 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col justify-center text-center items-center ">
                <h1 className="text-[#7065F0] text-2xl font-semibold" >Subscribe</h1>
                <h1 className=" text-3xl lg:text-[40px] font-bold mt-2 mb-4" >Signup for real estate news!</h1>
                <p className="mb-8 opacity-80">{`Your dream living space awaits! Come and discover hassle-free room rentals that fit your unique style and requirements.`}</p>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between w-full md:w-[540px] mb-4 lg:mb-6">
                    <input type="text" name="" className=" bg-transparent p-1" placeholder="Enter your email address" />
                    <button className="btn bg-[#7065F0] text-white px-6 hidden md:block">submit</button>
                </div>
                    <button className="btn hover:bg-[#4e46a1] bg-[#7065F0]  text-white w-full  md:hidden mb-6">submit</button>
            </div>
        </div>
    );
};

export default Section5;