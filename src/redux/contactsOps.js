import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6690f78d26c2a69f6e8de413.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("contactlist");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/add",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("contactlist", data);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contactlist/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
