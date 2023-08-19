import React from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateListingPage = ({ children }) => {
    const { listing, setRefresh, refresh, listingLoading } = useContext(AuthContext)
    if (listingLoading) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    if (listing) {
        return children
    }
    else {
        return <Navigate to='/register'></Navigate>
    }
};

export default PrivateListingPage;