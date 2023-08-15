import React from "react";

const DigitalVerify = () => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://digitalid-sandbox.com/sdk/app.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {

            /* Verify with Digital iD */
            window.digitalId.init({
                clientId: 'ctid5IZ8BI7zGn0PEzgG1gDU96',
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