import { FaArrowRight } from "react-icons/fa";

const NewSection4 = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-20">
            <div className="pb-11 pt-16 px-10 bg-[#E3E1F8] flex flex-col lg:flex-row items-center lg:justify-between gap-y-5">
                <div className="text-center lg:text-left ">
                    <h1 className="text-2xl font-bold mb-3">Questions?</h1>
                    <p className="text-sm lg:w-[650px]">Below, we've answered some of the questions that people usually ask. But, if you have any other questions you can check out our help center or get in touch with our customer support for more assistance.</p>
                </div>
                <button className='btn  hover:bg-[#4e46a1] bg-[#7065F0] rounded-full text-white '>view Questions <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default NewSection4;