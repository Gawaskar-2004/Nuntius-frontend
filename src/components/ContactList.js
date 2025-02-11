// import React from 'react';

// const ContactsList = ({ contacts, onAcceptContact, onChatWithUser }) => {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <strong>{contact.contact.name}</strong> - Status: {contact.status}

//           {contact.status === 'PENDING' && (
//             <button onClick={() => onAcceptContact(contact.id)}>Accept</button>
//           )}

//           {contact.status === 'ACCEPTED' && (
//             <button onClick={() => onChatWithUser(contact.contact.id)}>Chat</button>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactsList;
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


// import React from "react";
// import { useContacts } from "./ContactProvider";

// const ContactList = ({ onSelectContact }) => {
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
//                         // Show only accepted contacts with chat functionality
//                         <div onClick={() => onSelectContact(contact.contact)}>
//                             {contact.contact.username}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ContactList;




import React from "react";
import { useContacts } from "./ContactProvider";

const ContactList = ({ onSelectContact }) => {
    const { contacts, acceptContact } = useContacts();

    return (
        <div className="contact-list">
            <h2>Contacts</h2>
            {contacts.map((contact) => (
                <div key={contact.contactId} className="contact-item">
                    {contact.status === "PENDING" ? (
                        <div>
                            {contact.contact.username} - Pending
                            <button onClick={() => acceptContact(contact.id)}>Accept</button>
                        </div>
                    ) : (
                        // Show only accepted contacts with chat functionality
                        <div onClick={() => onSelectContact(contact.contact)}>
                            {contact.contactId} - {contact.contact.username}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactList;
