import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { baseURL } from "../../App";

const CheckoutForm = () => {
    const appearance = {
        theme: 'stripe'
    };
    
    const user = {
        id: 1,
        email: 'example@example.com',
        name: 'John Doe'
    }
    // ORDER DATA
    const order_price = 10;



    // STRIPE DATA
    const stripe = useStripe();
    const elements = useElements({ appearance });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(error.message);
            setSuccess('');
            setProcessing(false);
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
            const url = `${baseURL}/account/stripe-payment/`
            const data = {
                payment_method_id: paymentMethod.id,
                amount: order_price * 100,
                email: user.email,
                userId: user.id
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('user-token')}`
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            console.log(result)
            if (result.success) {
                setSuccess('Your Payment Processed Successfully')
                setProcessing(false);
            } else {
                setError(result.message)
                setProcessing(false);
            }
        }
    };

    return (
        <div className='bg-gray-100 px-5 pb-5 pt-10 rounded-md'>
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',

                            color: '#424770',
                            '::placeholder': {
                                color: '#525252',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                {
                    processing ? (
                        <button className='btn border-none loading px-5 w-full py-2 bg-sky-500 text-white mt-7 rounded' type="submit" >
                            Processing
                        </button>
                    ) : (
                        <button className='px-5 w-full py-2 bg-sky-500 text-white mt-7 rounded' type="submit" disabled={!stripe || !elements}>
                            Pay {order_price}$
                        </button>
                    )
                }

                {
                    error && <div className="my-5 text-red-500 py-3 rounded-md bg-red-100 ">
                        <h2 className='px-3'> {error} </h2>
                    </div>
                }
                {
                    success && <div className="my-5 text-green-500 py-3 rounded-md bg-green-100 ">
                        <h2 className='px-3'> {success} </h2>
                    </div>
                }
            </form>
        </div>
    );
};

const stripePromise = loadStripe('pk_test_51NknAKB23sXYlBSuEUIXmBUWnjcxe2ZIFMzcrkfiAwMZMB6JduTcmIzm18olx5clotJ8lGl0kV9aCb9GAZf6I6fS00UGjEGs5y');

const Upgrade = () => {

    return (
        <div className='min-h-screen w-5/6 mx-auto mb-20'>
            <h1 className='text-3xl font-bold py-10'>Upgrade</h1>

            <div className='text-center'>
                <p className='py-3 text-lg'>
                    Pay <span className='font-semibold text-sky-500'>$10</span> to upgrade your account to premium
                </p>
                <p className='py-2 text-sm text-center text-gray-400'>
                    Premium features include unlimited access to premium content, and more.
                </p>

            </div>

            <div className='w-full lg:w-1/3 mx-auto mt-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>

            <div className='flex justify-center'>
                <a className='text-sm text-gray-400 mt-5' href='https://stripe.com/' target='_blank' rel="noreferrer">
                    <img className='w-[180px] opacity-80' src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Logo.wine.svg" alt="" />
                </a>
            </div>

        </div>
    );
};

export default Upgrade;