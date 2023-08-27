import { IoMdContact } from 'react-icons/io';
import css from 'components/userContacts/SavedContact/savedContact.module.css';

const SavedContact = ({ id, name, number }) => {
  return (
    <li className={css.item} key={name}>
      <p className={css.itemText}>
        <IoMdContact className={css.icon} />
        {name}: {number}
      </p>
      <button className={css.btn} type="button" data-id={id}>
        Delete
      </button>
    </li>
  );
};

export default SavedContact;
