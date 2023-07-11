import backarrow from '../../assets/detailsPageIcon/Icon.svg'
import share from '../../assets/detailsPageIcon/Icon (1).svg'
import fav from '../../assets/detailsPageIcon/Icon (2).svg'
import search from '../../assets/detailsPageIcon/Icon (3).svg'
import img1 from '../../assets/detailsPageIcon/pexels-binyamin-mellish-1396122 1.png'
import img2 from '../../assets/detailsPageIcon/roberto-nickson-rEJxpBskj3Q-unsplash.png'
import img3 from '../../assets/detailsPageIcon/spacejoy-YI2YkyaREHk-unsplash.png'
import galary from '../../assets/detailsPageIcon/galary.svg'
const Details = () => {
    const data = {
        name: 'St. Crystal',
        address: '210 US Highway, Highland Lake, FL'
    }

    return (
        <div className="max-w-[1440px] mx-auto px-4">
            <h3 className="font-medium mt-6 mb-6 lg:mt-8 lg:mb-4 text-lg flex items-center gap-2 text-[#7065F0]"><img src={backarrow} alt="" /> Back to map</h3>
            <div className='flex mb-8 flex-col lg:flex-row gap-y-6 lg:items-end justify-between'>
                <div >
                    <h1 className='text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4'>{data.name}</h1>
                    <p className='lg:text-xl text-base  opacity-60'>{data.address}</p>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <button className='btn text-[#7065F0] w-[45%] lg:w-28 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'><img src={share} alt="" /> Share</button>
                    <button className='btn text-[#7065F0] w-[45%] lg:w-32 bg-[#F7F7FD] border border-[#E0DEF7] lg:btn-sm'><img src={fav} alt="" /> Favorite</button>
                    <button className='btn hidden lg:flex items-center  text-[#7065F0] bg-[#F7F7FD] border border-[#E0DEF7] btn-sm'><img src={search} alt="" /> Browse nearby listings</button>
                </div>
            </div>

            <div className='flex flex-col gap-2 lg:gap-6 lg:flex-row'>
                <div className='w-full lg:w-[70%] relative'>
                    <img src={img1} className='w-full  rounded-lg' alt="" />
                    <button className='btn  absolute lg:hidden items-center right-3 bottom-3   bg-[#F7F7FD] border border-[#E0DEF7] '><img src={galary} alt="" /> View all photos</button>
                </div>
                <div className='w-full lg:w-[30%] flex flex-row lg:flex-col gap-2 lg:gap-6'>
                    <img src={img2} className='w-2/4 lg:w-full h-full lg:h-2/4  rounded-lg' alt="" />
                    <div className='w-2/4 lg:w-full h-full lg:h-2/4 relative'>
                        <img src={img3} className='w-full h-full   rounded-lg' alt="" />
                        <button className='btn hidden absolute lg:flex items-center right-3 bottom-3   bg-[#F7F7FD] border border-[#E0DEF7] '><img src={galary} alt="" /> View all photos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;