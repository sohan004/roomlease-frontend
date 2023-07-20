import { FaArrowRight } from 'react-icons/fa';
import './section.css'
const NewSection2 = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4  lg:mt-40 mt-20 ">
            <h1 className="bg-cover newsec2 text-white text-center py-10 px-5 lg:py-20 lg:px-24 bg-fixed lg:leading-[80px] text-3xl lg:text-5xl tracking-wider font-bold">Proudly 100% AUSTRALIAN OWNED COMPANY</h1>
            <div className='flex items-center gap-2 justify-center flex-col lg:flex-row lg:gap-3 mt-7'>
                <button className='btn w-full lg:w-[250px] hover:bg-[#4e46a1] bg-[#7065F0] text-white '>List Spare Room <FaArrowRight/></button>
                <button className='btn w-full lg:w-[250px] hover:bg-[#4e46a1] bg-[#7065F0] text-white '>Find Room <FaArrowRight/></button>
            </div>
        </div>
    );
};

export default NewSection2;