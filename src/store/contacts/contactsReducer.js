import { createSlice } from '@reduxjs/toolkit';
import { deleteContactsThunk, getContactsThunk, updateContactsThunk } from './actions';
import { handleFullfilled, handleFullfilledDelete, handleFullfilledUpdate, handlePanding, handleRejected } from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFullfilled )
      .addCase(updateContactsThunk.fulfilled,handleFullfilledUpdate)
      .addCase(deleteContactsThunk.fulfilled,handleFullfilledDelete)
      .addMatcher((action)=>action.type.endsWith('/pending'),handlePanding)
      .addMatcher((action)=>action.type.endsWith('/rejected'),handleRejected);;
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact } = contactsSlice.actions;
