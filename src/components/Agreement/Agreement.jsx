import React from 'react';
import useTitle from '../Hook/useTitle';

const Agreement = () => {
    useTitle('Agreements')
    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1000px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Agreements</h1>
                    <p className="mt-4 text-lg">At Room Lease, we understand the importance of having a clear and legally binding agreement between homeowners and tenants. This page provides guidance on creating an agreement that suits your needs, including a sample template and state-specific considerations.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Pre-Agreement Checklist for Room Lease</h1>
                    <p className="mt-4">For Homeowners and Room Seekers:</p>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Arrange a personal meeting to gauge compatibility and discuss expectations.</li>
                        <li>Confirm the identity of both parties by checking valid government-issued IDs.</li>
                        <li>Determine whether a Residential Tenancy Agreement or a common law agreement will be used.</li>
                        <li>Agree on the bond amount, holder, and conditions for return.</li>
                        <li>Define the rent amount, due date, payment method, and any late fees.</li>
                        <li>Outline how utility bills (electricity, water, gas, internet) will be divided and paid.</li>
                        <li>List the furnishings and appliances provided and their condition.</li>
                        <li>Clarify exclusive areas, shared spaces, and any areas that are off-limits.</li>
                        <li>Define who is responsible for maintenance, repairs, and cleaning.</li>
                        <li>Establish house rules, including noise levels, guests, smoking, pets, and shared responsibilities.</li>
                        <li>Discuss insurance needs, such as landlord insurance for homeowners.</li>
                        <li>If applicable, highlight proximity to parks and community facilities.</li>
                        <li>Agree on the notice period required for termination and the process for ending the agreement.</li>
                        <li>Include any unique terms, conditions, or expectations.</li>
                        <li>Ensure compliance with state-specific laws and regulations.</li>
                        <li>Keep a written record of all discussions and agreements.</li>
                        <li>Consider seeking legal advice to ensure the agreement is legally sound.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Additional Considerations for Homeowners:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Consider background checks and references when screening potential tenants.</li>
                        <li>Decide whether to make your mobile number visible in the listing.</li>
                        <li>Understand the one-time listing fee, if applicable.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Additional Considerations for Room Seekers:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Encourage exploring different listings to find the perfect room.</li>
                        <li>Use Room Lease's secure communication platform for initial discussions.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Room Lease Agreement Template:</h1>
                    <p className="mt-4"><strong>ROOM LEASE AGREEMENT</strong></p>
                    {/* Rest of the agreement template */}
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">State-Specific Considerations:</h1>
                    <p className="mt-4">Ensure compliance with state-specific laws and regulations by referring to the following links:</p>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>New South Wales:</strong> Refer to relevant acts and regulations for NSW.</li>
                        <li><strong>Victoria:</strong> Refer to relevant acts and regulations for VIC.</li>
                        <li><strong>Queensland:</strong> Refer to relevant acts and regulations for QLD.</li>
                        <li><strong>Western Australia:</strong> Refer to relevant acts and regulations for WA.</li>
                        <li><strong>South Australia:</strong> Refer to relevant acts and regulations for SA.</li>
                        <li><strong>Australian Capital Territory:</strong> Refer to relevant acts and regulations for ACT.</li>
                        <li><strong>Tasmania:</strong> Refer to relevant acts and regulations for TAS.</li>
                        <li><strong>Northern Territory:</strong> Refer to relevant acts and regulations for NT.</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Legal Disclaimer</h1>
                    <p className="mt-4">These legal guides provide a brief summary and introduction to the laws and regulations affecting share accommodation. They do not cover all cases in all legal jurisdictions and might not apply in your specific share accommodation situation. It is important that you use this information as a guide only and seek independent legal advice or consult the relevant acts.</p>
                    {/* Rest of the legal disclaimer */}
                </div>
                <div className="mt-14 text-center font-medium">
                    <p>For more detailed information on tenancy acts specific to your state or territory, please refer to the provided links.</p>
                </div>
            </div>
        </div>
    );
};

export default Agreement;