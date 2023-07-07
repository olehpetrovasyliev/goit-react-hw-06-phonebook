import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { name: 'a', number: 1, id: nanoid() },
    { name: 'b', number: 2, id: nanoid() },
  ],
  filter: '',
};
const usersSlice = createSlice({
  name: 'phoneboook',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    delContact: (state, action) => {
      const contact = state.contacts.findIndex(
        contact => contact.id === action.payload
      );

      state.contacts.splice(contact, 1);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, setFilter } = usersSlice.actions;

export const phonebookReducer = usersSlice.reducer;
