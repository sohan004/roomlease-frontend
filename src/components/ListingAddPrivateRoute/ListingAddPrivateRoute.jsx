import React from 'react';
import useUserData from '../Hook/useUserData';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { baseURL } from '../../App';
import { useEffect } from 'react';

const ListingAddPrivateRoute = ({ children }) => {

    const { userData, loading } = useContext(AuthContext)
    const [listing, setListing] = useState(null)
    const [listingLoading, setListingLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        setListingLoading(true)
        if (!userData) return
        if (!localStorage.getItem('user-token')) {
            setListing(null)
            setListingLoading(false)
            return
        }

        fetch(`${baseURL}/listing/my-latest-listing/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setListing(data);
                setListingLoading(false)
            })
            .catch(err => {
                navigate('/')
            })
    }, [localStorage.getItem('user-token'), userData])

    if (loading || listingLoading) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    if (listing?.error == 'No listing found' || userData?.subscription != 'Free') {
        return children
    }
    else {
        return <Navigate to='/'></Navigate>
    }
};

export default ListingAddPrivateRoute;






