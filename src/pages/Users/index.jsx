// Import required modules
import React, { useState } from "react";
import axios from "axios";

const UserList = () => {
  const [_date, setDate] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/date");
      setDate(response.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Date</h1>
      <button className="load-btn" onClick={loadUsers}>
        {loading ? "Loading..." : "Load Date"}
      </button>

      <ul className="user-list">
        {_date ? (
          <code>{JSON.stringify(_date)}</code>
        ) : (
          <p>No date loaded yet.</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
