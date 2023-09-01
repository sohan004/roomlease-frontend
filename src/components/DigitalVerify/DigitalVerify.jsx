import React from "react";
import { useEffect } from "react";
import { baseURL } from "../../App";

const DigitalVerify = () => {
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://digitalid.com/sdk/app.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {

            /* Verify with Digital iD */
            window.digitalId.init({
                clientId: 'ctid26GcPgoi4npMOABfSIg4Q9',
                uxMode: 'popup',
                onLoadComplete: function () {
                },
                onComplete: function (msg) {
                    console.log(msg);
                    setLoading(true);
                    const url = `${baseURL}/account/digital-id/}`
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${localStorage.getItem('user-token')}`,
                        },
                        body: JSON.stringify(msg)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false);
                            console.log(data);
                            if (data.success) {
                                alert('Digital ID verified successfully');
                                window.location.reload();
                            } else {
                                setLoading(false);
                                alert('Digital ID verification failed');
                            }
                        })
                        .catch(err => {
                            setLoading(false);
                            console.log(err);
                        })


                },
                onClick: function (opts) {
                    console.log(opts);
                },
                onKeepAlive: function () {
                }
            });

        }
    }, []);

    return (
        <div className="text-center mt-7">
            {loading ?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                : <div id="digitalid-verify"></div>}

        </div>
    );
};

export default DigitalVerify;