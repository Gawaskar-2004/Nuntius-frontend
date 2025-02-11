import api from "../api";

// Fetch messages between the current user and a selected contact
export const getMessages = async (contactId) => {
    return api.get(`/messages/${contactId}`);
};

// Send a message to a contact
export const sendMessage = async (contactId, message) => {
    return api.post(`/messages`, { recipientId: contactId, text: message });
};
