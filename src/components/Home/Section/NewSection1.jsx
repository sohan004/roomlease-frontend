import { FaArrowRight, FaPlus } from "react-icons/fa";
import img1 from '../../../assets/newsectionIcon/location-symbol-with-building (1).jpg'
import img2 from '../../../assets/newsectionIcon/3d-render-room-interior-with-blank-picture-frame-wall.jpg'
import NewSection2 from "./NewSection2";

const NewSection1 = () => {
    return (
        <div className="home">
            <div className="max-w-[1440px] mx-auto px-4 pt-12">
            <h1  className="text-center text-2xl lg:text-4xl lg:leading-10 mb-8 lg:mb-16 font-extrabold text-blue-950">Safely Unlocking Spare Room Income and Outdoor Spaces</h1>
                <NewSection2/>
            </div>
        </div>
    );
};

export default NewSection1;