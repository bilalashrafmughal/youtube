// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your home page component
import "./App.css";
import SubscriptionPlans from "./pages/Subscription";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        <Route path="subscription" element={<SubscriptionPlans />} />
      </Routes>
    </Router>
  );
};

export default App;
