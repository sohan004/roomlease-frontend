import { useState } from "react";
import useTitle from "../Hook/useTitle";
import { useEffect } from "react";
import { baseURL } from "../../App";
import { useNavigate } from "react-router-dom";

const Testimonial = () => {
    useTitle("Testimonial")


    useTitle('Frequently Asked Questions');

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/cms/testimonial/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);




    const testimonials = [
        {
            id: 1,
            message: "Listing my room on Room Lease was a breeze. The one-time listing fee is a game-changer, and I love being part of this community-driven platform.",
            name: "Sarah, Melbourne"
        },
        {
            id: 2,
            message: "Room Lease's digital ID verification gave me peace of mind. I found a trustworthy tenant in no time!",
            name: "James, Sydney"
        },
        {
            id: 3,
            message: "I'm earning extra income from my spare room, thanks to Room Lease. The process was simple, and the support team was always there to help.",
            name: "Linda, Brisbane"
        },
        {
            id: 4,
            message: "Highlighting my home's proximity to parks was a unique feature. Room Lease understands what homeowners need.",
            name: "Tim, Adelaide"
        },
        {
            id: 5,
            message: "I never thought listing a room could be this easy. Room Lease's transparent approach is refreshing.",
            name: "Karen, Perth"
        },
        {
            id: 6,
            message: "I found the perfect room near my university on Room Lease. The search filters made it so easy!",
            name: "Emily, Canberra"
        },
        {
            id: 7,
            message: "Safety was my priority, and Room Lease's digital ID checks reassured me. I love my new place!",
            name: "Mark, Hobart"
        },
        {
            id: 8,
            message: "Room Lease connected me with a homeowner who shares my values. It's more than just a platform; it's a community.",
            name: "Olivia, Darwin"
        },
        {
            id: 9,
            message: "I was new to Australia, and Room Lease made finding a room stress-free. Highly recommend!",
            name: "Carlos, Gold Coast"
        },
        {
            id: 10,
            message: "The Room Lease app is user-friendly, and I found a room that fits my budget. Thank you, Room Lease!",
            name: "Ben, Newcastle"
        },
        {
            id: 11,
            message: "As a retiree, I was skeptical about renting my room. Room Lease guided me through every step. It's been a wonderful experience.",
            name: "Margaret, Geelong"
        },
        {
            id: 12,
            message: "I'm a single mum, and Room Lease helped me find a responsible tenant. Their support means a lot to me.",
            name: "Rachel, Wollongong"
        },
        {
            id: 13,
            message: "Being a student, I needed an affordable room. Room Lease's search options were a lifesaver!",
            name: "Jake, Townsville"
        },
        {
            id: 14,
            message: "I found a pet-friendly homeowner through Room Lease. Now, my furry friend and I have a lovely home.",
            name: "Amy, Cairns"
        },
        {
            id: 15,
            message: "Room Lease's one-time listing fee is a breath of fresh air. No hidden charges, just genuine service.",
            name: "Tom, Bendigo"
        },
        {
            id: 16,
            message: "I appreciate Room Lease's commitment to safety with their digital ID checks. It sets them apart.",
            name: "Sophia, Toowoomba"
        },
        {
            id: 17,
            message: "The option to highlight proximity to parks is brilliant. Room Lease truly understands what tenants look for.",
            name: "Ethan, Ballarat"
        },
        {
            id: 18,
            message: "Room Lease's community focus is what makes them special. I feel like I'm part of something bigger.",
            name: "Chloe, Launceston"
        },
        {
            id: 19,
            message: "I was struggling to find a room that fits my needs. Room Lease's detailed filters made it possible. They're the best!",
            name: "Henry, Albury"
        },
        {
            id: 20,
            message: "Room Lease's transparent approach to fees and verification is what every platform should have. They've earned my trust.",
            name: "Grace, Mackay"
        }
    ];
    const navigate = useNavigate();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6  lg:py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {faq.map((testimonial) => <div onClick={() => navigate(`/testimonial/${testimonial.id}`)} key={testimonial.id} className="p-4 cursor-pointer w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">{testimonial?.comment}</p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src={testimonial.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">{testimonial?.name}</span>
                                    <span className="title-font font-medium text-gray-400">{testimonial?.designation}</span>
                                </span>
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;