export const fetchContactsSuccessReduser = (state, { payload }) => {
  state.items = payload;
};

export const addContactSuccessReducer = (state, { payload }) => {
  state.items.push(payload);
};

export const deleteContactSuccessReducer = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

export const pendingReducer = state => {
  state.isLoading = true;
};

export const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
