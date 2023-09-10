import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const click = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const { paymentIntent, error: paymentError } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:5173/'
            },
            redirect: 'if_required'
        })
        if (paymentError) {
            console.log(paymentError);
        }
        if (paymentIntent) {
            console.log(paymentIntent);
        }
    }
    return (
        <form onSubmit={click} className='max-w-[500px] mx-auto px-4 mt-10'>
            <PaymentElement></PaymentElement>
            <button className='btn border-0 hover:bg-[#4e46a1] bg-[#7065F0] text-white w-full mt-4'>Pay</button>
        </form>
    );
};

export default CheckOut;