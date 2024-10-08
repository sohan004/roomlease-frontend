import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function PaypalPayment({ price, subscription, userData: user }) {

    const amount = price; // <-- Amount to charge users
    const userData = {
        'id': user?.user_id, // <-- User id
        'subscription': subscription, // <-- Subscription type: 'premium' or 'best value'
    }
    const navigate = useNavigate()


    return (
        <div className=''>
            <PayPalScriptProvider options={{ "client-id": "ASqQz4u-meS6EbMCFLorh76GQXaZbjSz6HTzLm4xcgwd_e5_OeQQnfsVlIdak7RFx96FniK9sxLrYQRA" }}>
                <PayPalButtons className='w-80 mx-auto'
                    style={{ layout: "horizontal", }}
                    // pass user all data to paypal
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: amount,
                                    },
                                    custom_id: `${userData.id}-${userData.subscription}`,
                                },
                            ],
                        });
                    }}

                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            alert('We have received your payment. It may take 5 minutes to update your account.')
                            window.location.href = '/profile'
                        });
                    }}
                    onError={(err) => {
                        console.log(err);
                    }}

                />
            </PayPalScriptProvider>
        </div>
    )
}
