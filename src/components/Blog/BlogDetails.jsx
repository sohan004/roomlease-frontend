import React from 'react';
import { useState } from 'react';
import useTitle from '../Hook/useTitle';
import { useEffect } from 'react';
import { baseURL } from '../../App';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const BlogDetails = () => {
    useTitle('Frequently Asked Questions');

    const [faq, setFaq] = useState({});
    const id = useParams().id;

    useEffect(() => {
        fetch(`${baseURL}/cms/blog/${id}/`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);

    console.log(faq);
    return (
        <div className='max-w-6xl mx-auto px-3 bg-white text-black'>
            <img src={faq.image} className='w-full lg:h-[500px]' alt="" />
            <div className="py-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{faq.title}</h3>
                <span className="text-xs dark:text-gray-400">{moment(faq.created_at).format("MMM Do YY")}</span>
                <p>{faq.content}</p>
            </div>
        </div>
    );
};

export default BlogDetails;