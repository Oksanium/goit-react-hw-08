export const selectUser = (state) => state.auth.user;
export const selectPending = (state) => state.auth.pending;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.token;
export const selectRefreshPending = (state) => state.auth.refreshPending;
