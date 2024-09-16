import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./App.css";
import Subscriptions from "./subscription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./subscription/Success";
import FailurePayment from "./subscription/Fail";

function App() {
  const options = {
    "client-id":
      "AcvC4epyaghfCEKPzSs6YMhHG9iGwZu0IAx3frP84ZqlFkr-HNqtcC7Jf7MBDwT0QGTYCm77lcvFuVVE",
    "enable-funding": "paylater",
    // "disable-funding": "card",
    "data-sdk-integration-source": "integrationbuilder_sc",
    vault: "true",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={options}>
      <div style={{ width: "100%" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<FailurePayment />} />
            <Route path="/subscriptions" element={<Subscriptions />}></Route>
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
