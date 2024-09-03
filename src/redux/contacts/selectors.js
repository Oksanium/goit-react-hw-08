export const selectContacts = (state) => state.contacts.items;

export const selectPending = (state) => state.contacts.pending;

export const selectIsError = (state) => state.contacts.isError;

export const selectShowModal = (state) => state.contacts.showModal;

export const selectItemId = (state) => state.contacts.itemId;
