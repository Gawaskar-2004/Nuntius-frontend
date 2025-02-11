// import React, { useState } from "react";
// import { useContacts } from "./ContactProvider";

// const AddContact = () => {
//     const { addContact } = useContacts();
//     const [contactId, setContactId] = useState("");

//     const handleAddContact = () => {
//         if (contactId.trim() !== "") {
//             addContact(contactId);
//             setContactId("");
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Enter Contact ID"
//                 value={contactId}
//                 onChange={(e) => setContactId(e.target.value)}
//             />
//             <button onClick={handleAddContact}>Add Contact</button>
//         </div>
//     );
// };

// export default AddContact;


import React, { useState } from "react";
import { useContacts } from "./ContactProvider";

const ContactList = ({ onSelectContact }) => {
    const { contacts, acceptContact, addContact } = useContacts(); // ✅ Ensure addContact is used
    const [newContactId, setNewContactId] = useState("");

    const handleAddContact = () => {
        if (newContactId) {
            addContact(newContactId);
            setNewContactId(""); // Clear input after adding
        }
    };

    return (
        <div className="contact-list">
            <h2>Contacts</h2>

            {/* Add Contact Input */}
            <div>
                <input
                    type="text"
                    placeholder="Enter contact ID"
                    value={newContactId}
                    onChange={(e) => setNewContactId(e.target.value)}
                />
                <button onClick={handleAddContact}>Add Contact</button>
            </div>

            {/* Contact List */}
            {contacts.map((contact) => (
                <div key={contact.id} className="contact-item">
                    {contact.status === "PENDING" ? (
                        <div>
                            {contact.contact.username} - Pending
                            <button onClick={() => acceptContact(contact.id)}>Accept</button>
                        </div>
                    ) : (
                        <div onClick={() => onSelectContact(contact.contact)}>
                            {contact.contact.username}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactList;
