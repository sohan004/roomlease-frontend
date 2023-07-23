import logo from '../../assets/Frame.svg'
import keyImg from '../../assets/footerIcon/Screenshot.png'
const Footer = () => {
    return (
        <div className="mt-12 lg:mt-20">
            <div className=" max-w-[1440px] mx-auto px-4 gap-y-12 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <div className='flex items-center gap-1'>
                        <img src={logo} alt="" />
                        <p className='font-bold text-2xl text-[#100A55]'>RoomLease</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-20 lg:gap-y-12">
                    <div className=''>
                        <p className='mb-2'>How to find a room</p>
                        <p className='mb-2'>How to rent your room</p>
                        <p className='mb-2'>ID Checks</p>
                        <p className='mb-2 hidden lg:block'>Credit Checks</p>
                    </div>
                    <div className=''>
                        <p className='mb-2'>Background Checks</p>
                        <p className='mb-2'>Free rommmate agreement</p>
                        <p className='mb-2'>safety & security</p>
                        <p className='mb-2 hidden lg:block'>Inspections</p>
                    </div>
                    <div className=''>
                        <p className='mb-2'>Community Standards</p>
                        <p className='mb-2'>terms</p>
                        <p className='mb-2'>privacy</p>
                        <p className='mb-2 hidden lg:block'>carear</p>
                    </div>
                    <div className='lg:hidden'>
                        <p className='mb-2'>Credit Checks</p>
                        <p className='mb-2'>Inspections</p>
                        <p className='mb-2'>carear</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#7065F0] py-4 mt-6  '>
                <div className='max-w-[1440px] mx-auto px-4 flex items-center gap-2'>
                    {/* <img src='https://img1.wsimg.com/isteam/ip/a2a06f6d-b689-4d42-bed9-8ff7142a1f7c/s_6763.jpg.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true' className='w-16' alt="" /> */}
                    <p className='text-xs text-white'>RoomLease.com.au acknowledges the Traditional Custodians of the land on which we operate, live and gather as ​a team. We recognise their continuing connection ​to land, water and community. We pay respect to Elders ​past, present and emerging.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;