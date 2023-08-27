import { instance } from './Instance';

export const getContacts = async token => {
  try {
    const response = await instance.get('contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
