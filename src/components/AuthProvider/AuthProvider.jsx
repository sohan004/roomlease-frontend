import React from 'react';
import { createContext } from 'react';
import { baseURL } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [listing, setListing] = useState(null)
    const [refresh, setRefresh] = useState(1)
    useEffect(() => {
        if (!localStorage.getItem('user-token')) {
            setListing(null)
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
                    return
                }
                setListing(data);
            })
            .catch(err => {
                console.log(err);
                setListing(null)
            })
    }, [localStorage.getItem('user-token'), refresh])


    const valu = {
        listing,
        setRefresh,
        refresh
    }
    return (
        <AuthContext.Provider value={valu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;