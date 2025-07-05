import React from 'react';

export default function TtkEpayApiContainer() {
  return (
    <div style={{ marginBottom: 50 }}>
      <p>
        TTK ePay offers official SDKs for <strong>Node.js</strong> and <strong>Python</strong>
        to help developers easily integrate e-payment capabilities into their applications.
        Below is an overview of the available packages and usage examples.
      </p>

      {/* ---------------- NODE.JS SECTION ---------------- */}
      <div style={{ marginTop: 20 }}>

        <h4 style={{ marginBottom: 5, fontWeight: "bold" }}>📦 Node.js Client</h4>
        <p>
          Official npm package: <a href="https://www.npmjs.com/package/@deploily/ttk-epay-nodejs-client" target="_blank" rel="noreferrer">
            @deploily/ttk-epay-nodejs-client
          </a>
        </p>
      </div>
      <div style={{ marginTop: 20 }}>
        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Installation</h5>
        <pre><code>npm install @deploily/ttk-epay-nodejs-client</code></pre>
        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Example Usage</h5>
        <pre>
          <code>
            {`const { ttk_epay } = require('@deploily/ttk-epay-nodejs-client');

            const client = new ttk_epay({
              baseUrl: 'https://your-app.com',
              secretKey: 'your-secret-key'
            });

            // List invoices
            const invoices = await client.get_invoices(1, 10);
            `}
          </code>
        </pre>
        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Available Methods</h5>
        <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
          <li><code>getInvoices(page, size)</code> – Paginated invoice listing</li>
          <li><code>createInvoice(data)</code> – Create a new invoice</li>
          <li><code>getInvoiceById(invoiceId)</code> – Fetch invoice via ID</li>
          <li><code>updateInvoice(invoiceId, data)</code> – Update an invoice</li>
          <li><code>getPayments(options)</code> – Filter and list payments</li>
          <li><code>getPaymentById(paymentId)</code> – Fetch payment via ID</li>
          <li><code>postPayement(data)</code> – Register a new payment</li>
          <li><code>getPdfRecipt(orderId)</code> – Get a PDF receipt</li>
          <li><code>sendPdfReceiptMail(orderId, email)</code> – Send receipt by email</li>
        </ul>
      </div>

      {/* ---------------- PYTHON SECTION ---------------- */}
      <div style={{ marginTop: 20 }}>

        <h4 style={{ marginBottom: 5, fontWeight: "bold" }}>🐍 Python Client</h4>
        <p>
          Official PyPi package: <a href="https://pypi.org/project/ttk-epay/" target="_blank" rel="noreferrer">
            ttk-epay
          </a> – GitHub source: <a href="https://github.com/deploily/ttk-epay-python-client" target="_blank" rel="noreferrer">
            ttk-epay-python-client
          </a>
        </p>
      </div>
      <div style={{ marginTop: 20 }}>

        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Installation</h5>
        <pre><code>pip install ttk-epay</code></pre>
      </div>
      <div style={{ marginTop: 20 }}>
        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Example Usage</h5>
        <pre><code>{`from ttk_epay.client import TtkEpay

client = TtkEpay(
    base_url="https://your-app.com",
    secret_key="your-secret-key"
)

# List invoices
invoices = client.get_invoices(page=1, size=10)
`}</code></pre>
      </div>
      <div style={{ marginTop: 20 }}>

        <h5 style={{ marginBottom: 5, fontWeight: "bold" }}>Available Methods</h5>
        <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
          <li><code>get_invoices(page, size)</code></li>
          <li><code>create_invoice(data)</code></li>
          <li><code>get_invoice_by_order_id(order_id)</code></li>
          <li><code>update_invoice(invoice_id, data)</code></li>
          <li><code>get_payments(params)</code></li>
          <li><code>post_payement(data)</code></li>
          <li><code>get_pdf_recipt(order_id)</code></li>
          <li><code>send_pdf_recipt_mail(order_id, email)</code></li>
        </ul>
      </div>

    </div>
  );
}
