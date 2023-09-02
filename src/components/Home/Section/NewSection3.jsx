import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/newsectionIcon/img1.png'
import img2 from '../../../assets/newsectionIcon/img2.png'
import img3 from '../../../assets/newsectionIcon/img3.png'
import img4 from '../../../assets/newsectionIcon/img4.png'
const NewSection3 = () => {
    const navigate = useNavigate()
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-20">
            <h1 className="text-2xl lg:text-4xl font-medium text-center lg:text-left">Search Listings in Top Cities</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-3">
                <div onClick={()=>navigate('/rent?type=homeowner&location=Melbourne')} className='cursor-pointer w-full underShadow rounded-t-2xl'>
                    <img src={img4} className='w-full rounded-t-2xl h-[150px] lg:h-[300px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Melbourne</h1>
                </div>
                <div onClick={()=>navigate('/rent?type=homeowner&location=Sydney')} className='cursor-pointer w-full underShadow rounded-t-2xl'>
                    <img src={img2} className='w-full rounded-t-2xl h-[150px] lg:h-[300px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Sydney</h1>
                </div>
                <div onClick={()=>navigate('/rent?type=homeowner&location=Brisbane')} className='cursor-pointer w-full underShadow rounded-t-2xl'>
                    <img src={img3} className='w-full rounded-t-2xl h-[150px] lg:h-[300px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Brisbane</h1>
                </div>
                <div onClick={()=>navigate('/rent?type=homeowner&location=Perth')} className='cursor-pointer w-full underShadow rounded-t-2xl'>
                    <img src={img1} className='w-full rounded-t-2xl h-[150px] lg:h-[300px]' alt="" />
                    <h1 className='mt-5 ps-3 pb-3  font-medium text-xl lg:text-2xl'>Perth </h1>
                </div>
            </div>
        </div>
    );
};

export default NewSection3;