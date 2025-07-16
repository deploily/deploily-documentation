import React from 'react';

export default function TtEpayFullWorkflowContainer() {
    return (
        <div style={{ marginBottom: 50, paddingInline: 20 }}>
            <div>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>📈 BPMN Diagram</h5>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="/img/ttk-epay-bpmn.png"
                        alt="BPMN Diagram"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>  1️⃣ Order TTK ePay in Deploily</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Log into your <a href="https://deploily.com">Deploily</a> account</li>
                    <li>Go to <strong>Applications &gt; TTK ePay</strong></li>
                    <li>Purchase the module</li>
                    <li>You will get:
                        <ul>
                            <li>- <strong>API Base URL</strong></li>
                            <li>- <strong>Secret Key</strong></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}> 2️⃣ Register on cibweb.dz</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Visit <a href="https://cibweb.dz">cibweb.dz</a></li>
                    <li>Submit your company documents</li>
                    <li>Obtain the necessary credentials (e.g. Merchant ID, Terminal ID)</li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}> 3️⃣ Configure "TTK ePay" in Deploily</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Navigate to <strong>My Applications &gt; TTK ePay &gt; Settings</strong></li>
                    <li>Fill parameters</li>
                    <li>Click <strong>Save</strong></li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}> 4️⃣ Use the Admin Console to Create Invoices</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Go to <strong>TTK ePay &gt; Invoices</strong></li>
                    <li>Click <strong>Create Invoice</strong></li>
                    <li>Click <strong>Generate Link</strong> and share it with your client</li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}> 5️⃣ Test with the MVC (Web) Interface</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Your client opens the secure <strong>payment page</strong></li>
                    <li>Enters invoice number and client code and pay</li>
                    
                </ul>
                <blockquote>
                    ♻️ Ideal for testing before API integration
                </blockquote>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}> 6️⃣ Use the APIs (Node.js / Python)</h5>

                <h2 style={{ marginBottom: 5, fontWeight: "bold" }}>7️⃣ Monitor Results in the Admin Console (InvoicesPaymnts) </h2>
                
            </div>
        </div>
    );
}
