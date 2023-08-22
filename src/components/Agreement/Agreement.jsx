import React from 'react';
import useTitle from '../Hook/useTitle';

import img1 from '../../assets/agreementIcon/price-list.png'
import img2 from '../../assets/agreementIcon/approve.png'
import img3 from '../../assets/agreementIcon/checklist.png'
import img4 from '../../assets/agreementIcon/house.png'
import img5 from '../../assets/agreementIcon/list.png'
import img6 from '../../assets/agreementIcon/modern-house.png'

const Agreement = () => {
    useTitle('Agreements')
    return (
        <div>
            <div className="bg-[#7065F0] ">
                <div className="max-w-[1440px] py-8 mx-auto text-white px-4 text-center">
                    <h1 className="text-4xl font-bold">Agreements</h1>
                    <p className="mt-4 text-lg">At Room Lease, we understand the importance of having a clear and legally binding agreement between homeowners and tenants. This page provides guidance on creating an agreement that suits your needs, including a sample template and state-specific considerations.</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Pre-Agreement Checklist for Room Lease</h1>
                    <p className="mt-4">For Homeowners and Room Seekers:</p>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Arrange a face-to-face or video call meeting to gauge compatibility and discuss expectations.</li>
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
                <img src={img1} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Additional Considerations for Homeowners:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Consider background checks and references when screening potential tenants.</li>
                        <li>Decide whether to make your mobile number visible in the listing.</li>
                        <li>Understand the one-time listing fee, if applicable.</li>
                    </ul>
                </div>
                <img src={img2} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Additional Considerations for Room Seekers:</h1>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li>Encourage exploring different listings to find the perfect room.</li>
                        <li>Use Room Lease's secure communication platform for initial discussions.</li>
                    </ul>
                </div>
                <img src={img3} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Room Lease Agreement Template:</h1>
                    <p className="mt-4"><strong>ROOM LEASE AGREEMENT</strong></p>
                    <p className="mt-4"><strong>This Agreement is made on [DATE] between [HOMEOWNER NAME], the homeowner ("Homeowner"), and [TENANT NAME], the tenant ("Tenant").</strong></p>
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                        <li><strong>TERM:</strong> This Agreement shall commence on [START DATE] and continue as a [lease type, e.g., one-year lease] until terminated by either party with written notice.</li>

                        <li><strong>RENT:</strong> The monthly rent shall be $[NEW RENT AMOUNT], payable in advance on the [DAY] of each month.</li>

                        <li><strong>BOND:</strong> A security deposit of $[NEW BOND AMOUNT] shall be paid by the Tenant and held by [NEW BOND HOLDER] during the tenancy.</li>

                        <li><strong>EXCLUSIVE AND SHARED AREAS:</strong>
                            <ul>
                                <li><strong>Exclusive Areas:</strong> [List specific areas exclusively for the Tenant]</li>
                                <li><strong>Shared Areas:</strong> [List specific areas shared with other occupants]</li>
                            </ul></li>

                        <li><strong>UTILITIES AND BILLS:</strong> [Explain how utilities and bills are divided or included in the rent]</li>

                        <li><strong>HOUSE RULES:</strong> [Specify any house rules or expectations for the Tenant]</li>

                        <li><strong>OPTIONAL PROXIMITY TO PARKS AND COMMUNITY FACILITIES:</strong> [Highlight the proximity to parks and community facilities, if applicable]</li>

                        <li><strong>INSURANCE:</strong> The Tenant is advised to consult with their insurance provider to discuss upgrading to landlord insurance if necessary.</li>

                        <li><strong>TERMINATION:</strong> This Agreement may be terminated by either party by providing [NEW NOTICE PERIOD] written notice.</li>

                        <li><strong>SPECIAL TERMS:</strong> [Include any other special terms or conditions]</li>

                        <li><strong>ENTIRE AGREEMENT:</strong> This Agreement contains the entire agreement of the parties and there are no other promises, conditions, understandings, or other agreements, whether oral or written.</li>

                        <li><strong>SIGNATURES:</strong><br />
                            __________________________          __________________________<br />
                            [HOMEOWNER NAME]                             [TENANT NAME]<br />
                            Date: ________                                      Date: ________</li>

                    </ul>

                    {/* Rest of the agreement template */}
                </div>
                <img src={img4} className="w-20 mx-auto mt-5" alt="" />
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
                        <li><strong>Link to agreement for Your State:</strong><br />
                            - <a className='underline' href="https://info.flatmates.com.au/nsw-tenancy-agreements">NSW Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/vic-tenancy-agreements">VIC Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/qld-tenancy-agreements">QLD Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/wa-tenancy-agreements">WA Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/sa-tenancy-agreements">SA Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/act-tenancy-agreements">ACT Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/tas-tenancy-agreements">TAS Tenancy Agreement</a><br />
                            - <a className='underline' href="https://info.flatmates.com.au/nt-tenancy-agreements">NT Tenancy Agreement</a></li>
                    </ul>
                </div>
                <img src={img5} className="w-20 mx-auto mt-5" alt="" />
                <div className="mt-10">
                    <p className="mt-4">These legal guides provide a brief summary and introduction to the laws and regulations affecting share accommodation. They do not cover all cases in all legal jurisdictions and might not apply in your specific share accommodation situation. It is important that you use this information as a guide only and seek independent legal advice or consult the relevant acts.

                        We at Room Lease do not accept any liability that may arise from the use of this information. The content provided on this page is intended for informational purposes only and should not be construed as legal advice. Always consult with a qualified legal professional to understand your rights and obligations under the law.
                    </p>
                    {/* Rest of the legal disclaimer */}
                </div>
                <img src={img6} className="w-20 mx-auto mt-5" alt="" />
                <h1 className="text-2xl font-bold mt-5">For more detailed information on tenancy acts specific to your state or territory, please refer to the following links:</h1>

                <h1 className="text-lg font-bold">New South Wales:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 2010 (NSW).</li>
                    <li>Residential Tenancies Regulation 2010 (NSW)</li>
                    <li>Boarding Houses Act 2012 (NSW).</li>
                    <li>Boarding Houses Regulation 2013 (NSW)</li>
                </ul>

                <h1 className="text-lg font-bold">Victoria:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 1997 (VIC).</li>
                    <li>Residential Tenancies Regulations 2020 (VIC)</li>
                    <li>Residential Tenancies (Rooming House Standards) Regulations 2012 (VIC).</li>
                </ul>

                <h1 className="text-lg font-bold">Queensland:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies and Rooming Accommodation Act 2008 (QLD).</li>
                    <li>Residential Tenancies and Rooming Accommodation Regulation 2009 (QLD)</li>
                </ul>

                <h1 className="text-lg font-bold">Western Australia:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 1987 (WA).</li>
                    <li>Residential Tenancies Regulations 1989 (WA)</li>
                </ul>

                <h1 className="text-lg font-bold">South Australia:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 1995 (SA).</li>
                    <li>Residential Tenancies Regulations 2010 (SA)</li>
                </ul>

                <h1 className="text-lg font-bold">Australian Capital Territory:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 1997 (ACT).</li>
                    <li>Residential Tenancies Regulation 1998 (ACT)</li>
                </ul>

                <h1 className="text-lg font-bold">Tasmania:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancy Act 1997 (TAS).</li>
                    <li>Residential Tenancy Regulations 2005 (TAS)</li>
                    <li>Residential Tenancy (Smoke Alarms) Regulations 2012 (TAS).</li>
                </ul>

                <h1 className="text-lg font-bold">Northern Territory:</h1>
                <ul className="list-disc list-inside mt-4 flex flex-col gap-4">
                    <li>Residential Tenancies Act 2013 (NT).</li>
                    <li>Residential Tenancies Regulations 2009 (NT)</li>
                </ul>

                
            </div>
        </div>
    );
};

export default Agreement;