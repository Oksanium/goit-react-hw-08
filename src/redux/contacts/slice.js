import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from "./operations";
import { logoutThunk } from "../auth/operations";
import toast from "react-hot-toast";

const initialState = {
  items: [],
  pending: {
    isLoading: false,
    deletePending: false,
    addPending: false,
  },
  error: null,
  showModal: false,
  itemId: "",
};

const slice = createSlice({
  name: "contacts",

  initialState,

  reducers: {
    modalOn: {
      reducer(state, action) {
        state.showModal = true;
        state.itemId = action.payload;
      },
    },
    modalOff: {
      reducer(state) {
        state.showModal = false;
        state.itemId = "";
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, (state) => {
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
      .addCase(addContactThunk.pending, (state) => {
        state.pending.addPending = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.pending.addPending = false;
        toast.success("Successfully created!");
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.pending.addPending = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, (state) => {
        state.pending.deletePending = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.error = null;
        state.pending.deletePending = false;
        state.itemId = "";
        state.showModal = false;
        toast.success("Contact deleted");
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.pending.deletePending = false;
        state.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact, modalOn, modalOff } = slice.actions;
