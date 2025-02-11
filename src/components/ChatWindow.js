// import React, { useState } from "react";

// const ChatWindow = ({ contact }) => {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState("");

//     const sendMessage = () => {
//         if (message.trim() !== "") {
//             setMessages([...messages, { sender: "You", text: message }]);
//             setMessage("");
//         }
//     };

//     return (
//         <div className="chat-window">
//             <h2>Chat with {contact.username}</h2>
//             <div className="messages">
//                 {messages.map((msg, index) => (
//                     <div key={index} className="message">
//                         <strong>{msg.sender}:</strong> {msg.text}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default ChatWindow;


import React, { useState } from "react";

const ChatWindow = ({ contact }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (!message.trim()) return;
        
        setMessages([...messages, { text: message, sender: "You" }]);
        setMessage("");
    };

    return (
        <div className="chat-window">
            <h2>Chat with {contact.contact.username}</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <strong>{msg.sender}: </strong>{msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatWindow;
