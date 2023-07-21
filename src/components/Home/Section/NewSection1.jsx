import { FaPlus } from "react-icons/fa";
import img1 from '../../../assets/newsectionIcon/location-symbol-with-building (1).jpg'
import img2 from '../../../assets/newsectionIcon/3d-render-room-interior-with-blank-picture-frame-wall.jpg'

const NewSection1 = () => {
    return (
        <div className="home">
            <div className="max-w-[1440px] mx-auto px-4 py-8  lg:py-14">
                <h1 className="text-center text-3xl lg:text-5xl mb-8 lg:mb-16 font-extrabold text-blue-950">Australia's safest room rental platform</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-2/4  relative">
                        <button className="btn absolute  left-2/4 lg:btn-lg -translate-x-2/4 top-2/4 -translate-y-2/4 bg-stone-700 w-[200px] lg:w-[250px]  hover:bg-stone-900 text-white font-bold border-0">
                            <FaPlus></FaPlus> List spare room</button>
                        <div className="w-full  h-[200px] lg:h-[350px] rounded-se-[70px] rounded-es-[70px] lg:rounded-se-[150px] lg:rounded-es-[150px] p-5 underShadow bg-white">
                            <img className="w-full  h-[200px] lg:h-[350px] rounded-se-[70px] rounded-es-[70px] lg:rounded-se-[150px] lg:rounded-es-[150px]" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 relative">
                        <button className="btn absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 bg-stone-700 w-[200px]  hover:bg-stone-900 text-white font-bold border-0 lg:btn-lg lg:w-[250px]">
                            <FaPlus></FaPlus> Find Room</button>
                       <div  className="w-full h-[200px] lg:h-[350px] rounded-ee-[70px] rounded-ss-[70px] lg:rounded-ee-[150px] lg:rounded-ss-[150px] p-5 bg-white underShadow">
                       <img className="w-full h-[200px] lg:h-[350px] rounded-ee-[70px] rounded-ss-[70px] lg:rounded-ee-[150px] lg:rounded-ss-[150px]" src={img2}alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection1;