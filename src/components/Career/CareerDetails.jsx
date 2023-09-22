import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../App";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaWarehouse } from "react-icons/fa";

const CareerDetails = () => {
    const [faq, setFaq] = useState({});
    const id = useParams().id;

    useEffect(() => {
        fetch(`${baseURL}/cms/job-circular/${id}/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);
    return (
        <div className="bg-white text-black">
            <div className="max-w-6xl mx-auto px-3">
                {/* i want job circular details page */}
                <div className="flex justify-between border p-4 lg:p-6 rounded-md mt-7">
                    <div className="">
                        <h1 className="text-xl text-[#7166F0] font-semibold">{faq.title}</h1>
                        <div className="flex items-center gap-3 mt-7 mb-2 opacity-60">
                            <p className="flex items-center gap-1"><FaMapMarkerAlt />{faq.location}</p>
                            <p className="flex items-center gap-1"><FaWarehouse />{faq.flexibility}</p>
                        </div>
                        <p className="flex items-center gap-1"><FaRegCalendarAlt />closeing on june {faq.closing_date}</p>
                        <p className="mt-7"><b>Description: </b>{faq.description}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="bg-blue-200 px-2 rounded-full">{faq.job_type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;