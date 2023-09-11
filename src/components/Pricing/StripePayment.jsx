import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { baseURL } from "../../App";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, subscription, userData }) => {

    const appearance = {
        theme: 'stripe'
    };




    // STRIPE DATA
    const stripe = useStripe();
    const elements = useElements({ appearance });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()


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
                amount: price * 100,
                subscription: subscription, // <-- Subscription type: 'premium' or 'best value'
                userId: userData?.user_id, // <-- User id
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
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Payment Processed Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/profile')

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
                            Pay {price}$
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

const Upgrade = ({ price, subscription, userData }) => {

    return (
        <div className='px-2 mx-auto '>

            <div className='w-full lg:w-1/3 mx-auto mt-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} subscription={subscription} userData={userData} />
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