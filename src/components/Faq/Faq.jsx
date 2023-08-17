import React from 'react';
import useTitle from '../Hook/useTitle';
import target from '../../assets/aboutPageIcon/target.png';
import target2 from '../../assets/aboutPageIcon/target (1).png';
import opportunity from '../../assets/aboutPageIcon/opportunity.png';
import valu from '../../assets/aboutPageIcon/value.png';
import united from '../../assets/aboutPageIcon/united.png';
import journey from '../../assets/faqIcon/faq.png'

const Faq = () => {
    useTitle('Frequently Asked Questions');

    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1440px] py-8 mx-auto text-white px-4 text-center">
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
                    <div className="mt-4">
                        <p className="font-semibold">Q: How can I list my room on Room Lease? What are the steps involved?</p>
                        <p className="ml-4">A: Listing your room is easy:</p>
                        <ol className="list-decimal list-inside ml-6 mt-1">
                            <li>Create an Account: Sign up with your email.</li>
                            <li>Add Details: Click on "List Your Room" and fill in all necessary details, including photos, room description, rent, bond, and house rules.</li>
                            <li>Highlight Features: Optionally, highlight proximity to parks and community facilities at no extra cost.</li>
                            <li>One-Time Fee: Pay the one-time listing fee, with no hidden charges.</li>
                            <li>Publish: Review and publish your listing.</li>
                        </ol>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Q: What should I consider regarding insurance and contact details?</p>
                        <p className="ml-4">A: It's advisable to consult with your insurance provider to discuss upgrading to landlord insurance. Also, consider making your mobile number visible in the listing for better communication.</p>
                    </div>
                </div>

                {/* Finding a Room */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Finding a Room</h2>
                    <div className="mt-4">
                        <p className="font-semibold">Q: How do I find the perfect room?</p>
                        <p className="ml-4">A: Use our search filters to find rooms that suit your preferences. You can filter by location, price, amenities, and more. Explore various listings, and don’t hesitate to contact homeowners.</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Q: Why choose Room Lease for finding a room?</p>
                        <p className="ml-4">A: Room Lease offers a secure, user-friendly interface with diverse room options. Our digital ID verification ensures safety, and our unique highlighting feature helps you find rooms near parks and community facilities.</p>
                    </div>
                </div>

                {/* Agreements */}
                <div className="mt-10">
                <img src={opportunity} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Agreements</h2>
                    <div className="mt-4">
                        <p className="font-semibold">Q: What types of agreements are there, and how do I choose the right one?</p>
                        <p className="ml-4">A: Room Lease provides guidance on different agreements tailored to various states in Australia. Depending on your specific situation, you may need a flatmate agreement or a tenancy agreement. Consult our "Agreements" page for state-specific links and details.</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Q: How do I create a legally binding agreement?</p>
                        <p className="ml-4">A: Include all essential terms such as rent, bond, shared areas, house rules, and insurance considerations. Our sample agreements and pre-agreement checklist can guide you. Always consult with a legal professional if needed.</p>
                    </div>
                </div>

                {/* Digital ID & Checks */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Digital ID & Checks</h2>
                    <div className="mt-4">
                        <p className="font-semibold">Q: Why verify with Digital ID?</p>
                        <p className="ml-4">A: Verifying with Digital ID through Australia Post adds an extra layer of trust and safety to your Room Lease profile. It helps avoid scammers and ensures a transparent community.</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Q: What checks are recommended, and why?</p>
                        <p className="ml-4">A: We recommend National Police Check, Working with Children Check, income proof, and references. These checks foster trust and transparency, aligning with Room Lease's commitment to security.</p>
                    </div>
                </div>

               
                {/* ... Other sections ... */}
            </div>
        </div>
    );
};

export default Faq;
