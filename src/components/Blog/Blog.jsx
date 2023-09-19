import { useState } from "react";
import useTitle from "../Hook/useTitle";
import { useEffect } from "react";
import { baseURL } from "../../App";
import moment from "moment";
import { Link } from "react-router-dom";

const Blog = () => {
    useTitle("Blog")

    useTitle('Frequently Asked Questions');

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/cms/blog/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);

    return (
        <div className="bg-white text-black">
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {faq.map(blog => <Link to={`/blog/${blog.id}`} key={blog.id} rel="noopener noreferrer" className="w-full group hover:no-underline h-full focus:no-underline dark:bg-gray-900 border">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.image} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                                <span className="text-xs dark:text-gray-400">{moment(blog.created_at).format("MMM Do YY")}</span>
                                <p>{blog.content}</p>
                            </div>
                        </Link>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;