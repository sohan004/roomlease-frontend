import useTitle from "../Hook/useTitle";
import img1 from "../../assets/tosIcon/compliant.png";

const Privacy = () => {
    useTitle('Privacy Policy');
    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1440px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Room Lease Privacy & Cookies Policy</h1>
                    <p className="mt-4 text-lg">This Privacy & Cookies Policy ("Policy") describes how Room Lease (ABN 98 664 748 225) ("Room Lease", "we", "us", or "our") collects, uses, and manages personal information and cookies when you use our website at www.roomlease.com.au (the "Website") and access our products, services, and content (collectively, the "Services").</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">
                {/* Introduction */}
                <div className="mt-10">
                    <img src={img1} className=" w-20 mb-5 lg:w-40 mx-auto mt-5" alt="" />
                    <h2 className="text-2xl font-bold">1. Introduction</h2>
                    <p className="mt-4">By using the Services, you acknowledge and agree to this Policy and our Terms of Use. If you do not agree with these terms, please discontinue your use of the Services immediately.</p>
                </div>

                {/* Information We Collect */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>a) Personal Information:</strong> Such as your name, email address, phone number, and other contact information when you register, request information, or interact with our customer support team.</li>
                        <li><strong>b) Usage Information:</strong> Including your browsing activity, the pages you visit, and the date and time of your visit.</li>
                        <li><strong>c) Device Information:</strong> Such as the type of device, operating system, browser type, and IP address.</li>
                    </ul>
                </div>

                {/* Cookies and Similar Technologies */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">3. Cookies and Similar Technologies</h2>
                    <p className="mt-4">We use cookies and other similar technologies to collect information, personalize your user experience, and improve the overall functionality of the Services. You can manage your cookie preferences through your web browser settings.</p>
                </div>

                {/* How We Use Your Information */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">4. How We Use Your Information</h2>
                    <p className="mt-4">We may use your personal information to provide, maintain, and improve the Services; personalize your user experience; communicate with you; respond to inquiries; monitor and analyze usage; enforce our Terms of Use; and protect the security and integrity of the Services.</p>
                </div>

                {/* Information Sharing and Disclosure */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">5. Information Sharing and Disclosure</h2>
                    <p className="mt-4">We may share your personal information with your consent, with our service providers, when required by law, in connection with a merger or acquisition, or with our affiliates and subsidiaries.</p>
                </div>

                {/* Security */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">6. Security</h2>
                    <p className="mt-4">We take reasonable measures to protect your personal information from unauthorized access or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
                </div>

                {/* Data Retention */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">7. Data Retention</h2>
                    <p className="mt-4">We retain your personal information for as long as necessary to fulfill the purposes for which it was collected.</p>
                </div>

                {/* Access, Correction, and Deletion of Personal Information */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">8. Access, Correction, and Deletion of Personal Information</h2>
                    <p className="mt-4">You have the right to access, correct, or delete your personal information held by Room Lease. To exercise these rights, please contact us at info@roomlease.com.au.</p>
                </div>

                {/* Changes to This Policy */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
                    <p className="mt-4">We reserve the right to update or modify this Policy at any time without notice. Any changes will be posted on the Website, and your continued use of the Services constitutes your acceptance of the updated Policy.</p>
                </div>

                {/* Contact Us */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">10. Contact Us</h2>
                    <p className="mt-4">For any questions or concerns about this Policy, please contact us at info@roomlease.com.au.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;