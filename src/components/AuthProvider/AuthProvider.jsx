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
    const [tf, setTf] = useState(true)


    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [listingLoading2, setListingLoading2] = useState(true)

    const [searchDrpopDown, setSearchDrpopDown] = useState(false)
    const [userDataRefresh, setUserDataRefresh] = useState(1)


    useEffect(() => {
        setLoading(true)
        if (!localStorage.getItem('user-token')) {
            setUserData(null)
            setLoading(false)
            return
        }
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
    }, [localStorage.getItem('user-token'), userDataRefresh])


    useEffect(() => {
        // setListingLoading(true)
        setListingLoading2(true)
        if (!localStorage.getItem('user-token') || !userData) {
            setListing(null)
            setListingLoading(false)
            setListingLoading2(false)
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
                    setListingLoading2(false)
                    return
                }
                setListing(data);
                setListingLoading(false)
                setListingLoading2(false)
            })
            .catch(err => {
                console.log(err);
                setListing(null)
                setListingLoading(false)
                setListingLoading2(false)
            })
    }, [localStorage.getItem('user-token'), refresh, userData])


    const valu = {
        listing,
        setRefresh,
        refresh,
        listingLoading,
        setListing,
        userData,
        loading,
        setLoading,
        setUserData,
        searchDrpopDown, setSearchDrpopDown,
        listingLoading2, setListingLoading2,
        tf, setTf,
        userDataRefresh, setUserDataRefresh
    }
    return (
        <AuthContext.Provider value={valu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;