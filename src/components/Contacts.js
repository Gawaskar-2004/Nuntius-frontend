// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setContacts(response.data);
//       } catch (error) {
//         console.error('Failed to fetch contacts', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const handleAddContact = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(`http://localhost:8080/api/v1/contacts/add?userId=${localStorage.getItem('userId')}&contactId=${newContactId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setNewContactId('');
//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to add contact', error);
//     }
//   };

//   const handleAcceptContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to accept contact', error);
//     }
//   };

//   const handleBlockContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(`http://localhost:8080/api/v1/contacts/block/${contactId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to block contact', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Contacts</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Contact ID"
//           value={newContactId}
//           onChange={(e) => setNewContactId(e.target.value)}
//         />
//         <button onClick={handleAddContact}>Add Contact</button>
//       </div>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             {contact.contact.name} - {contact.status}
//             {contact.status === 'PENDING' && (
//               <button onClick={() => handleAcceptContact(contact.id)}>Accept</button>
//             )}
//             <button onClick={() => handleBlockContact(contact.id)}>Block</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Contacts;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setContacts(response.data);
//       } catch (error) {
//         console.error('Failed to fetch contacts', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const handleAddContact = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/add?userId=${localStorage.getItem('userId')}&contactId=${newContactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewContactId('');

//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to add contact', error);
//     }
//   };

//   const handleAcceptContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/accept/${contactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to accept contact', error);
//     }
//   };

//   const handleBlockContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/block/${contactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Refresh contacts list
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to block contact', error);
//     }
//   };

//   const handleChat = (contactUserId) => {
//     navigate(`/chat/${contactUserId}`);
//   };

//   return (
//     <div>
//       <h2>Contacts</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Contact ID"
//           value={newContactId}
//           onChange={(e) => setNewContactId(e.target.value)}
//         />
//         <button onClick={handleAddContact}>Add Contact</button>
//       </div>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <strong>{contact.contact.name}</strong> - Status: {contact.status}
//             {contact.status === 'PENDING' && (
//               <button onClick={() => handleAcceptContact(contact.id)}>Accept</button>
//             )}
//             {contact.status === 'ACCEPTED' && (
//               <button onClick={() => handleChat(contact.contact.id)}>Chat</button>
//             )}
//             <button onClick={() => handleBlockContact(contact.id)}>Block</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Contacts;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch contacts', error);
//     }
//   };

//   const handleAddContact = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/add?userId=${localStorage.getItem('userId')}&contactId=${newContactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewContactId('');
//       fetchContacts();
//     } catch (error) {
//       console.error('Failed to add contact', error);
//     }
//   };

//   const handleAcceptContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/accept/${contactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchContacts();
//     } catch (error) {
//       console.error('Failed to accept contact', error);
//     }
//   };

//   const handleChatWithUser = (contactId) => {
//     navigate(`/chat/${contactId}`); // Navigate to chat page
//   };

//   return (
//     <div>
//       <h2>Contacts</h2>

//       {/* Add Contact Section */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Contact ID"
//           value={newContactId}
//           onChange={(e) => setNewContactId(e.target.value)}
//         />
//         <button onClick={handleAddContact}>Add Contact</button>
//       </div>

//       {/* Contacts List */}
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <strong>{contact.contact.name}</strong> - Status: {contact.status}

//             {contact.status === 'PENDING' && (
//               <button onClick={() => handleAcceptContact(contact.id)}>Accept</button>
//             )}

//             {contact.status === 'ACCEPTED' && (
//               <button onClick={() => handleChatWithUser(contact.contact.id)}>Chat</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Contacts;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ContactsList from './ContactsList'; // Import the new component

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:8080/api/v1/contacts', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch contacts', error);
//     }
//   };

//   const handleAddContact = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/add?userId=${localStorage.getItem('userId')}&contactId=${newContactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewContactId('');
//       fetchContacts(); // Refresh the contacts list after adding a new contact
//     } catch (error) {
//       console.error('Failed to add contact', error);
//     }
//   };

//   const handleAcceptContact = async (contactId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/v1/contacts/accept/${contactId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchContacts(); // Refresh the contacts list after accepting a contact
//     } catch (error) {
//       console.error('Failed to accept contact', error);
//     }
//   };

//   const handleChatWithUser = (contactId) => {
//     navigate(`/chat/${contactId}`); // Navigate to chat page
//   };

//   return (
//     <div>
//       <h2>Contacts</h2>

//       {/* Add Contact Section */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Contact ID"
//           value={newContactId}
//           onChange={(e) => setNewContactId(e.target.value)}
//         />
//         <button onClick={handleAddContact}>Add Contact</button>
//       </div>

//       {/* Contacts List */}
//       <ContactsList
//         contacts={contacts}
//         onAcceptContact={handleAcceptContact}
//         onChatWithUser={handleChatWithUser}
//       />
//     </div>
//   );
// };

// export default Contacts;