// import React from "react";
// import ContactProvider from "./ContactProvider";
// import ContactList from "./ContactList";
// import AddContact from "./AddContact";

// const Dashboard = () => {
//     return (
//         <ContactProvider>
//             <div className="dashboard">
//                 <AddContact />
//                 <ContactList />
//             </div>
//         </ContactProvider>
//     );
// };

// export default Dashboard;

// import React from "react";
// import ContactProvider from "./ContactProvider";
// import ContactList from "./ContactsList"; // ✅ Ensure this import is correct
// import AddContact from "./AddContact";

// const Dashboard = () => {
//     return (
//         <ContactProvider>
//             <div className="dashboard">
//                 <AddContact />
//                 <ContactList />
//             </div>
//         </ContactProvider>
//     );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import ContactProvider from "./ContactProvider";
// import ContactList from "./ContactsList";
// import AddContact from "./AddContact";
// import ChatWindow from "./ChatWindow";

// const Dashboard = () => {
//     const [selectedContact, setSelectedContact] = useState(null);

//     return (
//         <ContactProvider>
//             <div className="dashboard">
//                 <AddContact />
//                 <ContactList onSelectContact={setSelectedContact} />
//                 {selectedContact && <ChatWindow contact={selectedContact} />}
//             </div>
//         </ContactProvider>
//     );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import ContactProvider from "./ContactProvider";
// import ContactList from "./ContactList";
// import AddContact from "./AddContact";
// import ChatWindow from "./ChatWindow";

// const Dashboard = () => {
//     const [selectedContact, setSelectedContact] = useState(null);

//     return (
//         <ContactProvider>
//             <div className="dashboard">
//                 <h2>Dashboard</h2>
//                 <div className="main-container">
//                     <div className="sidebar">
//                         <AddContact />
//                         <ContactList onSelectContact={setSelectedContact} />
//                     </div>
//                     <div className="chat-container">
//                         {selectedContact ? (
//                             <ChatWindow contact={selectedContact} />
//                         ) : (
//                             <p>Select a contact to start a chat</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </ContactProvider>
//     );
// };

// export default Dashboard;


import React, { useState } from "react";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";
import AddContact from "./AddContact";

const Dashboard = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="content">
                {/* Add Contact Section */}
                <div className="add-contact-section">
                    <h3>Add Contact</h3>
                    <AddContact />
                </div>

                {/* Contacts List */}
                <div className="contacts-section">
                    <h3>Contacts</h3>
                    <ContactList onSelectContact={setSelectedContact} />
                </div>

                {/* Chat Window */}
                <div className="chat-section">
                    {selectedContact ? (
                        <ChatWindow contact={selectedContact} />
                    ) : (
                        <p>Select a contact to start a chat</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
