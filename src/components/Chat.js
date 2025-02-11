import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { contactId } = useParams();

  return (
    <div>
      <h2>Chat with {contactId}</h2>
      {/* Add chat UI here */}
    </div>
  );
};

export default Chat;
