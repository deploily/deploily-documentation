import React from 'react';

export default function TtkEpayMvcContainer() {
    return (
        <div style={{ marginBottom: 50 }}>
            <p>
                The MVC integration enables your users to make payments for their invoices
                directly through your web application's interface.
                This approach offers flexibility and a streamlined payment experience.
            </p>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>💳 How It Works</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
                    <li>
                        The user accesses a payment page and provides their <strong>invoice number</strong> and
                        <strong> client code</strong>.
                    </li>
                    <li>
                        The system fetches and verifies the invoice details from your backend (or through the
                        TTK ePay SDK).
                    </li>
                    <li>
                        If the user chooses to proceed with payment via our module, a confirmation screen is
                        displayed.
                    </li>
                    <li>
                        Upon confirmation, the user is <strong>redirected to the SATIM secure payment
                            interface</strong>.
                    </li>
                    <li>
                        The user enters their bank card credentials and completes the transaction securely.
                    </li>
                    <li>
                        After payment, the user is redirected back to your application with the result.
                    </li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>🔐 Security Notes</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
                    <li>
                        Payment is handled securely through <strong>SATIM's official gateway</strong>.
                    </li>
                    <li>
                        No card credentials are ever stored or transmitted by your system.
                    </li>
                    <li>
                        You must validate the payment result through TTK ePay's backend confirmation route.
                    </li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>

                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>📦 Example Flow</h5>
                <ol style={{ listStyleType: 'decimal', paddingLeft: 20 }}>
                    <li>User navigates to <code>/payement-url</code></li>
                    <li>Enters invoice number and client code</li>
                    <li>Clicks "Pay"</li>
                    <li>Sees a confirmation modal</li>
                    <li>Redirects to SATIM</li>
                    <li>Completes payment</li>
                    <li>Gets redirected back with status: success or failure</li>
                </ol>

            </div>
        </div>
    );
}
