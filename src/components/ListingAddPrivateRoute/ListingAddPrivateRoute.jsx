import React from 'react';
import useUserData from '../Hook/useUserData';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { baseURL } from '../../App';
import { useEffect } from 'react';

const ListingAddPrivateRoute = ({ children }) => {

    const { userData, loading, listing, listingLoading2, setListingLoading2, } = useContext(AuthContext)

    if (loading || listingLoading2) return <div className='flex justify-start items-center my-12 text-center'>
        <span className="loading loading-spinner loading-lg mx-auto"></span>
    </div>

    if (!userData) return <Navigate to='/'></Navigate>

    if (!listing || listing?.error == 'No listing found') return children

    if (userData?.subscription != 'Free') return children

    else return <Navigate to='/'></Navigate>



};

export default ListingAddPrivateRoute;






