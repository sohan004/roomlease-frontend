import { Link } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import keyImg from '../../assets/footerIcon/Screenshot.png'
import bol from '../../assets/navIcon/bol.png'
import logoHome from '../../assets/navIcon/logoHome.png'
const Footer = () => {
    return (
        <div className="mt-12 lg:mt-20">
            <div className=" max-w-[1440px] mx-auto px-4 gap-y-12 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <div className='flex items-center gap-1'>
                        <Link to='/'><p className='font-bold text-xl lg:text-3xl text-[#100A55] flex items-start '>
                            R
                            <span className='flex flex-col justify-center items-center'>
                                o
                                <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                            </span>
                            <span className='flex flex-col justify-center items-center'>
                                o
                                <img className='w-3  lg:w-4  -mt-1' src={bol} alt="" />
                            </span>
                            mLe<img src={logoHome} className='w-6 mt-[6px] lg:w-9' alt="" />se
                        </p></Link>
                    </div>
                </div>
                <div className="w-full text-black lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-20 lg:gap-y-12">
                    <div className=''>
                        <Link to='/about'> <p className='mb-2'>About Us</p></Link>
                        <Link to='/how-to-list'><p className='mb-2'>How to List Your Room</p></Link>
                        <Link to='/find-your-perfect-room'><p className='mb-2'>Find Your Perfect Room</p></Link>
                        <Link to='/agreement'>  <p className='mb-2 hidden lg:block'>Free Roommate Agreement</p></Link>
                    </div>
                    <div className=''>
                        <Link to='/digital-id-checks'> <p className='mb-2'>Digital ID & Checks</p></Link>
                        <Link to='/faq'> <p className='mb-2'>FAQ</p></Link>
                        <Link to='/blog'> <p className='mb-2'>Blog</p></Link>
                        <Link to='/testimonial'><p className='mb-2 hidden lg:block'>User Testimonials</p></Link>
                    </div>
                    <div className=''>
                        <Link to='/contact'><p className='mb-2'>Contact us</p></Link>
                        <Link to='/career'>     <p className='mb-2'>Careers</p></Link>
                        <Link to='/terms-&-conditions'><p className='mb-2'>Terms of Service</p></Link>
                        <Link to='/privacy-policy'><p className='mb-2 hidden lg:block'>Privacy Policy</p></Link>
                        <Link to='/site-map'><p className='mb-2 hidden lg:block'>Site Map</p></Link>
                    </div>
                    <div className='lg:hidden'>
                        <Link to='/agreement'>  <p className='mb-2 '>Free Roommate Agreement</p></Link>
                        <Link to='/testimonial'><p className='mb-2 '>User Testimonials</p></Link>
                        <Link to='/privacy-policy'><p className='mb-2 '>Privacy Policy</p></Link>
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