import card from '../../assets/payImg/visa-mastercard-discover-png-visa-mastercard-american-express-discover-11562884670gyxaij59my-removebg-preview.png'
import StripePayment from '../../components/Pricing/StripePayment.jsx'
import PaypalPayment from '../../components/Pricing/PaypalPayment.jsx'

import paypal from '../../assets/payImg/PayPal-Logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Payment = () => {
    const quary = new URLSearchParams(useLocation().search)
    const subscription = quary.get('subscription')
    const navigate = useNavigate()
    const { userData, loading } = useContext(AuthContext)
    const [payType, setPayType] = useState('')

    useEffect(() => {
        if (loading) return
        if (!userData) return navigate('/otp-send')
    }, [userData])

    useEffect(() => {
        if (subscription != 'premium' && subscription != 'best value') return navigate('/')
    }, [subscription])

    const homeownerPrice = subscription == 'premium' ? 23.99 : 29.99
    const roomseekerPrice = subscription == 'premium' ? 14.99 : 19.99

    if (!userData) {
        return <div className='flex justify-start items-center my-12 text-center'>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }


    return (
        <div className='max-w-6xl mx-auto px-4 pb-10'>
            <div className='text-center lg:mt-20 mt-8'>
                <p className='py-3 text-lg'>
                    Pay <span className='font-semibold text-sky-500'>${userData?.account_type == 'homeowner' ? homeownerPrice : roomseekerPrice}</span> to upgrade your account to {subscription}
                </p>
                <p className='py-2 text-sm text-center text-gray-400'>
                    Premium features include unlimited access to premium content, and more.
                </p>
                <div className='md:flex items-center justify-center mt-7'>
                    <img onClick={() => setPayType('stripe')} src={card} className='mx-auto md:mx-0 cursor-pointer border h-12 p-2  rounded-md' alt="" />

                    <p className='text-center text-gray-400 m-1 font-medium'>or</p>

                    <img onClick={() => setPayType('paypal')} src={paypal} className='mx-auto md:mx-0 cursor-pointer border h-12 p-2 rounded-md' alt="" />
                </div>
                <div className='my-10'>
                {payType === 'stripe' && <StripePayment price={userData?.account_type == 'homeowner' ? homeownerPrice : roomseekerPrice} subscription={subscription} userData={userData}></StripePayment>}
                {payType === 'paypal' && <PaypalPayment price={userData?.account_type == 'homeowner' ? homeownerPrice : roomseekerPrice} subscription={subscription} userData={userData}></PaypalPayment>}
                </div>

            </div>
        </div>
    );
};

export default Payment;