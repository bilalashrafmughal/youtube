import React, { useState } from "react";

// Sample data for contacts
const initialContacts = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "john.doe@example.com",
    fullName: "John Doe",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    email: "jane.smith@example.com",
    fullName: "Jane Smith",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    email: "sam.jones@example.com",
    fullName: "Sam Jones",
  },
];

const ContactList = () => {
  const [contacts, setContacts] = useState(initialContacts);

  // Function to handle the deletion of a contact
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={contact.avatar}
              alt={contact.fullName}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <div style={{ flex: 1 }}>
              <strong>{contact.fullName}</strong>
              <br />
              <small>{contact.email}</small>
            </div>
            <button
              onClick={() => handleDelete(contact.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
            <button style={{ marginLeft: "10px" }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
