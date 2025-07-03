
import React from 'react';
// import useBaseUrl from '@docusaurus/useBaseUrl';

export default function TtkEpayAdminConsoleContainer() {
    return (
        <div style={{ marginBottom: 50 }}>
            <p>
                The TTK ePay Admin Console is a secure and intuitive web dashboard that allows
                users to manage their payment operations, invoices, and receipts efficiently.
                Once you have purchased the module, you can access this interface to fully
                configure and monitor your e-payment system.
            </p>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight:"bold" }}>🔐 Registration</h5>
                <p>
                    After purchasing the module, you'll receive a <strong>Base URL</strong> and a
                    <strong> Secret Key</strong>. Use these credentials to register your service in
                    the admin console.
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Access the registration form</li>
                    <li>Enter your application URL</li>
                    <li>Paste your secret key</li>
                    <li>Submit to activate your integration</li>
                </ul>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={"/img/registration.png"}
                        alt="Admin registration screenshot"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight:"bold" }}>📄 Invoice Management</h5>
                <p>
                    From the dashboard, users can view all invoices in a searchable, paginated
                    table. You can:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>View all invoices</li>
                    <li>Create new invoices</li>
                    <li>Update existing invoices</li>
                </ul>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={"/img/invoice.png"}
                        alt="Admin invoice screenshot"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />
                </div>
                </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight:"bold" }}>💳 Payments Overview</h5>
                <p>
                    The payments section provides a comprehensive view of all received payments.
                    You can:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li>Browse and filter all payment records</li>
                    <li>View payment details including amount, date, status, and invoice linkage</li>
                    <li>Download the full list of payments (CSV or Excel)</li>
                    <li>Download individual receipts as PDFs</li>
                </ul>
                
      <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={"/img/payment.png"}
                        alt="Admin payment screenshot"
                        style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                    />
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <h5 style={{ marginBottom: 5, fontWeight:"bold" }}>📥 Downloadable Documents</h5>
                <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
                    <li> Download receipts as PDFs</li>
                    <li> Export full payment history as CSV</li>
                </ul>
            </div>
        </div>
    );
}



