import React from 'react';

export default function TtkEpaySatimEmulatorContainer() {

    return (
        <div style={{ marginBottom: 50, paddingInline: 20 }}>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight:"bold" }}>📘 SATIM Emulator</h5>
                <p>
                    The <strong>SATIM Emulator</strong> is a test environment that allows developers 
                    and QA teams to <em>simulate online payments</em> before connecting to the real SATIM gateway. 
                    It provides safe credentials and a sandbox interface to validate your integration.
                </p>

                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <img
                        src="/img/satim-emulator.png" 
                        alt="SATIM Emulator Interface"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />
                    <p style={{ fontSize: 14, color: '#555', marginTop: 5 }}>
                        Screenshot of the SATIM Emulator interface for testing payments.
                    </p>
                </div>

                <h6 style={{ marginTop: 20, fontWeight:"bold" }}>🔎 Why use the Emulator?</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Test your payment integration without real money</li>
                    <li>Generate <code>satim_username</code> and <code>satim_password</code> for testing</li>
                    <li>Simulate both <strong>successful</strong> and <strong>failed</strong> transactions</li>
                    <li>Verify <em>returnUrl</em> and <em>failUrl</em> flows</li>
                </ul>

                <h6 style={{ marginTop: 10, fontWeight:"bold" }}>⚙️ How to Connect</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Open your <strong>Admin Console</strong></li>
                    <li>Go to <strong>My Profile</strong></li>
                    <li>Copy the generated <code>satim_username</code> and <code>satim_password</code></li>
                    <li>Use them in your test environment</li>
                </ul>

                <h6 style={{ marginTop: 10, fontWeight:"bold" }}>🚀 Usage in Tests</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Register a test payment with your emulator credentials</li>
                    <li>Confirm a payment to simulate approval</li>
                    <li>Trigger the <em>failUrl</em> to simulate rejection</li>
                </ul>

                <h6 style={{ marginTop: 10, fontWeight:"bold" }}>⚠️ Notes</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>No real banking transactions occur</li>
                    <li>Use only for <strong>development and QA</strong></li>
                    <li>Replace emulator credentials with real SATIM details before production</li>
                </ul>
            </div>
        </div>
    );
}
