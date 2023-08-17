import React from 'react';
import useTitle from '../Hook/useTitle';

import img1 from '../../assets/tosIcon/communicate.png'
import img2 from '../../assets/tosIcon/content.png'
import img3 from '../../assets/tosIcon/cyber-security.png'
import img4 from '../../assets/tosIcon/data-collection.png'
import img5 from '../../assets/tosIcon/info.png'
import img6 from '../../assets/tosIcon/star.png'
import img7 from '../../assets/tosIcon/stopwatch.png'
import img8 from '../../assets/tosIcon/svg.png'
import img9 from '../../assets/tosIcon/terms-and-conditions.png'
import img10 from '../../assets/tosIcon/to-do-list.png'

const Tos = () => {
    useTitle('Terms and Conditions');

    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1440px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Terms and Conditions</h1>
                    <p className="mt-4 text-lg">Welcome to Room Lease (ABN 98 664 748 225), a platform dedicated to connecting homeowners (Property Listers) and room seekers (Property Seekers) across Australia. Our services include listing and searching for rental rooms, and this document outlines the Terms and Conditions governing your use of our platform.</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">

                {/* Acceptance of Terms */}
                <div className="mt-10">
                    <img src={img1} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                    <p className="mt-4">By accessing and using roomlease.com.au, you agree to abide by these Terms and Conditions. If you do not agree with these terms, please discontinue your use of the platform immediately.</p>
                </div>

                {/* Definitions */}
                <div className="mt-10">
                    <img src={img2} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Definitions</h2>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>Content:</strong> Any text, images, videos, or other materials uploaded by users.</li>
                        <li><strong>Listing:</strong> A property advertisement created by Property Listers.</li>
                        <li><strong>Property Listers:</strong> Homeowners who list properties on Room Lease.</li>
                        <li><strong>Property Seekers:</strong> Individuals seeking rental rooms through Room Lease.</li>
                        <li><strong>Upgraded Services:</strong> Optional premium services offered by Room Lease.</li>
                    </ul>
                </div>

                {/* Listings */}
                <div className="mt-10">
                    <img src={img3} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Listings</h2>
                    <p className="mt-4">Property Listers are responsible for the accuracy, legality, and maintenance of their Listings. Duplicated or outdated Listings must be removed promptly.</p>
                </div>

                {/* Accounts */}
                <div className="mt-10">
                    <img src={img4} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Accounts</h2>
                    <p className="mt-4">Users must provide accurate information during registration and comply with our security checks. Room Lease reserves the right to terminate accounts that violate these Terms and Conditions.</p>
                </div>

                {/* Website and Services Usage */}
                <div className="mt-10">
                    <img src={img5} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Website and Services Usage</h2>
                    <p className="mt-4">Users must not engage in unlawful activities or introduce viruses to the platform. Any misuse may result in termination of access to the platform.</p>
                </div>

                {/* Content */}
                <div className="mt-10">
                    <img src={img6} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Content</h2>
                    <p className="mt-4">Users retain ownership of the Content they upload but grant Room Lease a license to use it in connection with the platform. Content must comply with Room Lease's policies and applicable laws.</p>
                </div>

                {/* Upgraded Services */}
                <div className="mt-10">
                    <img src={img7} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Upgraded Services</h2>
                    <p className="mt-4">Room Lease offers optional Upgraded Services, subject to additional fees. Payment processing and refund policies are detailed in separate agreements.</p>
                </div>

                {/* Security */}
                <div className="mt-10">
                    <img src={img8} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Security</h2>
                    <p className="mt-4">Room Lease is committed to protecting user information through reasonable security measures. However, we cannot guarantee absolute security.</p>
                </div>

                {/* Data Retention */}
                <div className="mt-10">
                    <img src={img9} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Data Retention</h2>
                    <p className="mt-4">Personal data is retained as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, and enforce our agreements.</p>
                </div>

                {/* Changes to Terms */}
                <div className="mt-10">
                    <img src={img10} className="w-20 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">Changes to Terms</h2>
                    <p className="mt-4">Room Lease reserves the right to modify these Terms and Conditions at any time. Users are responsible for reviewing them periodically.</p>
                </div>

                {/* Contact Information */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="mt-4">For inquiries related to these Terms and Conditions, please contact us at info@roomlease.com.au.</p>
                </div>
            </div>
        </div>
    );
};

export default Tos;
