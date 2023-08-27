import SavedContact from '../SavedContact/savedContact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../../redux/operations';
import { selectContacts, selectFilter } from '../../../redux/selectors';
import css from './contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = async e => {
    if (e.target.tagName === 'BUTTON') {
      const id = e.target.getAttribute('data-id');
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
    <ul onClick={handleClick} className={css.list}>
      {filteredContacts().map(({ id, name, number }) => (
        <SavedContact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  ) : (
    <p className="text-message">The contact list is empty.</p>
  );
};

export default Contacts;
