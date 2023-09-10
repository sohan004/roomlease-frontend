import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalPayment() {

    const amount = 29.99; // <-- Amount to charge users
    const userData = {
        'id': 1, // <-- User id
        'subscription': 'premium', // <-- Subscription type: 'premium' or 'best value'
    }


  return (
    <PayPalScriptProvider options={{ "client-id": "ASqQz4u-meS6EbMCFLorh76GQXaZbjSz6HTzLm4xcgwd_e5_OeQQnfsVlIdak7RFx96FniK9sxLrYQRA" }}>
        <PayPalButtons 
            style={{ layout: "horizontal" }} 
            // pass user all data to paypal
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount,
                            },
                            custom_id: JSON.stringify(userData),
                        },
                    ],
                });
            }}

            onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                    alert("Transaction completed by " + details.payer.name.given_name);
                });
            }}
            onError={(err) => {
                console.log(err);
            }}
            
        />
    </PayPalScriptProvider>
  )
}
