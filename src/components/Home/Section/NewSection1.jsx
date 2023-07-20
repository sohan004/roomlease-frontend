import { FaPlus } from "react-icons/fa";

const NewSection1 = () => {
    return (
        <div className="home">
            <div className="max-w-[1440px] mx-auto px-4 pt-8  lg:pt-14">
                <h1 className="text-center text-3xl lg:text-5xl mb-8 lg:mb-16 font-extrabold text-blue-950">Welcome to Australia's safest room rental platform</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-2/4  relative">
                        <button className="btn absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 bg-stone-700 w-[150px] lg:w-[230px] hover:bg-stone-900 text-white font-bold border-0">
                            <FaPlus></FaPlus> List a place</button>
                        <div className="w-full  h-[200px] lg:h-[350px] rounded-se-[70px] rounded-es-[70px] lg:rounded-se-[150px] lg:rounded-es-[150px] p-5 underShadow bg-white">
                            <img className="w-full  h-[200px] lg:h-[350px] rounded-se-[70px] rounded-es-[70px] lg:rounded-se-[150px] lg:rounded-es-[150px]" src="https://cdn-assets.roomster.com/dist/c83dfbcd25508573fb5efac548702beb.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 relative">
                        <button className="btn absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 bg-stone-700 w-[150px] lg:w-[230px] hover:bg-stone-900 text-white font-bold border-0">
                            <FaPlus></FaPlus> Find a place</button>
                       <div  className="w-full h-[200px] lg:h-[350px] rounded-ee-[70px] rounded-ss-[70px] lg:rounded-ee-[150px] lg:rounded-ss-[150px] p-5 bg-white underShadow">
                       <img className="w-full h-[200px] lg:h-[350px] rounded-ee-[70px] rounded-ss-[70px] lg:rounded-ee-[150px] lg:rounded-ss-[150px]" src="https://cdn-assets.roomster.com/dist/3bc37a2da21ca15523d031141ed4535b.png" alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection1;