import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalPayment() {
  return (
    <PayPalScriptProvider options={{ "client-id": "ASqQz4u-meS6EbMCFLorh76GQXaZbjSz6HTzLm4xcgwd_e5_OeQQnfsVlIdak7RFx96FniK9sxLrYQRA" }}>
        <PayPalButtons 
            style={{ layout: "horizontal" }} 
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "0.01",
                            },
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
