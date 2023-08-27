import { instance } from './Instance';

export const updateContacts = async (newContactData, token) => {
  try {
    const response = await instance.post('contacts', newContactData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
