import { GrTable, GrLock, } from "react-icons/gr";
import { RiArchiveDrawerLine, } from "react-icons/ri";
import { TbAirConditioning, TbSofa, TbToolsKitchen2 } from "react-icons/tb";
import { MdBalcony, MdOutlineHotTub, MdOutlineMonitor, MdTableRestaurant } from "react-icons/md";
import { LuLampDesk } from "react-icons/lu";
import { PiOfficeChairFill, PiLock } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";


const RoomFurnishingAndFeture = ({ roomFurnishingsAndFeatures, setRoomFurnishingsAndFeatures }) => {
    const sideTable = roomFurnishingsAndFeatures.find(r => r == 'Bed Side Table')
    const wardrobe = roomFurnishingsAndFeatures.find(r => r == 'Wardrobe')
    const drawars = roomFurnishingsAndFeatures.find(r => r == 'Drawars')
    const ac = roomFurnishingsAndFeatures.find(r => r == 'Air Conditioner')
    const heater = roomFurnishingsAndFeatures.find(r => r == 'Heater')
    const desk = roomFurnishingsAndFeatures.find(r => r == 'Desk')
    const lamp = roomFurnishingsAndFeatures.find(r => r == 'Lamp')
    const chair = roomFurnishingsAndFeatures.find(r => r == 'Chair')
    const couch = roomFurnishingsAndFeatures.find(r => r == 'Couch')
    const tv = roomFurnishingsAndFeatures.find(r => r == 'TV')
    const balcony = roomFurnishingsAndFeatures.find(r => r == 'Balcony')
    const dorlock = roomFurnishingsAndFeatures.find(r => r == 'Door Lock')
    const neete = roomFurnishingsAndFeatures.find(r => r == 'Kitchenette')
    const fetures = [
        {
            icon: MdTableRestaurant,
            name: 'Bed Side Table',
            matchName: sideTable
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Wardrobe',
            matchName: wardrobe
        },
        {
            icon: RiArchiveDrawerLine,
            name: 'Drawars',
            matchName: drawars
        },
        {
            icon: TbAirConditioning,
            name: 'Air Conditioner',
            matchName: ac
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
            icon: LuLampDesk,
            name: 'Lamp',
            matchName: lamp
        },
        {
            icon: PiOfficeChairFill,
            name: 'Chair',
            matchName: chair
        },
        {
            icon: TbSofa,
            name: 'Couch',
            matchName: couch
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
            icon: TbToolsKitchen2,
            name: 'Kitchenette',
            matchName: neete
        },
    ]


    const addFunction = (p) => {
        const findData = roomFurnishingsAndFeatures.find(r => r == p)
        if (findData) {
            const filterData = roomFurnishingsAndFeatures.filter(filt => filt != p)
            setRoomFurnishingsAndFeatures(filterData)
            return
        }
        setRoomFurnishingsAndFeatures([...roomFurnishingsAndFeatures, p])
    }

    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-6">
                {fetures.map((f, i) => <div onClick={() =>
                    addFunction(f.name)
                } className="cursor-pointer" key={i}>
                    <div className="max-w-[70px] mx-auto relative">
                        <f.icon className={`${f.matchName && 'bg-slate-900 text-white'} border border-black  text-5xl p-2 rounded-full mx-auto`} />
                        {f.matchName && <FaCheck className="absolute top-0 right-2 text-white bg-green-400 text-lg rounded-full p-1"></FaCheck>}
                    </div>
                    <p className="text-center mt-2">{f.name}</p>
                </div>)}
            </div>
        </div>
    );
};

export default RoomFurnishingAndFeture;