import useTitle from "../Hook/useTitle";

const HowToList = () => {
    useTitle('How to List Your Room');

    return (
        <div>
            <div className="bg-[#7065F0] mt-10 lg:mt-14">
                <div className="max-w-[1440px] py-14 mx-auto text-white px-4">
                    <h1 className="text-4xl font-bold">How to List Your Room with Room Lease</h1>
                    <p className="mt-4 text-lg">Are you looking to turn your spare room into an income source? Room Lease is here to help you connect with room seekers, offering a seamless and secure platform. With our one-time listing fee, digital ID verification through Australia Post, and no hidden charges, we make the process simple and transparent. Plus, if you're near parks or community facilities, your listing can be highlighted at zero cost!</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Step-by-Step Guide to Listing Your Room:</h1>
                    <ol className="list-decimal list-inside mt-4 flex flex-col gap-4">
                        <li><strong>Create Your Account:</strong> Sign up with Room Lease and complete your profile.</li>
                        <li><strong>Describe Your Room:</strong> Provide as much detail as possible about the room, including size, amenities, and proximity to parks or community facilities if applicable.</li>
                        <li><strong>Set Your Price:</strong> Consider the location, facilities, and market prices in your area. Remember, the income from renting your room is taxable, so consult with a tax professional if needed.</li>
                        <li><strong>Upload Photos:</strong> High-quality images can make your listing more appealing. Show off the room and any shared spaces.</li>
                        <li><strong>Consider Your Insurance:</strong> Check with your insurance provider about upgrading to landlord insurance from owner-occupier, as standard home and contents insurance may not cover damage caused by tenants.</li>
                        <li><strong>Screen Tenancy Applicants:</strong> Utilize databases like the National Tenancy Database to ensure potential tenants have a good rental history.</li>
                        <li><strong>Highlight Proximity to Outdoor Spaces:</strong> If your room is near parks or community facilities, we'll highlight your listing at no extra cost, aligning with our mission to promote healthier community living.</li>
                        <li><strong>Make Your Mobile Number Visible (Optional):</strong> This can facilitate quicker communication with potential tenants.</li>
                        <li><strong>Publish Your Listing:</strong> Once you're satisfied with your listing, publish it on Room Lease and start connecting with room seekers.</li>
                    </ol>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Why List with Room Lease?</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>One-Time Listing Fee:</strong> Unlike monthly charges, we only require a one-time fee for listing your room.</li>
                        <li><strong>Digital ID Verification:</strong> We partner with Australia Post to verify IDs, ensuring safety and avoiding scammers.</li>
                        <li><strong>Emphasis on Community Living:</strong> We believe in the power of outdoor spaces to enhance well-being and foster community engagement.</li>
                        <li><strong>No Hidden Charges:</strong> What you see is what you get with Room Lease. No surprises, just a straightforward process.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Conclusion:</h1>
                    <p className="mt-4">Listing your room with Room Lease is not just about earning extra income; it's about joining a community-focused platform that values integrity, innovation, and well-being. Whether you have a room near a park or simply want to make use of a spare room, we're here to support you every step of the way.</p>
                </div>
                <div className="mt-14 text-center font-medium">
                    <p>Ready to list your room? <a href="#">Sign up</a> with Room Lease today and unlock the potential of your spare room.</p>
                </div>
            </div>
        </div>
    );
};

export default HowToList;
