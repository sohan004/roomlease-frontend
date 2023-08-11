import { FaArrowRight, FaPlus } from "react-icons/fa";
import img1 from '../../../assets/newsectionIcon/location-symbol-with-building (1).jpg'
import img2 from '../../../assets/newsectionIcon/3d-render-room-interior-with-blank-picture-frame-wall.jpg'
import NewSection2 from "./NewSection2";

const NewSection1 = () => {
    return (
        <div className="home">
            <div className="max-w-[1440px] mx-auto px-4 pt-12">
            <h1 style={{'letterSpacing' : '5px', 'lineHeight': '40px'}} className="text-center text-xl lg:text-3xl  mb-8 lg:mb-16 font-extrabold text-blue-950">OUR AI TRANSFORMS SPARE ROOMS INTO INCOME SOURCES, EASES MORTGAGES, AND SIMPLIFIES ACCESS TO OUTDOOR SPACES, BUILDING A HEALTHIER COMMUNITY</h1>
                <NewSection2/>
            </div>
        </div>
    );
};

export default NewSection1;