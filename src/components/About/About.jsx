import useTitle from "../Hook/useTitle";

const About = () => {

    useTitle('About Us')
    return (
        <div>
            <div className="bg-[#7065F0] mt-10 lg:mt-14">
                <div className="max-w-[1440px] py-14 mx-auto text-white px-4">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">Welcome to Room Lease, where we simplify the process of finding and renting rooms near parks and community facilities. Our mission is to connect room seekers with homeowners in a manner that fosters community, health, and well-being.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Mission:</h1>
                    <p className="mt-4">At Room Lease, we believe that everyone in Australia should have access to quality outdoor spaces. Our platform helps people find rooms near local parks, recreational facilities, and community centres, making the process straightforward and user-friendly.</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Vision:</h1>
                    <p className="mt-4">We envision a world where outdoor spaces are accessible to all, nurturing a sense of community and encouraging healthy living. By prioritising proximity to parks and community facilities, we aim to enhance the lives of our users and contribute to vibrant neighbourhoods.</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Values:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>Society-Centric:</strong> We are from society and only for society. Room Lease's primary commitment is to the welfare and well-being of the communities we serve, putting societal impact at the forefront.</li>
                        <li><strong>Collaborative Growth:</strong> Room Lease fosters an environment of shared learning and growth, emphasising teamwork and collaboration. We work together to achieve both individual and collective success.</li>
                        <li><strong>Transparent Integrity:</strong> Bold transparency is a cornerstone of Room Lease's culture. We encourage open communication and honesty, instilling trust and collaboration between team members and clients.</li>
                        <li><strong>Holistic Wellness:</strong> We prioritise the mental and physical well-being of our users and employees, acknowledging that a balanced, healthy community is essential for creating meaningful connections.</li>
                        <li><strong>Innovative Pioneers:</strong> We are committed to offering a unique platform that emphasises outdoor spaces, setting us apart from traditional rental platforms like flatmates.com.au.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Team:</h1>
                    <p className="mt-4">Room Lease is led by a passionate team of professionals with expertise in real estate, technology, and community engagement. Based in Melbourne, we understand the needs of our Australian users and are dedicated to providing exceptional service.</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Journey:</h1>
                    <p className="mt-4">Founded in Melbourne, Room Lease has quickly grown to become a trusted platform for room seekers and homeowners alike. Our unique focus on outdoor spaces has resonated with our users, and we continue to expand our offerings to meet their needs.</p>
                </div>
                <div className="mt-14 text-center font-medium">
                    <p>Interested in learning more about Room Lease? <a href="#">Contact us</a> today. Join us in our mission to make outdoor spaces accessible to all Australians.</p>
                </div>
            </div>
        </div>
    );
};

export default About;