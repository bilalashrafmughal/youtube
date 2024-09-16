import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-payment-container">
      <div className="success-card">
        ✅<h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for your purchase! Your payment has been processed
          successfully.
        </p>
        <Link to="/subscriptions" className="success-button">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
