import React from 'react';
import useTitle from '../Hook/useTitle';

const FindYourPerfectRoom = () => {
    useTitle("Find Your Perfect Room");
    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1440px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Find Your Perfect Room with Room Lease</h1>
                    <p className="mt-4 text-lg">Looking for a room that fits your lifestyle and budget? Room Lease is here to guide you through a seamless journey to find your perfect room. Whether you prefer proximity to parks, community facilities, or specific locations, our platform offers a diverse selection of rooms tailored to your needs.</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">How to Search:</h1>
                    <ol className="list-decimal list-inside mt-4 flex flex-col gap-4">
                        <li><strong>Explore Listings:</strong> Browse through our extensive listings to find rooms that match your preferences.</li>
                        <li><strong>Filter Options:</strong> Use our user-friendly filters to narrow down your search by location, price, amenities, and more.</li>
                        <li><strong>Highlight Proximity:</strong> If you choose parks or community facilities, your listing will be highlighted at zero cost, making it easier to find rooms near outdoor spaces.</li>
                        <li><strong>Contact Homeowners:</strong> Securely communicate with homeowners through our platform to inquire about availability and arrange viewings.</li>
                    </ol>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Why Choose Room Lease?</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>User-Friendly Interface:</strong> Our platform is designed to make your room search as simple as possible.</li>
                        <li><strong>Secure Communication:</strong> Connect with homeowners safely through our secure messaging system.</li>
                        <li><strong>Diverse Selection:</strong> From cozy rooms to luxurious suites, we offer a wide range of options to suit all tastes and budgets.</li>
                        <li><strong>Emphasis on Community Living:</strong> Join us in our mission to make community living healthier by utilizing outdoor spaces.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Benefits of Room Lease:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>One-Time Listing Fees:</strong> Unlike other platforms that charge monthly, we only require a one-time listing fee.</li>
                        <li><strong>Digital ID Verification:</strong> We partner with Australia Post for digital ID verification to ensure safety and avoid scammers.</li>
                        <li><strong>No Hidden Charges:</strong> What you see is what you get. No surprises, no hidden fees.</li>
                        <li><strong>Healthier Community Living:</strong> We believe in the power of outdoor spaces to enhance well-being and foster community engagement.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Conclusion:</h1>
                    <p className="mt-4">Finding the perfect room has never been easier with Room Lease. Explore, filter, and connect with homeowners to discover rooms that resonate with your lifestyle. Join us today and take the first step towards a new beginning.</p>
                </div>
                <div className="mt-14 text-center font-medium">
                    <p>Have questions or need assistance? <a href="#">Contact us</a> today. Room Lease is here to help you find your perfect room, safely and efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default FindYourPerfectRoom;