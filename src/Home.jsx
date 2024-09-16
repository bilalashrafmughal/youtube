import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <h1>Integrate Paypal in Node js and React js stack application</h1>
      <Link
        style={{ color: "white", textDecoration: "underline" }}
        to="/subscriptions"
      >
        Subscriptions page
      </Link>
    </div>
  );
}
