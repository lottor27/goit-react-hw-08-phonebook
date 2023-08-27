import { createAsyncThunk} from '@reduxjs/toolkit';
import { deleteContact } from 'API/Delete';
import { getContacts } from 'API/Fetch';
import { updateContacts } from 'API/Update';


export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (token, { rejectWithValue }) => {
    try {
      return await getContacts(token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      return await deleteContact(id, token);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateContactsThunk = createAsyncThunk(
  'contacts/updateContacts',
  async ({data,token}, { rejectWithValue }) => {
    try {
      return await updateContacts(data,token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
