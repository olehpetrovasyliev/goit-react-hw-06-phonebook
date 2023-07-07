import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      {contacts.length === 0 ? (
        <h2>No contacts yet</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />

          <ContactsList />
        </>
      )}
    </>
  );
};
