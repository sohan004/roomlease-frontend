import { FaMapMarkerAlt, FaRegBookmark, FaRegCalendarAlt, FaWarehouse } from "react-icons/fa";
import useTitle from "../Hook/useTitle";
import { useState } from "react";
import { useEffect } from "react";
import { baseURL } from "../../App";
import { Link } from "react-router-dom";

const Career = () => {
    useTitle("Careers")
    useTitle('Frequently Asked Questions');

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/cms/job-circular/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);



    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-9 px-3 mt-9 lg:mt-14">
            {faq.map((item) => <div key={item.id} className="flex justify-between border p-4 lg:p-6 rounded-md">
                <div className="">
                    <h1 className="text-xl text-[#7166F0] font-semibold">{item.title}</h1>
                    <div className="flex items-center gap-3 mt-4 mb-2 opacity-60">
                        <p className="flex items-center gap-1"><FaMapMarkerAlt />{item.location}</p>
                        <p className="flex items-center gap-1"><FaWarehouse />{item.flexibility}</p>
                    </div>
                    <p className="flex items-center gap-1"><FaRegCalendarAlt />closeing on june {item.closing_date}</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <p className="bg-blue-200 px-2 rounded-full">{item.job_type}</p>
                    <Link to={`/career/${item.id}`}><button className="btn btn-primary btn-sm">apply now</button></Link>
                </div>
            </div>)}



        </div>
    );
};

export default Career;