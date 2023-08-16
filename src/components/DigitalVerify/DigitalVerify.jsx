import React from "react";

const DigitalVerify = () => {
    React.useEffect(() => {
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

                },
                onClick: function (opts) {
                    console.log(opts);
                },
                onKeepAlive: function () {
                }
            });

        }
    });

    return (
        <div className="text-center mt-7">
            <div id="digitalid-verify"></div>
        </div>
    );
};

export default DigitalVerify;