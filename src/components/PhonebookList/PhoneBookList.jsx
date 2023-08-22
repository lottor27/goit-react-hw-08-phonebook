import css from './PhoneBookList.module.css';

const SavedContact = ({ id, name, number }) => {
  return (
    <li key={name} className={css.textList}>
      <p>
        {name}: {number}
      </p>
      <button type="button" data-id={id} className={css.delbtn}>
        Delete
      </button>
    </li>
  );
};


export default SavedContact;
