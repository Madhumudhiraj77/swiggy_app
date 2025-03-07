import React from "react";

const Help = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <h1 className="text-2xl font-semibold mb-6">How can we help you?</h1>
      
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">How do I place an order?</h3>
            <p>
              To place an order, simply browse through restaurants or dishes, add them to your cart, and proceed to checkout.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Can I cancel my order?</h3>
            <p>
              Orders can be canceled within a certain time frame depending on the restaurant's policy. Contact support for more information.
            </p>
          </div>
          <div>
            <h3 className="font-medium">What payment methods are accepted?</h3>
            <p>
              We accept various payment methods including credit/debit cards, UPI, wallets, and cash on delivery.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">Contact Support</h2>
        <p>
          If you're facing any issues, feel free to reach out to our support team:
        </p>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-medium">Phone Support</h3>
            <p>Call us at 1-800-SWIGGY for assistance.</p>
          </div>
          <div>
            <h3 className="font-medium">Email Support</h3>
            <p>Email us at <a href="mailto:support@swiggy.com" className="text-blue-600">support@swiggy.com</a></p>
          </div>
          <div>
            <h3 className="font-medium">Live Chat</h3>
            <p>Start a live chat with our support team through the app or website.</p>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">Troubleshooting</h2>
        <div>
          <h3 className="font-medium">I can't find my order</h3>
          <p>If you're unable to track your order, please ensure your app is up to date. You can also contact support for assistance.</p>
        </div>
        <div>
          <h3 className="font-medium">Payment Issues</h3>
          <p>If you’re facing issues with payment, make sure your card details are correct or try using a different payment method. Contact us if the issue persists.</p>
        </div>
      </section>

      {/* Order History / FAQs about previous orders */}
      <section>
        <h2 className="text-xl font-medium mb-4">Order History & Related Issues</h2>
        <p>If you have any issues related to past orders, please visit your order history section in the app or contact support for further assistance.</p>
      </section>
    </div>
  );
};

export default Help;
