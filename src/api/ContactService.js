// 
import api from "../api";

export const getUserContacts = async () => api.get("/contacts");
export const addContact = async (email) => api.post("/contacts", { email });
export const acceptContact = async (contactId) => api.put(`/contacts/${contactId}/accept`);
export const blockContact = async (contactId) => api.put(`/contacts/${contactId}/block`);
