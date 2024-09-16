import React from "react";
import PayPalButtonsComponent from "./PaypalButtonsComponent";

const SubscriptionCard = ({
  type,
  price,
  duration,
  features,
  bgColor,
  pkg,
}) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2 className="card-type">{type}</h2>
      <h3 className="card-price">
        ${price} <span className="card-duration">/{duration}</span>
      </h3>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <PayPalButtonsComponent planName={pkg} duration={duration} />
    </div>
  );
};

export default SubscriptionCard;
