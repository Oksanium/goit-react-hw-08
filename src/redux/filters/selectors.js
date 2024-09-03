import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectFilter } from "./slice";

export const filterContactList = createSelector(
  [selectContacts, selectFilter],
  (list, query) => {
    return query === ""
      ? list
      : list.filter((elem) => {
          return (
            elem.name.toLowerCase().includes(query) ||
            elem.number.match(/\d/g).join("").includes(query)
          );
        });
  }
);
