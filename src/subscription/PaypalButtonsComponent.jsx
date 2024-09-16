import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

import axios from "axios";

export default function PayPalButtonsComponent({ planName, duration }) {
  const handleCreateSubscription = async () => {
    const response = await axios({
      url: `http://localhost:8080/create-subscription`,
      method: "POST",
      data: {
        plan_name: planName,
        duration: duration,
      },
    });

    const data = response.data;

    if (data.paypalSubscription) {
      return data.paypalSubscription.id;
    }
  };

  const handleApprove = async (data) => {
    console.log({ handleApproveData: data });
    if (data.orderID) {
      const response = await axios({
        url: `http://localhost:8080/save-payment`,
        method: "POST",
        data: data,
      });

      const jsonData = response.data;
      console.log({ jsonData });
    }
  };
  return (
    <div>
      <PayPalButtons
        style={{ shape: "pill", layout: "vertical", color: "blue" }}
        createSubscription={handleCreateSubscription}
        onApprove={handleApprove}
      />
    </div>
  );
}
