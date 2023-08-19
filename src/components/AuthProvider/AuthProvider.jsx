import React from 'react';
import { createContext } from 'react';
import { baseURL } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [listing, setListing] = useState(null)
    const [refresh, setRefresh] = useState(1)
    const [listingLoading, setListingLoading] = useState(true)


    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserData(data.data)
                    setLoading(false)
                }
                else {
                    setUserData(null)
                    setLoading(false)
                }
            })
            .catch(err => {
                setUserData(null)
                setLoading(false)
            })
    }, [localStorage.getItem('user-token')])


    useEffect(() => {
        setListingLoading(true)
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
                if (data?.error) {
                    console.log(data)
                    setListing(null)
                    setListingLoading(false)
                    return
                }
                setListing(data);
                setListingLoading(false)
            })
            .catch(err => {
                console.log(err);
                setListing(null)
                setListingLoading(false)
            })
    }, [localStorage.getItem('user-token'), refresh])


    const valu = {
        listing,
        setRefresh,
        refresh,
        listingLoading,
        setListing,
        userData,
        loading,
        setLoading,
        setUserData
    }
    return (
        <AuthContext.Provider value={valu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;