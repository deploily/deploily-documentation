import React from 'react';

export default function TtkEpaySatimEmulatorContainer() {
    return (
        <div style={{ marginBottom: 50, paddingInline: 20 }}>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>📘 SATIM Emulator</h5>
                <p>
                    The <strong>SATIM Emulator</strong> is a <em>secure sandbox environment</em> provided 
                    for developers and QA engineers to test online payment flows. 
                    It reproduces the behavior of the official SATIM gateway, 
                    but <strong>without involving any real transactions</strong>. 
                    This makes it safe and efficient for integration, testing, and troubleshooting.
                </p>

                {/* Screenshot */}
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

                {/* Workflow */}
                <h6 style={{ marginTop: 20, fontWeight: "bold" }}>🔄 Payment Workflow</h6>
                <ol style={{ paddingLeft: 20, marginBottom: 10 }}>
                    <li><strong>Register:</strong> Create an order via <code>/register.do</code></li>
                    <li><strong>Redirect:</strong> User is redirected to the provided <code>formUrl</code></li>
                    <li><strong>Confirm:</strong> Validate the order using <code>/confirmOrder.do</code></li>
                    <li><strong>Result:</strong> Application handles <code>returnUrl</code> or <code>failUrl</code></li>
                </ol>

                {/* Why */}
                <h6 style={{ marginTop: 20, fontWeight: "bold" }}>🔎 Why use the Emulator?</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Validate payment flows without using real money</li>
                    <li>Obtain safe <code>satim_username</code> and <code>satim_password</code> for tests</li>
                    <li>Simulate <strong>success</strong> and <strong>failure</strong> scenarios</li>
                    <li>Verify your integration before going live</li>
                </ul>

                {/* How to connect */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>⚙️ How to Connect</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Login to your <strong>Admin Console</strong></li>
                    <li>Navigate to <strong>My Profile</strong></li>
                    <li>Copy the generated <code>satim_username</code> and <code>satim_password</code></li>
                    <li>Use them inside your development/test environment</li>
                </ul>

                {/* Usage */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>🚀 Usage in Tests</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Register a new test payment request</li>
                    <li>Confirm the payment to simulate approval</li>
                    <li>Trigger <code>failUrl</code> to simulate rejection</li>
                </ul>

                {/* Example curl register */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>📡 Example cURL — Register</h6>
                <pre style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5, overflowX: "auto" }}>
{`curl -X GET "http://127.0.0.1:8000/api/payment/rest/register.do?orderNumber=123&amount=100&currency=012&returnUrl=http://localhost/success&failUrl=http://localhost/fail&language=EN&userName=satim_demo&password=demoPass&description=TestPayment&jsonParams=%7B%7D" \\
-H "Accept: application/json"`}
                </pre>

                <p style={{ fontSize: 14, color: "#555", marginTop: 5 }}>Example response:</p>
                <pre style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5, overflowX: "auto" }}>
{`{
  "orderId": 11,
  "formUrl": "http://127.0.0.1:8000/paymentWebpage?orderId=11",
  "errorMessage": "",
  "errorCode": ""
}`}
                </pre>

                {/* Example curl confirm */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>📡 Example cURL — Confirm</h6>
                <pre style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5, overflowX: "auto" }}>
{`curl -X GET "http://127.0.0.1:8000/api/payment/rest/confirmOrder.do?language=EN&orderId=8&userName=satim_demo&password=demoPass" \\
-H "Accept: application/json"`}
                </pre>

                <p style={{ fontSize: 14, color: "#555", marginTop: 5 }}>Example response:</p>
                <pre style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5, overflowX: "auto" }}>
{`{
  "orderStatus": 2,
  "errorCode": 0,
  "errorMessage": "",
  "actionCode": 0,
  "actionCodeDescription": "Payment already confirmed",
  "amount": 100,
  "currency": 10
}`}
                </pre>

                {/* Best practices */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>✅ Best Practices</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Always test with multiple scenarios: success, failure, timeout</li>
                    <li>Log all requests and responses during development</li>
                    <li>Keep emulator and production credentials separate</li>
                    <li>Automate regression tests using the emulator</li>
                </ul>

                {/* FAQ */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>❓ FAQ</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li><strong>Q:</strong> My payments always fail. <br /><strong>A:</strong> Check if you’re using emulator credentials, not production ones.</li>
                    <li><strong>Q:</strong> Redirect doesn’t work. <br /><strong>A:</strong> Ensure your <code>returnUrl</code> and <code>failUrl</code> are accessible from your local/test environment.</li>
                    <li><strong>Q:</strong> Can I use Postman? <br /><strong>A:</strong> Yes, you can run all endpoints from Postman or cURL.</li>
                </ul>

                {/* Notes */}
                <h6 style={{ marginTop: 10, fontWeight: "bold" }}>⚠️ Notes</h6>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>No real banking transactions occur in the emulator</li>
                    <li>Use only for <strong>development and QA</strong> phases</li>
                    <li>Replace emulator credentials with real SATIM details before production</li>
                </ul>
            </div>
        </div>
    );
}
