import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';

const CardPayment = () => {
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        setStripePromise(loadStripe('pk_test_51NHKuHLo6mTPqeDm2GzIjHfKc8TTZMqtNFmmUGjdLjlefRBh6Dgx07Dt9dSItKYiMYK21bNLMCLpPPLvdN0L8Yin004zqjWTD5'))
    }, []);

    useEffect(() => {
        fetch('https://assignment-12-server-seven-virid.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price: 420 })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClientSecret(data.clientSecret)
            })
    }, [])


    return (
        <div className='max-w-[500px] mx-auto'>
            {clientSecret && stripePromise &&  <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckOut></CheckOut>
              
            </Elements>}
        </div>
    );
};

export default CardPayment;