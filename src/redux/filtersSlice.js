import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state.filters.name,
  },

  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectFilter } = slice.selectors;

export const filterContactList = createSelector(
  [selectContacts, selectFilter],
  (list, query) => {
    return query === ""
      ? list
      : list.filter((elem) => {
          return elem.name.toLowerCase().includes(query);
        });
  }
);
