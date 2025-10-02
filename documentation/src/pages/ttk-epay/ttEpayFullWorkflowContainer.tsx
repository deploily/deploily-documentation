import React from 'react';

export default function TtEpayFullWorkflowContainer() {
    return (
        <div style={{ marginBottom: 50, paddingInline: 20 }}>
            <div>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>📈 BPMN Diagram</h5>
                <div style={{ marginTop: 30 }}>
                    <h6 style={{ fontWeight: "bold", marginBottom: 10 }}>PHASE 1️⃣: Development Testing</h6>
                    <p style={{ marginBottom: 15 }}>
                        This phase is done in a <strong>safe environment</strong> using the
                        <strong> SATIM Emulator</strong>. It allows you to test your integration
                        and confirm that everything works correctly before moving to
                        <strong> pre-production</strong>.
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="/img/bpmnworkflow-ttk-epay-development-testing.png"
                        alt="BPMN Diagram"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />

                </div>

            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>1️⃣ Order TTK ePay in Deploily</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Log into your <a href="https://deploily.com">Deploily</a> account</li>
                    <li>Go to <strong>Applications &gt; TTK ePay</strong></li>
                    <li>Purchase the module</li>
                    <li>You will receive:
                        <ul>
                            <li><strong>API Base URL</strong></li>
                            <li><strong>Secret Key</strong> (used for Admin Console access)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>2️⃣ Configure and Test with SATIM Emulator</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Read the <strong>User Documentation</strong> (guidelines)</li>
                    <li>Fill in brand elements:(Name,Website,Address,Logo,Phone &amp; Email,Privacy Policy URL &amp; Terms URL)</li>
                    <li>Select <strong>"SATIM Emulator"</strong> as the SATIM URL</li>
                    <li>Copy <strong>Username + Password + Terminal ID</strong> from Emulator and enter them into Deploily UI</li>
                    <li>Access <strong>Admin Console</strong> using Secret Key and Access URL</li>
                    <li>Create a new test invoice</li>
                    <li>Copy <strong>Client Code + Invoice Number</strong></li>
                    <li>Open Access URL → Fill test data → Redirect to Payment Page → Check Result (Success or Fail)</li>
                    <li>Alternatively, generate a <strong>Payment Link</strong>, paste in the browser, and follow the same flow</li>
                    <li>Check payment results in <strong>Admin Console</strong> and <strong>SATIM Emulator</strong> to ensure everything works</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>3️⃣ Integrate TTK ePay Module into Your Code</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Read the <strong>SATIM technical requirements</strong>:
                        <ul>
                            <li>- Checkout Page</li>
                            <li>- Success Page</li>
                            <li>- Failure Page</li>
                        </ul>
                    </li>
                    <li>Integrate the <strong>Client Module</strong> into your base code (Node.js / Python supported)</li>
                    <li>Add your <strong>Secret Key</strong> securely (as an environment variable)</li>
                    <li>Test the API using SATIM Emulator</li>
                    <li>Verify results in <strong>Admin Console</strong> and <strong>SATIM Emulator</strong></li>
                </ul>
            </div>
            <div style={{ marginTop: 20 }}>
                <blockquote>
                    ✅ End of Phase 1: Once all tests succeed with the SATIM Emulator, you can proceed to <strong>Phase 2: SATIM Engagement (Pre-Production Testing)</strong>.
                </blockquote>
            </div>


            <div style={{ marginTop: 20 }}>
                <h4 style={{ marginBottom: 10, fontWeight: "bold" }}>PHASE 2️⃣: Pre-Production Testing</h4>
                <p>
                    This phase ensures your payment module is <strong>certified by SATIM</strong> and fully compliant
                    before moving to production. You will collaborate with <strong>cibweb.dz</strong>, your bank, and
                    SATIM to validate your integration.
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src="/img/bpmnworkflow-TTK-Epay-pre-production.png"
                    alt="BPMN Diagram"
                    style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                />

            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>1️⃣ Start Your SATIM Pre-Production Engagement</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Create an account on <a href="https://cibweb.dz">cibweb.dz</a></li>
                    <li>Request <strong>Finalization of Payment Integration</strong> using the certified payment module (Module ID: <code>NC/07/000197/2021</code>)</li>
                    <li><strong>Transformatek</strong> will confirm the module purchase</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>2️⃣ Bank &amp; GIE Monétique Validation</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Receive a <strong>Notification of readiness</strong> from your bank and GIE Monétique</li>
                    <li>Sign the <strong>contract with your bank</strong></li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>3️⃣ Switch to SATIM Test Environment</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>In <strong>Deploily</strong>, switch environment from <em>SATIM Emulator</em> → <em>SATIM TEST</em></li>
                    <li>Enter the <strong>test credentials</strong> (Username, Password, Terminal ID) into Deploily UI</li>
                    <li>Click <strong>Request Update</strong></li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>4️⃣ Perform Pre-Production Testing</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>In your <strong>Admin Console</strong>, create at least <strong>5 invoices</strong></li>
                    <li>Send the <strong>Access URL</strong> with invoice numbers + client codes to SATIM for regression testing</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>5️⃣ SATIM Certification</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li><strong>SATIM</strong> performs regression tests (Success, Fail, etc.)</li>
                    <li>If issues occur, <strong>contact Transformatek</strong> for assistance</li>
                    <li>Once validated, you will receive your official <strong>Certification from SATIM</strong></li>
                    <li>Sign the final <strong>contract with your bank and SATIM</strong></li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <p>
                    ✅ <strong>End of Phase 2:</strong> Your integration is now SATIM-certified and ready to move
                    to <strong>Phase 3: Production</strong>.
                </p>
            </div>


            <div style={{ marginTop: 20 }}>
                <h4 style={{ marginBottom: 10, fontWeight: "bold" }}>PHASE 3️⃣: Production</h4>
                <p>
                    This is the final phase where your system goes <strong>live with real payments</strong>.
                    You will use SATIM Production credentials and perform real transactions to activate your service.
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src="/img/bpmnworkflow-TTK-Epay-production.png"
                    alt="BPMN Diagram"
                    style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%'}}
                />

            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>1️⃣ Receive Production Parameters</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Get your <strong>Production credentials</strong> (Username, Password, Terminal ID) from SATIM</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>2️⃣ Switch to SATIM Production Environment</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>In <strong>Deploily</strong>, switch environment from <em>SATIM TEST</em> → <em>SATIM PRODUCTION</em></li>
                    <li>Enter the <strong>Production credentials</strong> into Deploily UI</li>
                    <li>Click <strong>Request Update</strong></li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>3️⃣ Perform Live Testing</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Create at least <strong>2 invoices</strong> in your Admin Console or directly from your platform process</li>
                    <li>Use a <strong>real payment card</strong> to make test payments with actual money</li>
                    <li>Follow SATIM’s testing instructions carefully</li>
                    <li>Take <strong>screenshots</strong> of all payment results (Success, Fail, etc.)</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>4️⃣ Send Confirmation to SATIM</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Save all payment <strong>screenshots in a file</strong></li>
                    <li>Send the file to <strong>SATIM</strong> for validation and confirmation</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>5️⃣ Go Live</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Enable the payment module on your <strong>merchant website</strong></li>
                    <li>Or start sending <strong>payment links</strong> directly to your customers</li>
                    <li>End-users can now <strong>make payments online</strong> securely</li>
                </ul>
            </div>

            <div style={{ marginTop: 20 }}>
                <p>
                    🎉 <strong>End of Phase 3:</strong> Your platform is now in <strong>Production</strong> and fully
                    operational with live SATIM payments.
                </p>
            </div>
        </div>
    );
}
