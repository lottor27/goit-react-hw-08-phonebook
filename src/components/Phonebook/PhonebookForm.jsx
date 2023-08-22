import SavedContact from 'components/PhonebookList/PhoneBookList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';


const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = async e => {
    if (e.target.tagName === 'BUTTON') {
      const id = e.target.getAttribute('data-id');
      console.log(id);
      console.log(e.target.value);
      await dispatch(deleteContact(id));
      dispatch(fetchContacts());
    }
  };

  const filteredContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (filter === '') {
      return contacts;
    }
  };

  return contacts.length > 0 ? (
    <ul onClick={handleClick}>
      {filteredContacts().map(({ id, name, phone }) => (
        <SavedContact key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  ) : (
    <p >The contact list is empty.</p>
  );
};

export default Contacts;