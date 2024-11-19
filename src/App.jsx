// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your home page component
import "./App.css";
import GoogleTTS from "./pages/GoogleTTS";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        <Route path="/tts" element={<GoogleTTS />} />
      </Routes>
    </Router>
  );
};

export default App;
