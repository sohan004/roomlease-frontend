import img1 from '../../../assets/newsectionIcon/img1.png'
import img2 from '../../../assets/newsectionIcon/img2.png'
import img3 from '../../../assets/newsectionIcon/img3.png'
import img4 from '../../../assets/newsectionIcon/img4.png'
import img5 from '../../../assets/newsectionIcon/img5.png'
const NewSection3 = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-20">
            <h1 className="text-2xl lg:text-4xl font-medium text-center lg:text-left">Search Listings in Top Cities</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-3">
                <div className='w-full underShadow rounded-t-2xl'>
                    <img src={img1} className='w-full rounded-t-2xl h-[150px] lg:h-[250px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Paris</h1>
                </div>
                <div className='w-full underShadow rounded-t-2xl'>
                    <img src={img2} className='w-full rounded-t-2xl h-[150px] lg:h-[250px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>France</h1>
                </div>
                <div className='w-full underShadow rounded-t-2xl'>
                    <img src={img3} className='w-full rounded-t-2xl h-[150px] lg:h-[250px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Istanbul</h1>
                </div>
                <div className='w-full underShadow rounded-t-2xl'>
                    <img src={img4} className='w-full rounded-t-2xl h-[150px] lg:h-[250px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Morco</h1>
                </div>
                <div className='w-full underShadow rounded-t-2xl'>
                    <img src={img5} className='w-full rounded-t-2xl h-[150px] lg:h-[250px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Miami</h1>
                </div>
            </div>
        </div>
    );
};

export default NewSection3;