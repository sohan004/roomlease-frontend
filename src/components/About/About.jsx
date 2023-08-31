import useTitle from "../Hook/useTitle";
import target from '../../assets/aboutPageIcon/target.png'
import target2 from '../../assets/aboutPageIcon/target (1).png'
import opportunity from '../../assets/aboutPageIcon/opportunity.png'
import valu from '../../assets/aboutPageIcon/value.png'
import united from '../../assets/aboutPageIcon/united.png'
import journey from '../../assets/aboutPageIcon/customer-behavior.png'
import ReactImageMagnify from "react-image-magnify";


const About = () => {

    useTitle('About Us')
    return (
        <div>
            <div className="bg-[#E4E2F8]  text-blue-950">
                <div className="max-w-[1440px] py-8 mx-auto  px-4 text-center">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">Welcome to Room Lease, where we simplify the process of finding and renting rooms near parks and community facilities.</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Mission:</h1>
                    <p className="mt-4">At Room Lease, we believe that everyone in Australia should have access to quality outdoor spaces. Our platform helps people find rooms near local parks, recreational facilities, and community centres, making the process straightforward and user-friendly.</p>
                </div>
                <div className="flex justify-center items-center gap-3 mt-5">
                    <img className="w-16" src={target2} alt="" />
                    <img className="w-20" src={target} alt="" />
                    <img className="w-16" src={target2} alt="" />
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Vision:</h1>
                    <p className="mt-4">We envision a world where outdoor spaces are accessible to all, nurturing a sense of community and encouraging healthy living. By prioritising proximity to parks and community facilities, we aim to enhance the lives of our users and contribute to vibrant neighbourhoods.</p>
                </div>
                <img src={opportunity} className="w-20 mx-auto mt-5" alt="" />
                <div></div>
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
                <img src={valu} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Team:</h1>
                    <p className="mt-4">Room Lease is led by a passionate team of professionals with expertise in real estate, technology, and community engagement. Based in Melbourne, we understand the needs of our Australian users and are dedicated to providing exceptional service.</p>
                </div>
                <img src={united} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Our Journey:</h1>
                    <p className="mt-4">Founded in Melbourne, Room Lease has quickly grown to become a trusted platform for room seekers and homeowners alike. Our unique focus on outdoor spaces has resonated with our users, and we continue to expand our offerings to meet their needs.</p>
                </div>
                <img src={journey} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-14 text-center font-medium">
                    <p>Interested in learning more about Room Lease? <a href="#">Contact us</a> today. Join us in our mission to make outdoor spaces accessible to all Australians.</p>
                </div>
            </div>
        </div>
    );
};

export default About;