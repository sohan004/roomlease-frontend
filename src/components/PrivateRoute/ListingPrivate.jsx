import React from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ListingPrivate = ({ children }) => {
    const { listing, setRefresh, refresh, listingLoading, listingLoading2 } = useContext(AuthContext)
    console.log(listingLoading2);

    if (listingLoading2) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    if (listing) {
        return <Navigate to='/profile'></Navigate>
    }
    else {
        return children
    }
};

export default ListingPrivate;