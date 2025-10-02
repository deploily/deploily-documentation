import React from 'react';

export default function TtEpayPresentationContainer() {
    return (
        <div style={{ marginBottom: 50, paddingInline: 20 }}>

            <p style={{ marginBottom: 15 }}>
                TTK ePay is a powerful and flexible electronic payment module developed as part of the Deploily web application. Designed to streamline the online payment experience, it empowers users to send payment links directly to their clients and provides a secure, user-friendly interface for completing transactions.

                Built on an MVC architecture, TTK ePay enables users to manage and track client payments efficiently through its intuitive Admin Console. Users can create, update, and monitor invoices via a centralized dashboard, ensuring complete control over payment operations.

                TTK ePay also includes a robust RESTful API, allowing developers to integrate the module into their own applications and customize the payment experience to fit their specific business needs.

                Payments through TTK ePay are securely processed via Edahabia and bank cards, providing flexibility and trust for both users and clients.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src="/img/bpmnworkflow-TTK-Epay-ecosystem.png"
                    alt="BPMN Diagram"
                    style={{ borderRadius: 8, marginTop: 12, maxWidth: '100%' }}
                />

            </div>

        </div>
    );
}
