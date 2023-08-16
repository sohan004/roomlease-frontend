import React from 'react';
import useTitle from '../Hook/useTitle';

const DigitalIdChecks = () => {
    useTitle('Digital ID & Checks')
    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1000px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Digital ID & Checks</h1>
                    <p className="mt-4 text-lg">Secure your Room Lease experience with our Digital ID & Checks. Learn about our verification process and the steps to ensure safety and trust.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Digital ID Verification</h1>
                    <img src="/path/to/digital-id-logo.png" alt="Digital ID Logo" className="mt-4 max-w-[200px]" />
                    <p className="mt-4">Room Lease integrates digital ID verification through <a href="https://www.digitalid.com" className="text-blue-500 hover:underline">Australia Post's Digital ID</a>. This state-of-the-art technology ensures that all users are who they claim to be, adding an extra layer of security to our platform.</p>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold">How to Verify Your Digital ID:</h2>
                    <ol className="list-decimal list-inside mt-4 flex flex-col gap-4">
                        <li>Create a Room Lease Account: Sign up and log in to your Room Lease account.</li>
                        <li>Access Digital ID Verification: Follow the prompts to verify your identity through Australia Post.</li>
                        <li>Submit Required Documents: Provide a valid government-issued ID, such as a driver's license or passport.</li>
                        <li>Complete the Verification Process: Wait for confirmation that your identity has been successfully verified.</li>
                    </ol>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Background Checks</h1>
                    <p className="mt-4">In addition to Digital ID verification, Room Lease recommends specific background checks to enhance trust and transparency:</p>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>National Police Check: A comprehensive criminal history check to ensure the safety of all parties.</li>
                        <li>Working with Children Check: Required if children are present in the home.</li>
                        <li>Income Proof: Verification of stable income to ensure financial responsibility.</li>
                        <li>References: Previous landlord or personal references to confirm reliability and character.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold">Benefits of Digital ID & Checks:</h2>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Enhanced Trust: Know who you are dealing with, whether you're renting a room or listing one.</li>
                        <li>Secure Connections: Our verification process protects against fraud and scammers.</li>
                        <li>Transparent Interactions: Clear communication and verified information foster a positive Room Lease experience.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Join Us in Building a Safe Community:</h1>
                    <p className="mt-4">Room Lease is committed to facilitating secure and transparent connections within our community. We encourage all users to complete these checks, not only to comply with our guidelines but to enhance trust and integrity within the Room Lease community.</p>
                </div>
                <div className="mt-14 text-center font-medium">
                    <p>Have more questions? <a href="#" className="text-blue-500 hover:underline">Contact us</a> for assistance. Together, we're creating a safer living experience for everyone.</p>
                </div>
            </div>
        </div>
    );
};

export default DigitalIdChecks;