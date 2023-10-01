import React, { useEffect, useState } from 'react';
import useTitle from '../Hook/useTitle';
import target from '../../assets/aboutPageIcon/target.png';
import target2 from '../../assets/aboutPageIcon/target (1).png';
import opportunity from '../../assets/aboutPageIcon/opportunity.png';
import valu from '../../assets/aboutPageIcon/value.png';
import united from '../../assets/aboutPageIcon/united.png';
import journey from '../../assets/faqIcon/faq.png'
import { baseURL } from '../../App';

const Faq = () => {
    useTitle('Frequently Asked Questions');

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/cms/faq/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);

    return (
        <div className='bg-white text-black'>
            <div className="bg-[#E4E2F8]  text-blue-950 ">
                <div className="max-w-[1440px] py-8 mx-auto  px-4 text-center">
                    <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg">Your comprehensive guide to Room Lease. Find detailed answers to all your questions about listing, searching, agreements, digital ID verification, and more.</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">
                {/* ... Other sections ... */}

                {/* FAQ Section */}
                {/* Listing a Room */}
                <div className="mt-10">
                    <img src={journey} className='w-40 mx-auto' alt="" />
                    <h2 className="text-2xl font-bold">Listing a Room</h2>
                    {faq.map((item) => <div key={item.id} className="collapse collapse-plus mt-5 bg-base-200">
                        <input type="radio" name="my-accordion-3" className='bg-base-200' />
                        <div className="collapse-title text-xl font-medium bg-base-200">
                            <p className="font-semibold">{item?.question}</p>
                        </div>
                        <div className="collapse-content bg-base-200">
                            <p className='ml-6 mt-1'>
                                {item.answer}
                            </p>
                        </div>
                    </div>)}
                </div>

                {/* ... Other sections ... */}
            </div>
        </div>
    );
};

export default Faq;
