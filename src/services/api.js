import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://661af25b65444945d04ed038.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post(
    'https://661af25b65444945d04ed038.mockapi.io/contacts',
    contactData
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://661af25b65444945d04ed038.mockapi.io/contacts/${contactId}`
  );
  return data;
};