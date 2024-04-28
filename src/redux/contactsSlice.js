import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

//  початковий стан
const initialState = {
  items: initialContacts, // Список контактів
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState, // Змінено структуру initialState
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.items) {
          state.items.push(action.payload); // Доступ до масиву контактів через state.items
        }
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Експортуємо редюсер та дії
export const { addContact, deleteContact } = contactsSlice.actions;

// Експортуємо редюсер
export const contactsReducer = contactsSlice.reducer;

// Створюємо селектор для отримання списку контактів
export const selectContacts = (state) => state.contacts.items;