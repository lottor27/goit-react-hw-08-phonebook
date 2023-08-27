import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'store/contacts/contactsReducer';
import { contactsSelector } from 'store/contacts/selectors';
import { filterSelectors } from 'store/filter/selectors';
import { deleteContactsThunk } from 'store/contacts/actions';
import styles from './ContactList.module.css';
import { userSelectors } from 'store/user/selectors';

const ContactList = () => {
  const { contacts } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelectors);
  const dispatch = useDispatch();
  const { token } = useSelector(userSelectors);

  const deleteContact = contactID => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactID
    );
    dispatch(createContact(updatedContacts));
    dispatch(deleteContactsThunk({ id: contactID, token: token }));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles['contact-list']}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles['contact-item']}>
            {contact.name}: {contact.number}
            <button
              className={styles['delete-btn']}
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
