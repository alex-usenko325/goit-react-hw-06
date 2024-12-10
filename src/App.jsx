import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, deleteContact } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number
        .toString()
        .toLowerCase()
        .includes(filter.toLowerCase().trim())
  );

  console.log("Filtered Contacts:", filteredContacts);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
