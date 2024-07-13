import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  pending: {
    isLoading: false,
    deletePending: false,
    addPending: false,
  },
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
    selectPending: (state) => state.pending,
    selectIsError: (state) => state.isError,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.pending.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.pending.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.pending.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, (state, action) => {
        state.pending.addPending = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.pending.addPending = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.pending.addPending = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, (state, action) => {
        state.pending.deletePending = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.error = null;
        state.pending.deletePending = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.pending.deletePending = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts, selectIsError, selectPending } = slice.selectors;
