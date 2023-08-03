import React from 'react';
import useUserData from '../Hook/useUserData';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { userData, loading } = useUserData()
    if (loading) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }
    if (userData) {
        return children
    }
    else {
        return <Navigate to='/'></Navigate>
    }
};

export default PrivateRoute;