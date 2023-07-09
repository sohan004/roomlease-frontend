// import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import './Card.css'
const Card = () => {
    return (
        <div className="card border-2 rounded-lg mx-auto top-10 w-full h-[514px] bg-base-100 shadow-xl relative">
            <figure className="p-4">
                <img
                    src="https://i.ibb.co/j8dB0rH/pexels-binyamin-mellish-106399-1.png"
                    alt="Shoes"
                    className="rounded-xl w-full"
                />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-[20px] font-bold">Beverly Springfield</h2>
                        <h2 className="text-[16px] text-[#6C727F]">
                            2821 Sevilla, Palm Harbor, TX
                        </h2>
                    </div>
                    <div className="bg-white border  rounded-full h-[48px] w-[48px]">
                        <AiOutlineHeart className="w-[24px] absolute top-[292px] right-[44px] h-[24px] text-[#7065F0]" />
                    </div>
                </div>
                <hr />
                <div className="car">
                    <img
                        className=" absolute
              top-[218px]
              z-[1]
              left-[7px] w-[16px] h-[16px]"
                        src="https://i.ibb.co/xSM2Zhv/Frame.png"
                        alt=""
                    />
                    <span
                        className="text-[12px] absolute
              top-[217px]
              z-[1] text-white font-bold left-[28px]">
                        POPULAR
                    </span>
                </div>
                <div className="flex items-center justify-start gap-4 text-sm text-[#000929] font-medium">
                    <div className="flex items-center gap-2">
                        <LuBedSingle className="h-5 w-5 text-[#7065F0]" />
                        <h1>4 Beds</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbBath className="h-5 w-5 text-[#7065F0]" />
                        <h1>2 Bathrooms</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="https://i.ibb.co/H25VkYL/Icon.jpg"
                            className="h-5 w-5 text-[#7065F0]"
                            alt=""
                        />
                        <h1>6x7.5 m²</h1>
                    </div>
                </div>
                <div className="h-24 flex items-center justify-between p-4 w-[400px] border-2 rounded-lg bg-[#F0EFFB]">
                    <div>
                        <h1 className="text-sm font-bold text-black">Rent Sale</h1>
                        <h2 className="font-medium text-sm text-[#7C8093]">
                            <span className="font-extrabold text-2xl text-[#7065F0]">
                                $2,700
                            </span>
                            /month
                        </h2>
                    </div>
                    <div>
                        <button className="w-[173px] h-[44px] gap-2 flex items-center justify-center bg-[#100A55] text-white rounded-lg">
                            <img
                                src="https://i.ibb.co/HXfYvct/Icon.png"
                                className="w-5 h-5"
                                alt=""
                            />
                            Apply now
                            <img
                                src="https://i.ibb.co/vP58x1R/Icon-1.png"
                                className="w-4 h-4"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

