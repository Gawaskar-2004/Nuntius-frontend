// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [contacts, setContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Fetch both pending and accepted contacts
//   const fetchContacts = async () => {
//     try {
//       // Fetch all contacts
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       const data = await response.json();
      
//       // Separate pending and accepted contacts
//       setPendingContacts(data.filter(contact => contact.status === 'PENDING'));
//       setContacts(data.filter(contact => contact.status === 'ACCEPTED'));
//     } catch (err) {
//       setError('Failed to load contacts');
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, [currentUserId]);

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });
      
//       if (response.ok) {
//         setNewContactId('');
//         fetchContacts(); // Refresh contact list
//       } else {
//         setError('Failed to add contact');
//       }
//     } catch (err) {
//       setError('Failed to add contact');
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });
      
//       if (response.ok) {
//         fetchContacts(); // Refresh contact lists
//       } else {
//         setError('Failed to accept contact');
//       }
//     } catch (err) {
//       setError('Failed to accept contact');
//     }
//   };

//   // Navigate to chat
//   const handleChatClick = (contactId) => {
//     navigate(`/chat/${contactId}`);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded"
//           />
//           <button 
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add Contact
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Pending Contacts */}
//       {pendingContacts.length > 0 && (
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//           <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//           <div className="space-y-2">
//             {pendingContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//               >
//                 <div>
//                   <p className="font-medium">{contact.contact.username}</p>
//                   <p className="text-sm text-gray-500">ID: {contact.contact.id}</p>
//                 </div>
//                 <button 
//                   onClick={() => handleAcceptContact(contact.id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 >
//                   Accept
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Accepted Contacts */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contact List</h2>
//         <div className="space-y-2">
//           {contacts.map((contact) => (
//             <div
//               key={contact.id}
//               className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
//               onClick={() => handleChatClick(contact.contact.id)}
//             >
//               <div>
//                 <p className="font-medium">{contact.contact.username}</p>
//                 <p className="text-sm text-gray-500">ID: {contact.contact.id}</p>
//               </div>
//               <button 
//                 className="text-blue-500 hover:text-blue-600"
//               >
//                 Chat
//               </button>
//             </div>
//           ))}
//           {contacts.length === 0 && (
//             <p className="text-center text-gray-500">No accepted contacts found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [contacts, setContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Fetch both pending and accepted contacts
//   const fetchContacts = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       const data = await response.json();
      
//       setPendingContacts(data.filter(contact => contact.status === 'PENDING'));
//       setContacts(data.filter(contact => contact.status === 'ACCEPTED'));
//     } catch (err) {
//       setError('Failed to load contacts');
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, [currentUserId]);

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });
      
//       if (response.ok) {
//         setNewContactId('');
//         fetchContacts();
//       } else {
//         setError('Failed to add contact');
//       }
//     } catch (err) {
//       setError('Failed to add contact');
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });
      
//       if (response.ok) {
//         fetchContacts();
//       } else {
//         setError('Failed to accept contact');
//       }
//     } catch (err) {
//       setError('Failed to accept contact');
//     }
//   };

//   // Navigate to chat
//   const handleChatClick = (contactId, username) => {
//     navigate(`/chat/${contactId}`, { state: { contactName: username } });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded"
//           />
//           <button 
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add Contact
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Pending Contacts */}
//       {pendingContacts.length > 0 && (
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//           <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//           <div className="space-y-2">
//             {pendingContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//               >
//                 <p className="font-medium">{contact.contact.username}</p>
//                 <button 
//                   onClick={() => handleAcceptContact(contact.id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 >
//                   Accept
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Accepted Contacts */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contacts</h2>
//         <div className="space-y-2">
//           {contacts.map((contact) => (
//             <div
//               key={contact.id}
//               onClick={() => handleChatClick(contact.contact.id, contact.contact.username)}
//               className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
//             >
//               <p className="font-medium text-lg">{contact.contact.username}</p>
//             </div>
//           ))}
//           {contacts.length === 0 && (
//             <p className="text-center text-gray-500">No contacts yet</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [acceptedContacts, setAcceptedContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Fetch accepted contacts
//   const fetchAcceptedContacts = async () => {
//     try {
//       console.log('Fetching accepted contacts for user:', currentUserId);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accepted/${currentUserId}`);
//       const data = await response.json();
//       console.log('Accepted contacts response:', data);
//       setAcceptedContacts(data);
//     } catch (err) {
//       console.error('Error fetching accepted contacts:', err);
//       setError('Failed to load accepted contacts');
//     }
//   };

//   // Fetch pending contacts
//   const fetchPendingContacts = async () => {
//     try {
//       console.log('Fetching pending contacts for user:', currentUserId);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       const data = await response.json();
//       console.log('Pending contacts response:', data);
//       const pendingOnly = data.filter(contact => contact.status === 'PENDING');
//       console.log('Filtered pending contacts:', pendingOnly);
//       setPendingContacts(pendingOnly);
//     } catch (err) {
//       console.error('Error fetching pending contacts:', err);
//       setError('Failed to load pending contacts');
//     }
//   };

//   useEffect(() => {
//     if (currentUserId) {
//       fetchPendingContacts();
//       fetchAcceptedContacts();
//     }
//   }, [currentUserId]);

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Adding new contact:', newContactId, 'for user:', currentUserId);
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Add contact response:', data);
//         setNewContactId('');
//         fetchPendingContacts();
//       } else {
//         const errorData = await response.text();
//         console.error('Failed to add contact:', errorData);
//         setError('Failed to add contact: ' + errorData);
//       }
//     } catch (err) {
//       console.error('Error adding contact:', err);
//       setError('Failed to add contact');
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       console.log('Accepting contact:', contactId);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Accept contact response:', data);
//         fetchPendingContacts();
//         fetchAcceptedContacts();
//       } else {
//         const errorData = await response.text();
//         console.error('Failed to accept contact:', errorData);
//         setError('Failed to accept contact: ' + errorData);
//       }
//     } catch (err) {
//       console.error('Error accepting contact:', err);
//       setError('Failed to accept contact');
//     }
//   };

//   // Rest of the component remains the same...
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded"
//           />
//           <button 
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add Contact
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Debug Info */}
//       <div className="bg-gray-100 p-4 mb-6 rounded-lg">
//         <h3 className="font-bold mb-2">Debug Info</h3>
//         <p>Current User ID: {currentUserId}</p>
//         <p>Pending Contacts Count: {pendingContacts.length}</p>
//         <p>Accepted Contacts Count: {acceptedContacts.length}</p>
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//         <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//         <div className="space-y-2">
//           {pendingContacts.map((contact) => (
//             <div
//               key={contact.id}
//               className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//             >
//               <p className="font-medium">{contact.contact.username}</p>
//               <button 
//                 onClick={() => handleAcceptContact(contact.id)}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Accept
//               </button>
//             </div>
//           ))}
//           {pendingContacts.length === 0 && (
//             <p className="text-center text-gray-500">No pending requests</p>
//           )}
//         </div>
//       </div>

//       {/* Contact List */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contact List</h2>
//         <div className="space-y-2">
//           {acceptedContacts.map((contact) => (
//             <div
//               key={contact.id}
//               className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
//               onClick={() => navigate(`/chat/${contact.contact.id}`)}
//             >
//               <p className="font-medium text-lg">{contact.contact.username}</p>
//             </div>
//           ))}
//           {acceptedContacts.length === 0 && (
//             <p className="text-center text-gray-500">No accepted contacts yet</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [acceptedContacts, setAcceptedContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch accepted contacts
//   const fetchAcceptedContacts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accepted/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch accepted contacts');
//       const data = await response.json();
//       setAcceptedContacts(data);
//     } catch (err) {
//       console.error('Error fetching accepted contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetch pending contacts
//   const fetchPendingContacts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch pending contacts');
//       const data = await response.json();
//       const pendingOnly = data.filter(contact => contact.status === 'PENDING');
//       setPendingContacts(pendingOnly);
//     } catch (err) {
//       console.error('Error fetching pending contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (currentUserId) {
//       fetchPendingContacts();
//       fetchAcceptedContacts();
//     }
//   }, [currentUserId]);

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     if (!newContactId || isNaN(newContactId)) {
//       setError('Please enter a valid contact ID');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });

//       if (!response.ok) throw new Error('Failed to add contact');
//       const data = await response.json();
//       setNewContactId('');
//       fetchPendingContacts();
//     } catch (err) {
//       console.error('Error adding contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });

//       if (!response.ok) throw new Error('Failed to accept contact');
//       const data = await response.json();
//       fetchPendingContacts();
//       fetchAcceptedContacts();
//     } catch (err) {
//       console.error('Error accepting contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={isLoading}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 disabled:bg-blue-300"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Adding...' : 'Add Contact'}
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//         <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//         <div className="space-y-2">
//           {pendingContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No pending requests</p>
//           ) : (
//             pendingContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//               >
//                 <p className="font-medium">{contact.contact.username}</p>
//                 <button
//                   onClick={() => handleAcceptContact(contact.id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 disabled:bg-green-300"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Accepting...' : 'Accept'}
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Contact List */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contact List</h2>
//         <div className="space-y-2">
//           {acceptedContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No accepted contacts yet</p>
//           ) : (
//             acceptedContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
//                 onClick={() => navigate(`/chat/${contact.contact.id}`)}
//               >
//                 <p className="font-medium text-lg">{contact.contact.username}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;




//new code

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [acceptedContacts, setAcceptedContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [refresh, setRefresh] = useState(false); // Force re-render after updates
//   const navigate = useNavigate();

//   // Fetch accepted contacts
//   const fetchAcceptedContacts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accepted/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch accepted contacts');
//       const data = await response.json();
//       console.log("Accepted Contacts Data:", data); // Debugging
//       setAcceptedContacts(data);
//     } catch (err) {
//       console.error('Error fetching accepted contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetch pending contacts
//   const fetchPendingContacts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch pending contacts');
//       const data = await response.json();
//       const pendingOnly = data.filter(contact => contact.status === 'PENDING');
//       console.log("Pending Contacts Data:", pendingOnly); // Debugging
//       setPendingContacts(pendingOnly);
//     } catch (err) {
//       console.error('Error fetching pending contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (currentUserId) {
//       fetchPendingContacts();
//       fetchAcceptedContacts();
//     }
//   }, [currentUserId, refresh]); // Refresh when accepting contacts

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     if (!newContactId || isNaN(newContactId)) {
//       setError('Please enter a valid contact ID');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });

//       if (!response.ok) throw new Error('Failed to add contact');
//       const data = await response.json();
//       console.log("Contact Added Response:", data); // Debugging
//       setNewContactId('');
//       fetchPendingContacts();
//     } catch (err) {
//       console.error('Error adding contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });

//       if (!response.ok) throw new Error('Failed to accept contact');

//       console.log("Contact accepted successfully"); // Debugging

//       // Fetch updated lists
//       await fetchAcceptedContacts();
//       await fetchPendingContacts();
//       setRefresh(prev => !prev); // Force re-render

//     } catch (err) {
//       console.error('Error accepting contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={isLoading}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 disabled:bg-blue-300"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Adding...' : 'Add Contact'}
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//         <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//         <div className="space-y-2">
//           {pendingContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No pending requests</p>
//           ) : (
//             pendingContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//               >
//                 <p className="font-medium">{contact.contact.username}</p>
//                 <button
//                   onClick={() => handleAcceptContact(contact.id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 disabled:bg-green-300"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Accepting...' : 'Accept'}
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Contact List */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contact List</h2>
//         <div className="space-y-2">
//           {acceptedContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No accepted contacts yet</p>
//           ) : (
//             acceptedContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
//                 onClick={() => navigate(`/chat/${contact.contact.id}`)}
//               >
//                 <p className="font-medium text-lg">{contact.contact.username}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContactManagement = ({ currentUserId }) => {
//   const [acceptedContacts, setAcceptedContacts] = useState([]);
//   const [pendingContacts, setPendingContacts] = useState([]);
//   const [newContactId, setNewContactId] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [refresh, setRefresh] = useState(false); // Force re-render after updates
//   const navigate = useNavigate();

//   // Fetch accepted contacts
//   const fetchAcceptedContacts = async () => {
//     if (!currentUserId) return; // Ensure user ID exists
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accepted/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch accepted contacts');
//       const data = await response.json();
//       setAcceptedContacts(data);
//     } catch (err) {
//       console.error('Error fetching accepted contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetch pending contacts
//   const fetchPendingContacts = async () => {
//     if (!currentUserId) return; // Ensure user ID exists
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
//       if (!response.ok) throw new Error('Failed to fetch pending contacts');
//       const data = await response.json();
//       const pendingOnly = data.filter(contact => contact.status === 'PENDING');
//       setPendingContacts(pendingOnly);
//     } catch (err) {
//       console.error('Error fetching pending contacts:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Always call useEffect at the top level
//   useEffect(() => {
//     fetchPendingContacts();
//     fetchAcceptedContacts();
//   }, [currentUserId, refresh]);

//   // Add new contact
//   const handleAddContact = async (e) => {
//     e.preventDefault();
//     if (!newContactId || isNaN(newContactId)) {
//       setError('Please enter a valid contact ID');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `userId=${currentUserId}&contactId=${newContactId}`,
//       });

//       if (!response.ok) throw new Error('Failed to add contact');
//       setNewContactId('');
//       fetchPendingContacts();
//     } catch (err) {
//       console.error('Error adding contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Accept contact request
//   const handleAcceptContact = async (contactId) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
//         method: 'POST',
//       });

//       if (!response.ok) throw new Error('Failed to accept contact');
//       setRefresh(prev => !prev); // Force re-render

//     } catch (err) {
//       console.error('Error accepting contact:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Add Contact Form */}
//       <div className="bg-white rounded-lg shadow-md mb-6 p-4">
//         <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
//         <form onSubmit={handleAddContact} className="flex gap-4">
//           <input
//             type="number"
//             value={newContactId}
//             onChange={(e) => setNewContactId(e.target.value)}
//             placeholder="Enter Contact ID"
//             className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={isLoading}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 disabled:bg-blue-300"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Adding...' : 'Add Contact'}
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//         <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
//         <div className="space-y-2">
//           {pendingContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No pending requests</p>
//           ) : (
//             pendingContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//               >
//                 <p className="font-medium">{contact.contact.name}</p>
//                 <button
//                   onClick={() => handleAcceptContact(contact.id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 disabled:bg-green-300"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Accepting...' : 'Accept'}
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Contact List */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Contact List</h2>
//         <div className="space-y-2">
//           {acceptedContacts.length === 0 ? (
//             <p className="text-center text-gray-500">No accepted contacts yet</p>
//           ) : (
//             acceptedContacts.map((contact) => (
//               <div
//                 key={contact.id}
//                 className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200"
//                 onClick={() => navigate(`/chat/${contact.contact.id}`)}
//               >
//                 <p className="font-medium text-lg">{contact.contact.name}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactManagement;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/contactManagement.scss";


const ContactManagement = ({ currentUserId }) => {
  const [acceptedContacts, setAcceptedContacts] = useState([]);
  const [pendingContacts, setPendingContacts] = useState([]);
  const [newContactId, setNewContactId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUserId) {
      fetchAcceptedContacts();
      fetchPendingContacts();
    }
  }, [currentUserId, refresh]);

  const fetchAcceptedContacts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/contacts/accepted/${currentUserId}`);
      if (!response.ok) throw new Error('Failed to fetch accepted contacts');
      const data = await response.json();
      setAcceptedContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPendingContacts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/contacts/${currentUserId}`);
      if (!response.ok) throw new Error('Failed to fetch pending contacts');
      const data = await response.json();
      setPendingContacts(data.filter(contact => contact.status === 'PENDING'));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    if (!newContactId.trim() || isNaN(newContactId)) {
      setError('Please enter a valid Contact ID');
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/api/v1/contacts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `userId=${currentUserId}&contactId=${newContactId}`,
      });

      if (!response.ok) throw new Error('Failed to add contact');
      setNewContactId('');
      setRefresh(prev => !prev);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptContact = async (contactId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/contacts/accept/${contactId}`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to accept contact');
      setRefresh(prev => !prev);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Add Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add New Contact</h2>
        <form onSubmit={handleAddContact} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Enter Contact ID</label>
            <input
              type="number"
              value={newContactId}
              onChange={(e) => setNewContactId(e.target.value)}
              placeholder="e.g., 12345"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 disabled:bg-blue-300"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Contact'}
            </button>
          </div>
        </form>
      </div>

      {/* Pending Requests */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Pending Requests</h2>
        {pendingContacts.length === 0 ? (
          <p className="text-center text-gray-500">No pending requests</p>
        ) : (
          <div className="space-y-3">
            {pendingContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="font-medium">{contact.contact.name}</p>
                <button
                  onClick={() => handleAcceptContact(contact.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 disabled:bg-green-300"
                  disabled={isLoading}
                >
                  {isLoading ? 'Accepting...' : 'Accept'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact List</h2>
        {acceptedContacts.length === 0 ? (
          <p className="text-center text-gray-500">No accepted contacts yet</p>
        ) : (
          <div className="space-y-3">
            {acceptedContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => navigate(`/chat/${contact.contact.id}`)}
              >
                <p className="font-medium">{contact.contact.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactManagement;
