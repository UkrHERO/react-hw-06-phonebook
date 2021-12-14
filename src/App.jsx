import { useSelector, useDispatch } from 'react-redux';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import contactsActions from '../src/redux/contacts/contacts-actions';
import {
  getContactsFiltered,
  getFilter,
} from '../src/redux/contacts/contacts-selectors';

function App() {
  const contacts = useSelector(getContactsFiltered);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContact = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const changeFilter = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;
