import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
