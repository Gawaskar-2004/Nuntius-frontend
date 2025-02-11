// import React, { useState, useEffect, createContext, useContext } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:8080/api/v1";
// const ContactContext = createContext();

// export const useContacts = () => useContext(ContactContext);

// const ContactProvider = ({ children }) => {
//     const [contacts, setContacts] = useState([]);
//     const [selectedContact, setSelectedContact] = useState(null);
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchContacts = async () => {
//         const userId = localStorage.getItem("userId");
//         if (!userId) return;
//         try {
//             const response = await axios.get(`${API_URL}/contacts/${userId}`);
//             setContacts(response.data);
//         } catch (error) {
//             console.error("Error fetching contacts:", error);
//         }
//     };

//     const addContact = async (contactId) => {
//         const userId = localStorage.getItem("userId");
//         try {
//             await axios.post(`${API_URL}/contacts/add`, null, {
//                 params: { userId, contactId },
//             });
//             fetchContacts();
//         } catch (error) {
//             console.error("Error adding contact:", error);
//         }
//     };

//     const fetchMessages = async (contactId) => {
//         const userId = localStorage.getItem("userId");
//         try {
//             const response = await axios.get(
//                 `${API_URL}/messages?userId=${userId}&contactId=${contactId}`
//             );
//             setMessages(response.data);
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//         }
//     };

//     const sendMessage = async (messageText) => {
//         if (!selectedContact) return;
//         const userId = localStorage.getItem("userId");
//         try {
//             const response = await axios.post(`${API_URL}/messages/send`, {
//                 senderId: userId,
//                 receiverId: selectedContact.contact.id,
//                 message: messageText,
//             });
//             setMessages((prev) => [...prev, response.data]);
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }
//     };

//     return (
//         <ContactContext.Provider
//             value={{
//                 contacts,
//                 addContact,
//                 selectedContact,
//                 setSelectedContact,
//                 messages,
//                 fetchMessages,
//                 sendMessage,
//             }}
//         >
//             {children}
//         </ContactContext.Provider>
//     );
// };

// export default ContactProvider;


// import React from "react";
// import { useContacts } from "./ContactProvider";

// const ContactList = () => {
//     const { contacts, acceptContact } = useContacts();

//     return (
//         <div className="contact-list">
//             <h2>Contacts</h2>
//             {contacts.map((contact) => (
//                 <div key={contact.id} className="contact-item">
//                     {contact.status === "PENDING" ? (
//                         <div>
//                             {contact.contact.username} - Pending
//                             <button onClick={() => acceptContact(contact.id)}>Accept</button>
//                         </div>
//                     ) : (
//                         <div>{contact.contact.username}</div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ContactList;

// import React, { useState, useEffect, createContext, useContext } from "react";
// import axios from "axios";


// const API_URL = "http://localhost:8080/api/v1";
// const ContactContext = createContext();

// // Custom hook to use contacts context
// export const useContacts = () => useContext(ContactContext);

// const ContactProvider = ({ children }) => {
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     // Fetch user contacts
//     const fetchContacts = async () => {
//         const userId = localStorage.getItem("userId");
//         if (!userId) return;
//         try {
//             const response = await axios.get(`${API_URL}/contacts/${userId}`);
//             setContacts(response.data);
//         } catch (error) {
//             console.error("Error fetching contacts:", error);
//         }
//     };

//     // Add a contact (Status = PENDING)
//     const addContact = async (contactId) => {
//         const userId = localStorage.getItem("userId");
//         try {
//             await axios.post(`${API_URL}/contacts/add`, null, {
//                 params: { userId, contactId },
//             });
//             fetchContacts();
//         } catch (error) {
//             console.error("Error adding contact:", error);
//         }
//     };

//     // Accept contact request (Change status to ACCEPTED)
//     const acceptContact = async (contactId) => {
//         try {
//             await axios.post(`${API_URL}/contacts/accept/${contactId}`);
//             fetchContacts();
//         } catch (error) {
//             console.error("Error accepting contact:", error);
//         }
//     };

//     return (
//         <ContactContext.Provider value={{ contacts, addContact, acceptContact }}>
//             {children}
//         </ContactContext.Provider>
//     );
// };

// export default ContactProvider;




// import { createContext, useContext, useEffect, useState } from "react";

// const ContactContext = createContext();

// export const useContacts = () => useContext(ContactContext);

// const ContactProvider = ({ children }) => {
//     const [contacts, setContacts] = useState([]);

//     // Fetch contacts (both pending & accepted)
//     const fetchContacts = () => {
//         fetch(`/api/v1/contacts/${localStorage.getItem("userId")}`)
//             .then(res => res.json())
//             .then(data => setContacts(data))
//             .catch(err => console.error("Error fetching contacts:", err));
//     };

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     // Accept contact request
//     const acceptContact = async (contactId) => {
//         try {
//             const response = await fetch(`/api/v1/contacts/accept/${contactId}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//             });

//             if (response.ok) {
//                 fetchContacts(); // Refresh list after accepting
//             }
//         } catch (error) {
//             console.error("Error accepting contact:", error);
//         }
//     };

//     return (
//         <ContactContext.Provider value={{ contacts, acceptContact, fetchContacts }}>
//             {children}
//         </ContactContext.Provider>
//     );
// };

// export default ContactProvider; // Ensure default export


import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext); // Named export

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts
    const fetchContacts = () => {
        fetch(`/api/v1/contacts/${localStorage.getItem("userId")}`)
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.error("Error fetching contacts:", err));
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // Accept contact request
    const acceptContact = async (contactId) => {
        try {
            const response = await fetch(`/api/v1/contacts/accept/${contactId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                fetchContacts(); // Refresh contact list
            }
        } catch (error) {
            console.error("Error accepting contact:", error);
        }
    };

    // Add a new contact
    const addContact = async (contactId) => {
        try {
            const userId = localStorage.getItem("userId"); // Get logged-in user ID
            const response = await fetch(`/api/v1/contacts/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, contactId }),
            });

            if (response.ok) {
                fetchContacts(); // Refresh contact list after adding
            }
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };

    return (
        <ContactContext.Provider value={{ contacts, acceptContact, addContact, fetchContacts }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;
