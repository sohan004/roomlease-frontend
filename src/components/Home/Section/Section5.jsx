
const Section5 = () => {
    return (
        <div className="bg-[#F9F9FD] py-12 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col justify-center text-center items-center ">
                <h1 className="text-[#7065F0] text-2xl font-semibold" >No Spam Promise</h1>
                <h1 className=" text-3xl lg:text-[40px] font-bold mt-2 mb-4" >Are you a landlord?</h1>
                <p className="mb-8 opacity-80">{`Discover ways to increase your home's value and  get listed. No Spam.`}</p>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between w-full md:w-[540px] mb-4 lg:mb-6">
                    <input type="text" name="" className=" bg-transparent p-1" placeholder="Enter your email address" />
                    <button className="btn bg-[#7065F0] text-white px-6 hidden md:block">submit</button>
                </div>
                    <button className="btn bg-[#7065F0] text-white w-full  md:hidden mb-6">submit</button>
                    <p className="opacity-80">Join <span className="text-[#7065F0] opacity-100">10,000+</span> other landlords in our estatery community.</p>
            </div>
        </div>
    );
};

export default Section5;