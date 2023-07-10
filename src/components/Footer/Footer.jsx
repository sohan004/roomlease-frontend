import logo from '../../assets/Frame.svg'
import fb from '../../assets/footerIcon/facebook-f 1.svg'
import ins from '../../assets/footerIcon/instagram 1.svg'
import ln from '../../assets/footerIcon/linkedin 1.svg'
import tw from '../../assets/footerIcon/twitter 1.svg'
const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className="my-12 lg:my-20">
            <div className=" max-w-[1440px] mx-auto px-4 gap-y-12 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <div className='flex items-center gap-1'>
                        <img src={logo} alt="" />
                        <p className='font-bold text-2xl text-[#100A55]'>Estatery</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-20 lg:gap-y-12">
                    <div className='lg:order-1 order-1'>
                        <h1 className='font-bold mb-4'>SELL A HOME</h1>
                        <p className='mb-2'>Request an offer</p>
                        <p className='mb-2'>Pricing</p>
                        <p className='mb-2'>Reviews</p>
                        <p className='mb-2'>Stories</p>
                    </div>
                    <div className='lg:order-2 order-5'>
                        <h1 className='font-bold mb-4'>BUY, RENT AND SELL</h1>
                        <p className='mb-2'>Buy and sell properties</p>
                        <p className='mb-2'>Rent home</p>
                        <p className='mb-2'>Builder trade-up</p>
                    </div>
                    <div className='lg:order-3 order-4'>
                        <h1 className='font-bold mb-4'>ABOUT</h1>
                        <p className='mb-2'>Company</p>
                        <p className='mb-2'>How it works</p>
                        <p className='mb-2'>Contact</p>
                        <p className='mb-2'>Investors</p>
                    </div>
                    <div className='lg:order-4 order-3'>
                        <h1 className='font-bold mb-4 '>BUY A HOME</h1>
                        <p className='mb-2'>Buy</p>
                        <p className='mb-2'>Finance</p>
                    </div>
                    <div className='lg:order-5 order-2'>
                        <h1 className='font-bold mb-4 '>TERMS & PRIVACY</h1>
                        <p className='mb-2'>Trust & Safety</p>
                        <p className='mb-2'>Terms of Service</p>
                        <p className='mb-2'>Privacy Policy</p>
                    </div>
                    <div className='lg:order-6 order-6'>
                        <h1 className='font-bold mb-4 '>RESOURCES</h1>
                        <p className='mb-2'>Blog</p>
                        <p className='mb-2'>Guides</p>
                        <p className='mb-2'>FAQ</p>
                        <p className='mb-2'>Help center</p>
                    </div>
                </div>
            </div>
            <p className='h-[2px] bg-slate-200 mt-12 mb-8'></p>
            <div className='max-w-[1440px] mx-auto px-4 flex lg:justify-between justify-center items-center flex-col lg:flex-row gap-6 opacity-60'>
                <p>©{currentYear} Estatery. All rights reserved</p>
                <div className='flex items-center gap-10'>
                    <img src={fb} alt="" />
                    <img src={ins} alt="" />
                    <img src={ln} alt="" />
                    <img src={tw} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;