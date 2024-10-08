import { GrTable, GrLock, } from "react-icons/gr";
import { RiArchiveDrawerLine, } from "react-icons/ri";
import { TbAirConditioning, TbSofa, TbToolsKitchen2 } from "react-icons/tb";
import { MdBalcony, MdOutlineHotTub, MdOutlineMonitor, MdTableRestaurant, MdOutlineBedroomParent, MdSecurity } from "react-icons/md";
import { LuLampDesk } from "react-icons/lu";
import { PiOfficeChairFill, PiLock, PiFan } from "react-icons/pi";
import { FaCheck, FaWifi } from "react-icons/fa";



const RoomFurnishingAndFeture = ({ roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures, onchengeFunction }) => {
    const sideTable = roomFurnishingsAndFeatures.find(r => r == 'Bed Side Table')
    const wardrobe = roomFurnishingsAndFeatures.find(r => r == 'Wardrobe')
    const drawars = roomFurnishingsAndFeatures.find(r => r == 'Drawars')
    const ac = roomFurnishingsAndFeatures.find(r => r == 'Air Conditioner')
    const heater = roomFurnishingsAndFeatures.find(r => r == 'Heater')
    const desk = roomFurnishingsAndFeatures.find(r => r == 'Desk')
    const lamp = roomFurnishingsAndFeatures.find(r => r == 'Fan')
    const chair = roomFurnishingsAndFeatures.find(r => r == 'Ensuite')
    const couch = roomFurnishingsAndFeatures.find(r => r == 'WiFi')
    const tv = roomFurnishingsAndFeatures.find(r => r == 'TV')
    const balcony = roomFurnishingsAndFeatures.find(r => r == 'Balcony')
    const dorlock = roomFurnishingsAndFeatures.find(r => r == 'Door Lock')
    const neete = roomFurnishingsAndFeatures.find(r => r == 'Private Entrance')
    const fetures = [
        
        {
            icon: TbAirConditioning,
            name: 'Air Conditioner',
            matchName: ac
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Drawars',
            matchName: drawars
        },
        {
            icon: MdOutlineHotTub,
            name: 'Heater',
            matchName: heater
        },
        {
            icon: MdTableRestaurant,
            name: 'Desk',
            matchName: desk
        },
        {
            icon: PiFan,
            name: 'Fan',
            matchName: lamp
        },
        {
            icon: MdOutlineBedroomParent,
            name: 'Ensuite',
            matchName: chair
        },
        {
            icon: FaWifi,
            name: 'WiFi',
            matchName: couch
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Wardrobe',
            matchName: wardrobe
        },
        {
            icon: MdOutlineMonitor,
            name: 'TV',
            matchName: tv
        },
        {
            icon: MdBalcony,
            name: 'Balcony',
            matchName: balcony
        },
        {
            icon: PiLock,
            name: 'Door Lock',
            matchName: dorlock
        },
        {
            icon: MdSecurity,
            name: 'Private Entrance',
            matchName: neete
        },
    ]


    const addFunction = (p) => {
        const findData = roomFurnishingsAndFeatures.find(r => r == p)
        if (findData) {
            const filterData = roomFurnishingsAndFeatures.filter(filt => filt != p)
            setRoomFurnishingsAndFeatures(filterData)
            onchengeFunction()
            return
        }
        setRoomFurnishingsAndFeatures([...roomFurnishingsAndFeatures, p])
        onchengeFunction()
    }

   

    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-6">
                {fetures.map((f, i) => <div onClick={() =>
                    addFunction(f.name)
                } className="cursor-pointer" key={i}>
                    <div className="max-w-[70px] mx-auto relative">
                        <f.icon className={`duration-500 ${f.matchName ? 'bg-[#7065F0] hover:bg-[#5149ac] text-white': 'text-[#7065F0] bg-white hover:bg-indigo-100'} border border-[#7065F0]  text-5xl p-2 rounded-xl mx-auto`} />
                        
                    </div>
                    <p className="text-center text-xs lg:text-base mt-2">{f.name}</p>
                </div>)}
            </div>
        </div>
    );
};

export default RoomFurnishingAndFeture;